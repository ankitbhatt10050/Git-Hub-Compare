import React, { useEffect, useState } from "react";
import { Select, Empty, notification } from "antd";
import { getActiveBatches } from "app/services/batchManagement.service";
import { normalizeString } from "app/utils/common";
import styles from "./index.module.scss";

const { Option } = Select;

interface IProps {
  batch: any;
  setBatch: any;
  productSlug: any;
  active?: boolean; // show active batches only
  free?: boolean; // show free batches also
}

const BatchesFilter: React.FunctionComponent<IProps> = ({ batch, setBatch, productSlug, active = false, free = false }) => {
  const [activeBatches, setActiveBatches] = useState([]);

  const fetchActiveBatches = async () => {
    try {
      const response = await getActiveBatches();
      setActiveBatches(response.data);
    } catch (err) {
      notification.error({
        message: "Error Fetching Active Batches",
      });
    }
  };

  useEffect(() => {
    fetchActiveBatches();
  }, []);

  const handleBatchChange = (value: string) => {
    setBatch(value);
  };

  // render
  const renderProductBatches = () => {
    const activeProductBatches = activeBatches.find(ab => ab.Product_Slug === productSlug);
    if (activeProductBatches && activeProductBatches.Courses_Data) {
      return activeProductBatches.Courses_Data.map(ab => {
        let flag = true;

        if (!free) {
          flag = flag && ab.Batch_Id !== "free";
        }

        if (active) {
          flag = flag && ab.Status === "ACTIVE";
        }

        if (flag) {
          return (
            <Option key={ab.Batch_Id} value={ab.Batch_Id}>
              [{ab.Batch_Id}] - {ab.Course_Name}
            </Option>
          );
        }
      });
    }
    return null;
  };

  return (
    <div className={styles.batchFilter}>
      <div>
        <div>Batch</div>
        <Select
          showSearch={true}
          optionFilterProp="children"
          filterOption={(input, option: any) => normalizeString(option.props.children).indexOf(normalizeString(input)) >= 0}
          value={batch}
          className={styles.flexItem}
          style={{ width: 500 }}
          onChange={handleBatchChange}
          placeholder="Select Batch"
          notFoundContent={productSlug ? <Empty description="No Batches Found" image={Empty.PRESENTED_IMAGE_SIMPLE} /> : "Please select a product to list batches!"}>
          {renderProductBatches()}
        </Select>
      </div>
    </div>
  );
};

export default BatchesFilter;
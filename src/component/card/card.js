import React from 'react';
import { Card } from 'antd';
import Star from './Star/Star'

const { Meta } = Card;

const card=()=>{
    return(
        
        <Card 
              hoverable
              style={{ width: 240 ,height:"auto"}}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />
              <Star/>
          </Card>
    )
}

export default card;
import React from 'react';
import { Card } from 'antd';
import Star from './Star/Star'

const { Meta } = Card;

const card=(props)=>{
  
  const userData=props.data.data;
  
    return(
        <div>
        <Card 
              hoverable
              style={{ width: 240 ,height:410}}
              cover={<img alt="example" src={userData.avatar_url} />}
            >
              <Meta title={userData.login} description={userData.bio} />
              <Star data={userData}/>
              
          </Card>
          
        </div>
    )
}

export default card;
import React from 'react';
import { Card } from 'antd';
import Star from './Star/Star'

const { Meta } = Card;

const card=(props)=>{
  console.log(props)
    return(
        
        <Card 
              hoverable
              style={{ width: 240 ,height:"auto"}}
              cover={<img alt="example" src={props.data.avatar_url} />}
            >
              <Meta title={props.data.login} description={props.data.bio} />
              <Star/>
          </Card>
    )
}

export default card;
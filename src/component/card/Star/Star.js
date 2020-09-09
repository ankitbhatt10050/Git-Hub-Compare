import React from 'react';
import { Rate } from 'antd';

const Star=(props)=>{
    console.log('inside star',props.data.login)
    const data=props.data;
    let star=0;
    
    if((data.public_repos<5)||(data.follower<5))
    {
        star=1
    }
     if(((data.public_repos>5) && (data.public_repos<10))||(data.follower>5))
    {
        star=2
    }
    if(((data.public_repos>10) && (data.public_repos<30))||(data.follower>10))
    {
        star=3
    }
    if(((data.public_repos>30) && (data.public_repos<40))||(data.follower>15))
    {
        star=4
    }

    else if((data.public_repos>50)||(data.follower>25)){
        star=5
    }
    
    return(
        <Rate allowHalf defaultValue={star} />
    );
}

export default Star;
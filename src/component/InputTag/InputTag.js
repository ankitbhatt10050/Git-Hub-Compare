import React, { Component } from 'react';
import {connect } from 'react-redux';
import{initUser} from '../../Store/action'; 
import { Input, Button  } from 'antd';

const { Search } = Input;


function inputTag(props){
    // state={
    //     users:[]
    // }

//Adding user data inside Redux
   const addUser=(val)=>{
        const users=props.users
        const value=val
        if((value==='Enter'&&value)||(value))
        {
           


            props.addUserToRedux(val)
            
        }
    }

    

    

        // const{users}=this.state;
        

        return(
            <div>
                    <div>
                        <Search
                        placeholder="input search text"
                        enterButton="Search"
                        size="large"
                        style={{marginBottom:"20px"}}
                        onSearch={value => addUser(value)}                        
                        />
                </div>
            </div>
        );

    }


const mapStateToProps=(state)=>
{
    return{
        users:state.user
    }
}

const mapDispatchToProp=dispatch=>{
    return{
        addUserToRedux:(userName)=>dispatch(initUser(userName)),
    }
}



export default connect(mapStateToProps,mapDispatchToProp)(inputTag);
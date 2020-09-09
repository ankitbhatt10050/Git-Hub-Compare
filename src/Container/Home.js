import React, { Component } from 'react';
import { Layout,Typography,Button} from 'antd';
import Card from '../component/card/card';
import{Link} from 'react-router-dom';
import {connect} from 'react-redux';

import SearchBar from '../component/InputTag/InputTag';



const { Header, Footer,  Content } = Layout;
const { Text } = Typography;


function home(props) {

   const removeUser=(data)=>{
        const info=data;
        console.log('info',info)
        props.removeUser(info);
    }

    
    const userData=props.user;
    const userCard= userData.map(data=>{     
                return(
                        <li style={{display:"inline-block",listStyle:"none",marginRight:"10px",marginBottom:"10px"}}  key={data.data.login}>
                        
                            <Link style={{}} to={"/"+data.data.login}><Card data={data} /> 
                            </Link>
                            <Button type="primary" onClick={()=>removeUser(data.data)}>   {data.data.login}      </Button>
                        </li>
                );
            })
               
        return (
            <div className="App">
              <Layout >
                    <Header style={{background:"black",color:"whitesmoke"}}>

                        <Link to="/home">
                            <h2 style={{textAlign:"center",color:"whitesmoke",fontWeight:"lighter",paddingRight:"70%",paddingTop:"10px"}}>
                                GithubCOmpare
                            </h2>
                        </Link> 

                    </Header>
                
                    <Content style={{height:"100%"}}>
                        <SearchBar/>
                        {userCard}
                    </Content>
        
        
                <Footer>Footer</Footer>
            </Layout>
            </div>
          );
    }

const mapDispatchToProps=dispatch=>{
    
    return{
        removeUser:(data)=>dispatch({type:'removeUser',data:data})
    }
}


const mapStateToProps=state=>{
    
    return{
        user:state.user
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(home);
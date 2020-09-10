import React,{useState} from 'react';
import { Layout,Typography,Button} from 'antd';
import Card from '../component/card/card';
import{Link} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';

import SearchBar from '../component/InputTag/InputTag';
import { GitlabFilled,GitlabOutlined,GithubFilled} from '@ant-design/icons';
import { createFromIconfontCN } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});



const { Header, Footer,  Content } = Layout;
const { Text } = Typography;


const Home=()=> {


        
    const dispatch=useDispatch();
    const removeUserFromRedux=(data)=>dispatch({type:'removeUser',data:data});

    const user=useSelector(state=>{
        return state.user;
            });


   const removeUserFromState=(data)=>{
        const info=data;
        console.log('info',info)
        
        removeUserFromRedux(info);
    }

    
    const userData=user;
//Mapping through User Data and forming a Card
    const userCard= userData.map(data=>{     
                return(
                        <li style={{display:"inline-block",listStyle:"none",marginRight:"10px",marginBottom:"10px"}}  key={data.data.login}>
                        
                            <Link style={{}} to={"/"+data.data.login}><Card data={data} /> 
                            </Link>
                            <Button type="primary" style={{background:"rgba(0,0,0)",borderRadius:"2px"}} onClick={()=>removeUserFromState(data.data)}>   {data.data.login}      </Button>
                        </li>
                );
            })
               
            

        return (
            <div className="App">
              <Layout >
                    <Header style={{background:"black"}}>

                        <Link to="/">
                            <div>
                                <div style={{display:"block",color:"whitesmoke",position:"absolute",left:"44%",fontSize:"22px"}}>
                                    GitHUbCompare
                                </div>
                                    <GithubFilled style={{fontSize:"40px",color:"Whitesmoke",position:"absolute",top:"10px",left:"30%",}} />           
                            </div>                         
                        </Link> 

                    </Header>
                
                    <Content style={{height:"100%"}}>
                        <SearchBar/>
                        {userCard}
                    </Content>
        
        
                <Footer style={{height:"50px"}}>
                    
                <a href="https://github.com/">
                    
                        <GitlabOutlined style={{fontSize:"32px",position:"relative",bottom:"17px",left:"52px",zIndex:1}}/>

                    </a>
                    <div className="icons-list" style={{position:"relative",fontSize:"30px",bottom:"60px",right:"28px"}}>
                        <a href="https://github.com/"> <IconFont style={{marginRight:"5px"}} type="icon-tuichu" /></a>
                        <a href="https://github.com/">  <IconFont style={{marginRight:"5px"}}type="icon-facebook" /></a>
                        <a href="https://github.com/">   <IconFont style={{marginRight:"5px"}}type="icon-twitter" /></a>
                    </div>
                    
                    
                
                </Footer>
            </Layout>
            </div>
          );
    }


export default Home;
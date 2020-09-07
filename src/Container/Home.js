import React, { Component } from 'react';
import { Layout,Typography} from 'antd';
import Card from '../component/card/card';

const { Header, Footer,  Content } = Layout;
const { Text, Link } = Typography;

class Home extends Component{

    state={
        User:[]
    }

    render(){
        return (
            <div className="App">
              <Layout>
                <Header style={{background:"black",color:"whitesmoke"}}>
                     <Link to="/">
                      <h2 style={{textAlign:"center",color:"whitesmoke",fontWeight:"lighter",paddingRight:"70%",paddingTop:"10px"}}>
                          GithubCOmpare
                        </h2>
                     </Link> 
                      
                </Header>
        
        
                <Content style={{display:"inline-block"  ,paddingLeft:"20%"}}>Content
        
                   
                  <Card/>
                  
        
        
                </Content>
        
        
                <Footer>Footer</Footer>
            </Layout>
            </div>
          );
    }
}

export default Home;
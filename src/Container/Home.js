import React, { Component } from 'react';
import { Layout,Typography} from 'antd';
// import axios from 'axios';
import Card from '../component/card/card';
import{Link} from 'react-router-dom';
import {connect} from 'react-redux';

import SearchBar from '../component/InputTag/InputTag';




const { Header, Footer,  Content } = Layout;
const { Text } = Typography;

class Home extends Component{

    // state={
    //     post:[{
    //         "login": "mdmemonyasin",
    //         "id": 35967723,
    //         "node_id": "MDQ6VXNlcjM1OTY3NzIz",
    //         "avatar_url": "https://avatars2.githubusercontent.com/u/35967723?v=4",
    //         "gravatar_id": "",
    //         "url": "https://api.github.com/users/mdmemonyasin",
    //         "html_url": "https://github.com/mdmemonyasin",
    //         "followers_url": "https://api.github.com/users/mdmemonyasin/followers",
    //         "following_url": "https://api.github.com/users/mdmemonyasin/following{/other_user}",
    //         "gists_url": "https://api.github.com/users/mdmemonyasin/gists{/gist_id}",
    //         "starred_url": "https://api.github.com/users/mdmemonyasin/starred{/owner}{/repo}",
    //         "subscriptions_url": "https://api.github.com/users/mdmemonyasin/subscriptions",
    //         "organizations_url": "https://api.github.com/users/mdmemonyasin/orgs",
    //         "repos_url": "https://api.github.com/users/mdmemonyasin/repos",
    //         "events_url": "https://api.github.com/users/mdmemonyasin/events{/privacy}",
    //         "received_events_url": "https://api.github.com/users/mdmemonyasin/received_events",
    //         "type": "User",
    //         "site_admin": false,
    //         "name": "Mohammad Yasin Memon",
    //         "company": "@boardinfinity ",
    //         "blog": "",
    //         "location": "Jalandhar",
    //         "email": null,
    //         "hireable": true,
    //         "bio": "Full Stack Intern  || Microsoft Student Partner",
    //         "twitter_username": "mdmemonyasin",
    //         "public_repos": 35,
    //         "public_gists": 1,
    //         "followers": 1,
    //         "following": 0,
    //         "created_at": "2018-01-30T16:20:23Z",
    //         "updated_at": "2020-09-01T15:09:09Z"
    //       },{
    //         "login": "vabhishek-me",
    //         "id": 21182294,
    //         "node_id": "MDQ6VXNlcjIxMTgyMjk0",
    //         "avatar_url": "https://avatars1.githubusercontent.com/u/21182294?v=4",
    //         "gravatar_id": "",
    //         "url": "https://api.github.com/users/vabhishek-me",
    //         "html_url": "https://github.com/vabhishek-me",
    //         "followers_url": "https://api.github.com/users/vabhishek-me/followers",
    //         "following_url": "https://api.github.com/users/vabhishek-me/following{/other_user}",
    //         "gists_url": "https://api.github.com/users/vabhishek-me/gists{/gist_id}",
    //         "starred_url": "https://api.github.com/users/vabhishek-me/starred{/owner}{/repo}",
    //         "subscriptions_url": "https://api.github.com/users/vabhishek-me/subscriptions",
    //         "organizations_url": "https://api.github.com/users/vabhishek-me/orgs",
    //         "repos_url": "https://api.github.com/users/vabhishek-me/repos",
    //         "events_url": "https://api.github.com/users/vabhishek-me/events{/privacy}",
    //         "received_events_url": "https://api.github.com/users/vabhishek-me/received_events",
    //         "type": "User",
    //         "site_admin": false,
    //         "name": "abhishek",
    //         "company": null,
    //         "blog": "vabhishek.me",
    //         "location": "Mumbai",
    //         "email": null,
    //         "hireable": true,
    //         "bio": "Working on everything that life keeps offering. Dropout. Working at Board Infinity. Building things for myself.",
    //         "twitter_username": null,
    //         "public_repos": 37,
    //         "public_gists": 22,
    //         "followers": 50,
    //         "following": 242,
    //         "created_at": "2016-08-22T20:17:05Z",
    //         "updated_at": "2020-09-06T09:59:11Z"
    //       }]
    // }


    // componentDidMount(){
    //     axios.get('https://api.github.com/users/vabhishek-me')
    //     .then(res=>{
    //         this.setState({user:res.data})
    //         console.log(res)
    //     })
    //     .catch(err=>console.log(err));
    // }

    render(){
        const userData=this.props.user;
               
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
                
        
        
                <Content style={{display:"inline-block",listStyle:"none",}}>
                    {<SearchBar/>}
                   {
                       userData.map(data=>{
                           
                           return(
                              <li style={{textAlign:"center",paddingLeft:"40%"}} key={data.data.login}>
                                   
                                       <Link to={"/"+data.data.login}><Card data={data} /> 
                                   </Link>
                                   </li>
                                   
                           );
                       })
                   }
                </Content>
        
        
                <Footer>Footer</Footer>
            </Layout>
            </div>
          );
    }
}


const mapStateToProps=state=>{
    
    return{
        user:state.user
    };
};

export default connect(mapStateToProps)(Home);
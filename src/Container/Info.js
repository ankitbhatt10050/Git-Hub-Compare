import React, {useState, useEffect } from 'react';
import Axios from 'axios';
import {useDispatch,useSelector} from 'react-redux';
import { Image, Divider,Badge,Avatar,Spin, Alert,Button} from 'antd';
import { GithubFilled,UserOutlined} from '@ant-design/icons';
import Star from '../component/card/Star/Star';





function Info(props) {

    
    const[info,setInfo]=useState();
    const dispatch=useDispatch();
    const removeUserFromRedux=(data)=>dispatch({type:'removeUser',data:data})
//Every time component render it make API call for user    
    useEffect(()=>{
        
        Axios.get("https://api.github.com/users/"+props.match.params.login)
        .then(res=>{         
            setInfo(res);
            
        });

        },[props.match.params.login]);
    
 //function to remove user    
        const removeUser=()=>{
        console.log('user Removed')
        removeUserFromRedux(info.data);
        props.history.push("/");
        
    }


        const userData = (info)?(   
//Component cointaining Images and badges         
                <div>    
                    <div >
                            <Image
                                width={200}
                                src={""+info.data.avatar_url}
                            />
                            <div >
                                
                                <p style={{position:"relative",right:"90px"}}>
                                    <Badge  size="default" offset={[11, 20]} count={info.data.public_repos}>
                                    <GithubFilled style={{fontSize:"35px",marginTop:"10px"}} />
                                   <p>Repos</p> 
                                    </Badge>                                     
                                    
                                </p>
                                <div style={{position:"relative",bottom:"77px",right:"4px"}}>
                                    {
                                        

                                        (info.data.followers)?( <div><Badge  size="default" offset={[11,11]} count={info.data.followers}>
                                        <Avatar size={39} icon={<UserOutlined />} />
                                        </Badge><p>Followers</p></div>):( <Badge  size="default" offset={[11,11]} count={0}>
                                        <Avatar size={39} icon={<UserOutlined />} />
                                        </Badge>)
                                    }
                                </div>
                                <div style={{position:"relative",left:"75px",bottom:"153px"}}>
                                    {
                                        (info.data.followers)?( <div><Badge  size="default" offset={[11,11]} count={info.data.following}>
                                        <Avatar size={39} icon={<UserOutlined />} />                                        
                                        </Badge>
                                        <p>Following</p>
                                        </div>
                                        ):( <Badge  size="default" offset={[11,11]} count={0}>
                                        <Avatar size={39} icon={<UserOutlined />} />
                                        </Badge>)
                                        
                                    }
                                </div>
{/* Button for Deleting User */}
                                <Button style={{position:"relative",bottom:"120px"}} onClick={removeUser}type="primary">Delete User</Button>
                            </div> 
                            
                        </div>
                      
{/* UserData Display */}
                   <div style={{position:"relative",bottom:"100px"}}>
                       
                        <Star data={info.data}/>
                        <Divider style={{background:"lightgray"}} orientation="right" plain></Divider>                      
                            {
                                (info.data.bio)?(<p>
                                    {info.data.bio}
                                    </p>):null
                            }
                            
                        <p>Hireable:{(info.data.hireable)?"True":"False"}</p>
                            
                            <p>
                            Location:{(info.data.location)?info.data.location:null}
                            </p>
                        <Divider style={{background:"lightgray"}} orientation="right" plain></Divider>                     
                </div>

            </div>) :
            (<div style={{textAlign:"center"}}>
                        <Spin >
                            <Alert
                            message="Loading Data..."
                            type="info"
                            />
                        </Spin>
            </div>)

    
    return(
        <div>
            {userData}
        </div>
        
    );
}

export default Info;
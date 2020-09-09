import React, {useState, useEffect } from 'react';
import Axios from 'axios';
import {connect} from 'react-redux';
import { Redirect, Link } from 'react-router-dom';


function Info(props) {

    
    const[info,setInfo]=useState();
    

    useEffect(()=>{
        
        Axios.get("https://api.github.com/users/"+props.match.params.login)
        .then(res=>{         
            setInfo(res);
        });

        },[]);
    
    
    const removeUser=()=>{
        console.log('user Removed')
        props.removeUserFromRedux(info.data);
        props.history.push("/");
        
    }


        const userData = (info)?(
             
            <div>
                <h4 style={{textAlign:"center"}}>
                    {info.data.name}
                </h4>
                    <p>
                        {info.data.bio}
                    </p>
                   
                <div>
                    {info.blog}
                   <p>Location:-{info.data.location}</p> 
                   <p>Follower:- {info.data.follower}</p>
                   <p>Following:-{info.data.following}</p>
                   <p>Repos:-{info.data.public_repos}</p>
                   <p>Gists:-{info.data.public_gists}</p>
                </div>
                <div style={{textAlign:"center"}}>
                     <button onClick={()=>removeUser()} style={{ width:"80px", height:"28px"}} >Delete</button>
                </div>
            </div>
            
           
    ): (<div style={{textAlign:"center"}}>Loading Post...</div>)

    
    return(
        
        <div>
            {userData}
        </div>
    );
}

const mapDispatchToProps=dispatch=>{
    return{
        removeUserFromRedux:(data)=>dispatch({type:'removeUser',data:data})
    }
}


export default connect(null,mapDispatchToProps)(Info);

import React, { Component } from 'react';
import Axios from 'axios';



class Info extends Component{

    state={
        info:[]
    }

    componentDidMount()
    {
        Axios.get("https://api.github.com/users/"+this.props.match.params.login)
        .then(info=>{
            console.log('axios',info.data.login);
            
            this.setState({info:info.data})

        });
        
    }



    render(){

       console.log( this.state.info.public_repos);
        const userData = this.state.info?(
             
            <div>
                <h4 style={{textAlign:"center"}}>
                    {this.state.info.name}
                </h4>
                    <p>
                        {this.state.info.bio}
                    </p>
                 <div style={{textAlign:"center"}}>
                      <button style={{ width:"80px", height:"28px"}} >Delete</button>
                </div>  
                <div>
                    {this.state.info.blog}
                   <p>Location:-{this.state.info.location}</p> 
                   <p>Follower:- {this.state.info.follower}</p>
                   <p>Following:-{this.state.info.following}</p>
                   <p>Repos:-{this.state.info.public_repos}</p>
                   <p>Gists:-{this.state.info.public_gists}</p>
                </div>

            </div>
            
           
    ):
    (<div style={{textAlign:"center"}}>Loading Post...</div>)

    console.log()
    return(
        
        <div>
            {userData}
        </div>
    );
}
}

export default Info;

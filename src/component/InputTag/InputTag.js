import React, { Component } from 'react';
import classes from './InputTag.css';
import {connect } from 'react-redux';
// import {initPost, delete_post} from '../actions/action';
// import { addSkills, removeSkills } from '../actions/action';
import{initUser,removeUserFromRedux} from '../../Store/action'; 


class InputTag extends Component{

    
    
    constructor(props){
        super(props)

        this.state={
            users:[],
        }
        this.inputRef=React.createRef();
    }

//Adding user to the local State as well as inside Redux
    addUser=(e)=>{
        const users=this.state.users
        const value=e.target.value
        if(e.key==='Enter'&&value)
        {
            if(users.find(user=>user.toLowerCase()===value.toLowerCase()))
            {
                return alert('Duplicate Search')

            }
            users.push(value)
            this.setState({users:users})
            let index=this.state.users.length-1

//Adding Data inside Redux 
            this.props.addUserToRedux(this.state.users[index])
            
//After Storing Data Clearing the input Field
            this.inputRef.current.value=null
        }
        else if(e.key==="Backspace"&&!value)
        {
            this.removeUser(users.length-1)
        }
    }

//Removing User from Local state as well as from Redux
    removeUser=(user,i)=>{
        
        const users=this.state.users
        users.splice(i,1)
        this.setState({users:users})

//Removing Data from Redux        
        this.props.removeUser(user);
        
    }


    render(){

        const{users}=this.state;
        
        

        return(
            <div>
                <h2>Search!!</h2>
                <div className={classes.skill}>
                    <ul>
                        {users.map((user,i)=>{
                            console.log('[inside input]',user,i)
                            return(
                            <li key={i}>{user}<button onClick={()=>this.removeUser(user,i)}>+</button></li>
                            )
                        })}
                        
                        <li >
                            <input style={{background:"none",flexGrow:"1",backgroundColor:"white",}} onKeyDown={this.addUser}type="text" size="4" ref={this.inputRef}/>
                        </li>
                    </ul>
                </div>

            </div>
        );

    }
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
        removeUser:(login)=>dispatch({type:'removeUser',login:login}),

        // onInit:(uname)=>dispatch(initPost(uname)),
        // rm:(id)=>dispatch(delete_post(id))
    }
}



export default connect(mapStateToProps,mapDispatchToProp)(InputTag);
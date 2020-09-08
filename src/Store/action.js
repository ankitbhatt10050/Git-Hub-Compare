import axios from 'axios';


//To add data asynchronously  in redux
//cause function call inside reducer will not wait for axios to complete

export const setUser=(userData)=>{
    return{
        type:'addUser',
        userData:userData
    }
}

export const initUser=(userName)=>{
    return dispatch=>{

        axios.get('https://api.github.com/users/'+userName)
        .then(res=>{
            dispatch(setUser(res));
        }).catch(err =>{
            console.log(err);
            alert('User Not Found');
        })

    };
};



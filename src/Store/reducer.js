// {
//     "login": "mdmemonyasin",
//     "id": 35967723,
//     "node_id": "MDQ6VXNlcjM1OTY3NzIz",
//     "avatar_url": "https://avatars2.githubusercontent.com/u/35967723?v=4",
//     "gravatar_id": "",
//     "url": "https://api.github.com/users/mdmemonyasin",
//     "html_url": "https://github.com/mdmemonyasin",
//     "followers_url": "https://api.github.com/users/mdmemonyasin/followers",
//     "following_url": "https://api.github.com/users/mdmemonyasin/following{/other_user}",
//     "gists_url": "https://api.github.com/users/mdmemonyasin/gists{/gist_id}",
//     "starred_url": "https://api.github.com/users/mdmemonyasin/starred{/owner}{/repo}",
//     "subscriptions_url": "https://api.github.com/users/mdmemonyasin/subscriptions",
//     "organizations_url": "https://api.github.com/users/mdmemonyasin/orgs",
//     "repos_url": "https://api.github.com/users/mdmemonyasin/repos",
//     "events_url": "https://api.github.com/users/mdmemonyasin/events{/privacy}",
//     "received_events_url": "https://api.github.com/users/mdmemonyasin/received_events",
//     "type": "User",
//     "site_admin": false,
//     "name": "Mohammad Yasin Memon",
//     "company": "@boardinfinity ",
//     "blog": "",
//     "location": "Jalandhar",
//     "email": null,
//     "hireable": true,
//     "bio": "Full Stack Intern  || Microsoft Student Partner",
//     "twitter_username": "mdmemonyasin",
//     "public_repos": 35,
//     "public_gists": 1,
//     "followers": 1,
//     "following": 0,
//     "created_at": "2018-01-30T16:20:23Z",
//     "updated_at": "2020-09-01T15:09:09Z"
 // }
  




















const initState={
    user:[]
}


const reducer=(state=initState,action)=>{

    switch(action.type)
    {
        case 'addUser':
            return{
                user:state.user.concat(action.userData)
            };

        case 'removeUser':
        const newUsers=state.user.filter(userData=>userData.data.login!==action.login)
        return{
            user:newUsers
        };
        
        default:
            return state;
    }

}

export default reducer;
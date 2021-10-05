import axios from 'axios'


export default (id) =>{
    (async () =>{
        
        const {data: user} = await axios("https://jsonplaceholder.typicode.com/users/" + id);
        const {data: post} = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + id);

        console.log(user)
        console.log(post)
    
    })()

}
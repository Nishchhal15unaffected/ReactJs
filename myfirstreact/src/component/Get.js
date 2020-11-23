import React from 'react'
import axios from 'axios';
class Get extends React.Component {
   constructor(props) {
       super(props)
   
       this.state = {
            posts:[],
            error:''
       }
   }
   componentDidMount(){
       axios.get("https://jsonplaceholder.typicode.com/posts")
       .then(response=>{
           this.setState({posts:response.data})
       })
       .catch(error=>{
           this.setState({error:'error'})
            
       })
   }
    render() {
        const {posts,error}=this.state
        return (
            <div>
                Get from rest api
                {   posts.length ?
                    posts.map(posts=><div key={posts.id}>{posts.title}</div>):null
                }
                {
                    error?<div>{error}</div>:null
                }
            </div>
        )
    }
}

export default Get

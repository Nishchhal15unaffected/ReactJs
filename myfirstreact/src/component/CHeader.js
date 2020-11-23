import React from 'react';

class CHeader extends React.Component{
    constructor(){
        super();
    this.state={
        user:[{id:1,name:"rahul"},
            {id:2,name:"sunil"}
        ]
    }
    }
    render()
    {
        const user=this.state.user.map((user)=>{
            return <h2 key={user.id}>{user.id}</h2>
        })
        return(
        <div> 
         <h1>Hello {this.props.name}</h1>
         {user}
         </div>
        )
    }
}

export default CHeader
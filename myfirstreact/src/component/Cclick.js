import React from 'react'

export class Cclick extends React.Component {
    constructor(props){
        //if you want to access parent constructor than use super()
        super(props);
        // this.eva=this.eva.bind(this);
        this.state={
            name:"nish",
            roll:this.props.roll
        }
    }
    
    eva=()=>{
        this.setState({
            name:"Nishchhal"
        })
    }
    //we can't use or access "this" keyword for this function because 
    //in this function this is undefined if you want to 
    //access "this" keyword in a function than make a arrow function
    // because arrow function directely inherite and also by arrow function this scope is allow
    //and if you want to access this keyword in this funciton without usint
    //arrow function than follow this code 
    render() {
        const number=[3,4,5,6];
        const newNumber=number.map((number)=><li key={number}>{number}</li>)
        return (
            <div>
            
             <button onClick={this.eva}>click event using class</button>
             {this.state.name}
             {this.state.roll}  
             {newNumber} 
            </div>
        )
    }
}

export default Cclick

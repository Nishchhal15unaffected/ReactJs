/* 
-------------
state
-------------

state use only with in class 
state is changable 


*/

//import react component from library
import React from 'react';

//made a Stateex class component for learning state and setStete
class Stateex extends React.Component{
  //made constructor 
    constructor(){
        super();
        //use state for display the msg
        this.state={
            msg:"subscribe the Nishchhal Prajapat Youtube channel "
        }
    }
    //made subscribe function and we made setState function for change the state value
    subscribe(){
        this.setState({
            msg:"thanks for subscribing "
        })
    }

    //render function return the jsx or html on browser 
    render(){
        //return returns only one element  element that the reasone we make div and than we make other elements 
        return(
            <div>
                <h1>{this.state.msg}</h1>
                <button onClick={()=>{this.subscribe()}}>subscribe</button>
            </div>
        )
    }
}
//export this componet for use in any other file 
export default Stateex
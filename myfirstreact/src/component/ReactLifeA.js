import React from 'react';

class ReactLifeA extends React.Component{
    
constructor(props){
    super(props);
    this.state={
        q:1
    }
    
    console.log("A: constructor");
    
}

qunt=()=>{
    this.setState({
        q:this.state.q+1
    })
}
static getDerivedStateFromProps(props,state){
    console.log("A: getDerivedStateFromProps")
    return null;
}
componentDidMount(){
    console.log("componentDidMount");
}
componentDidUpdate(){
    console.log('componentDidUpdate');
}
    render(){
        console.log("render");
        return(
            <div>
                <h1>Count:{this.state.q}</h1>
                <button onClick={this.qunt}>click</button>
            </div>
        )
    }
}
export default ReactLifeA;
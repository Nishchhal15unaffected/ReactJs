// import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import wellcome from './component/component';
import React from 'react';
import {Greet} from './component/Greet';
import CHeader from './component/CHeader';
import Stateex from "./component/Stateex";
import Funcclick from "./component/Funcclick";
import Cclick from "./component/Cclick";
import Stylesheet from "./component/Stylesheet";
import Inline from "./component/Inline";
import Form from "./component/From";
import RoutingA from './component/RoutingA';
import ReactLifeA from './component/ReactLifeA';
import Get from './component/Get';
import HookA from './component/HookA.js';
import Hookobject from './component/Hookobject.js';
// import Nish from './Nish.jpg'
// import HookArray from './component/HookArray';
// import Routing from "./component/Routing";
// import greet from './component/greet';
// import React, {Component} from 'react'

// class App extends Component{
//   render(){
//     return(
//     <div className='App'>
//     <greet />
//     </div>
//     );
//   }



//code by core reactjs 
//syntax React.createElement("tagName","atribute","text/content")
//  const App=()=>
// {
//   return React.createElement(
//  React.createElement('h1',null,'hello Niszh')
//    )
//  }
// const withoutJsx= React.createElement('h1',{className:"nish"},"hello core react syntax");
// export default App



// code by jsx (imp)
// const name=<span>Nishchhal</span>

// function App(){
//   return(
//     <div className="App">
//       <h1>hello nish,{name}</h1>
//       {withoutJsx}
//     </div> 
//   )
// }


//class component 
// class App extends React.Component{
//   render(){    
//     return <h2>Nishchhal</h2>
//   }
// }

//use another component
function App(){
  return(
  <div className="App">
  {/* <HookArray /> */}
  <Hookobject />
  <HookA />
  <Inline/>
    <Form/>
    <Stylesheet isValue={false}/>
    <CHeader name="affected"/>
    <Greet name="virat" last="kohli"/>
    <p>hi Nishchhal bro</p>
    <Greet name="dhoni"/>
    <Greet name="rohit"/>
    <Greet name="raina"/>
    <Stateex/>
    <Funcclick />
    <RoutingA />
    <Cclick roll="63"/>
    <ReactLifeA />
    <Get />
    <img src={require('./Nish.jpg')} alt="Nishchhal" />
  </div>
    ) 
}
export default App

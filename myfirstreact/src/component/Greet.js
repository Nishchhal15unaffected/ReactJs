import React from "react";
export const Greet=(props)=>{
	return (
	<div>
	<h1>Hello {props.name} {props.last}</h1>
	{props.children}
	</div>
		)}

 export default Greet;


// in component file name and component name should 
//be same and first latter of component should be 
//capital and if you want to direct export component 
//than at the time of import must be written name in 
//{Name} 
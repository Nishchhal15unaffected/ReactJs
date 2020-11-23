import React,{useState, useEffect} from 'react'

function HookA() {
   //3rd way
    const [channelName,setname]=useState("hooks nish");
    const [counter,setcounter]=useState(0);

    // const channelName=useState("Hook Nish");
    // 2nd way const name=channelName[0];
    // const setname=channelName[1];
     const stateHandler=()=>{
        // 1st way channelName[1]("bhyya ji change ho gya ");
        setname("bhyya ji ye change ho gya");
    }
    //behave like componentDidMount and upadate jese
    useEffect(() =>{
        console.log("useEffect call");
    },[counter])
    //[counter] if we use it than when counter update than only call use Effect and we dont use it than it call for everone
    const counterCall=()=>{
        setcounter(counter+1);
    }
    const counterCallD=()=>{
        setcounter(counter-1);
    }
    const counterCallA=()=>{
        for(let i=0;i<10;i++){
            setcounter(counter => counter+1)
        }
    }
    //if you want to state increment by prevouse increment than call use this type make a function of state if you not 
    //do it than it will not work
    return (
        <div>
            {channelName}
            <button onClick={stateHandler}>click here</button>
            {counter}
            <button onClick={counterCall}>Increment </button>
            <button onClick={counterCallD}>Dicrement </button>
            <button onClick={counterCallA}>Increment by 10 -</button>
        </div>
    )
}

export default HookA

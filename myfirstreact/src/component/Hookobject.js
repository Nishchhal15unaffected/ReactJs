import React,{useState} from 'react'

function Hookobject() {
    const [name, setname] = useState({firstname:"",lastname:""});
    //...object_name
     //it is a spread operator it return the all object value es6 concept learn from google
    return (
        <div>
            <input type="text" value={name.firstname} onChange={ e => setname({...name,firstname:e.target.value})}></input>
            <input type="text" value={name.lastname} onChange={ e => setname({...name,lastname:e.target.value})}></input>
            {name.firstname}
            {name.lastname}
        </div>
    )
}

export default Hookobject

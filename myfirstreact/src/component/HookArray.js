import React,{useState} from 'react'

function HookArray() {
    const [name, setname] = useState([]);
    const rendomNumber=()=>{
        setname([...name,{
        value:Math.floor(Math.random() *10)
        }])
    }
    return (
        <div>
            <button onClick={rendomNumber}>click here for rendom number</button>
            <ul>
                {name.map(()=>{
                    <li key={name.value}>{name.value}</li>
                    })
                    }
            </ul>
        </div>
    )
}

export default HookArray

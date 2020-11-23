import React from 'react'

export default function Funcclick() {
    function changeEvent(){
        console.log("event heandling")
    }
    return (
        <React.Fragment>
            <button onClick={changeEvent}>onclick</button>
            <h1>Nishchhal</h1>
            </React.Fragment>
    )
}

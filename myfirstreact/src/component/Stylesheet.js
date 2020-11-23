import React from 'react'
import './Style.css';

function Stylesheet(props) {
    let classname=props.isValue?"test":"demo"
    return (
        <div>
            <h1 className={classname}>Nishchhal ka Stylesheet</h1>
        </div>
    )
}

export default Stylesheet

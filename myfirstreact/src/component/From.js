import React, { Component } from 'react'

export class From extends Component {
    constructor(){
        super();
        this.state={
            username:' '
        }

    }
           hendlerusername=(event)=>{
            this.setState({
            username:event.target.value
            })
        }   
    render() {
        return (
            <form>
            <div>
                <label>username</label>
                <input type="text" value={this.state.username} onChange={this.hendlerusername}></input>
            </div>
            </form>
        )
    }
}

export default From

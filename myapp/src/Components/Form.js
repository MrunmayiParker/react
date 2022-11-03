import React, { Component } from 'react';
 {/* controlled form */}
class Form extends Component {

    constructor(props){
        super(props); {
            this.state = {
                username: '',
                comments: '',
                topic: 'react'

            }
        }
    }

    HandleUsernameChange = (event) => {
        this.setState({
            username: event.target.value,
            
        })
    }

    Comments = (event) => {
        this.setState({
            comments: event.target.value
        })
    }
    Topic = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    handlesubmit = event => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
    
    }

    render(){
        // const {username, comments, topic} = this.state
        return (
<form onSubmit={this.handlesubmit}>
    <div>
       
        <label>username</label>
        <input type='text' value = {this.state.username} onChange={this.HandleUsernameChange}/>
        <br></br>
        <label>Comments</label>
        <textarea value={this.state.comments} onChange={this.Comments}></textarea>
        <label>topic</label>
        <select value={this.state.topic} onChange={this.Topic}>
            <option value="react">react</option>
            <option value="angular">angular</option>
            <option value="java">java</option>
        </select>

        <button type='submit' >Submit</button>

    </div>
</form>
        )
    }
}

export default Form;
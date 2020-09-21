import React, { Component } from 'react'
import axios from "axios";


class Post extends Component {
    constructor(props) {
        super(props)
    
        this.state = {

             id:"",
             email:"",
             name:""
        }
    }
    changeHandler= e =>{
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler= e =>{
        e.preventDefault()
        console.log(this.state)
        axios.post("https://jsonplaceholder.typicode.com/users",this.state)
        .then(response => {
            console.log(response)
        })

        .catch(error => {
            console.log(error)
        })
    }
    
    render() {
        const { id, email, name }=this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <label>id</label>
                        <input type ="text" name="id" value={id} onChange={this.changeHandler}></input>
                    </div>

                    <div>
                        <label>email</label>

                        <input type ="text" name="email"  value={email} onChange={this.changeHandler}></input>
                    </div>

                    <div>
                    <label>name</label>

                        <input type ="text" name="name"  value={name} onChange={this.changeHandler}></input>
                    </div>

                    <div>
                        <button type="submit">submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Post

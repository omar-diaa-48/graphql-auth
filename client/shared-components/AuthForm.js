import React, { Component, useState } from "react";

class AuthForm extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            email:'',
            password:''
        }
    }

    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.handleAction(this.state)
    }

    render() {
        return (
            <div className="row">
                <form className="col s4" onSubmit={this.handleSubmit.bind(this)} >
                    <div className="input-field">
                        <label>Email</label>
                        <input name='email' value={this.state.email} onChange={e => this.handleChange(e)} />
                    </div>
                    <div className="input-field">
                        <label>Password</label>
                        <input name='password' value={this.state.password} onChange={e => this.handleChange(e)} />
                    </div>
                    <button className="btn" >Submit</button>
                </form>
            </div>
        )
    }
}

export default AuthForm;
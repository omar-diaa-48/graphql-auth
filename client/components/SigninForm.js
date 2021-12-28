import React, { Component } from "react";
import AuthForm from "../shared-components/AuthForm";

class SigninForm extends Component {
    render(){
        return(
            <div>
                <h3>Login</h3>
                <AuthForm />
            </div>
        )
    }
}

export default SigninForm;
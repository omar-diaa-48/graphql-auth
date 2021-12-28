import React, { Component } from "react";
import AuthForm from "../shared-components/AuthForm";

class SignupForm extends Component {
    render(){
        return(
            <div>
                <h3>Signup</h3>
                <AuthForm />
            </div>
        )
    }
}

export default SignupForm;
import React, { Component } from "react";
import { graphql } from "react-apollo";
import { signupMutation } from "../mutations";
import AuthForm from "../shared-components/AuthForm";
import {hashHistory} from 'react-router'

class SignupForm extends Component {
    handleSignup(form){
        const {email, password} = form;

        this.props.mutate({
            variables:{
                email,
                password
            },
            refetchQueries:[{query:currentUserQuery}]
        })
        .then(function(){
            hashHistory.push('/')
        })
        .catch(function(error){
            console.log({error});
            alert('Signup failed')
        })
    }

    render(){
        return(
            <div>
                <h3>Signup</h3>
                <AuthForm handleAction={this.handleSignup.bind(this)} />
            </div>
        )
    }
}

export default graphql(signupMutation)(SignupForm);
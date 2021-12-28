import React, { Component } from "react";
import { graphql } from "react-apollo";
import { signinMutation } from "../mutations";
import { currentUserQuery } from "../queries";
import AuthForm from "../shared-components/AuthForm";
import {hashHistory} from 'react-router'

class SigninForm extends Component {
    handleSignin(form){
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
            alert('Signin failed')
        })
    }

    render(){
        return(
            <div>
                <h3>Login</h3>
                <AuthForm handleAction={this.handleSignin.bind(this)} />
            </div>
        )
    }
}

export default graphql(signinMutation)(SigninForm);
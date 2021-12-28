import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router"; 
import { currentUserQuery } from "../queries";
import { logoutMutation } from "../mutations"

class Header extends Component {
    handleLogout(){
        this.props.mutate({
            refetchQueries:[{query:currentUserQuery}]
        });
    }

    renderButtons(){
        const {user, loading} = this.props.data;

        if(loading){
            return <div />
        }

        if(user){
            return (
                <li>
                    <a onClick={this.handleLogout.bind(this)}>
                        Logout
                    </a>
                </li>
            )
        }

        return (
            <div>
                <li>
                    <Link to="/signup">Signup</Link>
                </li>
                <li>
                    <Link to="/signin">Signin</Link>
                </li>
            </div>
        )
    }

    render(){

        return(
            <nav style={{marginBottom:"2em"}} >
                <div className="nav-wrapper" >
                    <Link to="/" >Home</Link>
                    <ul className="right" >
                        {this.renderButtons()}
                    </ul>
                </div>
            </nav>
        )
    }
}

export default graphql(logoutMutation)(
    graphql(currentUserQuery)(Header)
)
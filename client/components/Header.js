import React, { Component } from "react";
import { graphql } from "react-apollo";
import { currentUserQuery } from "../queries/CurrentUser";

class Header extends Component {
    render(){
        console.log(this.props.data);

        if(this.props.loading){
            return <div>Loading....</div>
        }

        return(
            <div>
                Header
            </div>
        )
    }
}

export default graphql(currentUserQuery)(Header);
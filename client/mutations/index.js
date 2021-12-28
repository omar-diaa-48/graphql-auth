import gql from "graphql-tag";

export const signoutMutation = gql`
    mutation {
        logout {
            id
            email
        }
    }
`;

export const signinMutation = gql`
    mutation Login($email:String, $password:String){
        login(email:$email, password:$password){
            id
            email
        }
    }
`;

export const signupMutation = gql`
    mutation Signup($email:String, $password:String){
        signup(email:$email, password:$password){
            id
            email
        }
    }
`;
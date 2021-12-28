const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLString
} = graphql

const UserType = require('./types/user_type');
const AuthService = require('../services/auth');

const mutation = new GraphQLObjectType({
    name:'mutation',
    fields:{
        signup:{
            type:UserType,
            args:{
                email:{type:GraphQLString},
                password:{type:GraphQLString}
            },
            resolve(parentValue, args, req){
                const { email, password } = args;
                return AuthService.signup({ email, password, req })
            }
        }
    }
})

module.exports = mutation;
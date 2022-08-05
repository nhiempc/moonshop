import { gql } from '@apollo/client';

const ADD_USER = gql`
    mutation addUser(
        $address: String!,
        $email: String!,
        $username: String!,
        $password: String!,
        $firstname: String!,
        $lastname: String!,
        $phone: String!
        ){
        addUser(
            address: $address
            email: $email
            username: $username
            password: $password
            name: {
                firstname: $firstname
                lastname: $lastname
            }
            phone: $phone
        ){
            id
            email
            username
            password
        }
    }
`

export {ADD_USER};
import { gql } from '@apollo/client';

const GET_USERS = gql`
    query getAllUser{
        users{
            id
            address
            email
            username
            password
            name
            phone
        }
    }
`

export {GET_USERS};
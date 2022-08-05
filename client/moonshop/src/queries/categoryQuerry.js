import { gql } from '@apollo/client';

const GET_CATEGORIES_SIDEBAR = gql`
    query getAllCategory{
        categories{
            id
            title
        }
    }
`

export {GET_CATEGORIES_SIDEBAR};
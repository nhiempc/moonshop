import { gql } from '@apollo/client';

const GET_BRANDS_SIDEBAR = gql`
    query getAllBrand{
        brands{
            id
            title
        }
    }
`

export {GET_BRANDS_SIDEBAR};
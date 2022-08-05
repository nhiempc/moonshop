import { gql } from '@apollo/client';

const GET_PRODUCTS_HOMEPAGE = gql`
    query getProducts{
        products{
            id
            title
            price
            image
            categoryID
            brandID
        }
    }
`
const GET_PRODUCTS_HOMEPAGE_FILTER = gql`
    query getProductsHomepageFilter($brandID: String, $categoryID: String){
        products_filter_home(
            brandID: $brandID,
            categoryID: $categoryID
        ){
            id
            title
            price
            image
        }
    }
`

export {GET_PRODUCTS_HOMEPAGE, GET_PRODUCTS_HOMEPAGE_FILTER};
# moonshop
Wellcome to MoonShop!
# To run server: 
npm run dev
# To run client
cd client/moonshop
npm start
# Open GraphQL interface
http://localhost:5000/graphql
# Querry in GraphQL example:
- Get All products:
![Get all products](https://i.ibb.co/hW713cx/get-all-products.png)
- Get product by ID:
![Get product by id](https://i.ibb.co/xHncz7S/get-product-by-id.png)
# Mutation in GraphQL example:
- Add new product
![Add new product](https://i.ibb.co/YcD49XD/add-new-product.png)
- Delete product by ID
![Delete product by id](https://i.ibb.co/WHkjnTm/delete-product-by-id.png)
- Update product by ID
mutation {
  updateProduct(
    id: "62e287f411b3748127e42feb"
    /* new title and some fileds want to modifiy */
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops - Updated"
  ){
    /* return title and some fileds you want */
    title
  }
}


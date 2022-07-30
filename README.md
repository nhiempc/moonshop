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
query{
  products{
    /* return all fileds */
    id
    title
    price
    description
    category
    image
    rating{
      rate
      count
    }
  }
}
![Get all products](https://prnt.sc/8joS_fYJyjaO)
- Get product by ID:
query{
  product(id: "62e287f411b3748127e42feb"){
    /* return all fileds */
    id
    title
    price
    description
    category
    image
    rating{
      rate
      count
    }
  }
}
# Mutation in GraphQL example:
- Add new product
mutation {
  addProduct(
    title: "New Product", 
    price: 25, 
    description: "This is description", 
    category: "Laptop gamming", 
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg", 
    rating: {rate: 3.9, count: 120})
  {
    /* return title and some fileds you want */
    id
  }
}
- Delete product by ID
mutation {
  deleteProduct(id: "62e4c8ebe05500d40399b5f8"){
    /* return id and some fileds you want */
    id
  }
}
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


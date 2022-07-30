// Mongo Models
const Product = require('../models/Product');
const Cart = require('../models/Cart');
const User = require('../models/User');

const { 
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLFloat, 
    GraphQLList, 
    GraphQLSchema, 
    GraphQLInt,
    GraphQLNonNull,
    GraphQLInputObjectType
} = require('graphql');

// Rating Input
const RatingInput = new GraphQLInputObjectType({
    name: 'RatingInput',
    fields: () => ({
        rate: { type: GraphQLFloat },
        count: { type: GraphQLInt }
    })
});
// Rating Type
const RatingType = new GraphQLObjectType({
    name: 'RatingType',
    fields: () => ({
        rate: { type: GraphQLFloat },
        count: { type: GraphQLInt }
    })
});
// Product Type
const ProductType = new GraphQLObjectType({
    name: 'ProductType',
    fields: () => ({
        id: { type: GraphQLString },
        title: { type: GraphQLString },
        price: { type: GraphQLFloat },
        description: { type: GraphQLString },
        category: { type: GraphQLString },
        image: { type: GraphQLString },
        rating: { type: RatingType }
    })
});
// Product Cart Type
const ProductCartType = new GraphQLObjectType({
    name: 'ProductCartType',
    fields: () => ({
        productId: { type: GraphQLString },
        quantity: { type: GraphQLInt },
        product: {
            type: ProductType,GraphQLString,
            resolve(parent, args){
                return Product.find(product => product.id == parent.productId)
            }
        }
    })
});
// Product Cart Input
const ProductCartInput = new GraphQLInputObjectType({
    name: 'ProductCartInput',
    fields: () => ({
        productId: { type: GraphQLString },
        quantity: { type: GraphQLInt }
    })
});
// Cart Type
const CartType = new GraphQLObjectType({
    name: 'CartType',
    fields: () => ({
        id: { type: GraphQLString },
        userId: { type: GraphQLString },
        status: { type: GraphQLString },
        products: { type: new GraphQLList(ProductCartType) }
    })
});
// Name Type
const NameType = new GraphQLObjectType({
    name: 'NameType',
    fields: () => ({
        firstname: { type: GraphQLString },
        lastname: { type: GraphQLString }
    })
});
// Name Input
const NameInput = new GraphQLInputObjectType({
    name: 'NameInput',
    fields: () => ({
        firstname: { type: GraphQLString },
        lastname: { type: GraphQLString }
    })
});
// User Type
const UserType = new GraphQLObjectType({
    name: 'UserType',
    fields: () => ({
        id: { type: GraphQLString },
        address: { type: GraphQLString },
        email: { type: GraphQLString },
        username: { type: GraphQLString },
        password: { type: GraphQLString },
        name: { type: NameType },
        phone: { type: GraphQLString },
        carts: {
            type: CartType,
            args: { status: { type: GraphQLString }},
            resolve(parent, args){
                return Cart.find(cart => cart.userId == parent.id && cart.status == args.status);
            }
        }
    })
});
const RootQuerry = new GraphQLObjectType({
    name: 'RootQuerryType',
    fields: {
        product: {
            type: ProductType,
            args: { id: { type: GraphQLString }},
            resolve(parent, args) {
                return Product.findById(args.id);
            }
        },
        products: {
            type: new GraphQLList(ProductType),
            resolve(parent, args){
                return Product.find();
            }
        },
        cart: {
            type: CartType,
            args: { id: { type: GraphQLString }},
            resolve(parent, args){
                return Cart.findById(args.id);
            }
        },
        carts: {
            type: new GraphQLList(CartType),
            resolve(parent, args){
                return Cart.find();
            }
        },
        user: {
            type: UserType,
            args: { id: { type: GraphQLString }},
            resolve(parent, args){
                return User.findById(args.id);
            }
        },
        users: {
            type: new GraphQLList(UserType),
            resolve(parent, args){
                return User.find();
            }
        }
    }
});

// Mutation
const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addProduct: {
            type: ProductType,
            args: {
                title: { type: GraphQLNonNull(GraphQLString) },
                price: { type: GraphQLNonNull(GraphQLFloat) },
                description: { type: GraphQLNonNull(GraphQLString) },
                category: { type: GraphQLNonNull(GraphQLString) },
                image: { type: GraphQLNonNull(GraphQLString) },
                rating: { type: GraphQLNonNull(RatingInput) }
            },
            resolve(parent, args){
                const product = new Product({
                    title: args.title,
                    price: args.price,
                    description: args.description,
                    category: args.category,
                    image: args.image,
                    rating: args.rating
                });
                return product.save();
            }
        },
        deleteProduct: {
            type: ProductType,
            args: { 
                id: { type: GraphQLNonNull(GraphQLString) }
            },
            resolve(parent, args){
                return Product.findByIdAndRemove(args.id)
            }
        },
        updateProduct: {
            type: ProductType,
            args: {
                id: { type: GraphQLNonNull(GraphQLString) },
                title: { type: GraphQLString },
                price: { type: GraphQLFloat },
                description: { type: GraphQLString },
                category: { type: GraphQLString },
                image: { type: GraphQLString },
                rating: { type: RatingInput }
            },
            resolve(parent, args){
                return Product.findByIdAndUpdate(
                    args.id,
                    {
                        $set: {
                            title: args.title,
                            price: args.price,
                            description: args.description,
                            category: args.category,
                            image: args.image,
                            rating: args.rating
                        }
                    },
                    {
                        new: true
                    }
                );
            }
        },
        addUser: {
            type: UserType,
            args: {
                address: { type: GraphQLNonNull(GraphQLString) },
                email: { type: GraphQLNonNull(GraphQLString) },
                username: { type: GraphQLNonNull(GraphQLString) },
                password: { type: GraphQLNonNull(GraphQLString) },
                name: { type: GraphQLNonNull(NameInput) },
                phone: { type: GraphQLNonNull(GraphQLString) }
            },
            resolve(parent, args){
                const user = new User({
                    address: args.address,
                    email: args.email,
                    username: args.username,
                    password: args.password,
                    name: args.name,
                    phone: args.phone
                });
                return user.save();
            }
        },
        deleteUser: {
            type: UserType,
            args: { 
                id: { type: GraphQLNonNull(GraphQLString) }
            },
            resolve(parent, args){
                return User.findByIdAndRemove(args.id);
            }
        },
        addCart: {
            type: CartType,
            args: {
                userId: { type: GraphQLNonNull(GraphQLString) },
                status: { type: GraphQLNonNull(GraphQLString) },
                products: { type: GraphQLNonNull(GraphQLList(ProductCartInput))}
            },
            resolve(parent, args){
                const cart = new Cart({
                    userId: args.userId,
                    status: args.status,
                    products: args.products
                });
                return cart.save();
            }
        },
        deleteCart: {
            type: CartType,
            args: { 
                userId: { type: GraphQLNonNull(GraphQLString) }
            },
            resolve(parent, args){
                return Cart.findOneAndRemove({
                    userId: args.userId,
                    status: "0"
                });
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuerry,
    mutation
});
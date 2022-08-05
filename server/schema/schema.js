// Mongo Models
const Product = require('../models/Product');
const Cart = require('../models/Cart');
const User = require('../models/User');
const Category = require('../models/Category');
const Brand = require('../models/Brand');
const mongoose = require('mongoose');

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

//Brand Type
const BrandType = new GraphQLObjectType({
    name: 'BrandType',
    fields: () => ({
        id: { type: GraphQLString },
        title: { type: GraphQLString },
        categoryIds: { type: GraphQLList(GraphQLString)}
    })
});
// Brand Input
// const BrandInput = new GraphQLInputObjectType({
//     name: 'BrandInput',
//     fields: () => ({

//     })
// })
// Category Type
const CategoryType = new GraphQLObjectType({
    name: 'CategoryType',
    fields: () => ({
        id: { type: GraphQLString },
        title: { type: GraphQLString },
        brandIds: { type: GraphQLList(GraphQLString)}
    })
})
// Product Type
const ProductType = new GraphQLObjectType({
    name: 'ProductType',
    fields: () => ({
        id: { type: GraphQLString },
        title: { type: GraphQLString },
        price: { type: GraphQLFloat },
        description: { type: GraphQLString },
        image: { type: GraphQLString },
        brandID: { type: GraphQLString},
        categoryID: { type: GraphQLString },
        rating: { type: RatingType }
    })
});
// Product Cart Type
const ProductCartType = new GraphQLObjectType({
    name: 'ProductCartType',
    fields: () => ({
        productId: { type: GraphQLString },
        quantity: { type: GraphQLInt },
        // product: {
        //     type: ProductType,
        //     resolve(parent, args){
        //         return Product.find(product => product.id == parent.productId)
        //     }
        // }
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
        cartId: { type: GraphQLString }
        // carts: {
        //     type: CartType,
        //     args: { status: { type: GraphQLString }},
        //     resolve(parent, args){
        //         return Cart.find(cart => cart.userId == parent.id && cart.status == args.status);
        //     }
        // }
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
        },
        categories: {
            type: new GraphQLList(CategoryType),
            resolve(parent, args){
                return Category.find();
            }
        },
        category: {
            type: CategoryType,
            args: { id: { type: GraphQLString }},
            resolve(parent, args){
                return Category.findById(args.id);
            }
        },
        brands: {
            type: new GraphQLList(BrandType),
            resolve(parent, args){
                return Brand.find();
            }
        },
        brand: {
            type: BrandType,
            args: { id: { type: GraphQLString }},
            resolve(parent, args){
                return Brand.findById(args.id);
            }
        },
        products_filter_home: {
            type: new GraphQLList(ProductType),
            args: {
                brandID: { type : GraphQLString },
                categoryID: { type: GraphQLString }
            },
            resolve(parent, args){
                if(args.brandID === "" || args.brandID === null){
                    return Product.find({ categoryID: args.categoryID });
                }else if(args.categoryID === "" || args.categoryID === null){
                    return Product.find({ brandID: args.brandID });
                }else{
                    return Product.find({ brandID: args.brandID,categoryID: args.categoryID });
                }
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
                categoryID: { type: GraphQLNonNull(GraphQLString) },
                brandID: { type: GraphQLNonNull(GraphQLString) },
                image: { type: GraphQLNonNull(GraphQLString) }
            },
            resolve(parent, args){
                const product = new Product({
                    title: args.title,
                    price: args.price,
                    description: args.description,
                    category: args.category,
                    image: args.image,
                    rating: {
                        rate: 0,
                        count: 0
                    }
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
                    phone: args.phone,
                    cartId: null
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
                products: { type: GraphQLNonNull(GraphQLList(ProductCartInput))}
            },
            resolve(parent, args){
                const cart = new Cart({
                    status: "0",
                    products: args.products
                });
                return cart.save();
            }
        },
        deleteCart: {
            type: CartType,
            args: { 
                id: { type: GraphQLNonNull(GraphQLString) }
            },
            resolve(parent, args){
                return Cart.findOneAndRemove({
                    id: args.id
                });
            }
        },
        addCategory: {
            type: CategoryType,
            args: {
                title: { type: GraphQLNonNull(GraphQLString) },
                brandIds: { type: GraphQLList(GraphQLString) }
            },
            resolve(parent, args){
                const category = new Category({
                    title: args.title,
                    brandIds: args.brandIds
                });
                return category.save();
            }
        },
        addBrand: {
            type: BrandType,
            args: {
                title: { type: GraphQLNonNull(GraphQLString) },
                categoryIds: { type: GraphQLList(GraphQLString) }
            },
            resolve(parent, args){
                const brand = new Brand({
                    title: args.title,
                    categoryIds: args.categoryIds
                });
                return brand.save();
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuerry,
    mutation
});
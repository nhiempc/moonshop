const products = [
    {
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: {
            rate: 3.9,
            count: 120
        }
    },
    {
        id: 2,
        title: "Mens Casual Premium Slim Fit T-Shirts ",
        price: 22.3,
        description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        rating: {
            rate: 4.1,
            count: 259
        }
    },
    {
        id: 3,
        title: "Mens Cotton Jacket",
        price: 55.99,
        description: "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        rating: {
            rate: 4.7,
            count: 500
        }
    },
    {
        id: 4,
        title: "Mens Casual Slim Fit",
        price: 15.99,
        description: "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        rating: {
            rate: 2.1,
            count: 430
        }
    },
    {
        id: 5,
        title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        price: 695,
        description: "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        category: "jewelery",
        image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
        rating: {
            rate: 4.6,
            count: 400
        }
    }
]

const carts = [
    {
        id: 1,
        userId: 1,
        status: 0,
        products: [
            {
                productId: 1,
                quantity: 4
            },
            {
                productId: 2,
                quantity: 1
            },
            {
                productId: 3,
                quantity: 6
            }
        ]
    },
    {
        id: 2,
        userId: 1,
        status: 1,
        products: [
            {
                productId: 2,
                quantity: 4
            },
            {
                productId: 1,
                quantity: 10
            },
            {
                productId: 5,
                quantity: 2
            }
        ]
    },
    {
        id: 3,
        userId: 2,
        status: 0,
        products: [
            {
                productId: 1,
                quantity: 2
            },
            {
                productId: 9,
                quantity: 1
            }
        ]
    }
]

const users = [
    {
        address: "Ha Noi",
        id: 1,
        email: "john@gmail.com",
        username: "johnd",
        password: "m38rmF$",
        name: {
            firstname: "john",
            lastname: "doe"
        },
        phone: "1-570-236-7033"
    },
    {
        address: "Hung Yen",
        id: 2,
        email: "morrison@gmail.com",
        username: "mor_2314",
        password: "83r5^_",
        name: {
            firstname: "david",
            lastname: "morrison"
        },
        phone: "1-570-236-7033"
    },
    {
        address: "Thai Binh",
        id: 3,
        email: "kevin@gmail.com",
        username: "kevinryan",
        password: "kev02937@",
        name: {
            firstname: "kevin",
            lastname: "ryan"
        },
        phone: "1-567-094-1345"
    }
]

module.exports = { products, carts, users };
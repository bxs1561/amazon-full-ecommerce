import bcrypt from "bcryptjs";
const data = {
    users:[
        {
            name: "Bikram",
            email: "bikram@gmail.com",
            password: bcrypt.hashSync("1234",8),
            isAdmin: true
        },
        {
            name: "binod",
            email: "binodm@gmail.com",
            password: bcrypt.hashSync("1234",8),
            isAdmin: false
        }
    ],
    products:[
        {
            name: 'Nike Shirt',
            category: 'Shirts',
            image: "https://s3.gsxtr.com/i/pr/t-shirt-nike-nsw-hybrid-tape-t-shirt-white-252045-450-1.jpg",
            price: 120,
            countInStock: 10,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            description: "super quality product"
        },
        {
            name: 'Adidas Shirt',
            category: 'Shirts',
            image: "https://di2ponv0v5otw.cloudfront.net/posts/2018/08/23/5b7ed397c54de35724b71232/m_5b805fc64cdc305203b76046.jpg",
            price: 100,
            countInStock: 20,
            brand: 'Adidas',
            rating: 4.0,
            numReviews: 10,
            description: "super quality product"
        },
        {
            name: 'Lacoste Shirt',
            category: 'Shirts',
            image: "https://www.coltortiboutique.com/media/catalog/product/cache/06764c7e561f871da5967ecc153c7d6c/s/h/shirts_lacoste_celeste_201697ucw000001-1zz-3.jpg",
            price: 110,
            countInStock: 0,
            brand: 'Lacoste',
            rating: 4.8,
            numReviews: 18,
            description: "super quality product"
        },
        {
            name: 'Nike Pants',
            category: 'Pants',
            image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/lkbggof4a7v3ubldxdqt/flex-mens-slim-fit-5-pocket-golf-pants-OnTre3XK.jpg",
            price: 75,
            brand: 'Nike',
            countInStock: 15,
            rating: 4.5,
            numReviews: 14,
            description: "super quality product"
        },
        {
            name: 'Puma Pants',
            category: 'Pants',
            image: "https://i.ebayimg.com/images/g/KikAAOSw789fWTR5/s-l640.jpg",
            price: 50,
            countInStock: 5,
            brand: 'Puma',
            rating: 4.5,
            numReviews: 10,
            description: "super quality product"
        },
        {
            // _id: '6',
            name: 'Adidas Pant',
            category: 'Pants',
            image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/e7ae42b5c34e438f95e7ab0b00c6c94d_9366/High-Waisted_Slim_Pants_Black_FI6728_21_model.jpg",
            price: 140,
            countInStock: 12,
            brand: 'Adidas',
            rating: 4.5,
            numReviews: 15,
            description: "super quality product"
        }
    ]
}

export default data

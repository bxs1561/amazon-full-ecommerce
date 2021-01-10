import React from "react"
import data from "../data";
import Product from "../components/Product";

function HomeScreen() {
    return(
        <div>
            <div className="row center">
                    {data.products.map(product=>(
                        <Product
                            key={product._id}
                            name={product.name}
                            price={product.price}
                            _id={product._id}
                            image={product.image}
                            rating={product.rating}
                            numReviews={product.numReviews}
                        />
                    ))}
                </div>
            </div>

    )

}
export default HomeScreen

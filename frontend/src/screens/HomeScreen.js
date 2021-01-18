import React, {useEffect, useState} from "react"
import Product from "../components/Product";
import axios from "axios";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import {useDispatch, useSelector} from "react-redux";
import {listProducts} from "../actions/productActions";

function HomeScreen() {
    const dispatch = useDispatch();
    const productList = useSelector(state=>state.productList);
    const {loading, error, products} = productList;

    useEffect(()=>{
        dispatch(listProducts())
    },[dispatch])
    return(
        <div>
            {loading?(<LoadingBox></LoadingBox>
                ) : error?(<MessageBox variant="danger">{error}</MessageBox>
            ):(
                <div className="row center">
                    {products.map(product=>(
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
            )
            }

            </div>

    )

}
export default HomeScreen

import React from 'react'
import { useEffect } from 'react'
import axios from "axios";
import { useState } from 'react';
import "../css/Product.css"
import {Link} from "react-router-dom"
export default function Products() {
    const [productdata, setproductdata] = useState([]);
    const getProducts = () => {
        axios({
            method: "get",
            url: " https://fakestoreapi.com/products"
        })
            .then(res => {
                setproductdata(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }
    useEffect(() => {
        getProducts();
    }, [])

    return (
        <>

            <div className='main_product'>
                {
                    productdata.map((product) => (
                        <div key={product.id} className = "main_product_inside">
                            <img src={product.image} className="image_style"></img>
                            <h3>{product.title}</h3>
                            <div className='price_rating'>
                                <p className='product_price'>₹{product.price}</p>
                                <p>{product.rating.rate}⭐</p>
                                
                            </div>
                            <Link to = {`/products/${product.id}`} ><button className='add_to_cart'>View details</button></Link>

                        </div>
                    ))
                }
            </div>
        </>

    )
}

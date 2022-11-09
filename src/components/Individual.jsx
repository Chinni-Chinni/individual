import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import "../css/Individual.css"

export default function Individual() {
  const id = useParams();
  const [indiproduct, setproduct] = useState({});
  console.log(id.id);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id.id}`)
      .then((res) => res.json())
      .then((res) => setproduct(res))
      .catch((err) => console.log(err));

  }, [id])


  return (
    <div className='main_individual'>

      <div className='main_individual_left'>

        <Link to = "/products" ><img  style = {{"width" : "30px",height : "30px",marginTop : "-1000px"}} src='https://www.shutterstock.com/image-vector/arrow-back-vector-icon-direction-600w-1638337234.jpg' /></Link>
        <img src={indiproduct.image} className="indi_image" />







      </div>
      <div className="main_individual_right">
        <div className='price_rating'>
          <p className='product_price'>Price : ₹{indiproduct.price}</p>
        </div>


        <p>{indiproduct.title}</p>

        <button className='add_to_cart'  >Add To Cart</button>

      </div>
    </div>

  )
}

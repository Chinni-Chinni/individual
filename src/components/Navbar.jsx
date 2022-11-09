import React from 'react'
import { Link } from 'react-router-dom'
import "../css/Navbar.css";

export default function Navbar() {
    return (
        <>
            <div className='main_nav'>
                <div>
                    <Link to="/products" className='text'>Home</Link>
                </div>

                <div>
                    <Link to="/" className='text'>Login</Link>
                </div>

                {/* <div>
                    <Link to="/individual" className='text'>Individual</Link>
                </div> */}
                <div>
                    <Link to = "/cart" className='text'>
                        <img  className='cart_image' src = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Shopping_cart_icon.svg/2501px-Shopping_cart_icon.svg.png" />
                    </Link>
                </div>






            </div>
        </>



    )
}

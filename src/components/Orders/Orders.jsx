import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';

import './Order.css'
import { removeFromDb } from '../../utilities/fakedb';

const Orders = () => {

    const saveCart = useLoaderData()
    const [cart,setCart] = useState(saveCart)
    // console.log(cart)

    const handleRemoveFromCart =(id) =>{
       
      const remaining = cart.filter(product => product.id !==id)

      setCart(remaining);
      removeFromDb(id)

    }
    return (
        <div className="shop-container ">
      <div className="review-container ">

        {
            cart.map(product=><ReviewItem
            key ={product.id}
            product ={product}
            handleRemoveFromCart={handleRemoveFromCart}
            ></ReviewItem>)
        }
       
      </div>

      <div className="cart-container">
        <Cart cart={cart}  ></Cart>
      </div>
    </div>
    );
};

export default Orders;
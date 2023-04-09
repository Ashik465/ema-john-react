import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';

import './Order.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Orders = () => {

    const saveCart = useLoaderData()
    const [cart,setCart] = useState(saveCart)
    // console.log(cart)

    const handleRemoveFromCart =(id) =>{
       
      const remaining = cart.filter(product => product.id !==id)

      setCart(remaining);
      removeFromDb(id)

    }

// delete cart 
    const deleteCart =()=>{
        deleteShoppingCart()
        setCart([])
        
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
    <Cart cart={cart} deleteCart ={deleteCart } >
    <Link to = '/checkout'>
          <button  className='btn mt-10 text-white bg-[#FF9900] border-none w-full'>Checkout 
     
         </button>
          </Link>
    </Cart>
      </div>
    </div>
    );
};

export default Orders;
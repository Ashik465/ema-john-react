import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const[products,setProducts] = useState([])
    const[cart,setCart]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data =>setProducts(data))
    },[])
    const handleCart =(product) =>{
        const newCart =[...cart , product]
        setCart(newCart)
        addToDb(product.id)
    }
   
    useEffect(()=>{

        const shoppingCart = getShoppingCart()
        console.log(shoppingCart)
    },[])

    return (
        <div className='shop-container '>
            <div className="product-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6 my-16 ">
                {products.map(product => <Product product={product} key={product.id} handleCart={handleCart}></Product>)}
            </div>

            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;
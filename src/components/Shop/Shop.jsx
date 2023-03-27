import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const[products,setProducts] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data =>setProducts(data))
    },[])
    return (
        <div className='shop-container my-16'>
            <div className="product-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6 ">
                {products.map(product => <Product product={product} key={product.id}></Product>)}
            </div>

            <div className="cart-container">
                <h1 className='font-bold text-3xl'>order summery </h1>
            </div>
        </div>
    );
};

export default Shop;
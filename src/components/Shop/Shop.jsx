import React, { useEffect, useState } from "react";
import { addToDb, deleteShoppingCart, getShoppingCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handleCart = (product) => {
    // const newCart = [...cart, product];

    // hard way 
    let newCart=[]
    const exist = cart.find(pd=>pd.id === product.id)
    if(!exist) {
        product.quantity =1
        newCart =[...cart, product ]
    }
    else {
        exist.quantity = exist.quantity +1
        const remaining =cart.filter(pd=>pd.id !== product.id)
        newCart=[...remaining , exist]
    }

    setCart(newCart);
    addToDb(product.id);
  };

// delete cart 

const deleteCart =()=>{
deleteShoppingCart()
setCart([])

}

  useEffect(() => {
    const storedCart = getShoppingCart();
  
    const savedCart = [];
    // step 1 get the id of the added product
    for (const id in storedCart) {
      // step 2 get product from the products by using id
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        // step 3 add quantity property in the added product
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        // step 4 add the added product in the saved cart
        savedCart.push(addedProduct);
      }
    }
    // step 5 set the saved cart in the cart state
    setCart(savedCart);
  }, [products]);

  return (
    <div className="shop-container ">
      <div className="product-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6 my-16 ">
        {products.map((product) => (
          <Product
            product={product}
            key={product.id}
            handleCart={handleCart}
           
          ></Product>
        ))}
      </div>

      <div className="cart-container">
        <Cart cart={cart} deleteCart={deleteCart} ></Cart>
      </div>
    </div>
  );
};

export default Shop;

import React, { useEffect, useState } from "react";
import {
  addToDb,
  deleteShoppingCart,
  getShoppingCart,
} from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
import { Link, useLoaderData } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const { totalProduct } = useLoaderData();
  const [currentPage, setCurrentPage] = useState(0);
  const [itemPerPage, setItemPerPage] = useState(10);
  // console.log(total)

  // const itemPerPage = 10; // how many item will show in a page todo make it dynamic

  const totalPage = Math.ceil(totalProduct / itemPerPage);

  const pageNumbers = [...Array(totalPage).keys()];


  // handle item per page 
  const option = [10, 20, 30, 40, 5];
  const handleItemPerPage = (e) => {
    setItemPerPage(e.target.value);
    setCurrentPage(0);
  };


  // useEffect(() => {
  //   fetch("http://localhost:5000/products")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // }, []);
 
  //load data by pageniation

  useEffect(() => {
    fetch(`http://localhost:5000/products?limit=${itemPerPage}&page=${currentPage}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [currentPage, itemPerPage]);

  
 
 
 
 
 
 
  const handleCart = (product) => {
    // const newCart = [...cart, product];

    // hard way
    let newCart = [];
    const exist = cart.find((pd) => pd._id === product._id);
    if (!exist) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      exist.quantity = exist.quantity + 1;
      const remaining = cart.filter((pd) => pd._id !== product._id);
      newCart = [...remaining, exist];
    }

    setCart(newCart);
    addToDb(product._id);
  };

  // delete cart

  const deleteCart = () => {
    deleteShoppingCart();
    setCart([]);
  };

  useEffect(() => {
    const storedCart = getShoppingCart();
    const ids = Object.keys(storedCart);

    fetch('http://localhost:5000/productsByIds' ,{
      method: 'POST',

      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(ids)
    })
    .then(res => res.json())
    .then(cartProductData => {

      const savedCart = [];
      // step 1 get the id of the added product
      for (const id in storedCart) {
        // step 2 get product from the products by using id
        const addedProduct = cartProductData.find((product) => product._id === id);
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

    })

   
  }, []);

  // useEffect(() => {
  //   const storedCart = getShoppingCart();

  //   const savedCart = [];
  //   // step 1 get the id of the added product
  //   for (const id in storedCart) {
  //     // step 2 get product from the products by using id
  //     const addedProduct = products.find((product) => product._id === id);
  //     if (addedProduct) {
  //       // step 3 add quantity property in the added product
  //       const quantity = storedCart[id];
  //       addedProduct.quantity = quantity;
  //       // step 4 add the added product in the saved cart
  //       savedCart.push(addedProduct);
  //     }
  //   }
  //   // step 5 set the saved cart in the cart state
  //   setCart(savedCart);
  // }, [products]);

  return (
    <>
      <div className="shop-container ">
        <div className="product-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6 my-16 ">
          {products.map((product) => (
            <Product
              product={product}
              key={product._id}
              handleCart={handleCart}
            ></Product>
          ))}
        </div>

        <div className="cart-container">
          <Cart cart={cart} deleteCart={deleteCart}>
            <Link to="/orders">
              <button className="btn mt-10 text-white bg-[#FF9900]  border-none w-full">
                Review order
              </button>
            </Link>
          </Cart>
        </div>
      </div>

      {/* pagination  */}

      <div className="pagination ">
        <p>current page{currentPage} and items per page {itemPerPage}</p>
        {pageNumbers.map((number) => (
          <button
            onClick={() => setCurrentPage(number)}
            className={`btn btn-warning ${
              currentPage === number ? "bg-red-500 hover:bg-red-500 border-none" : ""
            }`}
            key={number}
          >
            {number}
          </button>
        ))}
    
        <select
          onChange={handleItemPerPage}
          className="border-none bg-gray-200"
          name="itemPerPage"
          id="itemPerPage"
        >
          {option.map((item) => ( 
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>


      </div>
    </>
  );
};

export default Shop;

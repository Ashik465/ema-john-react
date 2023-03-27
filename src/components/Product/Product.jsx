import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    
  const { name, price, img, seller,ratings } = props.product;
  const handleCart =props.handleCart ;
  return (
    <div>
      <div className="card card-compact w-full h-[100%] bg-base-100 shadow-xl">
        <figure>
          <img 
            src={ img }
            alt="No images found"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>price: ${price}</p>
          <p>Manufacturer: {seller}</p>
          <p>Ratings: {ratings} Stars</p>
          
          <div className="">
            <button onClick={()=>handleCart(props.product)} className="btn btn-primary w-full hover:bg-success hover:border-success">
                Buy Now  <FontAwesomeIcon className="ml-2" icon={faShoppingCart} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

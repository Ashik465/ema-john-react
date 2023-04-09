import React from 'react';
import { deleteShoppingCart } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const Cart = ({cart,deleteCart,children}) => {
    // console.log(cart)

    let quantity = 0 ;
    let totalPrize = 0 ;
    let totalShipping = 0;
    for (const product of cart) {
    //   product.quantity = product.quantity || 1 
        totalPrize = totalPrize + product.price* product.quantity
        totalShipping =totalShipping + product.shipping
        quantity = quantity + product.quantity 
    }

    const tax = totalPrize *7/100;
    const grandTotal = totalPrize +totalShipping+tax
    return (
        <div className='bg-[#FF99004D] p-5 text-lg  sticky top-0'>
            {/* h-[5%] */}
            <h1 className='font-bold text-3xl'>order summery </h1>
         <p className='pt-8 '>Selected item: {quantity}</p>
         <p className='pt-3'>Total price: $ {totalPrize}</p>
         <p className='pt-3'>Total Shipping Charge: $ {totalShipping}</p>
         <p className='pt-3'>Tax: {tax.toFixed(2)}</p>
         <h6 className='pt-3 font-bold '>Grand Total: ${grandTotal.toFixed(2)}</h6>

         <button onClick={deleteCart} className='btn mt-10 text-white bg-[#FF3030] border-none w-full'>Clear Cart
         <FontAwesomeIcon className='ml-2' icon={faTrashCan} />
         </button>
         {children}
        </div>
    );
};

export default Cart;
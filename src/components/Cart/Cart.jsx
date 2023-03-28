import React from 'react';

const Cart = ({cart}) => {
    console.log(cart)

    let totalPrize = 0 ;
    let totalShipping = 0;
    for (const product of cart) {
        totalPrize = totalPrize + product.price 
        totalShipping =totalShipping + product.shipping
    }

    const tax = totalPrize *7/100;
    const grandTotal = totalPrize +totalShipping+tax
    return (
        <div className='bg-[#FF99004D] p-5 text-lg h-[5%] sticky top-0'>
            <h1 className='font-bold text-3xl'>order summery </h1>
         <p className='pt-8 '>Selected item: {cart.length}</p>
         <p className='pt-3'>Total price: $ {totalPrize}</p>
         <p className='pt-3'>Total Shipping Charge: $ {totalShipping}</p>
         <p className='pt-3'>Tax: {tax.toFixed(2)}</p>
         <h6 className='pt-3 font-bold '>Grand Total: ${grandTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;
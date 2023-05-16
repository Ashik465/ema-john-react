// import { getShoppingCart } from "../utilities/fakedb";

// const cartProductsLoader =async() =>{

//     const loadedProduct = await fetch('http://localhost:5000/products')
//     const products = await loadedProduct.json();
//     console.log(products)


//     const storedCart = getShoppingCart();
  
//     const savedCart = [];
//     for (const id in storedCart) {
//       const addedProduct = products.find((product) => product._id === id);
//       if (addedProduct) {
//         const quantity = storedCart[id];
//         addedProduct.quantity = quantity;
//         savedCart.push(addedProduct);}}

//     return savedCart
// }

// // export default cartProductsLoader ;
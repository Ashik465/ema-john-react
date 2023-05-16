import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader =async() =>{
  const storedCart = getShoppingCart();
  const ids = Object.keys(storedCart);

    const loadedProduct = await fetch('http://localhost:5000/productsByIds' ,{
      method: 'POST',

      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(ids)
    })
    const products = await loadedProduct.json();
    // console.log(products)


    // const storedCart = getShoppingCart();
    // console.log(storedCart)
  
    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product._id === id);
      // console.log(addedProduct)
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);}}
console.log(savedCart)
    return savedCart
    
}

export default cartProductsLoader ;
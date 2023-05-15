import { getShoppingCart } from "../utilities/fakedb";

const LoadOrder = async() =>{
    
    const loadProduct = await fetch('http://localhost:5000/products');
    const products = await loadProduct.json();
    const storedCart = getShoppingCart()
    
    let savedCart = []
    for ( const id in storedCart){
        const addedProduct = products.find(pd => pd._id === id);
        if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct)
        }
    }
    return savedCart; 

}


export default LoadOrder;
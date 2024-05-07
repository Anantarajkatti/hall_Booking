import React from 'react';
import { useCart } from './CartoContext';

const Product = ({ product }) => {
  const { addItemToCart } = useCart();
  const {updateItemQuantity}= useCart();
 // const {click}=useCart();


  return (
    <div className='products'>
    <div className='producthead'>
      <div className='productDesc'>
        <h3>{product.title}</h3>
        <p>Description: {product.description}</p>
      </div>
      <img src={product.thumbnail} alt=''></img>
    </div>
      <p>Price: ${product.price}</p>

      
     
        <button onClick={() => addItemToCart(product)}>Add to Cart</button>
        
       
      <button onClick={() =>  updateItemQuantity(product.id,product.quantity--)}>-</button>
       <span>{product.quantity}</span>
      <button onClick={() =>  updateItemQuantity(product.id,product.quantity++)}>+</button>
      
    
      
    </div>
  );
};

export default Product;
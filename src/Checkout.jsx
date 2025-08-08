import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal'; // Assuming you have a Subtotal component 


// Assuming you have a CSS file for styling
function Checkout() {
  
  return (
    <div className="checkout">
      <div className="checkout__left">
       <img
         className="checkout__ad"
         src="https://amazon-pay.brightspotcdn.com/dims4/default/552e1cd/2147483647/strip/true/crop/3175x880+0+0/resize/2453x680!/quality/90/?url=https%3A%2F%2Famazon-k1-prod-pay.s3.us-west-2.amazonaws.com%2Fbrightspot%2Fd2%2Ff2%2F8b9776114e36bcf61743165a3650%2F2024-q4-blog-bnpl-header.png"
         alt=""
       />


      <div>
        <h2 className="checkout__title">
        Your Shopping Basket</h2>
      </div>

    
        <div className="checkout__right">
          <Subtotal cartItems={[
            // Example cart items, replace with actual data
            { id: 1, title: 'Product 1', price: 100, quantity: 1 },
            { id: 2, title: 'Product 2', price: 500, quantity: 2 }
          ]} /> {/* Pass your cart items here */}
            
          <p>The subtotal will go here</p>
          
        </div>
      </div>
    </div>
  );
}

export default Checkout;

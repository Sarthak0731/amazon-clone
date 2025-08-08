import React from "react";
import "./Subtotal.css"; // Assuming you have a CSS file for styling

function Subtotal({ cartItems }) {
  // Calculate total cost
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className="subtotal">
      <h2>Subtotal</h2>
      <p>
        Total ({cartItems.length} items): <strong>₹{total.toFixed(2)}</strong>
      </p>
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;

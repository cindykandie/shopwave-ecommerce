import React from 'react';

function CheckoutProduct() {

  return (
    <div className='border m-3 p-3 max-w-[300px]'>
      <p className="product-title">
        name
      </p>
      <p className="product-price">
        $price
      </p>
      <button className="product-btn">
        Remove from Cart
      </button>
    </div>
  );
}

export default CheckoutProduct;

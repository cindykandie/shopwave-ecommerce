import React from 'react';

function Product({ product }) {
  const { name, price, rating, image } = product;

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<span key={i} className="star">&#9733;</span>)
      } else {
        stars.push(<span key={i} className="star">&#9734;</span>); 
      }
    }
    return stars;
  };

  return (
    <div className='border m-3 p-3 max-w-[350px] rounded-md'>
      <p className="product-title">
        {name}
      </p>
      <p className="product-price">
        ${price}
      </p>
      <p className="product-rating">
        
        Rating: {renderStars()}
      </p>
      <p className="product-image">
        <img src={image} alt={name} />
      </p>
      <button className="product-btn border border-black bg-purple-200 rounded-md text-sm p-1 my-4">
        Add to Cart
      </button>
    </div>
  );
}

export default Product;

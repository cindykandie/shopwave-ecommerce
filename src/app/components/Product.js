"use client"
import { useStateValue } from '../StateProvider';

function Product({ product }) {
  const { id, name, price, rating, image } = product;
  
  const [state, dispatch] = useStateValue();

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id:id,
        image: image,
        price: price,
        rating: rating
      }
    })
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<span key={i} className="star">&#9733;</span>); // Filled star
      } else {
        stars.push(<span key={i} className="star">&#9734;</span>); // Empty star
      }
    }
    return stars;
  };

  return (
    <div className='border m-3 p-3 max-w-[300px]'>
      <p className="product-title">
        {name}
      </p>
      <p className="product-price">
        ${price}
      </p>
      <div className="product-rating">
        {renderStars()}
      </div>
      <div className="product-image">
        <img src={image} alt={name} />
      </div>
      <button className="product-btn border border-black rounded-md py-0.5 px-1 my-4 bg-indigo-300 hover:bg-indigo-500 text-sm font-bold" onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default Product;

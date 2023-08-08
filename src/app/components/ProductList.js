import React from 'react';
import Product from './Product';
import productsData from '../data/productsData.json';

function ProductList() {
  return (
    <div className='flex flex-wrap m-auto p-2 items-center content-center justify-center'>
      {productsData.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;

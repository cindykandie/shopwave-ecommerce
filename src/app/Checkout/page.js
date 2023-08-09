import React from 'react'
import CheckoutProduct from '../components/CheckoutProduct'
import SubTotal from '../components/SubTotal'

function Checkout() {
  return (
    <div className='flex justify-evenly'> 
      <div className="checkout-items">
        <h2>Shopping Basket</h2>
        <ul className='flex flex-col'>
            <li>
              <CheckoutProduct />
            </li>
        </ul>

      </div>


      <div className="checkout-total">
        <SubTotal/>
      </div>
      
     </div>
  )
}

export default Checkout
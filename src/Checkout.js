import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'

const Checkout = () => {
  const [{ cart, user }, dispatch] = useStateValue()
  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img
          className='checkout__ad'
          src='../images/amazon-ad-img.jpg'
          alt='advertisement'
        />

        <div>
          <h3>Hello, {user ? user?.email : 'Guest'}</h3>
          <h2 className='checkout__title'>Your Cart</h2>
          {cart.map((item, index) => (
            <CheckoutProduct
              key={index}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className='checkout__right'>
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout

import React from 'react'
import StarIcon from '@material-ui/icons/Star'
import './Product.css'
import { useStateValue } from './StateProvider'

const Product = ({ id, title, image, price, rating, alt }) => {
  const [{ cart }, dispatch] = useStateValue()

  const addToCart = () => {
    // dispatch item to store
    dispatch({
      type: 'ADD_TO_CART',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    })
  }
  return (
    <div className='product'>
      <div className='product__info'>
        <p>{title}</p>
        <p className='product__price'>
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className='product__rating'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>
                <StarIcon />
              </p>
            ))}
        </div>
      </div>

      <img src={image} alt={alt} />

      <button onClick={addToCart}>Add to Cart</button>
    </div>
  )
}

export default Product

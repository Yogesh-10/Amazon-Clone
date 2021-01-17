import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import CurrencyFormat from 'react-currency-format'
import { getCartTotal } from './reducer'
import { useStateValue } from './StateProvider'
import './Subtotal.css'

const Subtotal = () => {
  const history = useHistory()
  const [{ cart, user }, dispatch] = useStateValue()
  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({cart.length} items): <strong>{value}</strong>
            </p>
            <small className='subtotal__gift'>
              <input type='checkbox' />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'₹'}
      />
      {user ? (
        <button onClick={(e) => history.push('/payment')}>
          Proceed to Checkout
        </button>
      ) : (
        <button onClick={(e) => history.push('/login')}>
          Proceed to Checkout
        </button>
      )}
    </div>
  )
}

export default Subtotal

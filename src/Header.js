import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import './Header.css'
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider'
import { auth } from './firebase'

const Header = () => {
  const [{ cart, user }, dispatch] = useStateValue()

  const handleAuth = () => {
    if (user) {
      auth.signOut()
    }
  }
  return (
    <div className='header'>
      <Link to='/'>
        <img
          className='header__logo'
          src='../images/amazon_PNG11.png'
          alt='Amazon Logo'
        />
      </Link>
      <div className='header__search'>
        <input type='text' className='header__searchInput' />
        <SearchIcon className='header__searchIcon' />
      </div>

      <div className='header__nav'>
        <Link to='/login'>
          <div onClick={handleAuth} className='header__option'>
            <span className='header__optionLineOne'>
              Hello, {user ? user?.email : 'Guest'}
            </span>
            <span className='header__optionLineTwo'>
              {user ? 'Sign out' : 'Sign in'}
            </span>
          </div>
        </Link>

        <div className='header__option'>
          <span className='header__optionLineOne'>Returns</span>
          <span className='header__optionLineTwo'>& Orders</span>
        </div>

        <div className='header__option'>
          <span className='header__optionLineOne'>Your</span>
          <span className='header__optionLineTwo'>Prime</span>
        </div>

        <Link to='/checkout'>
          <div className='header__optionBasket'>
            <ShoppingCartIcon />
            <span className='header__optionLineTwo header__basketCount'>
              {cart?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Header

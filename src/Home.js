import React from 'react'
import './Home.css'
import Product from './Product'

const Home = () => {
  return (
    <div className='home'>
      <div className='home__container'>
        <img
          className='home__image'
          src='../images/amazon-hero-carousel.jpg'
          alt='Product Carousel'
        />

        <div className='home__row'>
          <Product
            id='123'
            title='OnePlus 8T 5G (Aquamarine Green, 12GB RAM, 256GB Storage)'
            price={45999.0}
            image={'../images/oneplus-8T.jpg'}
            rating={5}
            alt='Oneplus 8T'
          />

          <Product
            id='456'
            title='Apple MacBook Pro (13-inch, 8GB RAM, 512GB Storage, 2.4GHz Intel Core i5) - Silver'
            price={175990.0}
            image={'../images/apple-macbook.jpg'}
            rating={4}
            alt='MacBook'
          />
        </div>

        <div className='home__row'>
          <Product
            id='789'
            title='Wildcraft wiki Beatle 02 27 Ltrs Green-Blue Casual Backpack'
            price={829.0}
            image={'../images/bags.jpg'}
            rating={4}
            alt='Wiki Bags'
          />

          <Product
            id='101112'
            title='Wildcraft wiki Beatle 02 27 Ltrs Green-Blue Casual Backpack'
            price={829.0}
            image={'../images/bags.jpg'}
            rating={4}
          />

          <Product
            id='121314'
            title='Wildcraft wiki Beatle 02 27 Ltrs Green-Blue Casual Backpack'
            price={829.0}
            image={'../images/bags.jpg'}
            rating={4}
          />
        </div>

        <div className='home__row'>
          <Product
            id='151617'
            title='Wildcraft wiki Beatle 02 27 Ltrs Green-Blue Casual Backpack'
            price={82900.0}
            image={'../images/bags.jpg'}
            rating={4}
          />
        </div>
      </div>
    </div>
  )
}

export default Home

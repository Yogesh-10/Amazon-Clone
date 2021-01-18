import React from 'react'
import './Home.css'
import ImageCarousel from './ImageCarousel'
import Product from './Product'

const Home = () => {
  return (
    <div className='home'>
      <div className='home__container'>
        {/* <img
          className='home__image'
          src='../images/amazon-carousel-2.jpg'
          alt='Product Carousel'
        /> */}
        <ImageCarousel />

        <div className='home__row'>
          <Product
            id='123'
            title='OnePlus 8T 5G (Aquamarine Green, 12GB RAM, 256GB Storage) ear quad camera setup having 48MP main camera '
            price={45999.0}
            image={'../images/ops-new.png'}
            rating={5}
            alt='Oneplus 8T'
          />

          <Product
            id='456'
            title='ASUS VivoBook 15 X509JA-EJ483T 15.6-inch Laptop (10th Gen Core i3-1005G1 / 8GB DDR4 RAM / 1TB HDD /Windows 10 Home '
            price={55990.0}
            image={'../images/asus-new.jpg'}
            rating={4}
            alt='MacBook'
          />
        </div>

        <div className='home__row'>
          <Product
            id='789'
            title='Wildcraft wiki Beatle 02 27 Ltrs Green-Blue Casual Backpack'
            price={829.0}
            image={'../images/wildcraft-new.jfif'}
            rating={4}
            alt='Wiki Bags'
          />

          <Product
            id='101112'
            title='Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric'
            price={18829.0}
            image={'../images/echo.jfif'}
            rating={3}
          />

          <Product
            id='121314'
            title='Apple Airpods Pro True Wireless (White) Active noise cancellation for immersive sound'
            price={24000.0}
            image={'../images/Apple-Airpods-new.jpeg'}
            rating={5}
          />
        </div>

        <div className='home__row'>
          <Product
            id='181920'
            title="Mochi Women's Loafers 30.5 x 15.2 x 10.2 cm; 1.5 Kilograms Heel type: wedge
Heel Height: 1 inches"
            price={1484.0}
            image={'../images/mochi-new.jpg'}
            rating={5}
          />

          <Product
            id='212223'
            title="Khodal creation men's for Jackets Zip-through Bomber Quilted jacket
Winterwear warm and soft"
            price={1484.0}
            image={'../images/hoodies-new.jpg'}
            rating={1}
          />
        </div>

        <div className='home__row'>
          <Product
            id='242526'
            title='Samsung C49RG90 Monitor Super Ultra Wide Curved Gaming Monitor With HDR 10'
            price={199900.0}
            image={'../images/samsung-monitor.jpg'}
            rating={5}
          />
        </div>

        <div className='home__row'>
          <Product
            id='272829'
            title='VSK Bean Bag XXXL Sofa Mudda Cover Black (Without Beans) Cover only'
            price={1000.0}
            image={'../images/sofa-new.jpg'}
            rating={3}
          />

          <Product
            id='303132'
            title='Godrej 231 L 1 Star Frost-Free Double Door Refrigerator (RF EON 245A 15 HF PS WN, Prism Wine)'
            price={16790.0}
            image={'../images/fridge-new.jpg'}
            rating={3}
          />

          <Product
            id='333435'
            title='SMART BEANS Medio Hammock Swing for Kids and Adults for Indoor, Outdoor ( Color - Red, Free chain and accessories , 100-Kgs )'
            price={1679.0}
            image={'../images/red-new.jpg'}
            rating={5}
          />
        </div>
      </div>
    </div>
  )
}

export default Home

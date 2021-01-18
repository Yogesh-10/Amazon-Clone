import React, { useState, useEffect } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
// import { FaQuoteRight } from 'react-icons/fa'
import './ImageCarousel.css'
function ImageCarousel() {
  const carousel = [
    {
      id: 1,
      image: '../images/amazon-carousel-2.jpg',
    },
    {
      id: 2,
      image: '../images/amazon-carousel-3.jpg',
    },
    {
      id: 3,
      image: '../images/amazon-carousel-4.jpg',
    },
  ]
  const [people, setPeople] = useState(carousel)
  const [index, setIndex] = React.useState(0)

  const nextSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex + 1
      if (index > people.length - 1) {
        index = 0
      }
      return index
    })
  }
  const prevSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex - 1
      if (index < 0) {
        index = people.length - 1
      }
      return index
    })
  }

  // useEffect(() => {
  //   const lastIndex = people.length - 1
  //   if (index < 0) {
  //     setIndex(lastIndex)
  //   }
  //   if (index > lastIndex) {
  //     setIndex(0)
  //   }
  // }, [index, people])

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((oldIndex) => {
        let index = oldIndex + 1
        if (index > people.length - 1) {
          index = 0
        }
        return index
      })
    }, 5000)
    return () => {
      clearInterval(slider)
    }
  }, [index])

  return (
    <section className='section'>
      <div className='title'>
        <h2>{/* <span>/</span>reviews */}</h2>
      </div>
      <div className='section-center'>
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person

          let position = 'nextSlide'
          if (personIndex === index) {
            position = 'activeSlide'
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = 'lastSlide'
          }

          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className='home__image' />
              <h4>{name}</h4>
              <p className='title'>{title}</p>
              {/* <p className='text'>{quote}</p> */}
              {/* <FaQuoteRight className='icon' /> */}
            </article>
          )
        })}
        <button className='prev' onClick={prevSlide}>
          <FiChevronLeft />
        </button>
        <button className='next' onClick={nextSlide}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  )
}

export default ImageCarousel

import React, { useState } from 'react'

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }

  return (
    <div>
      <form onSubmit={submitHandler} inline>
        <input
          type='text'
          name='q'
          onChange={(e) => setKeyword(e.target.value)}
          placeholder='Search products...'
          //   className='mr sm-2 ml sm-5'
        ></input>
        <button>Search</button>
      </form>
    </div>
  )
}

export default SearchBox

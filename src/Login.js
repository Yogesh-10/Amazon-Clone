import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase'
import './Login.css'

const Login = () => {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signIn = async (e) => {
    e.preventDefault()

    try {
      const authentication = await auth.signInWithEmailAndPassword(
        email,
        password
      )
      if (authentication) {
        history.push('/')
      }
    } catch (error) {
      console.error(error)
    }
  }

  const register = async (e) => {
    e.preventDefault()
    // create registration using firebase
    try {
      const registerUser = await auth.createUserWithEmailAndPassword(
        email,
        password
      )
      if (registerUser) {
        history.push('/')
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='login'>
      <Link to='/'>
        <img className='login__logo' src='../images/amazon-logo.png' alt='' />
      </Link>

      <div className='login__container'>
        <h1>Sign in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>

        <button onClick={signIn} type='submit' className='login__signInButton'>
          Sign-in
        </button>

        <p>
          By continuing, you agree to Amazon's clone Conditions of Use and
          Privacy Notice.
        </p>

        <button onClick={register} className='login__registerButton'>
          Create your Amazon account
        </button>
      </div>
    </div>
  )
}

export default Login

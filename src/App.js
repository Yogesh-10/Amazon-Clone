import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Checkout from './Checkout'
import { auth } from './firebase'
import Header from './Header'
import Home from './Home'
import Login from './Login'
import Payment from './Payment'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import { useStateValue } from './StateProvider'
import Orders from './Orders'

const promise = loadStripe(
  'pk_test_51IAViEAA1be5IArzg6VXetKehDUHyAS0DQBmy02IFuz1GunOJZlSmJIPY1tjGTuuSIQ8NxFQ7Jrfo2ClsflsUSXu003StXNdOj'
)

function App() {
  const [{}, dispatch] = useStateValue()

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log('THE USER IS >>> ', authUser)

      if (authUser) {
        // if user is logged in and refreshes page set user to logged in user

        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
      } else {
        // if user is not logged in and refreshes page set user to null
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route path='/orders'>
            <Header />
            <Orders />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App

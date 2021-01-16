import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Checkout from './Checkout'
import { auth } from './firebase'
import Header from './Header'
import Home from './Home'
import Login from './Login'
import { useStateValue } from './StateProvider'

function App() {
  const [{}, dispatch] = useStateValue()

  useEffect(() => {
    // will only run once when the app component loads...

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
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/checkout'>
            <Header />
            <Checkout />
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

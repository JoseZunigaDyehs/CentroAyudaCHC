import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import '../assets/css/style.css'
import Home from './Home'
import Nav from '../components/Nav'
import Header from '../components/Header'
import Footer from '../components/Footer'

const App = (props) => {
  return (
    <Router>
      <div>
        <Nav />
        <Header/>
        <Route exact path='/' component={Home} />
        <Footer />
      </div>
    </Router>
  )
}


const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import '../assets/css/style.css'
import Home from './Home'
import PanelAdmin from './PanelAdmin'
import Articulo from './Articulo'
import Nav from '../components/shared/Nav'
import Footer from '../components/shared/Footer'

const App = (props) => {
  return (
    <Router>
      <div>
        <Nav />
        <Route exact path='/' component={Home} />
        <Route exact path='/panel' component={PanelAdmin} />
        <Route exact path='/articulo/:id' component={Articulo} />
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

import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css'
import '../assets/css/style.css'
import Home from './Home'
import PanelAdmin from './PanelAdmin'
import Articulo from './Articulo'
import EditarManual from './EditarManual'
import CrearManual from './CrearManual'
import EditarArticulo from './EditarArticulo'
import CrearArticulo from './CrearArticulo'
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
        <Route exact path='/editar/manual/:id' component={EditarManual} />
        <Route exact path='/crear/manual/' component={CrearManual} />
        <Route exact path='/editar/articulo/:id' component={EditarArticulo} />
        <Route exact path='/crear/articulo/' component={CrearArticulo} />
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

import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import '../style.css'
import Home from './Home'

const App = (props) => {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home} />
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

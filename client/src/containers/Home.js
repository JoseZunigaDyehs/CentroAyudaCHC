import React, { Component } from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import HomeHeader from '../components/HomeHeader'
import HomeManuales from '../components/HomeManuales'
import TemasSugeridos from '../components/TemasSugeridos'

class Home extends Component {

  componentWillMount() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  render() {
    return (
      <div>
        <Helmet title="Hola soy german">
        </Helmet>
        <HomeHeader />
        <main>
          <HomeManuales />
          <TemasSugeridos />
        </main >
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
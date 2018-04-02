import React, { Component } from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import HomeHeader from '../components/HomeHeader'
import ListaManuales from '../components/ListaManuales'
import TemasSugeridos from '../components/TemasSugeridos'
import axios from 'axios'

class Home extends Component {

  componentWillMount() {
    this.props.getManuales()
  }

  componentDidMount() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  render() {
    return (
      <div>
        <Helmet title="Home - Manuales Mercado Público">
        </Helmet>
        <HomeHeader />
        <main>
          <ListaManuales manuales={this.props.manuales}/>
          <TemasSugeridos />
        </main >
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    manuales: state.manuales
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getManuales: () => {
      axios.get('http://10.0.1.1:8000/manuales-publicados/')
        .then(res => {
          dispatch({ type: 'GET_MANUALES', data: res.data.results })
        })
        .catch(err => {
          console.log(err);
        })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import VolverBtn from '../components/shared/VolverBtn'
import AsideArticulo from '../components/AsideArticulo'

const Volver = () => (
  <div className='container'>
    <div className='row py-5'>
      <VolverBtn />
    </div>
  </div>
)


class Articulo extends Component {

  componentWillMount() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  render() {
    return (
      <div>
        <Helmet title="Articulo"></Helmet>
        <main>
          <Volver />
          <div className='container'>
            <div className='row'>
            <AsideArticulo />
            </div>
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Articulo)
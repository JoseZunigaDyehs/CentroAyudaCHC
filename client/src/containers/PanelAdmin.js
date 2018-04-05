import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import Helmet from 'react-helmet'
import PanelHeader from '../components/panel/PanelHeader'
import ListaManuales from '../components/home/ListaManuales'

class PanelAdmin extends Component {

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
        <Helmet title="Panel de administración - Manuales Mercado Público">
        </Helmet>
        <PanelHeader />
        <main>
          <ListaManuales manuales={this.props.manuales} />
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

export default connect(mapStateToProps, mapDispatchToProps)(PanelAdmin)
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import PanelHeader from '../components/PanelHeader'
import ListaManuales from '../components/ListaManuales'

class PanelAdmin extends Component {

  componentWillMount() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  render() {
    return (
      <div>
        <Helmet title="Panel de administración">
        </Helmet>
        <PanelHeader />
        <main>
          <ListaManuales />
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

export default connect(mapStateToProps, mapDispatchToProps)(PanelAdmin)
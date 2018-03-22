import React, { Component } from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'

class Home extends Component {

  componentWillMount() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  render() {
    return (
      <Helmet
        title="Page title"
       >
        <main>
          <h1>HOLAAA</h1>
        </main >
      </Helmet>
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
import React, { Component } from 'react'
import { connect } from 'react-redux'


class Home extends Component {

  componentWillMount() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  render() {
    return (
      <main>
<h1>HOLAAA</h1>
      </main >
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
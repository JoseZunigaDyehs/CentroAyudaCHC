import React from 'react'
import { connect } from 'react-redux'


const Spinner = (props) => {
  if (props.spinner === true) {
    return (
      <div className='spinner d-flex justify-content-center align-items-center'>
        <i className="fas fa-spinner"></i>
      </div>
    )
  } else {
    return (
      <div className='spinner justify-content-center align-items-center d-none'>
        <i className="fas fa-spinner"></i>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    spinner: state.spinner
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSpinner: () => {
      dispatch({ type: 'ON_SPINNER' })
    },
    offSpinner: () => {
      dispatch({ type: 'OFF_SPINNER' })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Spinner)
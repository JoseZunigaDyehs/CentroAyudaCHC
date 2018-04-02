import React from 'react'
import { withRouter } from 'react-router-dom'
import { BrowserRouter as Router, Link } from 'react-router-dom'

// const VolverBtn = withRouter(({ history }) => (
//   <a className='c-pointer link-pri' onClick={() => history.goBack()}>
//     Volver a la página principal
//     </a>
// )
// )

const VolverBtn = () => (
  <Link to='/' className='link-pri'>Volver a la página principal</Link>
)

export default VolverBtn;
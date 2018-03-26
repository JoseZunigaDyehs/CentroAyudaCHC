import React from 'react'
import { withRouter } from 'react-router-dom';

const VolverBtn = withRouter(({ history }) => (
  <a className='c-pointer' onClick={() => history.goBack()}>
    Volver
    </a>
)
)

export default VolverBtn;
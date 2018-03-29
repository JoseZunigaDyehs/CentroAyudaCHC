import React from 'react'
import { withRouter } from 'react-router-dom';

const VolverBtn = withRouter(({ history }) => (
  <a className='c-pointer link-pri' onClick={() => history.goBack()}>
    Volver a la página principal
    </a>
)
)

export default VolverBtn;
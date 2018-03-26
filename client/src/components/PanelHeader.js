import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const PanelHeader = () => (
  <header className='container mt-5 pt-5 mb-5'>
    <div className='row mb-45 mt-3'>
      <div className='col-md-12'>
      <h2 className='mb-2'>Panel de administración</h2>
        <h2 className='mb-2'>Ayuda de <strong className='f-w-500'>Mercado Público</strong></h2>
        <p>Crea y edita toda la información que nuestros usuarios necesitan para operar en Mercado Público.</p>
      </div>
    </div>
    <div className='row'>
      <Boton props={{
        title: 'Crear Nuevo Manual',
        link: '/articulo/123',
        clase: 'btn-gra-blue'
      }} />
    </div>
  </header>
)

const Boton = (props) => {
  let clase = props.props.clase + ' c-white py-45 px-4 d-flex align-items-center justify-content-between'
  return (
    <Link to={props.props.link} className='col-md-4'>
      <div className={clase}>
      <i className="fas fa-plus"></i>
        <div>
          <h4>{props.props.title}</h4>
        </div>
      </div>
    </Link>
  )
}

export default PanelHeader 
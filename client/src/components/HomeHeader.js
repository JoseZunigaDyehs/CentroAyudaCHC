import React from 'react'

const HomeHeader = () => (
  <header className='container mt-5 pt-5'>
    <div className='row mb-45 mt-3'>
      <div className='col-md-12'>
        <h2 className=''>Bienvenido a la ayuda de <strong className='f-w-500'>Mercado Público</strong></h2>
        <p>Te damos la bienvenida al centro de ayuda de la plataforma de compras públicas del Estado.</p>
      </div>
    </div>
    <div className='row mb-45'>
      <Boton props={{
        title: 'Empieza a vender al Estado',
        small: 'Descubre cómo comenzar a venderle al Estado',
        link: '',
        clase: 'btn-gra-blue'
      }} />
      <Boton props={{
        title: 'Empieza a vender al Estado',
        small: 'Descubre cómo comenzar a venderle al Estado',
        link: '',
        clase: 'btn-gra-red'
      }} />
    </div>
  </header>
)

const Boton = (props) => {
  let clase = props.props.clase + ' c-white py-45 px-4 d-flex align-items-center justify-content-between'
  return (
    <div className='col-md-6'>
      <div className={clase}>
        <div>
          <h4 className='mb-2'>{props.props.title}</h4>
          <p>{props.props.small}</p>
        </div>
        <i class="fas fa-arrow-right"></i>
      </div>
    </div>
  )
}

export default HomeHeader 
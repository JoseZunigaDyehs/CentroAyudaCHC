import React from 'react'

const Mensaje = (props) => {
  // debugger
  let fono = '';
  if (props.props.fono !== '') {
    fono = <p>{props.props.fono}</p>
  }
  let link = '';
  if (props.props.link !== '') {
    link = <a href='#!'>{props.props.link}</a>
  }
  let clase = props.props.clase + ' col-md-6'

  return (
    <div className={clase}>
      <div className='py-5 d-flex flex-column justify-content-center align-items-start px-3'>
        <h3 className='mb-3'>{props.props.titulo}</h3>
        <p className='mb-3'>{props.props.descripcion}</p>
        {fono}
        {link}
      </div>
    </div>
  )
}

const Footer = () => (
  <footer className='container-fluid'>
    <div className='row'>
      <Mensaje
        props={{
          titulo: '¿Tienes una idea?',
          descripcion: 'Te proponemos un espacio de conversación sobre mejoras e ideas para que juntos, podamos mejorar la forma de comprar y vender en el Estado.',
          fono: '',
          link: 'Ver mas',
          clase: 'bg-gris'
        }} />
      <Mensaje
        props={{
          titulo: '¿Quieres hablar con alguien?',
          descripcion: 'Obtén ayuda directamente con un ejecutivo de la Mesa de Ayuda llamando a los siguientes números.',
          fono: '600 7000 600 o desde celulares al +56 2 2767 7222',
          link: '',
          clase: 'bg-azul c-gris'
        }} />
    </div>
    <div className='row bg-black justify-content-end py-5'>
        <div className='col-4 c-gris fnt-12 l-s-1'>
          <p className='f-w-500 '>DESARROLLO POR LA DIVISIÓN DE TECNOLOGÍA <br/>DE LA DIRECCIÓN DE COMPRAS PÚBLICAS</p>
        </div>
    </div>
  </footer>
)

export default Footer
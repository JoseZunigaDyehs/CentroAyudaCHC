import React from 'react'

const Mensaje = (props) => {
  debugger
  return (
    <div className='col-md-6'>
      <h1 >{props.props.titulo}</h1>
    </div>
  )
}

const Footer = () => (
  <footer className='w-100'>
    <div className='w-50 bg-gris'>
      <Mensaje props={{titulo:'¿Tienes una idea?',descripcion:'Te proponemos un espacio de conversación sobre mejoras e ideas para que juntos, podamos mejorar la forma de comprar y vender en el Estado.',fono:'',link:''}}/>
    </div>
    <div>
      
    </div>

    <div className='row'>
      
    </div>
  </footer>
)

export default Footer
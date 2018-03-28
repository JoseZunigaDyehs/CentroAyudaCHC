import React from 'react'

const InfoUtil = () => {
  return (
    <div className='py-3'>
      <p>¿Fue útil esta información?</p>
      <div className='my-3'>
        <button className='btn btn-ter mr-3'>Si</button>
        <button className='btn btn-ter'>No</button>
      </div>
      <p className='c-gris-osc fnt-14'>46% de las personas consideraron que fue útil.</p>
    </div>
  )
}

const Navegacion = () => {
  return(
    <div className='d-flex justify-content-between pt-3'>
      <button className='btn btn-nav'>Anterior</button>
      <button className='btn btn-nav'>Siguiente</button>
    </div>
  )
}

const ContenidoArticulo = (props) => {
  debugger
  return (
    <div className='col-md-8 mb-5 pb-4'>
      <article className='mb-4'>
        <h3 className='f-w-500'>{props.articulo.nombre}</h3>
        <hr />
        <p className='mb-4'>{props.articulo.contenido}</p>
        <p className='fnt-14 c-gris-osc'>Fecha de publicación: {props.articulo.creacion}</p>
      </article>
      <hr/>
      <InfoUtil />
      <hr />
      <Navegacion />
    </div>
  )
}

export default ContenidoArticulo
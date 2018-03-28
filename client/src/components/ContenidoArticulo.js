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

const ContenidoArticulo = () => {
  const articulo = {
    title: 'Integración de la Comisión Evaluadora'
    , contenido: 'En la parte inferior, luego de los mecanismos de resolución de empates, el sistema propone una cláusula de designación de la comisión evaluadora, la cual puede ser utilizada o no, si correspondiera. Nótese que el texto está en fundo blanco, ello nos indica que puede ser completamente editada.'
    , date: '23/02/2018'
  }

  return (
    <div className='col-md-8 mb-5 pb-4'>
      <article className='mb-4'>
        <h3 className='f-w-500'>{articulo.title}</h3>
        <hr />
        <p className='mb-4'>{articulo.contenido}</p>
        <p className='fnt-14 c-gris-osc'>Fecha de publicación: {articulo.date}</p>
      </article>
      <hr/>
      <InfoUtil />
      <hr />
      <Navegacion />
    </div>
  )
}

export default ContenidoArticulo
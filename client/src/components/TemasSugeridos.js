import React from 'react'

const TemasSugeridos = () => {
  return (
    <section class='container'>
      <div className='row mb-5'>
        <div className='col-md-12'>
          <h4 className='f-w-500 mb-4'>Temas Sugeridos</h4>
        </div>
        <DivTemasSugeridos />
        <DivTemasSugeridos />
        <DivTemasSugeridos />
      </div>

    </section>
  )
}

const DivTemasSugeridos = () =>{
  return(
    <div className='col-md-4 d-flex flex-column'>
      <p className='f-w-500 mb-2'>Crear una licitación simplificada</p>
      <a className='mb-2' href="#!">Antecedentes generales de la licitación</a>
      <a className='mb-2' href="#!">Selección y descripción del producto o servicio</a>
      <a className='mb-2' href="#!">Cronograma de la licitación</a>
      <a className='mb-2' href="#!">Criterios de la evaluación</a>
    </div>
  )
}


export default TemasSugeridos
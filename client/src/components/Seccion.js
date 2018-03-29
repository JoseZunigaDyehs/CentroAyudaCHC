import React from 'react'

const Seccion = () => {
  return (
    <section className='container'>
      <div className='row'>
        <div className='col-md-12 d-flex justify-content-between border-bottom mb-5 pb-2 mt-5'>
          <h5 className='f-w-500'>Seccion 1</h5>
          <h3>x</h3>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-6'>
          <div class="form-group mb-5">
            <label className='d-flex flex-column'>¿Cuál es el nombre de esta sección?</label>
            <input type="text" class="form-control" placeholder="Nombre de esta sección" />
          </div>

        </div>
        <div className='col-md-12'>
          <div className='d-flex flex-column pb-4'>
            <label className='mb-4'>¿Cuáles son los artículos de esta sección?</label>
            <a href="#!" className='mb-3 border-bottom pb-3'>Selección y Descripción del Producto o Servicio </a>
            <a href="#!" className='mb-3 border-bottom pb-3'>Cronograma de la licitación </a>
            <a href="#!" className='mb-3 border-bottom pb-3'>Selección y Descripción del Producto o Servicio </a>
            <a href="#!" className='mb-3 border-bottom pb-3'>Cronograma de la licitación </a>
            <a href="#!" className='mb-3 f-w-700 mt-4'>+ Agregar otro artículo </a>
          </div>
        </div>
        <div className='col-md-12 border-top d-flex'>
          <a href="#!" className='f-w-700 py-4 '>+ AGREGAR OTRA SECCIÓN </a>
        </div>
        <div className='col-md-12 mt-5 pt-5 d-flex justify-content-between mb-5 pb-5'>
          <button className='btn btn-secondary px-4 l-s-1 py-3'>DESCARTAR CAMBIOS</button>
          <button className='btn btn-primary px-4 l-s-1 py-3'>PUBLICAR CAMBIOS</button>
        </div>
      </div>
    </section>
  )
}

export default Seccion
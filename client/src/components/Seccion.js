import React from 'react'

const eliminar = () => {
  alert('asdkahsdkjhasd ')
}

const cambiarVisible = (e) => {
  debugger
  if(e.currentTarget.previousElementSibling.style.opacity!=='1'){
    e.currentTarget.previousElementSibling.style.opacity = 1;
    e.currentTarget.nextElementSibling.style.opacity = 0.3;
    e.currentTarget.innerHTML = '<i class="fas fa-toggle-off c-gris-osc fnt-24 c-pointer"></i>';
  }else{
    e.currentTarget.previousElementSibling.style.opacity = 0.3;
    e.currentTarget.nextElementSibling.style.opacity = 1;
    e.currentTarget.innerHTML = '<i class="fas fa-toggle-on c-verde fnt-24 c-pointer"></i>';
  }
}

const OcultoVisible = (props) => {
  if (props.visible === 0) {
    return (
      <div className='d-flex align-items-center'>
        <p className='f-w-500 fnt-14 mr-2' style={{ opacity: 0.3 }}>OCULTO</p>
        <div onClick={(e) => cambiarVisible(e)}>
          <i className="fas fa-toggle-on c-verde fnt-24 c-pointer"></i>
        </div>
        <p className='f-w-500 fnt-14 ml-2'>VISIBLE</p>
      </div>
    )
  } else {
    return (
      <div className='d-flex align-items-center'>
        <p className='f-w-500 fnt-14 mr-2'>OCULTO</p>
        <div onClick={(e) => cambiarVisible(e)}>
          <i className="fas fa-toggle-off c-gris-osc fnt-24 c-pointer"></i>
        </div>
        <p className='f-w-500 fnt-14 ml-2' style={{ opacity: 0.3 }}>VISIBLE</p>
      </div>
    )
  }
}

const Seccion = (props) => {
  if (props.estado === 'crear') {
    return (
      <section className='container'>
        <div className='row'>
          <div className='col-md-12 d-flex justify-content-between border-bottom mb-5 pb-2 mt-5'>
            <h5 className='f-w-500'>Seccion 1</h5>
            <p className='c-pointer' onClick={(e) => eliminar()}>x</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <div className="form-group mb-5">
              <label className='d-flex flex-column'>¿Cuál es el nombre de esta sección?</label>
              <input type="text" className="form-control" placeholder="Nombre de esta sección" />
            </div>

          </div>
          <div className='col-md-12'>
            <div className='d-flex flex-column pb-4'>
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
  } else {
    return (
      <section className='container'>
        <div className='row'>
          <div className='col-md-12 d-flex justify-content-between border-bottom mb-5 pb-2 mt-5'>
            <h5 className='f-w-500'>Seccion 1</h5>
            <div className='d-flex'>
              <OcultoVisible visible={0} />
              <p className='c-pointer ml-4' onClick={(e) => eliminar()}>x</p>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <div className="form-group mb-5">
              <label className='d-flex flex-column'>¿Cuál es el nombre de esta sección?</label>
              <input type="text" className="form-control" placeholder="Nombre de esta sección" />
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
}

export default Seccion
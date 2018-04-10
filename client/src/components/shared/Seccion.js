import React from 'react'
import { validarVacio } from '../manual/Validaciones'
import { BrowserRouter as Router, Link } from 'react-router-dom'

//FUNCIONES
const eliminar = () => {
  alert('asdkahsdkjhasd ')
}

const cambiarVisible = (e) => {
  if (e.currentTarget.previousElementSibling.style.opacity !== '1') {
    e.currentTarget.previousElementSibling.style.opacity = 1;
    e.currentTarget.nextElementSibling.style.opacity = 0.3;
    e.currentTarget.innerHTML = '<i class="fas fa-toggle-off c-gris-osc fnt-24 c-pointer"></i>';
  } else {
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
          <i className="fas fa-toggle-off c-verde fnt-24 c-pointer"></i>
        </div>
        <p className='f-w-500 fnt-14 ml-2' style={{ opacity: 0.3 }}>VISIBLE</p>
      </div>
    )
  }
}


//Componentes
export const NuevaSeccion = (
  <div className='container seccion'>
    <div className='row'>
      <div className='col-md-12 d-flex justify-content-between border-bottom mb-3 pb-2 mt-5'>
        <h5 className='f-w-500'>Seccion </h5>
      </div>
    </div>
    <div className='row'>
      <div className='col-md-6'>
        <div className="form-group mb-5">
          <label className='d-flex flex-column'>¿Cuál es el nombre de esta sección?</label>
          <input type="text" onKeyUp={(e) => validarVacio(e, 5, 50)} className="form-control" placeholder="Nombre de esta sección" />
        </div>
      </div>
    </div>
  </div>
)

const Articulos = (props) => {
  let misArticulos;
  if (props.articulos.length > 0) {
    misArticulos = props.articulos.map((articulo,i) => {
      return (
        <a href={articulo.url} key={i} className='mb-3 border-bottom pb-3'>{articulo.nombre}</a>
      )
    })
    return (
      <div className='col-md-12'>
        <div className='d-flex flex-column pb-4'>
          <label className='mb-4'>¿Cuáles son los artículos de esta sección?</label>
          {misArticulos}
          <Link to='/crear/articulo/' onClick={(e)=>props.guardarIdSeccion(e,props.idSeccion)} className='mb-3 f-w-700 mt-4 justify-content-end d-flex'>+ AGREGAR NUEVO ARTÍCULO</Link>
        </div>
      </div>
    )
  }else{
    return(
      <div className='col-md-12'>
        <div className='d-flex flex-column pb-4'>
          <label className='mb-4'>Esta sección no tiene artículos</label>
          <Link to='/crear/articulo/' onClick={(e)=>props.guardarIdSeccion(e,props.idSeccion)} data-seccion={props.idSeccion} className='mb-3 f-w-700 mt-4 justify-content-end d-flex'>+ AGREGAR NUEVO ARTÍCULO</Link>
        </div>
      </div>
    )
  }
}

const Secciones = (secciones) => {
  let divSecciones = secciones.secciones.map((seccion,i) => {
    return (
      <section key={i}>
        <div className='container seccion'>
          <div className='row'>
            <div className='col-md-12 d-flex justify-content-between border-bottom mb-3 pb-2 mt-5'>
              <h5 className='f-w-500'>{seccion.nombre}</h5>
              <div className='d-flex'>
                <OcultoVisible visible={seccion.estado} />
                <p className='c-pointer ml-4' onClick={(e) => eliminar()}>x</p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6'>{/*  EDITAR */}
              <div className="form-group mb-5">
                <label className='d-flex flex-column'>Editar nombre de la sección</label>
                <input type="text" name='nombreSeccion' className="form-control" placeholder="Nombre de esta sección" defaultValue={seccion.nombre} />
              </div>
            </div>
            <Articulos articulos={seccion.articulos} idSeccion={seccion.pk} guardarIdSeccion={secciones.guardarIdSeccion}/>
          </div>
        </div>
      </section>
    )
  })
  return (
    divSecciones
  )
}

//MAIN
export const Seccion = (props) => {
  if (props.estado === 'crear') {
    return (
      <section>
        <div className='container seccion'>
          <div className='row'>
            <div className='col-md-12 d-flex justify-content-between border-bottom mb-5 pb-2 mt-5'>
              <h5 className='f-w-500'>Introducción</h5>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6'>
              <div className="form-group mb-5">
                <label className='d-flex flex-column'>¿Cuál es el nombre de esta sección?</label>
                <p className='fnt-14'>Por defecto la primera sección deberá ser la introducción</p>
                <input type="text" name='nombreSeccion' className="form-control" placeholder="Nombre de esta sección" defaultValue='01 - Introducción' disabled />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  } else if(props.estado === 'editar'){
    debugger
    return (
      <Secciones secciones={props.manual.secciones} guardarIdSeccion={props.guardarIdSeccion}/>
    )
  }else{
    return(
      <div></div>
    )
  }
}
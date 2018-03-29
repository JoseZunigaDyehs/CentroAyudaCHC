import React from 'react'
import Seccion from './Seccion';

//VERIFICAR SI ES EDITAR O CREAR
const CrearEditarManual = (props) => {
  if (props.estado === 'crear') {
    return (
      <section className='container'>
        <div className='row mt-3'>
          <div class="form-group col-md-6">
            <label className='d-flex flex-column'>¿Cuál es el título de este artículo?</label>
            <input type="text" class="form-control" placeholder="Título de este artículo" />
          </div>
        </div>
        <div className='row mt-3'>
          <div class="form-group col-md-12">
            <label className='d-flex flex-column'>Respuesta:</label>
            <textarea cols="30" rows="4" className='form-control' placeholder='Descripción breve de este manual'></textarea>
          </div>
          <div className='col-md-12 d-flex justify-content-between my-5 pb-5'>
            <button className='btn btn-danger px-5 py-3'>ELIMINAR ARTÍCULO</button>
            <button className='btn btn-primary px-5 py-3'>AGREGAR ARTÍCULO</button>
          </div>
        </div>
      </section>
    )
  } else {
    let articulo;
    if(props.articulo.nombre===undefined){
      articulo = {nombre:'nombre',descripcion:'descripcion'}
    }else{
      articulo = props.articulo
    }
    return (
      <section className='container'>
        <div className='row mt-3'>
          <div class="form-group col-md-6">
            <label className='d-flex flex-column'>¿Cuál es el título de este artículo?</label>
            <input type="text" class="form-control" placeholder="Título de este artículo" value={articulo.nombre}/>
          </div>
        </div>
        <div className='row mt-3'>
          <div class="form-group col-md-12">
            <label className='d-flex flex-column'>Respuesta:</label>
            <textarea cols="30" rows="4" className='form-control' placeholder='Descripción breve de este manual' value={articulo.descripcion}></textarea>
          </div>
          <div className='col-md-12 d-flex justify-content-between my-5 pb-5'>
            <button className='btn btn-danger px-5 py-3'>ELIMINAR ARTÍCULO</button>
            <button className='btn btn-primary px-5 py-3'>AGREGAR ARTÍCULO</button>
          </div>
        </div>
      </section>
    )
  }

}



export default CrearEditarManual
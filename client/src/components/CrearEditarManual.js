import React from 'react'
import Seccion from './Seccion';

//VERIFICAR SI ES EDITAR O CREAR
const CrearEditarManual = (props) => {
  if (props.estado === 'crear') {
    return (
      <section className='container'>
        <div className='row mt-3'>
          <div class="form-group col-md-6">
            <label className='d-flex flex-column'>¿Cuál es el nombre de este manual?</label>
            <input type="text" class="form-control" placeholder="Nombre de este manual" />
          </div>
        </div>
        <div className='row mt-3'>
          <div class="form-group col-md-6">
            <label className='d-flex flex-column'>Descripción breve</label>
            <textarea cols="30" rows="4" className='form-control' placeholder='Descripción breve de este manual'></textarea>
          </div>
        </div>
      </section>
    )
  } else {
    let manual;
    if(props.manual.nombre===undefined){
      manual = {nombre:'nombre',descripcion:'descripcion'}
    }else{
      manual = props.manual
    }
    return (
      <section className='container'>
        <div className='row mt-3'>
          <div class="form-group col-md-6">
            <label className='d-flex flex-column'>¿Cuál es el nombre de este manual?
        <input type="text" class="form-control" placeholder="" value={manual.nombre} />
            </label>
          </div>
        </div>
        <div className='row mt-3'>
          <div class="form-group col-md-6">
            <label className='d-flex flex-column'>Descripción breve
        <textarea cols="30" rows="10" className='form-control'>{manual.descripcion}</textarea>
            </label>
          </div>
        </div>
      </section>
    )
  }

}



export default CrearEditarManual
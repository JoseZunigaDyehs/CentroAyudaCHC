import React from 'react'
import Seccion from '../shared/Seccion';
import { validarVacio } from './Validaciones'

//VERIFICAR SI ES EDITAR O CREAR
const CrearEditarManual = (props) => {
  debugger
  if (props.estado === 'crear') {
    return (
      <section className='container'>
        <div className='row mt-3'>
          <div className="form-group col-md-6">
            <label className='d-flex flex-column'>¿Cuál es el nombre de este manual?</label>
            <input type="text" name='nombreManual' className="form-control" placeholder="Nombre de este manual" onKeyUp={(e) => validarVacio(e, 5, 50)} />
          </div>
        </div>
        <div className='row mt-3'>
          <div className="form-group col-md-6">
            <label className='d-flex flex-column'>Descripción breve</label>
            <textarea cols="30" rows="4" name='descripcionManual' className='form-control' placeholder='Descripción breve de este manual' onKeyUp={(e) => validarVacio(e, 5, 100)}></textarea>
          </div>
        </div>
      </section>
    )
  } else {
    let manual;
    if (props.manual.nombre === undefined) {
      manual = { nombre: 'nombre', descripcion: 'descripcion' }
    } else {
      manual = props.manual
    }
    return (
      <section className='container'>
        <div className='row mt-3'>
          <div className="form-group col-md-6">
            <label className='d-flex flex-column'>¿Cuál es el nombre de este manual?
            <input type="text" name='nombreManual' className="form-control" placeholder="Nombre de este manual" onKeyUp={(e) => validarVacio(e, 5, 50)} defaultValue={manual.nombre} />
            </label>
          </div>
        </div>
        <div className='row mt-3'>
          <div className="form-group col-md-6">
            <label className='d-flex flex-column'>Descripción breve
            <textarea cols="30" rows="4" name='descripcionManual' className='form-control' placeholder='Descripción breve de este manual' onKeyUp={(e) => validarVacio(e, 5, 100)}>{manual.contenido}</textarea>
            </label>
          </div>
        </div>
      </section>
    )
  }

}

export default CrearEditarManual
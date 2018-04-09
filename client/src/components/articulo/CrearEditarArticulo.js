import React from 'react'
import Seccion from '../shared/Seccion'
import RichText from './RichText'
import Spinner from '../shared/Spinner'
import { connect } from 'react-redux'
import axios from 'axios'

//Funciones
const abrirSubirImagen = (e) => {
  var input = document.getElementById('subirImagen')
  input.click()
}

const nuevaImagen = (e, fn,offSpinner) => {
  let file = e.currentTarget.files
  if (file["0"].type === 'image/jpeg' || file["0"].type === 'image/png') {
    //SUBIR IMAGEN
    fn(file['0'],offSpinner);
  } else {
    e.currentTarget.nextElementSibling.textContent = 'Debe ser una imagen'
    e.currentTarget.nextElementSibling.classList.remove('d-none')
  }
}

const mostrarAcciones = (e) => {
  e.currentTarget.children[1].classList.remove('d-none')
  e.currentTarget.children[1].classList.add('d-flex')
}

const quitarAcciones = (e) => {
  e.currentTarget.children[1].classList.add('d-none')
  e.currentTarget.children[1].classList.remove('d-flex')
}

const copiarURL = (e) => {
  var textField = document.createElement('textarea')
  textField.innerText = e.currentTarget.parentElement.previousElementSibling.src
  document.body.appendChild(textField)
  textField.select()
  document.execCommand('copy')
  textField.remove()
}

const eliminarImagen = (e) => {
  e.currentTarget.parentElement.parentElement.remove()
  alert('se eliminará la imagen')
}

//Componentes
//VERIFICAR SI ES EDITAR O CREAR
const CrearEditarArticulo = (props) => {
  debugger
  if (props.estado === 'crear') {
    return (
      <section className='container'>
        <div className='row mt-3'>
          <div className="form-group col-md-6">
            <label className='d-flex flex-column'>¿Cuál es el título de este artículo?</label>
            <input type="text" className="form-control" placeholder="Título de este artículo" />
          </div>
        </div>
        <div className='row mt-3'>
          <div className="form-group col-md-8 mb-0">
            <label className='d-flex flex-column'>Respuesta:</label>
            <RichText texto='<p>rtfhfghg</p><p><strong>fghfghfghfgh</strong></p><p><img src="https://www.quehacerenchile.cl/wp-content/uploads/2016/02/fuerte.jpg" width="490" height="322"/></p><p>fghfghgh</p>' />
          </div>
          <div className='col-md-4 bg-gris py-3'>
            <div className="form-group d-flex flex-column">
              <label htmlFor="subirImagen">Imágenes del artículo:</label>
              <button className='btn btn-primary' onClick={(e) => abrirSubirImagen(e)}>Cargar imagen</button>
              <form>
                <input type="file" className="form-control-file d-none" id="subirImagen" onChange={(e) => nuevaImagen(e, props.subirImagen, props.offSpinner)} />
                <p className='fnt-14 d-none error c-pink'></p>
              </form>
            </div>
            <hr />
            <div className='contenedor-imagenes'>
              <div className='position-relative mb-2' onMouseEnter={(e) => mostrarAcciones(e)} onMouseLeave={(e) => quitarAcciones(e)}>
                <img className='w-100' src="https://www.quehacerenchile.cl/wp-content/uploads/2016/02/fuerte.jpg" alt="https://www.quehacerenchile.cl/wp-content/uploads/2016/02/fuerte.jpg" />
                <div className='acciones d-none position-absolute w-100 h-100 justify-content-between p-3'>
                  <div className='d-flex align-items-center c-pointer' onClick={(e) => copiarURL(e)}>
                    <i className="fas fa-copy mr-2"></i>
                    <p>Copiar URL</p>
                  </div>
                  <div className='d-flex align-items-center c-pointer' onClick={(e) => eliminarImagen(e)}>
                    <p>Eliminar Imagen</p>
                    <i className="fas fa-trash-alt ml-2"></i>
                  </div>
                </div>
              </div>
              <div className='position-relative' onMouseEnter={(e) => mostrarAcciones(e)} onMouseLeave={(e) => quitarAcciones(e)}>
                <img className='w-100' src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Isla_Mancera_con_nubes.jpg" alt="https://upload.wikimedia.org/wikipedia/commons/e/ec/Isla_Mancera_con_nubes.jpg" />
                <div className='acciones d-none position-absolute w-100 h-100 justify-content-between p-3'>
                  <div className='d-flex align-items-center c-pointer' onClick={(e) => copiarURL(e)}>
                    <i className="fas fa-copy mr-2"></i>
                    <p>Copiar URL</p>
                  </div>
                  <div className='d-flex align-items-center c-pointer' onClick={(e) => eliminarImagen(e)}>
                    <p>Eliminar Imagen</p>
                    <i className="fas fa-trash-alt ml-2"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-12 d-flex justify-content-between my-5 pb-5'>
            <button className='btn btn-danger px-5 py-3' >ELIMINAR ARTÍCULO</button>
            <button className='btn btn-primary px-5 py-3'>AGREGAR ARTÍCULO</button>
          </div>
        </div>
      </section>
    )
  } else {
    let articulo;
    if (props.articulo.nombre === undefined) {
      articulo = { nombre: 'nombre', descripcion: 'descripcion' }
    } else {
      articulo = props.articulo
    }
    return (
      <section className='container'>
        <div className='row mt-3'>
          <div className="form-group col-md-6">
            <label className='d-flex flex-column'>¿Cuál es el título de este artículo?</label>
            <input type="text" className="form-control" placeholder="Título de este artículo" value={articulo.nombre} />
          </div>
        </div>
        <div className='row mt-3'>
          <div className="form-group col-md-12">
            <label className='d-flex flex-column'>Respuesta:</label>
            <RichText />
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

const mapStateToProps = (state) => {
  return {
    spinner: state.spinner,
    manual: state.manual
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSpinner: () => {
      dispatch({ type: 'ON_SPINNER' })
    },
    offSpinner: () => {
      dispatch({ type: 'OFF_SPINNER' })
    },
    subirImagen: (file,offSpinner) => {
      dispatch({ type: 'ON_SPINNER' })
      const nombre = file.name
      const config = {
        headers: { 'content-type': 'multipart/form-data' }
      }
      var bodyFormData = new FormData();
      bodyFormData.set('nombre', nombre);
      bodyFormData.set('contenido', file);

      axios.post('http://10.0.1.1:8000/imagenes/', bodyFormData, config).
        then(res => {
          console.log(res.data.contenido);
          offSpinner();
        }).
        catch(err => {
          console.log(err);
          offSpinner();
        })

    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CrearEditarArticulo)
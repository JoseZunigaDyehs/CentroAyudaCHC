import React, { Component } from 'react'
import Seccion from '../shared/Seccion'
import RichText from './RichText'
import Spinner from '../shared/Spinner'
import { connect } from 'react-redux'
import axios from 'axios'
import Imagenes from './Imagenes'
import { validarVacio } from '../manual/Validaciones'

//Funciones
const abrirSubirImagen = (e) => {
  var input = document.getElementById('subirImagen')
  input.click()
}

const nuevaImagen = (e, fn, offSpinner) => {
  let file = e.currentTarget.files
  if (file["0"].type === 'image/jpeg' || file["0"].type === 'image/png') {
    //SUBIR IMAGEN
    fn(file['0'], offSpinner);
  } else {
    e.currentTarget.nextElementSibling.textContent = 'Debe ser una imagen'
    e.currentTarget.nextElementSibling.classList.remove('d-none')
  }
}

const agregarArticulo = (e, idManual, idSeccion, imagenes, _agregarArticulo) => {
  document.getElementById('agregarArticulo').click()
  const nombre = document.getElementsByName('tituloArticulo')['0']
  const contenido = document.getElementById('agregarArticulo')
  let valido = true
  if (!validarVacio(nombre, 5, 50)) {
    valido = false
  }
  if (contenido.dataset.richtext.trim() === "<p><br></p>") {
    let p = document.createElement('p')
    p.classList = 'c-pink'
    let r = document.createTextNode('Debe ingresar campo')
    p.appendChild(r)
    document.getElementsByClassName('RichTextEditor__root___2QXK-')['0'].parentElement.parentElement.appendChild(p)
    valido = false;
  } else {
    if (document.getElementsByClassName('RichTextEditor__root___2QXK-')['0'].parentElement.nextElementSibling !== null) {
      document.getElementsByClassName('RichTextEditor__root___2QXK-')['0'].parentElement.nextElementSibling.remove();
    }
  }

  if (!valido) {
    return false;
  } else {
    debugger
    let _imagenes = [];
    for (let i = 0; i < imagenes.length; i++) {
      const imagen = imagenes[i];
      _imagenes.push(imagen.url)
    }
    const texto = document.getElementById('agregarArticulo').dataset.richtext
    const articulo = {
      'nombre': nombre.value,
      'contenido': texto,
      'estado': 1,
      'manual': idManual,
      'imagenes': _imagenes,
      'seccion': 'http://10.0.1.1:8000/editor/secciones/' + idSeccion + '/'
    }
    _agregarArticulo(articulo);
  }
}

//Componentes
//VERIFICAR SI ES EDITAR O CREAR
class CrearEditarArticulo extends Component {

  componentWillUnmount() {
    this.props.clearIdSeccion();
  }

  render() {
    debugger
    if (this.props.estado === 'crear') {
      return (
        <section className='container'>
          <div className='row mt-3'>
            <div className="form-group col-md-6">
              <label className='d-flex flex-column'>¿Cuál es el título de este artículo?</label>
              <input type="text" className="form-control" placeholder="Título de este artículo" name='tituloArticulo' onKeyUp={(e) => validarVacio(e, 5, 50)} />
            </div>
          </div>
          <div className='row mt-3'>
            <div className="form-group col-md-8 mb-0">
              <label className='d-flex flex-column'>Respuesta:</label>
              <RichText texto='' />
              {/* <RichText texto='<p>rtfhfghg</p><p><strong>fghfghfghfgh</strong></p><p><img src="https://www.quehacerenchile.cl/wp-content/uploads/2016/02/fuerte.jpg" width="490" height="322"/></p><p>fghfghgh</p>' /> */}
            </div>
            <div className='col-md-4 bg-gris py-3'>
              <div className="form-group d-flex flex-column">
                <label htmlFor="subirImagen">Imágenes del artículo:</label>
                <button className='btn btn-primary' onClick={(e) => abrirSubirImagen(e)}>Cargar imagen</button>
                <form>
                  <input type="file" className="form-control-file d-none" id="subirImagen" onChange={(e) => nuevaImagen(e, this.props.subirImagen, this.props.offSpinner)} />
                  <p className='fnt-14 d-none error c-pink'></p>
                </form>
              </div>
              <hr />
              <Imagenes />
            </div>
            <div className='col-md-12 d-flex justify-content-between my-5 pb-5'>
              <button className='btn btn-danger px-5 py-3' >ELIMINAR ARTÍCULO</button>
              <button className='btn btn-primary px-5 py-3' onClick={(e) => agregarArticulo(e, this.props.manual.pk, this.props.idSeccion, this.props.imagenes, this.props.crearArticulo)}>AGREGAR ARTÍCULO</button>
            </div>
          </div>
        </section>
      )
    } else {
      debugger
      let articulo;
      if (this.props.articulo.nombre === undefined) {
        articulo = { nombre: 'nombre', descripcion: 'descripcion' }
      } else {
        articulo = this.props.articulo
      }
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
              <RichText texto='' />
              {/* <RichText texto='<p>rtfhfghg</p><p><strong>fghfghfghfgh</strong></p><p><img src="https://www.quehacerenchile.cl/wp-content/uploads/2016/02/fuerte.jpg" width="490" height="322"/></p><p>fghfghgh</p>' /> */}
            </div>
            <div className='col-md-4 bg-gris py-3'>
              <div className="form-group d-flex flex-column">
                <label htmlFor="subirImagen">Imágenes del artículo:</label>
                <button className='btn btn-primary' onClick={(e) => abrirSubirImagen(e)}>Cargar imagen</button>
                <form>
                  <input type="file" className="form-control-file d-none" id="subirImagen" onChange={(e) => nuevaImagen(e, this.props.subirImagen, this.props.offSpinner)} />
                  <p className='fnt-14 d-none error c-pink'></p>
                </form>
              </div>
              <hr />
              <Imagenes />
            </div>
            <div className='col-md-12 d-flex justify-content-between my-5 pb-5'>
              <button className='btn btn-danger px-5 py-3' >ELIMINAR ARTÍCULO</button>
              <button className='btn btn-primary px-5 py-3'>AGREGAR ARTÍCULO</button>
            </div>
          </div>
        </section>
      )
    }

  }
}

const mapStateToProps = (state) => {
  return {
    spinner: state.spinner,
    manual: state.manual,
    idSeccion: state.idSeccion,
    imagenes: state.imagenes
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
    subirImagen: (file, offSpinner) => {
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
          debugger
          dispatch({ type: 'ADD_IMAGEN', data: res.data })
          offSpinner();
        }).
        catch(err => {
          console.log(err);
          offSpinner();
        })

    },
    clearIdSeccion: () => {
      dispatch({ type: 'CLEAR_ID_SECCION' })
    },
    crearArticulo: (articulo) => {
      debugger
      axios.post('http://10.0.1.1:8000/articulos/',articulo)
      .then(res=>{
        console.log(res);
      })
      .catch(err=>{
        console.log(err);
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CrearEditarArticulo)
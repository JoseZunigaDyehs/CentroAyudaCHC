import React, { Component } from 'react'
import { connect } from 'react-redux'


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

class Imagenes extends Component {

  llenarDiv = (imagenes) => {
    debugger
    let div = imagenes.map((imagen,i) => {
      return (
        <div key={i} className='position-relative mb-2' onMouseEnter={(e) => mostrarAcciones(e)} onMouseLeave={(e) => quitarAcciones(e)}>
          <img className='w-100' src={imagen.contenido} alt={imagen.nombre} />
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
      )
    })
    return div
  }

  componentWillUnmount() {

  }

  render() {
    if (this.props.imagenes.length > 0) {
      return (
        <div className='contenedor-imagenes'>
          {this.llenarDiv(this.props.imagenes)}
        </div>
      )
    } else {

      return (
        <div className='contenedor-imagenes'>
        </div>
      )

    }
  }

}

const mapStateToProps = (state) => {
  return {
    imagenes: state.imagenes
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getImagenes: () => {
      dispatch({ type: 'GET_IMAGENES' })
    },
    clearImagenes: () => {
      dispatch({ type: 'CLEAR_IMAGENES' })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Imagenes)
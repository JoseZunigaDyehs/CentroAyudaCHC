import React from 'react'
import Seccion from './Seccion'
import RichText from './RichText'

//VERIFICAR SI ES EDITAR O CREAR
const CrearEditarManual = (props) => {
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
            <RichText />
            {/* <textarea cols="30" rows="4" className='form-control' placeholder='Descripción breve de este manual'></textarea> */}
          </div>
          <div className='col-md-4 bg-gris py-3'>
            <form>
              <div className="form-group">
                <label htmlFor="exampleFormControlFile1">Imágenes del artículo:</label>
                <input type="file" className="form-control-file" id="exampleFormControlFile1" onChange={(e) => nuevaImagen(e)}/>
                <p className='fnt-14 d-none error c-pink'></p>
              </div>
            </form>
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
            <button className='btn btn-danger px-5 py-3'>ELIMINAR ARTÍCULO</button>
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

const nuevaImagen = (e) =>{
  console.log(e.currentTarget.files);
  let file = e.currentTarget.files
  if(file["0"].type==='image/jpeg' || file["0"].type==='image/png'){

  }else{
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
  debugger
  e.currentTarget.parentElement.parentElement.remove()
  alert('se eliminará la imagen')
}

export default CrearEditarManual
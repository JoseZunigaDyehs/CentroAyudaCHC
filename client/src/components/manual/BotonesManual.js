import React from 'react'
import {validarVacio} from './Validaciones'

//Funciones
const agregarSeccion = (e) => {
  let secciones = document.getElementsByClassName('seccion')
  let seccion = secciones[secciones.length - 1]
  let div = document.createElement('div')
  div.classList = 'container seccion'
  let innerDiv = "<div class='row'>"
  innerDiv += "<div class='col-md-12 d-flex justify-content-between border-bottom mb-3 pb-2'>"
  innerDiv += "<h5 class='f-w-500'>Seccion </h5></div></div>"
  innerDiv += "<div class='row'><div class='col-md-6'><div class='form-group mb-5'>"
  innerDiv += "<label class='d-flex flex-column'>¿Cuál es el nombre de esta sección?</label>"
  innerDiv += "<input type='text' onkeyup='validarVacio(this,5,50)' class='form-control' placeholder='Nombre de esta sección' name='nombreSeccion'/>"
  innerDiv += "</div></div></div>"
  div.innerHTML = innerDiv
  seccion.parentElement.appendChild(div);
}

const publicarManual = (e) => {
  const nombre = document.getElementsByName('nombreManual')['0']
  const descripcion = document.getElementsByName('descripcionManual')['0']
  const secciones = document.getElementsByName('nombreSeccion')

  let valido = true
  if(!validarVacio(nombre,5,50)){
    valido = false
  }
  if(!validarVacio(descripcion,5,100)){
    valido = false
  }
  for (let i = 0; i < secciones.length; i++) {
    const seccion = secciones[i];
    if(!validarVacio(seccion,5,50)){
      valido = false
    }
  }

  if(!valido){
    return false;
  }else{
    alert('Se ha agregado el manual')
  }

}

//Componentes
const BotonesManual = () => (
  <section className='container'>
  <div className='row'>
    <div className='col-md-12 border-top d-flex agregarSeccion'>
      <a href="#!" className='f-w-700 py-4 ' onClick={(e) => agregarSeccion(e)}>+ AGREGAR NUEVA SECCIÓN </a>
    </div>
    <div className='col-md-12 mt-5 d-flex justify-content-between mb-5 pb-5'>
      <button className='btn btn-secondary px-4 l-s-1 py-3'>DESCARTAR CAMBIOS</button>
      <button className='btn btn-primary px-4 l-s-1 py-3' onClick={(e)=>publicarManual(e)}>PUBLICAR CAMBIOS</button>
    </div>
  </div>
</section>
)

export default BotonesManual
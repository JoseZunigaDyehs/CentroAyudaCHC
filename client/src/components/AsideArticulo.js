import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const abrirNav = (e) => {
  let lis = e.currentTarget.parentNode.parentNode.children;
  for (let i = 0; i < lis.length; i++) {
    const li = lis[i];
    if (li.children['1'].classList.contains('d-flex')) {
      li.children['1'].classList.remove('d-flex')
      li.children['1'].classList.add('d-none')
    }
  }

  if (e.currentTarget.nextElementSibling.classList.contains('d-none')) {
    e.currentTarget.nextElementSibling.classList.remove('d-none')
    e.currentTarget.nextElementSibling.classList.add('d-flex')
  } else {
    e.currentTarget.nextElementSibling.classList.add('d-none')
    e.currentTarget.nextElementSibling.classList.remove('d-flex')
  }
}

const AsideArticle = (props) => {
  debugger
  if (props.manual === null) {
    return (
      <aside className='col-md-4 nav-articulo'>
      </aside>
    )
  } else {
    return (
      <aside className='col-md-4 nav-articulo'>
        <h5 className='f-w-500' style={{ paddingBottom: '9px' }}>{props.manual.nombre}</h5>
        <hr />
        <ul className='p-0'>
          {props.manual.secciones.map(seccion =>
            <li className='d-flex flex-column' key={seccion.pk}>
              <a href='#!' className='link-black mb-3' onClick={(e) => abrirNav(e)}>{seccion.nombre}</a>
              <div className='d-none flex-column nav-articulo-hide'>
                {seccion.articulos.map(articulo => {
                  debugger
                  let url = articulo.url.split('/')
                  url = '/articulo/'+url[url.length-2]+'/'
                  return (
                    <Link to={url} key={articulo.pk} >{articulo.nombre}</Link>
                  )
                })}
              </div>
            </li>
          )}


          {/* <li className='d-flex flex-column'>
            <a href='#!' className='link-black mb-3' onClick={(e) => abrirNav(e)}>Primeros Pasos</a>
            <div className='d-none flex-column nav-articulo-hide'>
              <a href="#!">Antecedentes generales de la licitación</a>
              <a href="#!">Antecedentes generales de la licitación</a>
              <a href="#!" className='active'>Antecedentes generales de la licitación</a>
              <a href="#!">Antecedentes generales de la licitación</a>
              <a href="#!">Antecedentes generales de la licitación</a>
              <a href="#!">Antecedentes generales de la licitación</a>
            </div>
          </li> */}

        </ul>
      </aside>
    )
  }

}

export default AsideArticle
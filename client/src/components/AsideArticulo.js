import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'


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

const abrirMenu = () => {
  setTimeout(() => {
    document.getElementsByClassName('active')['0'].parentElement.previousSibling.click();
  }, 100);
}

const AsideArticle = (props) => {
  const traerArticulo = (idArticulo) => {//por URL window.LOCATION
    setTimeout(() => {
      idArticulo = parseInt(idArticulo)
      props.getArticulo(idArticulo)
    }, 10);
  }

  if (props.manual === null || props.articulo.pk === undefined) {
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
              <a className='link-black mb-3 c-pointer' onClick={(e) => abrirNav(e)}>{seccion.nombre} PK #{seccion.pk}</a>
              <div className='d-none flex-column nav-articulo-hide'>
                {seccion.articulos.map(articulo => {
                  let url = articulo.url.split('/')
                  url = url[url.length - 2]
                  if (props.articulo.pk === articulo.pk) {
                    return (
                      <a key={articulo.pk} className='active'>{articulo.nombre}</a>
                    )
                  } else {
                    return (
                      <Link key={articulo.pk} to={'/articulo/'+url+'/'} className='c-pointer' onClick={(e) => traerArticulo(url)}>{articulo.nombre}</Link>
                    )
                  }
                })}
                {abrirMenu()}
              </div>
            </li>
          )}
        </ul>
      </aside>
    )
  }

}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getArticulo: (idArticulo) => {
      axios.get(`http://10.0.1.1:8000/articulo/${idArticulo}/`)
        .then(res => {
          dispatch({ type: 'GET_ARTICULO', data: res.data })
        })
        .catch(err => {
          console.log(err);
        })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AsideArticle)
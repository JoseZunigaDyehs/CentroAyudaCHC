import React from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'
import axios from 'axios'
import { BrowserRouter as Router, Link } from 'react-router-dom'

//Funciones

const obtenerAnterior = (idArticulo, secciones, traerArticulo, getArticulo) => {
  for (let i = 0; i < secciones.length; i++) {
    const articulos = secciones[i].articulos;
    for (let j = 0; j < articulos.length; j++) {
      const articulo = articulos[j];
      if (articulo.pk === idArticulo) {//Si encuentra el mismo articulo
        if (articulos[j - 1] !== undefined) {//si el anterior existe
          let url = articulos[j - 1].url.split('/')
          url = url[url.length - 2]
          return (<Link to={'/articulo/' + url + '/'} className='btn btn-nav' onClick={(e) => traerArticulo(url, getArticulo)}>Anterior</Link>)
        } else {
          //SI TIENE ANTERIORES
          if (secciones[i - 1] !== undefined && secciones[i - 1].articulos['0'] !== undefined) {
            let largo = secciones[i - 1].articulos.length - 1
            let url = secciones[i - 1].articulos[largo].url.split('/')
            url = url[url.length - 2]
            return (<Link to={'/articulo/' + url + '/'} className='btn btn-nav' onClick={(e) => traerArticulo(url, getArticulo)}>Anterior</Link>)
          } else {
            return (<div></div>);
          }
        }
      }
    }
  }
}

const obtenerSiguiente = (idArticulo, secciones, traerArticulo, getArticulo) => {
  for (let i = 0; i < secciones.length; i++) {
    const articulos = secciones[i].articulos;
    for (let j = 0; j < articulos.length; j++) {
      const articulo = articulos[j];
      if (articulo.pk === idArticulo) {//Si encuentra el mismo articulo
        if (articulos[j + 1] !== undefined) {//si el anterior existe
          let url = articulos[j + 1].url.split('/')
          url = url[url.length - 2]
          return (<Link to={'/articulo/' + url + '/'} className='btn btn-nav' onClick={(e) => traerArticulo(url, getArticulo)}>Siguiente</Link>)
        } else {
          //SI TIENE OTRO EN LA PROXIMA SECCION
          if (secciones[i + 1] !== undefined && secciones[i + 1].articulos['0'] !== undefined) {
            let url = secciones[i + 1].articulos['0'].url.split('/')
            url = url[url.length - 2]
            return (<Link to={'/articulo/' + url + '/'} className='btn btn-nav' onClick={(e) => traerArticulo(url, getArticulo)}>Siguiente</Link>)
          } else {
            return (<div></div>);
          }
        }
      }
    }
  }
}
//componentes
const InfoUtil = (props) => {
  if (props.estadisticas === undefined) {
    return (
      <div></div>
    )
  } else {
    let total = (props.estadisticas.si + props.estadisticas.no)
    let porc = ((props.estadisticas.si * 100) / total).toFixed(0)
    return (
      <div className='py-3'>
            <hr className='pt-3'/>
        <p>¿Fue útil esta información?</p>
        <div className='my-3'>
          <button className='btn btn-ter mr-3'>Si</button>
          <button className='btn btn-ter'>No</button>
        </div>
        <p className='c-gris-osc fnt-14'>{porc}% de las personas consideraron que fue útil.</p>
      </div>
    )
  }
}

const Navegacion = (props) => {
  if (props.manual !== null) {
    return (
      <div className='d-flex justify-content-between pt-3'>
        {obtenerAnterior(props.idArticulo, props.manual.secciones, props.traerArticulo, props.getArticulo)}
        {obtenerSiguiente(props.idArticulo, props.manual.secciones, props.traerArticulo, props.getArticulo)}
      </div>
    )
  } else {
    return (
      <div></div>
    )
  }
}

const ContenidoArticulo = (props) => {

  const traerArticulo = (idArticulo, getArticulo) => {//por URL window.LOCATION
    setTimeout(() => {
      idArticulo = parseInt(idArticulo)
      getArticulo(idArticulo)
    }, 10);
  }

  return (
    <div className='col-md-8 mb-5 pb-4'>
      <Helmet title={props.articulo.nombre + ' - Manuales Mercado Público'}></Helmet>
      <article>
        <h3 className='f-w-500'>{props.articulo.nombre}</h3>
        <hr />
        

        <p>rtfhfghg</p><p><strong>fghfghfghfgh</strong></p><p><img src="https://www.quehacerenchile.cl/wp-content/uploads/2016/02/fuerte.jpg" width="490" height="322"/></p><p>fghfghgh</p>
        
        
        <p className='mb-4'>{props.articulo.contenido}</p>
        <p className='fnt-14 c-gris-osc'>Fecha de publicación: {props.articulo.creacion}</p>
      </article>
      <InfoUtil estadisticas={{si:3,no:9}}/>
      <hr />
      <Navegacion manual={props.manual} idArticulo={props.articulo.pk} traerArticulo={traerArticulo} getArticulo={props.getArticulo} />
    </div>
  )
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

export default connect(mapStateToProps, mapDispatchToProps)(ContenidoArticulo)
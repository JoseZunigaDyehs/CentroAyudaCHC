import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import searchIcon from '../assets/img/search-grey.svg'

class Buscador extends Component {

  componentWillMount() {
    this.props.getAllArticulos();
  }

  traerArticulo = (e) => {//por URL window.LOCATION
    setTimeout(() => {
      let idArticulo = window.location.href.split('/')
      if (idArticulo[idArticulo.length] === '/') {
        idArticulo = idArticulo[idArticulo.length - 2]
      } else {
        idArticulo = idArticulo[idArticulo.length - 1]
      }
      idArticulo = parseInt(idArticulo)
      this.props.getArticulo(idArticulo)
    }, 10);
  }

  llenarResultados = (e) => {
    const texto = e.currentTarget.value.toLowerCase()
    if (texto.trim() !== '') {
      const art = this.props.articulos
      let articulos = []
      articulos = art.filter((articulo) => {
        return articulo.nombre.toLowerCase().search(texto) !== -1;
      })
      if (articulos.length > 0) {
        if (articulos.length > 10) {
          articulos = articulos.slice(0, 10)
        }
        this.props.setBusqueda(articulos)
      } else {
        this.props.clearBusqueda()
      }
    } else {
      this.props.clearBusqueda()
      document.getElementsByClassName('buscador')['0'].value = ''
    }
  }

  navegacionBuscador = (e) => {
    if (e.key === 'ArrowDown') {
      document.getElementsByClassName('resultados-busqueda')['0'].children['0'].focus()
    }
  }

  render() {

    if (this.props.busqueda !== null) {
      const articulos = this.props.busqueda

      return (
        <div className='w-50 position-relative'>
          <div className="input-group w-100">
            <input type="text" style={{ backgroundImage: searchIcon }} className="form-control buscador" placeholder="Describe tu problema" onKeyDown={this.navegacionBuscador.bind(this)} onKeyUp={this.llenarResultados.bind(this)} />
            <Resultados articulos={articulos} getArticulo={this.traerArticulo} />
          </div>
        </div>
      )
    } else {

      return (
        <div className='w-50 position-relative'>
          <div className="input-group w-100">
            <input type="text" className="form-control buscador" placeholder="Describe tu problema" onKeyUp={this.llenarResultados.bind(this)} />
            {/* <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button">Buscar</button>
            </div> */}
          </div>
        </div>
      )
    }

  }
}

const navegacionBuscador = (e) => {
  if (e.key === 'ArrowDown') {
    document.getElementsByClassName('resultados-busqueda')['0'].children['0'].focus()
  }
}

const Resultados = (props) => {
  return (
    <div className='resultados-busqueda d-flex flex-column'>
      {props.articulos.map((articulo, i) => {
        let url = articulo.url.split('/')
        url = '/articulo/' + url[url.length - 2]
        let contenido = articulo.contenido
        contenido = contenido.substring(0, 30)
        return (
          <Link key={i} to={url} className='d-flex align-items-center' onClick={props.getArticulo} onKeyUp={(e) => navegacionBuscador(e)}>
            {articulo.nombre} - <p className='fnt-14 c-gris-osc ml-1'> {contenido}</p>
          </Link>
        )
      }
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    articulos: state.articulos,
    busqueda: state.busqueda
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getAllArticulos: () => {
      axios.get('http://10.0.1.1:8000/articulos/')
        .then(res => {
          dispatch({ type: 'GET_ARTICULOS', data: res.data.results })
        })
        .catch(err => {
          console.log(err);
        })
    },
    setBusqueda: (articulos) => {
      dispatch({ type: 'SET_BUSQUEDA', data: articulos })
    },
    clearBusqueda: () => {
      dispatch({ type: 'CLEAR_BUSQUEDA' })
    },
    getArticulo: (idArticulo) => {
      axios.get(`http://10.0.1.1:8000/articulo/${idArticulo}/`)
        .then(res => {
          dispatch({ type: 'GET_ARTICULO', data: res.data })
          dispatch({ type: 'CLEAR_BUSQUEDA' })
          document.getElementsByClassName('buscador')['0'].value = '';
        })
        .catch(err => {
          console.log(err);
        })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Buscador)
import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { BrowserRouter as Router, Link } from 'react-router-dom'

class Buscador extends Component {

  componentWillMount() {
    this.props.getAllArticulos();
  }

  llenarResultados = (e) => {
    const texto = e.currentTarget.value.toLowerCase()
    if (texto.trim() !== '') {
      const art = this.props.articulos
      let articulos = []
      articulos = art.filter((articulo) => {
        return articulo.nombre.toLowerCase().search(texto) !== -1;
      })
      if(articulos.length>10){
        articulos = articulos.slice(0,10)
      }
      this.props.setBusqueda(articulos)
    } else {
      this.props.clearBusqueda()
    }
  }

  render() {

    if (this.props.busqueda !== null) {
      const articulos = this.props.busqueda

      return (
        <div className='w-50 position-relative'>
          <div className="input-group w-100">
            <input type="text" className="form-control buscador" placeholder="Describe tu problema" onKeyUp={this.llenarResultados.bind(this)} />
          </div>
          <Resultados articulos={articulos} clearBusqueda={this.props.clearBusqueda}/>
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

const Resultados = (props) => {
  return (
    <div className='resultados-busqueda d-flex flex-column'>
      {props.articulos.map((articulo, i) => {
        let url = articulo.url.split('/')
        url = '/articulo/' + url[url.length - 2]
        let contenido = articulo.contenido
        contenido = contenido.substring(0, 30)
        return (
          <Link key={i} to={url} className='d-flex align-items-center' onClick={props.clearBusqueda}>
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

const mapDispatchToProps = (dispatch) => {
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
      document.getElementsByClassName('buscador')['0'].value = ''
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Buscador)
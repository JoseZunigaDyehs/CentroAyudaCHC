import React, { Component } from 'react'
import VolverBtn from '../components/shared/VolverBtn'
import CrearEditarManual from '../components/manual/CrearEditarManual'
import { Seccion } from '../components/shared/Seccion'
import BotonesManual from '../components/manual/BotonesManual'
import { connect } from 'react-redux'
import axios from 'axios'

//Componentes
const Header = (props) => {
  if (props.estado === 'editar') {
    return (
      <header>
        <div className='container py-4'>
          <div className='row'>
            <div className='col-md-12'>
              <VolverBtn />
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 mb-5 mt-4'>
              <h4 className='f-w-500 mb-3'>Editar Manual </h4>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa commodo ligula eet dol.
  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis</p>
            </div>
          </div>
        </div>
      </header>
    )
  } else {

    return (
      <header>
        <div className='container py-4'>
          <div className='row'>
            <div className='col-md-12'>
              <VolverBtn />
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 mb-5 mt-4'>
              <h4 className='f-w-500 mb-3'>Crear Manual </h4>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa commodo ligula eet dol.
  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis</p>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

//Componente Main
class CrearManual extends Component {
  // componentWillUnmount() {
  //   this.props.clearManual();
  //   this.props.clearIdSeccion();
  // }
  render() {
    let tipoPagina;
    if (this.props.estado !== null) {
      tipoPagina = this.props.estado
    } else {
      if (this.props.match.url === '/crear/manual/') {
        tipoPagina = 'crear'
      } else if (this.props.match.url === '/editar/manual/') {
        tipoPagina = 'editar'
      }
    }

    return (
      <div>
        <Header estado={tipoPagina} />
        <main>
          <CrearEditarManual estado={tipoPagina} manual={this.props.manual} />
          <Seccion estado={tipoPagina} seccion={this.props.seccion} manual={this.props.manual} guardarIdSeccion={this.props.guardarIdSeccion}/>
          <BotonesManual estado={tipoPagina} crearManual={this.props.crearManual} />
        </main>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    manual: state.manual,
    seccion: state.seccion,
    estado: state.estado
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    crearManual: (manual) => {
      axios.post('http://10.0.1.1:8000/manuales-publicados/', manual)
        .then(res => {
          //Generar articulo por defecto
          let seccionNombre = document.getElementsByName('nombreSeccion')['0'].value.trim()
          const idManual = res.data.pk
          const seccion = { 'nombre': seccionNombre, 'estado': 1, 'manual': res.data.url }
          axios.post('http://10.0.1.1:8000/secciones/', seccion)
            .then(res => {
              axios.get(`http://10.0.1.1:8000/manual/${idManual}/`)
              .then(res => {
                dispatch({type:'GET_MANUAL',data:res.data})
                dispatch({type:'GET_SECCION',data:res.data.secciones})
                dispatch({ type: 'EDITAR' })
              })
            })
            .catch(err => {
              console.log(err);
            })
        })
        .catch(err => {
          console.log(err);
        })
    },
    clearManual: () => {
      dispatch({ type: 'CLEAR_MANUAL' })
    },
    guardarIdSeccion: (elem) => {
      let idSeccion = parseInt(elem.currentTarget.dataset.seccion)
      dispatch({type:'SET_ID_SECCION',data:idSeccion})
    },
    clearIdSeccion: () =>{
      dispatch({type:'CLEAR_ID_SECCION'})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CrearManual)
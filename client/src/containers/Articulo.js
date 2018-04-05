import React, { Component } from 'react'
import { connect } from 'react-redux'
import VolverBtn from '../components/shared/VolverBtn'
import AsideArticulo from '../components/articulo/AsideArticulo'
import ContenidoArticulo from '../components/articulo/ContenidoArticulo'
import axios from 'axios'

const Volver = () => (
  <div className='container'>
    <div className='row pt-5 pb-4'>
      <div className='col-md-12'>
        <VolverBtn />
      </div>
    </div>
  </div>
)

const fechaCorrecta = (fecha) => {
  const siYaPaso = fecha.substring(fecha.length-3, fecha.length-2)

  if(siYaPaso===':'){
    const nuevaFecha = fecha.substring(0, 10)
    const dia = nuevaFecha.substring(8, 10)
    let mes = nuevaFecha.substring(5, 7)
    const anio = nuevaFecha.substring(0, 4)
  
    switch (mes) {
      case '01':
        mes = 'Enero';
        break;
      case '02':
        mes = 'Febrero';
        break;
      case '03':
        mes = 'Marzo';
        break;
      case '04':
        mes = 'Abril';
        break;
      case '05':
        mes = 'Mayo';
        break;
      case '06':
        mes = 'Junio';
        break;
      case '07':
        mes = 'Julio';
        break;
      case '08':
        mes = 'Agosto';
        break;
      case '09':
        mes = 'Septiembre';
        break;
      case '10':
        mes = 'Octubre';
        break;
      case '11':
        mes = 'Noviembre';
        break;
      case '12':
        mes = 'Diciembre';
        break;
      default:
    }
  
    return dia + ' ' + mes + ' ' + anio;
  }else{
    return fecha;
  }
}

class Articulo extends Component {

  componentDidMount() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  componentWillMount(){
    this.props.getArticulo();
  }

  render() {
    let articulo = {
      nombre: ''
      , contenido: ''
      , creacion: ''
    }
    if(this.props.articulo!==null){
      articulo = this.props.articulo
      articulo.creacion = fechaCorrecta(articulo.creacion)
      let idManual = this.props.articulo.manual;
      if(this.props.manual===null){
        this.props.getManual(idManual)//ID MANUAL
      }else{
        if(this.props.manual.pk !== idManual){
          this.props.getManual(idManual)//ID MANUAL
        }
      }
    }

    return (
      <div>
        <main>
          <Volver />
          <div className='container'>
            <div className='row'>
              <AsideArticulo manual={this.props.manual} articulo={articulo}/>
              <ContenidoArticulo articulo={articulo} manual={this.props.manual}/>
            </div>
          </div>
        </main >
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    articulo: state.articulo,
    manual: state.manual
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getArticulo: () => {
      const idArticulo = parseInt(ownProps.match.params.id)
      axios.get(`http://10.0.1.1:8000/articulo/${idArticulo}/`)
      .then(res => {
        dispatch({type:'GET_ARTICULO',data:res.data})
      })
      .catch(err => {
        console.log(err);
      })
    },
    clearArticulo: () => {
      dispatch({type:'CLEAR_ARTICULO'})
    },
    getManual: (idManual) => {
      axios.get(`http://10.0.1.1:8000/manual/${idManual}/`)
      .then(res => {
        dispatch({type:'GET_MANUAL',data:res.data})
      })
      .catch(err => {
        console.log(err);
      })
    },
    clearManual: () => {
      dispatch({type:'CLEAR_MANUAL'})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Articulo)
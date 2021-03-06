import React from 'react'
import VolverBtn from '../components/shared/VolverBtn'
import CrearEditarManual from '../components/manual/CrearEditarManual'
import {Seccion} from '../components/shared/Seccion'
import BotonesManual from '../components/manual/BotonesManual'

const Header = () => {
  return (
    <header>
      <div className='container-fluid py-4'>
        <div className='row pl-3'>
          <VolverBtn />
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
}

const EditarManual = () => {
  return (
    <div>
      <Header />
      <main>
        <CrearEditarManual estado='editar' manual={{}}/>
        <Seccion estado='editar'/>
        <BotonesManual />
      </main>
    </div>
  )
}

export default EditarManual
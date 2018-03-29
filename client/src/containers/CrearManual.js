import React from 'react'
import VolverBtn from '../components/shared/VolverBtn'
import CrearEditarManual from '../components/CrearEditarManual'
import Seccion from '../components/Seccion';


const Header = () => {
  return (
    <header>
      <div className='container-fluid py-4'>
        <div class='row pl-3'>
          <VolverBtn />
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

const CrearManual = () => {
  return (
    <div>
      <Header />
      <main>
        <CrearEditarManual estado='crear' />
        <Seccion estado='crear'/>
      </main>
    </div>
  )
}

export default CrearManual
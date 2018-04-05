import React from 'react'
import CrearEditarArticulo from '../components/articulo/CrearEditarArticulo'

const EditarArticulo = () => {
  return (
    <div>
      <header className='container'>
        <div className='row'>
          <div className='col-md-12 pt-3 my-5'>
            <h3 className='f-w-500 mb-3'>Editar Artículo</h3>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa commodo ligula dol.
                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis</p>
          </div>
        </div>
      </header>
      <main>
        <CrearEditarArticulo estado='editar' articulo={{}} />
      </main>
    </div>
  )
}

export default EditarArticulo
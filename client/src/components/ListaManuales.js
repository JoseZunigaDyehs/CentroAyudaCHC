import React from 'react'

const ListaManuales = () => {
  const manuales = [
    { title: 'Plan Anual de Compras (PAC)', estado: 0 },
    { title: 'Carro de Compras', estado: 1 },
    { title: 'Mis Pagos', estado: 1 },
    { title: 'Plan Anual de Compras (PAC)', estado: 0 },
    { title: 'Carro de Compras', estado: 1 },
    { title: 'Mis Pagos', estado: 1 },
    { title: 'Plan Anual de Compras (PAC)', estado: 1 },
    { title: 'Carro de Compras', estado: 1 }
  ]

  const titulo = 'Manuales publicados'
  return (
    <List manuales={manuales} titulo={titulo} />
  )
}

const List = (props) => {
  if (props.titulo !== '') {
    return (
      <section className='container'>
        <hr className='mb-5' />
        <div className='row mb-45'>
          <div className='col-md-12'><h3 className='f-w-500'>{props.titulo}</h3></div>
        </div>
        <div className='row mb-5'>
          {props.manuales.map((manual, i) =>
            <DivManual manual={manual} i={i + 1} key={i} />
          )}
        </div>

      </section>
    )
  } else {
    return (
      <section className='container'>
        <div className='row mb-5'>
          {props.manuales.map((manual, i) =>
            <DivManual manual={manual} i={i + 1} key={i} />
          )}
        </div>
        <hr className='mb-5' />
      </section>
    )
  }
}

const DivManual = (props) => {
  let clase = 'border-blue c-blue manuales-home d-flex align-items-center px-3'
  //let clase = 'mr-2 border-blue c-blue manuales-home d-flex align-items-center px-3'
  if (props.i % 5 === 0) {
    clase = 'border-blue c-blue manuales-home d-flex align-items-center px-3'
  }

  let estado = ''

  //DEPENDE DEL ESTADO = 
  if(props.manual.estado===0){
    //clase = 'mr-2 border-gris c-blue manuales-home-borrador d-flex align-items-start px-3 flex-column justify-content-center'
    clase = 'border-gris c-blue manuales-home-borrador d-flex align-items-start px-3 flex-column justify-content-center'
    if (props.i % 5 === 0) {
      clase = 'border-gris c-blue manuales-home-borrador d-flex align-items-start px-3 flex-column justify-content-center'
    }
    estado = <p className='fnt-12 f-w-500 mt-2 l-s-1'>BORRADOR</p>
  }

  return (
    <div className='col-md-3 mb-4'>
      <div className={clase}>
        <p>
          {props.manual.title}
        </p>
        {estado}
      </div>
    </div>
  )
}

export default ListaManuales
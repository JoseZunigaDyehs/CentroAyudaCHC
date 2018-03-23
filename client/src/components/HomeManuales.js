import React from 'react'

const HomeManuales = () => {
  const manuales = [
    { title: 'Plan Anual de Compras (PAC)' },
    { title: 'Carro de Compras' },
    { title: 'Mis Pagos' },
    { title: 'Plan Anual de Compras (PAC)' },
    { title: 'Carro de Compras' },
    { title: 'Mis Pagos' },
    { title: 'Plan Anual de Compras (PAC)' },
    { title: 'Carro de Compras' },
    { title: 'Mis Pagos' }
  ]

  return (
    <section className='container'>
      <div className='row px-3 mb-5'>
        {manuales.map((manual,i) =>
          <DivManual manual={manual} i={i+1} />
        )}
      </div>
    </section>
  )
}

const DivManual = (props) => {
  let clase = 'mr-2 border-blue c-blue manuales-home d-flex align-items-center px-3'
  if(props.i%5===0){
    clase = 'border-blue c-blue manuales-home d-flex align-items-center px-3'
  }
  return (
    <div className='w-20 mb-2'>
      <div className={clase}>
        <p>
          {props.manual.title}
        </p>
      </div>
    </div>
  )
}

export default HomeManuales
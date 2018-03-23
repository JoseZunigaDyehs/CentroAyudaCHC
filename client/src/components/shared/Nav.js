import React from 'react'
import logo from '../../assets/img/LogoMP2.png'

const Nav = () => (
  <nav className="navbar navbar-light bg-light justify-content-between py-4">
    <a className="navbar-brand"><img src={logo} alt="" style={{'height':'44px'}}/></a>
    <form className="form-inline">
      <input className="form-control mr-sm-2" type="search" placeholder="Describr tu problema" aria-label="Search" />
      {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button> */}
    </form>
  </nav>
)


export default Nav
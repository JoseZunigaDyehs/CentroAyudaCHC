import React from 'react'
import logo from '../assets/img/LogoMP2.png'

const Nav = () => (
  <nav class="navbar navbar-light bg-light justify-content-between py-4">
    <a class="navbar-brand"><img src={logo} alt="" style={{'height':'44px'}}/></a>
    <form class="form-inline">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      {/* <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button> */}
    </form>
  </nav>
)


export default Nav
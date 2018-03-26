import React from 'react'
import logo from '../../assets/img/LogoMP2.png'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Nav = () => (
  <nav className="navbar navbar-light bg-light justify-content-between py-4">
    <Link to ='/' className="navbar-brand"><img src={logo} alt="" style={{ 'height': '44px' }} /></Link>
    <div className="input-group w-50">
      <input type="text" className="form-control" placeholder="Busqueda" />
      <div className="input-group-append">
        <button className="btn btn-outline-secondary" type="button">Buscar</button>
      </div>
    </div>
  </nav>
)


export default Nav
import React from 'react'
import logo from '../../assets/img/logo-MP-blanco.svg'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Buscador from '../Buscador'

const Nav = () => (
  <nav className="navbar navbar-light bg-dark justify-content-between py-3">
    <Link to ='/' className="navbar-brand pt-0"><img src={logo} alt="" style={{ 'height': '45px' }} /></Link>
    <Buscador />
  </nav>
)


export default Nav
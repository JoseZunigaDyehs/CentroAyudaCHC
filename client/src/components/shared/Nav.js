import React from 'react'
import logo from '../../assets/img/logoChc_blanco.svg'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Buscador from '../Buscador'

const Nav = () => (
  <nav className="navbar navbar-light bg-dark justify-content-between py-4">
    <Link to ='/' className="navbar-brand pt-0"><img src={logo} alt="" style={{ 'height': '50px' }} /></Link>
    <Buscador />
  </nav>
)


export default Nav
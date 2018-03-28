import React from 'react'
import logo from '../../assets/img/LogoMP2.png'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Buscador from '../Buscador'

const Nav = () => (
  <nav className="navbar navbar-light bg-light justify-content-between py-4">
    <Link to ='/' className="navbar-brand"><img src={logo} alt="" style={{ 'height': '44px' }} /></Link>
    <Buscador />
  </nav>
)


export default Nav
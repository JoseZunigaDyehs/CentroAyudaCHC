import { combineReducers } from 'redux'
import { manuales, manual } from './manuales'
import { articulos, busqueda, articulo } from './articulos'

export default combineReducers({
  manuales,
  articulos,
  busqueda,
  articulo,
  manual
})
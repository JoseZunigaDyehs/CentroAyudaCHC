import { combineReducers } from 'redux'
import { manuales, manual } from './manuales'
import { articulos, busqueda, articulo, imagenes } from './articulos'
import { spinner } from './spinner'
import { seccion, idSeccion } from './seccion'
import { estado } from './estado'

export default combineReducers({
  manuales,
  articulos,
  busqueda,
  articulo,
  manual,
  spinner,
  seccion,
  estado,
  idSeccion,
  imagenes
})
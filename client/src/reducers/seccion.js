export const seccion = (state = null, action) => {
  var nuevoEstado = Object.assign({}, state);
  switch (action.type) {
    case 'GET_SECCION':
      nuevoEstado = action.data;
      return nuevoEstado;  
    case 'CLEAR_SECCION':
      return null;  
    default:
      return state;
  }
}
export const idSeccion = (state = null, action) => {
  var nuevoEstado = Object.assign({}, state);
  switch (action.type) {
    case 'SET_ID_SECCION':
      nuevoEstado = action.data;
      return nuevoEstado;  
    case 'CLEAR_ID_SECCION':
      return null;  
    default:
      return state;
  }
}

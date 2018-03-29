export const manuales = (state = null, action) => {
  var nuevoEstado = Object.assign({}, state);
  switch (action.type) {
    case 'GET_MANUALES':
      nuevoEstado = action.data;
      return nuevoEstado;  
    case 'CLEAR_MANUALES':
      return null;  
    default:
      return state;
  }
}

export const manual = (state = null, action) => {
  var nuevoEstado = Object.assign({}, state);
  switch (action.type) {
    case 'GET_MANUAL':
      nuevoEstado = action.data;
      return nuevoEstado;  
    case 'CLEAR_MANUAL':
      return null;  
    default:
      return state;
  }
}
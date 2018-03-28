export const articulos = (state = null, action) => {
  var nuevoEstado = Object.assign({}, state);
  switch (action.type) {
    case 'GET_ARTICULOS':
      nuevoEstado = action.data;
      return nuevoEstado;  
    case 'CLEAR_ARTICULOS':
      return null;  
    default:
      return state;
  }
}

export const busqueda = (state = null, action) => {
  var nuevoEstado = Object.assign({}, state);
  switch (action.type) {
    case 'SET_BUSQUEDA':
      nuevoEstado = action.data;
      return nuevoEstado;  
    case 'CLEAR_BUSQUEDA':
      return null;  
    default:
      return state;
  }
}

export const articulo = (state = null, action) => {
  var nuevoEstado = Object.assign({}, state);
  switch (action.type) {
    case 'GET_ARTICULO':
      nuevoEstado = action.data;
      return nuevoEstado;  
    case 'CLEAR_ARTICULO':
      return null;  
    default:
      return state;
  }
}
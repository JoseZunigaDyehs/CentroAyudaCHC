export const estado = (state = 'crear', action) => {
  var nuevoEstado = Object.assign({}, state);
  switch (action.type) {
    case 'EDITAR':
      return 'editar';
    case 'CREAR':
      return 'crear';  
    case 'CLEAR_ESTADO':
      return null;  
    default:
      return state;
  }
}
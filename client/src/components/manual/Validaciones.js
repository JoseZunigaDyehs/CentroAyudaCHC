import React from 'react'

export const validarVacio = (e,min,max) => {
  let elemento;
  if(e.target===undefined){
    elemento = e;
  }else{
    elemento = e.target;
  }

  let valor = elemento.value.trim();
  let valido = true;
  let str; 

  if(valor===''){
    valido = false;
    str = 'Debe ingresar campo '
  }else if(valor.length<min){
    valido = false;
    str = 'Debe ser de mayor a '+min+' caracteres'
  }else if(valor.length>max){
    valido = false;
    str = 'Debe ser de menor a '+max+' caracteres'
  }
  if(!valido){
    if(elemento.nextElementSibling===null){//si no existe un error    
      let p = document.createElement('p')
      p.classList = 'c-pink'
      let r = document.createTextNode(str)
      p.appendChild(r)
      elemento.parentElement.appendChild(p);
    }else{
      elemento.nextElementSibling.textContent = str;
    }
  }else{
    if(elemento.nextElementSibling!==null){//si ya existe un error    
      elemento.nextElementSibling.remove();
    }
  }
  return valido;
}
import React from 'react'
import './styles.css'


const Loader = ({percent}) => {
  return <div class="overlay">
    <div class="  overlay__loader">
      Preparando o perfil...
    </div>
    <div class="overlay__loader">
      Configurando o layout...
    </div>
    <div class="overlay__loader">
      Finalizando...
    </div>
  </div>
}

export default Loader

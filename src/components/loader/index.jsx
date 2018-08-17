import React from 'react'
import './styles.css'


const Loader = ({percent}) => {
  return <div className="overlay">
    <div className="  overlay__loader">
      Preparando o perfil...
    </div>
    <div className="overlay__loader">
      Configurando o layout...
    </div>
    <div className="overlay__loader">
      Finalizando...
    </div>
  </div>
}

export default Loader


import './App.css';
import freecodecampLogo from './img/freecodecamp-logo.png'
import Boton from './Componentes/Boton'

function App() {

  const manejarClic = () => {
    console.log('Clic')
  }

  const reiniciarContador = () => {
    console.log('Reiniciar')
  }

  return (
    <div className="App">

      <div className='logo-contenedor'>
        <img 
        className='logo' 
        src={freecodecampLogo}
        alt='Logo'
        />
      </div>
      <div className='contenedor-principal'>

        <Boton 
          texto="Clic"
          esBotonDeClic={true}
          manejarClic={manejarClic} 
        />
        <Boton 
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
        />


      </div>

    </div>
  );
}

export default App;

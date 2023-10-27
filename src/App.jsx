import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import Container from 'react-bootstrap/Container';
import './App.css'
import Registro from './assets/components/Registro.jsx';

library.add(fas, faTwitter, faFontAwesome)

function App() {
  

  return (
    <>
      <Container className='formulario'  >
        <h1>Crea una cuenta</h1>
        <Registro></Registro>
      </Container>
    </>
  )
}

export default App

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/style.css"
import Navbar from './components/Nabvar/Navbar';
import PrimeraSeccion from "./components/Secciones/portada/PrimeraSeccion"
import {ItemListContainer} from './components/Secciones/productos/ItemListContainer';
import Footer from "./components/Footer/Footer"
import SegundaSeccion from './components/Secciones/fraseEmblema/SegundaSeccion';


function App() {
  return (
    <div className="App">
      <header className="">
        <Navbar />
      </header>
      <section>
        <PrimeraSeccion />
      </section>
      <section className='seccionIntermedia'>
        <h2>Un viaje de ida que promete cambiar tu vida</h2>
      </section>
      <section>
        <SegundaSeccion />
      </section>
      <section className='itemListContainer' id='productos'>
        <ItemListContainer />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default App;

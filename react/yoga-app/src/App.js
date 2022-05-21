import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/style.css"
import Navbar from './components/Nabvar/Navbar1';
import PrimeraSeccion from "./components/Secciones/portada/PrimeraSeccion1"
import {ItemListContainer} from './components/Secciones/productos/ItemListContainer1';
import Footer from "./components/Footer/Footer1"
import SegundaSeccion from './components/Secciones/fraseEmblema/SegundaSeccion1';


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

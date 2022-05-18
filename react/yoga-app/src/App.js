import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/style.css"
import Navbar from './components/Nabvar/navbar';
import PrimeraSeccion from "./components/Secciones/portada/primeraSeccion"
import {ItemListContainer} from './components/Secciones/productos/itemListContainer';
import Footer from "./components/Footer/footer"
import SegundaSeccion from './components/Secciones/fraseEmblema/segundaSeccion';


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
      <section className='itemListContainer'>
        <ItemListContainer />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default App;

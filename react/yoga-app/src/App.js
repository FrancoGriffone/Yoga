import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/style.css"
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

/*Components*/
import Navbar from './components/Nabvar/Navbar';
import PrimeraSeccion from "./components/Secciones/portada/PrimeraSeccion"
import {ItemListContainer} from './components/Secciones/productos/ItemListContainer';
import Footer from "./components/Footer/Footer"
import SegundaSeccion from './components/Secciones/fraseEmblema/SegundaSeccion';
import { ItemDetailContainer } from './components/Secciones/productos/ItemDetailContainer';
import { CartProvider } from './Context/Context';




export default function App() {
  return (
    <BrowserRouter>
    <CartProvider>
    <div className="App">
      <Navbar />
      <PrimeraSeccion />
      <section className='seccionIntermedia'>
        <h2>Un viaje de ida que promete cambiar tu vida</h2>
      </section>
      <SegundaSeccion /> 
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/product/:itemId" element={<ItemDetailContainer />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
      </div>
    </CartProvider>
    </BrowserRouter>
  );
}



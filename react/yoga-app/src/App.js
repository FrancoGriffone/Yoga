import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Nabvar/navbar';
import {ItemListContainer} from './components/Nabvar/itemListContainer';


function App() {
  return (
    <div className="App">
      <header className="">
        <Navbar />
      </header>
      <section>
        <ItemListContainer />
      </section>
    </div>
  );
}

export default App;

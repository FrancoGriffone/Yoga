import './App.css';
import Navbar from './components/Nabvar/Navbar';
import {ItemListContainer} from './components/Nabvar/ItemListContainer';
import ItemCount  from './components/Nabvar/ItemCount';


function App() {
  return (
    <div className="App">
      <header className="">
        <Navbar />
      </header>
      <section>
        <ItemListContainer />
        <ItemCount stock={5} initial={1} />
      </section>
    </div>
  );
}

export default App;

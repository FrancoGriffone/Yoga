import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { Context } from '../../../Context/Context';
import {Link} from "react-router-dom";
import "./ItemCount/style.css"

const ItemCount = ({ stock, initial, itemAdd}) =>{

    
  const [counter, setCounter] = useState(initial)

  const [add,setAdd]=useState(false)
  
  const {addItemToCart} = useContext(Context);

  const onAdd = () => {
      addItemToCart(itemAdd, counter)
      setAdd(true)
  }

  return (

      <>
          <div className="counterContainer">
              {add ? (<>
                  <div className='addCarrito'>Producto Agregado al carrito</div>
                  <div>
                      <Link to="/"><Button>Ver más productos</Button></Link>                        
                  </div>
              </>):(

              <>
                  <div>
                      <div>
                      <button onClick={() => counter > initial && setCounter(counter - 1)}>
                      -
                      </button>
                      {counter}
                      <button onClick={() => counter < stock && setCounter(counter + 1)}>
                      +
                      </button>
                      </div>
                  </div>
                  <Button onClick={onAdd}>Agregar al carrito</Button>
              </>)
              }
              </div>
      </>
  
  )

}
/* export const ItemCount = ({ stock, initial, onAdd }) => {
  const [counter, setCounter] = useState(initial);

  return (
    <>
      <button onClick={() => counter > initial && setCounter(counter - 1)}>
        -
      </button>
      {counter}
      <button onClick={() => counter < stock && setCounter(counter + 1)}>
        +
      </button>

      <Button onClick={onAdd}>Agregar al carrito</Button>
    </>
  );
}; */


export default ItemCount
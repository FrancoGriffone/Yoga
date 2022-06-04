import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import "./ItemCount/style.css"


const ItemCount = ({ stock, initial, onAdd}) =>{

    
  const [counter, setCounter] = useState(initial)
  
  return (
    <>
      <button onClick={() => counter > initial && setCounter(counter - 1)}>
        -
      </button>
      {counter}
      <button onClick={() => counter < stock && setCounter(counter + 1)}>
        +
      </button>

      <Button onClick={() => onAdd(counter)}>Agregar al carrito</Button>
    </>
  );
};


export default ItemCount
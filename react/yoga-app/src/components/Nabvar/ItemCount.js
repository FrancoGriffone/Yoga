import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

export const ItemCount = ({ stock, initial, onAdd }) => {
  const [counter, setCounter] = useState(initial);

  // funcion para sumar 1 al contador. si el contador es menor al stock disponible hace la suma, sino no hace nada
  const addOne = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  // funcion para restar 1 al contador. si el contador es mayor al valor inicial hace la resta, sino no hace nada
  const removeOne = () => {
    if (counter > initial) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="flex-container">
      <div className="flex-item">
        <Button
          onClick={removeOne}
          disabled={counter <= initial}
          className="btn btn-secondary"
        >
          -
        </Button>

        <span className="counter-text">{counter}</span>

        <Button
          onClick={addOne}
          disabled={counter >= stock}
          className="btn btn-secondary"
        >
          +
        </Button>
      </div>

      <div className="d-grid">
        <Button className="btn btn-block">Agregar al carrito</Button>
      </div>
    </div>
  );
};

export default ItemCount

import React, { useContext } from "react";
import Carrito from "./files/carrito.png"
import {CartContext} from "../../Context/CartContext"
import {Link} from "react-router-dom"
// import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const CartWidget = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { itemsTotal } = useContext(CartContext);
  const {cart, removeItem, totalDeCompra, vaciarCart } = useContext(CartContext)


  return (
    <div>
      <Button onClick={handleOpen}><img src= { Carrito } alt="logo" width="40px"></img></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <div>¡Este es tu carrito!</div>
            {cart.length === 0 ? 
                (<div>
                    <div></div>
                        <div>
                            <div>¡Al parecer tu carrito se encuentra vacio!</div>
                        </div>
                </div>) : cart.map((items) => {
                return (
                    <div key={items.id}>                                      
                        <div>  
                            <img src={items.image} alt={items.id} />
                                <div>
                                    <div>{items.title}</div>
                                    <div>Cantidad: {items.quantity}</div>
                                    <div>Precio Unitario ${items.price}</div>
                                    <div>Total = ${items.price*items.quantity}</div>
                                </div>
                            <div id={items.id} onClick={removeItem}></div>
                        </div>                           
                    </div>)
                    }
                    )
                    }
                    { cart.length !== 0  ? 
                        <div>
                            <div>
                                Total de su compra $ {totalDeCompra}.
                            </div>
                            <div>
                                <button onClick={ vaciarCart } >Vaciar Carrito</button>
                                    <Link to={"/"}>Finalizar Compra</Link> 
                            </div>
                            </div> : 
                        <div/> }
        </Box>
      </Modal>
    </div>
  );
}

export default CartWidget


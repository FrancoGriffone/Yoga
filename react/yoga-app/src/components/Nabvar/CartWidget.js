import React, { useContext } from "react";
import Carrito from "./files/carrito.png"
import Cart from "../Secciones/productos/Cart/Cart"
import {Context} from "../../Context/Context"
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
  const { itemsTotal } = useContext(Context);


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
        <Cart />
        </Box>
      </Modal>
    </div>
  );
}

export default CartWidget


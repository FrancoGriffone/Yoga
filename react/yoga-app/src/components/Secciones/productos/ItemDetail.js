import React, { useState } from 'react';
import "./style.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';




export const ItemDetail = ({
  title,
  image,
  description,
  fullDescription,
  stock
}) => {
  const [comprado, setComprado] = useState(false);

  const onAdd = (value) => {
    // value lo vamos a usar despues para el context!
    // seria el valor del contador :)
    setComprado(true);
    console.log(value); //este es el valor que viene del ItemCount
    //vamos a poder ejecutar aca una funcion del context a la que le pasamos el item y esa cantidad del ItemCount
  };
    return (
        <div className='cardDetail'>
        <Card sx={{ maxWidth: 1000 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="400"
              image={image}
              alt={description}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {fullDescription}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Añadir al carrito
            </Button>
          </CardActions>
        </Card>
        <div style={{ display: 'flex', justifyContent: 'center' , flexDirection: 'column'}}>
        {comprado ? (
          <Link to="/cart">Terminar compra</Link>
        ) : (
          <ItemCount stock={stock} initial={1} onAdd={onAdd} />
        )}
        </div>
        </div>
      );
    }

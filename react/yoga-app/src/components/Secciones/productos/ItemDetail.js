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
  stock,
  price
}) => {
  const [comprado, setComprado] = useState(false);

  const itemAdd = (value) => {

    setComprado(true);
    console.log(value);
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
              <Typography gutterBottom variant="h5" component="div">
                <p>${price}</p>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <div style={{ display: 'flex', justifyContent: 'center' , flexDirection: 'column', marginTop: "3%"}}>
        {comprado ? (
          <Link to="/">Volver a los productos</Link>
        ) : (
          <ItemCount stock={stock} initial={1} itemAdd={itemAdd} />
        )}
        </div>
        </div>
      );
    }

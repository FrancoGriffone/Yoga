import React, { useContext, useState } from 'react';
import "./style.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ItemCount from './ItemCount';
import { Context } from '../../../Context/Context';
import { Link, useParams } from 'react-router-dom';
import { Data } from '../../../data/Data';

export const ItemDetail = ({
  title,
  image,
  description,
  fullDescription,
  stock,
  price
}) => {
  const [comprado, setComprado] = useState(false);

  const {addItemToCart} = useContext(Context);

  const { itemId } = useParams();

  const myData = Data.find((item) => item.id === itemId);

  const items = myData

  const onAdd = (value) => {
      addItemToCart(items, value)
      setComprado (true);
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
        {comprado ? (
          <Link className='addCarrito' to="/cart">Ver otros productos</Link>
        ) : (
          <ItemCount stock={stock} initial={1} onAdd={onAdd} />
        )}
        </div>
      );
    }

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import {Item} from "./Item";


  // {items.map((item) => (
  //   <Item item={item} />
  // ))}


const ItemDetail = () => {
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          image={Item.image}
          alt={Item.description}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {Item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {Item.fullDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Añadir al carrito
        </Button>
      </CardActions>
    </Card>
  );
}

export default ItemDetail
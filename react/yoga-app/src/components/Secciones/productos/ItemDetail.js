import * as React from 'react';
import "./style.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';



export const ItemDetail = ({
  title,
  image,
  description,
  fullDescription
}) => {
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
        </div> 
      );
    }

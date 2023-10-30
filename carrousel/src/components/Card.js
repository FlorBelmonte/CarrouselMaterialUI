import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';

const unsplashApiKey = process.env.REACT_APP_UNSPLASH_API_KEY;

export default function MediaCard() {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    axios
      .get('https://api.unsplash.com/photos/random', {
        headers: {
          'Authorization': `Client-ID ${unsplashApiKey}`
        }
      })
      .then(response => {
        const item = response.data;
        setImageData({
          imageUrl: item.urls.regular,
          description: item.description || '',
        });
      })
      .catch(error => {
        console.error('Error al obtener datos de la API', error);
      });
  }, []);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 200 }}
        image={imageData ? imageData.imageUrl : 'placeholder.jpg'}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Card
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

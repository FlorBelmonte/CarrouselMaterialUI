import React, { useState, useEffect } from 'react';
import Carousel from 'react-material-ui-carousel';
import Item from './Item';
import axios from 'axios';

export default function Carrusel() {
  const [sliderData, setSliderData] = useState([]);

  useEffect(() => {
    axios.get('https://api.unsplash.com/photos/random?count=10', {
      headers: {
        'Authorization': `Client-ID Y_L2phUQvlNmWE4N6GIfm6KeN_AEERef0Rto6abS900`
      }
    })
    .then(response => {
      const modifiedData = response.data.map(item => ({
        imageUrl: item.urls.regular,
        description: item.description,
      }));
      setSliderData(modifiedData);
    })
    .catch(error => {
      console.error('Error al obtener datos de la API', error);
    });
  }, []);

  return (
    <Carousel>
      {Array.isArray(sliderData) ? sliderData.map((item, index) => (
        <Item key={index} imageUrl={item.imageUrl} description={item.description} />
      )) : null}
    </Carousel>
  );
}

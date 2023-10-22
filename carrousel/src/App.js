import React from 'react';
import { Container, Paper, Typography } from '@mui/material';
import './App.css';
import Carrusel from './components/Carrousel';
import MediaCard from './components/Card';
import ResponsiveTable from './components/ResponsiveTable';

function App() {
  return (
    <Container maxWidth="lg">
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <div className="App">
          <Typography variant="h4" align="center">
            Components Material-UI
          </Typography>
          <Carrusel />
        </div>
      </Paper>
      <div className="card-container" style={{ margin: '70px 0' }}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(index => (
          <MediaCard key={index} />
        ))}
      </div>
      <h1>Componente Tabla Responsiva</h1>
      <ResponsiveTable/>
    </Container>
  );
}

export default App;


import { Container, Paper, Typography } from '@mui/material';
import './App.css';
import Carrusel from './components/Carrousel'

function App() {
  return (
    <Container maxWidth= "lg">
      <Paper elevation = {3} style = {{padding: '20px', marginTop: '20px'}}>

    <div className='App'>
    <Typography variant="h4" align="center">
          Components Material-UI
        </Typography>
    <Carrusel/>
    </div>
    </Paper>
    </Container>
  );
}


export default App;

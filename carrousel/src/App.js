import { Container, Paper, Typography } from '@mui/material';
import './App.css';
// import MediaCard from './components/Card';
import Carrousel from './components/Carrousel'

function App() {
  return (
    <Container maxWidth= "lg">
      <Paper elevation = {3} style = {{padding: '20px', marginTop: '20px'}}>

    <div className='App'>
    <Typography variant="h4" align="center">
          Carrusel de Imágenes con Material-UI
        </Typography>
    <Carrousel/>
    {/* <MediaCard/> */}
    </div>
    </Paper>
    </Container>
  );
}


export default App;

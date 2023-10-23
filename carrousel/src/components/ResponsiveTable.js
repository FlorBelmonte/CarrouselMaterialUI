import React, { useEffect, useState } from 'react';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';
import axios from 'axios';

export default function ResponsiveTable() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.unsplash.com/photos/random?count=10', {
        headers: {
          'Authorization': `Client-ID x-v0XRVRRt_Z59x-UgwAEiCUelLJ_l2T3ZT1KcSX86U`
        }
      })
      .then(response => {
        const filteredData = response.data
          .filter(item => item.description) 
          .map(item => ({
            imageUrl: item.urls.regular,
            description: item.description || '',
          }));
        setTableData(filteredData);
      })
      .catch(error => {
        console.error('Error al obtener datos de la API', error);
      });
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Imagen</TableCell>
            <TableCell>Descripción</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((item, index) => (
            <TableRow key={index}>
              <TableCell>
                <img src={item.imageUrl} alt={item.description} style={{ width: '100px' }} />
              </TableCell>
              <TableCell>{item.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

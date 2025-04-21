import React, { useState, useEffect } from 'react';
import { Box, TextField, Grid } from '@mui/material';
import CardComponent from '../components/CardComponent';
import axios from 'axios';

const Books = () => {
  const [books, setBooks] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    axios
      .get('https://www.anapioficeandfire.com/api/books?pageSize=20')
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => console.error(error));
  }, []);

  const filteredBooks = books.filter(book =>
    book.name.toLowerCase().includes(filter)
  );

  return (
    <Box
      sx={{
        minHeight: '100vh',
        padding: 4,
        color: '#4C4C4C',
      }}
    >
      <TextField
        label="Search Books"
        variant="outlined"
        fullWidth
        onChange={(e) => setFilter(e.target.value.toLowerCase())}
        sx={{
          marginBottom: 4,
          backgroundColor: '#F9F9F9',
          input: {
            color: '#4C4C4C',
            fontFamily: '"Cinzel", serif',
          },
          label: {
            color: '#6B6B6B',
            fontFamily: '"Cinzel", serif',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#A67C52',
            },
            '&:hover fieldset': {
              borderColor: '#8B6A4D',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#8B6A4D',
            },
          },
        }}
      />
      <Grid container spacing={3} justifyContent="center">
        {filteredBooks.map((book, index) => {
          const cleanedDate = new Date(book.released).toDateString();
          const authors = book.authors.join(', ');

          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={book.url}>
              <CardComponent
                key={index}
                title={book.name}
                description={`Released: ${cleanedDate}`}
                author={`Author(s): ${authors}`}
                numberOfPages={`Number of Pages: ${book.numberOfPages}`}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Books;

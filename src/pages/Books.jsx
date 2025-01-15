import React, { useState, useEffect } from 'react';
import { TextField, Grid } from '@mui/material';
import CardComponent from '../components/CardComponent';
import axios from 'axios';

const Books = () => {
    const [books, setBooks] = useState([]);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        // Fetch books data from the API
        axios
            .get('https://www.anapioficeandfire.com/api/books?pageSize=20')
            .then(response => {
                setBooks(response.data); // Set the array of books
                console.log(response.data);
            })
            .catch(error => console.error(error));
    }, []);

    // Filter books based on user input
    const filteredBooks = books.filter(book =>
        book.name.toLowerCase().includes(filter)
    );

    return (
        <div>
            <TextField
                label="Search Books"
                variant="outlined"
                fullWidth
                style={{ marginBottom: '20px', marginTop: '5px' }}
                onChange={(e) => setFilter(e.target.value.toLowerCase())}
            />
            <Grid container spacing={3} justifyContent="center">
                {filteredBooks.map((book, index) => {
                    // Format the release date
                    const cleanedDate = new Date(book.released).toDateString();
                    // Combine authors into a single string
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
        </div>
    );
};

export default Books;
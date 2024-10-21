const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

// Sample static movie data
const movies = [
  {
    id: 1,
    title: 'Inception',
    year: 2010,
    genre: 'Science Fiction',
    description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.',
  },
  {
    id: 2,
    title: 'The Shawshank Redemption',
    year: 1994,
    genre: 'Drama',
    description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
  },
  {
    id: 3,
    title: 'The Godfather',
    year: 1972,
    genre: 'Crime',
    description: 'An organized crime dynasty\'s aging patriarch transfers control of his clandestine empire to his reluctant son.',
  },
  {
    id: 4,
    title: 'The Dark Knight',
    year: 2008,
    genre: 'Action',
    description: 'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.',
  },
  {
    id: 5,
    title: 'Pulp Fiction',
    year: 1994,
    genre: 'Crime',
    description: 'The lives of two mob hitmen, a boxer, a gangster\'s wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
  },
];

// GET request to fetch movies
app.get('/movies', (req, res) => {
  res.json(movies);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

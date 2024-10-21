const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Sample recipe data
const recipes = [
  {
    id: 1,
    title: 'Spaghetti Carbonara',
    ingredients: ['Spaghetti', 'Eggs', 'Parmesan cheese', 'Pancetta', 'Pepper'],
    instructions: 'Boil spaghetti, fry pancetta, mix with eggs and cheese, combine.'
  },
  {
    id: 2,
    title: 'Chicken Tikka Masala',
    ingredients: ['Chicken', 'Yogurt', 'Spices', 'Tomato sauce', 'Cream'],
    instructions: 'Marinate chicken, grill, simmer in sauce, serve with rice.'
  },
  {
    id: 3,
    title: 'Caesar Salad',
    ingredients: ['Romaine lettuce', 'Croutons', 'Caesar dressing', 'Parmesan cheese'],
    instructions: 'Toss lettuce with dressing, add croutons and cheese.'
  },
];

// GET request to retrieve all recipes
app.get('/recipes', (req, res) => {
  res.json(recipes);
});

// GET request to retrieve a specific recipe by ID
app.get('/recipes/:id', (req, res) => {
  const recipe = recipes.find(r => r.id === parseInt(req.params.id));
  if (recipe) {
    res.json(recipe);
  } else {
    res.status(404).json({ message: 'Recipe not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

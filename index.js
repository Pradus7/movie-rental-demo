const express = require('express');
const mongoose = require('mongoose');

const home = require('./routes/home');
const customers = require('./routes/customers');
const genres = require('./routes/genres');
const movies = require('./routes/movies');

const app = express();

mongoose.connect("mongodb://localhost:27017/vidly", { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
  })
  .then(() => console.log('Successfully connected to database.'))
  .catch(err => console.log('Database connection failed: ', err));

app.use(express.json());
app.use('/', home);
app.use('/api/customers', customers);
app.use('/api/genres', genres);
app.use('/api/movies', movies);

const port = process.env.PORT || 7777;
app.listen(port, () => console.log(`Listening on port ${port}...`));
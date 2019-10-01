'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const pokemonRoutes = require('./routes/api/pokemon.js');


// const authRouter = require('./auth/router');
//
// const errorHandler = require('./middleware/500.js');
// const notFound = require('./middleware/404.js');
//changed something

const app = express();

app.use(cors());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(pokemonRoutes);

// app.use(authRouter);

// app.use(notFound);
// app.use(errorHandler);

module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => {
      console.log(`Server Up on ${port}`);
    });
  },
};

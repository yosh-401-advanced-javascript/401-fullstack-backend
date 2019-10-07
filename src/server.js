'use strict';

const express = require('express');
const cookieParser = require('cookie-parser');

const cors = require('cors');
const morgan = require('morgan');

const app = express();

const errorHandler = require('./middleware/500');
const notFound = require('./middleware/404');



const authRouter = require('./routes/auth');
const pokemonRoutes = require('./routes/poke-data');

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.use(authRouter);
app.use(pokemonRoutes);

app.use(notFound);
app.use(errorHandler);


module.exports = {
  server: app,
  start: (port) => {
    let PORT = port || process.env.PORT || 8080;
    app.listen(PORT, () => {
      console.log(`Server Up on ${PORT}`);
    });
  },
};

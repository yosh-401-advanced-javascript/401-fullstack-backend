'use strict';

const express = require('express');
const router = express.Router();
const superagent = require('superagent');
// const model = require('../model/pokemon');
// const POKEMON_API = 'https://pokeapi.co/api/v2/';

router.get('/pokemon', (request, response) => {
  superagent.get('https://pokeapi.co/api/v2/pokemon/1')
    .then(result => {
      let pokeString = JSON.stringify(result.body);
      response.send(pokeString);
      console.log(result.body);
    })
    .catch(console.error);
});


module.exports = router;







'use strict';

const express = require('express');
const router = express.Router();
const superagent = require('superagent');
// const model = require('../model/pokemon');
// const POKEMON_API = 'https://pokeapi.co/api/v2/';

router.get('/pokemon/:pokemonID', (request, response) => {
  const pokemonID = request.params.pokemonID;
  superagent.get(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`)
    .then(result => {
      let pokeData = result.body;
      pokeData.forms[0].name;
      response.json(pokeData);
    })
    .catch(console.error);
});

router.post('/pokemon/:userId', /*Authmiddleware*/ (request, response) => {
  const body = request.body;
  console.log(body);
});


module.exports = router;







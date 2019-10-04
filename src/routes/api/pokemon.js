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


      //Parse data as JSON into pokeData

      //Traverse PokeData object and construct new Pokemon Object to
      //be sent out as response to this end point (delivered to Pokemon Class DB Constructor)
      // console.log('POKEDATA', pokeData);
      // response(result.body);
      // const keys = Object.keys(result.body);

      // let newPokemon = {
      //   name: pokeData.name,
      //
      // };

      // console.log('POKEMON RESULTS:', result.text);

      // keys.forEach(
      // );

      response.json(pokeData);
      // console.log('POKEMON BODY',result.body);
    })
    .catch(console.error);
});

router.post('/pokemon/:userId', /*Authmiddleware*/ (request, response) => {
  const body = request.body;
  console.log(body);
});


module.exports = router;







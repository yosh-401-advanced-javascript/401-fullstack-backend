'use strict';

const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
// const user = require('../models/user/schema');

router.use(auth());
router.post('/pokeData/:id', (request, response, next) => {
  const pokeID = request.params.id;
  const data = request.body.data;
  request.user.note.set(pokeID, data);
  request.user.save();
  response.json({ });
  console.log(response.json);
  console.log(request.user);

});

router.get('/pokeData/:id', (request, response, next) => {
  const pokeID = request.params.id;
  const pokeData = request.user.note.get(pokeID);
  response.json({pokeData: pokeData});

});

router.put('/pokeData/:id', (request, response, next) => {
  const pokeID = request.params.id;
  const data = request.body.data;
  request.user.note.set(pokeID, data);
  request.user.save();
  response.json({});
  console.log(response.json);
  console.log(request.user);
});

router.delete('/pokeData/:id', (request, response, next) => {
  const pokeID = request.params.id;
  request.user.note.delete(pokeID);
  request.user.save();
  response.json({});
});

module.exports = router;

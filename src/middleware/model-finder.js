'use strict';

module.exports = (request, response, next) => {
  const modelName = request.parms.model;
  request.model = require(`../model/otherstuff${modelName}`);
  next();
};

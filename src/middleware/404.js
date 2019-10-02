'use strict';

module.exports = (request, response, next) => {
  response.status(404);
  response.statusMessage = 'Resource Not Found';
  response.json({ error: 'Not Found' });
};

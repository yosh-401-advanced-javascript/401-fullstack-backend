'use strict';

const schema = require('./schema.js');
const MongooseModel = require('../mongoose-model');

class Users extends MongooseModel { }

module.exports = new Users(schema);

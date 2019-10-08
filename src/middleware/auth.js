'use strict';

const User = require('../models/user/schema.js');

module.exports = (capability) => {
  return (request, response, next) => {
    try {
      console.log('schmoo', request.cookies.auth);
      let authType;
      let authString;
      if (request.headers.authorization !== undefined) {
        [authType, authString] = request.headers.authorization.split(/\s+/);
      } else if (request.cookies.auth !== undefined) {
        authType = 'bearer';
        authString = request.cookies.auth;
      }
      switch(authType.toLowerCase()){
      case 'basic':
        return _authBasic(authString);
      case 'bearer':
        return _authBearer(authString);
      default:
        return _authError();
      }
    } catch(error) {
      _authError(error);
    }

    function _authBasic(str) {
      let base64Buffer = Buffer.from(str, 'base64');
      let bufferString = base64Buffer.toString();
      let [username, password] = bufferString.split(':');
      let auth = { username, password };

      return User.authenticateBasic(auth)
        .then(user => _authenticate(user))
        .catch(_authError);
    }

    function _authBearer(authString) {
      return User.authenticateToken (authString)
        .then(user => _authenticate(user))
        .catch(_authError);
    }

    function _authenticate(user) {
      if (user && (!capability || user.can(capability))) {
        request.user = user;
        request.token = user.generateToken();
        next();
      } else {
        _authError();
      }
    }
    function _authError(error) {
      console.error(error);
      next('Invalid User ID/Password');
    }
  };
};

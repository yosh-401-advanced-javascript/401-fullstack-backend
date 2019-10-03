'use strict';



const User = require('../models/user/schema.js');

module.exports = (capabilitiy) => {
  return (request, response, next) => {

    try {
      let [authType, authString] = request.headers.authorization.split(/\s+/);

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
      let buferString = base64Buffer.toString();
      let [username, password] = buferString.split(':');
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
      if (user && (!capabilitiy || user.can(capabilitiy))) {
        request.user = user;
        request.token = user.generateToken();
        next();
      } else {
        _authError();
      }
    }
    function _authError() {
      next('Invalid User ID/Password');
    }
  };
};

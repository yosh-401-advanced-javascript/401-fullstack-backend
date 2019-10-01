'use strict';


const User = mongoose.Schema ({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  role: {type: String, default: 'user', enum: ['admin', 'user']},
  email: {type: String, required: true, unique: true},
});

const capabilities = {
  admin: ['create', 'read', 'update', 'delete'],
  user: ['create', 'read', 'update'],
};

//prehooks, is there any considerations we when making changes?
user.pre('save', async function () {
  if (this.isModified('password')) {
    this.password = await.bcrypt.hash(this.password, 10)
  }
});

//whenever user is saved. Hash the password

//auth?

//token validation?

user.statics.authenticateToken = function (token) {
  if (usedTokens.has)
};
    //basic auth
    //berer auth

//generate tokens

module.exports mongoose.schema

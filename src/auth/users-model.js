// import mongoose from 'mongoose';
// import bcrypt from 'bcrypt';
// import jtw from 'jsonwebtoken';
//
// const tokens = {};
// const users = new mongoose.Schema({
//   username: {type: String, required: true, unique: true},
//   password: {type:String, required: true },
//   email: {type: String},
//   role: {type: String, default: 'user', enum: ['admin', 'user']},
// });
//
// users.pre('save', (next) => {
//   bcrypt.hash(this.password, 10)
//       .then(hashedPassword => {
//         this.password = hashedPassword;
//         next();
//   })
//       .catch(console.error);
// });
//
// users.statics.createFromOauth = (email) => {
//
// }

const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcryptjs');

//added name, age, weight and avatar to UserSchema tle
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true, //calls .trim() on the value to get rid of whitespace
    unique: true, //note that the unique option is not a validator; we use mongoose-unique-validator to enforce it
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  weight: {
    type: Number,
  },
  avatar: {
    type: String,
  }
});

//this enforces emails to be unique"
UserSchema.plugin(uniqueValidator);

//this function will be called before a document is saved
UserSchema.pre('save', function (next) {
  let user = this;

  if (!user.isModified('password')) {
    return next();
  }

  //generate salt using 12 rounds and then use that salt with the received password string to generate hash
  bcrypt
    .genSalt(12)
    .then(salt => {
      return bcrypt.hash(user.password, salt);
    })
    .then(hash => {
      user.password = hash;
      next();
    })
    .catch(err => next(err));
});

module.exports = mongoose.model('User', UserSchema);
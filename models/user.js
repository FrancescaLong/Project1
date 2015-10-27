// user.js

// require dependencies
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    bcrypt = require('bcrypt'),
    salt = bcrypt.genSaltSync(10),
    express = require('express'),
    app = express(),
    ejs = require('ejs');

//require the module
require('dotenv').load(); //npm install dotenv --save


// also see express heroku app (linked in funnybiz)
var UserSchema = new Schema({
    email: { type: String,
           required: true,
           unique: true
         },
  passwordDigest: String  // hashed and salted version
  //maybe include the veg_Id here as well for likes?
});

var VegSchema = new Schema({
  name: String,
  recipeId: {
    rId1: String,
    rId2: String,
    rId3: String
  },
});


// create a new user with secure (hashed) password
UserSchema.statics.createSecure = function (email, password, callback) {
  // `this` references our schema  (???? MODEL??? )
  // store it in variable `user` because `this` changes context in nested callbacks
  console.log("this inside createSecure: ", this);
  var UserModel = this;

  // hash password user enters at sign up
  bcrypt.genSalt(function (err, salt) {
    console.log('salt: ', salt);  // changes every time
    bcrypt.hash(password, salt, function (err, hash) {
      console.log(hash);

      // create the new user (save to db) with hashed password
      UserModel.create({    
        email: email,
        passwordDigest: hash
      }, callback);
    });
  });
};






// authenticate user (when user logs in)
UserSchema.statics.authenticate = function (email, password, callback) {
  // find user by email entered at log in
  this.findOne({email: email}, function (err, foundUser) {
    console.log(foundUser);

    // throw error if can't find user
    if (!foundUser) {
      console.log('No user with email ' + email);
      callback("Error: no user found", null);  // better error structures are available, but a string is good enough for now
    // if found user, check if password is correct
    } else if (foundUser.checkPassword(password)) {
      callback(null, foundUser);
    } else {
      callback("Error: incorrect password", null);
  }
});
};




// compare password user enters with hashed password (`passwordDigest`)
UserSchema.methods.checkPassword = function (password) {
  // run hashing algorithm (with salt) on password user enters in order to compare with `passwordDigest`
  return bcrypt.compareSync(password, this.passwordDigest);
};




// define user model
var User = mongoose.model('User', UserSchema);

// export user model so it's available to server
module.exports = User;



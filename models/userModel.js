// usermodel.js

// require dependencies
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    bcrypt = require('bcrypt'), //might need bcryptjs
    salt = bcrypt.genSaltSync(10);




// also see express heroku app (linked in funnybiz)
var UserSchema = new Schema({
    userName: {type: String, required: true, unique: true},
    email:    {type: String, required: true, unique: true},
           /* this will prevent the email from being returned 
           every time - MAY BREAK THINGS - will need to send the regular email 
           address in the validataion because the hash is not returned */
    passwordDigest: String,  // hashed and salted version  
    veg_Id: {type: String}, //maybe include the veg_Id here as well for likes?
});





// create a new user with secure (hashed) password
UserSchema.statics.createSecure = function (userName, email, password, callback) {
  // `this` references our MODEL
  // store it in variable `user` because `this` changes context in nested callbacks
 // console.log("this inside createSecure: ", this);
  var UserModel = this;

  // hash password user enters at sign up
  bcrypt.genSalt(function (err, salt) {
    console.log('salt: ', salt);  // changes every time
    bcrypt.hash(password, salt, function (err, hash) {
      console.log(hash);

      // create the new user (save to db) with hashed password
      UserModel.create({    
        userName: userName,
        email: email,
        passwordDigest: hash
      }, callback);
    });
  });
};



// compare password user enters with hashed password (`passwordDigest`)
UserSchema.methods.checkPassword = function (password) {
  // run hashing algorithm (with salt) on password user enters in order to compare with `passwordDigest`
  return bcrypt.compareSync(password, this.passwordDigest);
};



// authenticate user (when user logs in)
UserSchema.statics.authenticate = function (email, password, callback) {
  // find user by email entered at log in
  this.findOne({email: email}, function (err, foundUser) {
    console.log(foundUser);

    // throw error if can't find user
    if (!foundUser) {
      console.log('No user with email ' + email);
      callback("Error: no user found", null);  
    // better error structures are available, but a string is good enough for now
    // if found user, check if password is correct
    } else if (foundUser.checkPassword(password)) {
      callback(null, foundUser);
    } else {
      callback("Error: incorrect password", null);
    }
  });
};






/* THESE NEED TO REMAIN AT THE BOTTOM OF THE FILE OR THE DATA WILL NOT BE CREATED PROPERLY  */

// define user model
var User = mongoose.model('User', UserSchema);

// export user model so it's available to server
module.exports = User;



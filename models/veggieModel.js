// REQUIREMENTS //
var mongoose = require('mongoose');


//require the module




var vegSchema = new mongoose.Schema({
  name: String,
  altName: String,
  searchName: String,
  rId: [String],
  mainImgUrl: String,
  vegPageImgUrl: [String]
});


var Veg = mongoose.model('Veg', vegSchema);

module.exports = Veg;






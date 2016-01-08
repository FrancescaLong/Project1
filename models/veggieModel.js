// REQUIREMENTS //
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;






var vegSchema = new Schema({
  name: String,
  altName: String,
  searchName: String,
  rId: [String],
  mainImgUrl: String,
  vegPageImgUrl: [String]
});


var Veg = mongoose.model('Veg', vegSchema);

module.exports = Veg;

console.log(Veg);

/* In the database, 
	the database is: veggie
	the collection name is: vegs


*/


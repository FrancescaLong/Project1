// REQUIREMENTS //
$(document).ready(function(){
console.log('sanity check: client-side js LOGIN.JS loaded');

//require the module
require('dotenv').load(); //npm install dotenv --save



var Veg = mongoose.model('Veg', vegSchema);


var vegSchema = new Schema({
  name: String,
  altName: String,
  searchName: String,
  rId: String,
  mainImgUrl: String,
  vegPageImgUrl: {
    url: String
  },
});


/* make a new Console document */
var artichoke = new Veg ({
 	name: 'artichoke',
 	altName: null,
 	searchName: 'artichoke',
 	rId: {'72b297','',''},
 	mainImgUrl: 'http://i.imgur.com/ScPBYbG.jpg',
 	vegPageImgUrl: {'http://i.imgur.com/kc7cO4d.jpg','http://i.imgur.com/MJAhrSd.jpg','http://i.imgur.com/xXs9EI5.jpg'}
});


});  /// CLOSING TAGS
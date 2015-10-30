var Veg = require('./veggieModel.js');

/* make a new Console document */
var artichoke = new Veg ({
 	name: 'artichoke',
 	altName: null,
 	searchName: 'artichoke',
 	rId: ['72b297','47623','1709'],
 	mainImgUrl: 'http://i.imgur.com/ScPBYbG.jpg',
 	vegPageImgUrl: ['http://i.imgur.com/kc7cO4d.jpg','http://i.imgur.com/MJAhrSd.jpg','http://i.imgur.com/xXs9EI5.jpg']
});
artichoke.save();



var Veg = require('./veggieModel.js');
var User = require('./userModel.js');


/* make a new Console document */
var artichoke = new Veg ({
 	name: 'Artichoke',
 	altName: null,
 	searchName: 'artichoke',
 	rId: ['72b297','47623','1709'],
 	mainImgUrl: 'http://i.imgur.com/ScPBYbG.jpg',
 	mainText: 'To prepare an artichoke, cut the tips off the leaves (the part with the spikes) and trim the stem to the base of the plant. Place it in a pot, stem side down, with water about an inch or two deep. Steam for approximately 30 minutes.',
 	mainImgThumbnailUrl: 'http://i.imgur.com/ScPBYbG.jpg',
 	vegPageImgUrl: ['http://i.imgur.com/kc7cO4d.jpg','http://i.imgur.com/MJAhrSd.jpg','http://i.imgur.com/xXs9EI5.jpg'],
 	vegPageCaption: ['Artichoke plant','Artichokes cooking in a pot','Artichoke hearts']
});
artichoke.save();
		
var asparagus = new Veg ({
 	name: 'Asparagus',
 	altName: null,
 	searchName: 'asparagus',
 	rId: ['5cc4a8','35731','35729'],
 	mainImgUrl: 'http://i.imgur.com/iVbEqFth.jpg',
 	mainText: 'To prepare the asparagus, cut from the bottom of the stalk until the knife slides easily through. You may have to slice off much of the stalk if the asparagus is large or old. Steam the asparagus or place it upright in a pot with an inch or so of water until tender, about 5 to 8 minutes. It can also be roasted, grilled, baked, fried, or sauteed.',
 	mainImgThumbnailUrl: 'http://i.imgur.com/iVbEqFt.jpg',
 	vegPageImgUrl: ['http://i.imgur.com/bF8xc7c.jpg?1','http://i.imgur.com/jOfw0MT.jpg?1','http://i.imgur.com/vlLkQ1x.jpg?1'],
 	vegPageCaption: ['Asparagus poking out','Asparagus ready to go','Asparagus with strawberries']
});
asparagus.save();
				


var eggplant = new Veg ({
 	name: 'Eggplant',
 	altName: null,
 	searchName: 'eggplant',
 	rId: ['36284','36277','38eaa8'],
 	mainImgUrl: 'http://i.imgur.com/yfTxSE1h.jpg',
 	mainText: 'Eggplant can be baked, roasted, grilled, fried, or cooked just about any way you want.',
 	mainImgThumbnailUrl: 'http://i.imgur.com/yfTxSE1.jpg',
 	vegPageImgUrl: ['http://i.imgur.com/p8niVoT.jpg?1','http://i.imgur.com/srcfyck.jpg?1','http://i.imgur.com/tCIStEH.jpg?1'],
 	vegPageCaption: ['Eggplant growing','Eggplant in a crate','Prepared eggplant']
});
eggplant.save();
				


var kailan = new Veg ({
 	name: 'Kai-lan',
 	altName: 'chinese broccoli',
 	searchName: 'kailan',
 	rId: ['48195','7770','e3d914'],
 	mainImgUrl: 'http://i.imgur.com/rdiJZbWh.jpg',
 	mainText: 'Kai-lan is also known as Chinese broccoli. To prepare it, trim the stalks and then blanche it making sure it is completely submerged in the water for about 2 minutes. When you remove it, you can serve it as is or saute it with garlic for a few minutes. Serve it with oyster sauce, butter, or any other topping you like.',
 	mainImgThumbnailUrl: 'http://i.imgur.com/rdiJZbW.jpg',
 	vegPageImgUrl: ['http://i.imgur.com/qjFtVwk.jpg?1','http://i.imgur.com/hPFDa1j.jpg','http://i.imgur.com/TDVBYcj.jpg?1'],
 	vegPageCaption: ['Kai-lan at the farmers market','Raw kai-lan','Kai-lan being sauteed']
 });
kailan.save();
				

var kohlrabi = new Veg ({
 	name: 'Kohlrabi',
 	altName: null,
 	searchName: 'kohlrabi',
 	rId: ['26936','0d5c38','10386'],
 	mainImgUrl: 'http://i.imgur.com/xmOQox0h.jpg?1',
 	mainText: 'Kohlrabi can be eaten raw or cooked like a potato. Slice off the ends and peel. If eating raw, slice it and serve. If cooking, it can be cut into sections and boiled then mashed or served as is.',
 	mainImgThumbnailUrl: 'http://i.imgur.com/xmOQox0h.jpg?1',
 	vegPageImgUrl: ['http://i.imgur.com/bSgnMcN.jpg?1','http://i.imgur.com/RNuBvit.jpg?1','http://i.imgur.com/H4RRhYr.jpg?1'],
 	vegPageCaption: ['Kohlrabi plant','Raw kohlrabi','Kohlrabi and carrots']
 });
kohlrabi.save();
				

var okra = new Veg ({
 	name: 'Okra',
 	altName: null,
 	searchName: 'okra',
 	rId: ['36731','14753','26946'],
 	mainImgUrl: 'http://i.imgur.com/XfAzfzzh.jpg',
 	mainText: 'Okra can be steamed, boiled, sauteed, used in stews or soups, or fried.',
 	mainImgThumbnailUrl: 'http://i.imgur.com/XfAzfzz.jpg',
 	vegPageImgUrl: ['http://i.imgur.com/zgZKbQ1.jpg?1','http://i.imgur.com/GCGoqM7.jpg?1','http://i.imgur.com/IjWpY5t.jpg?1'],
 	vegPageCaption: ['Okra plant','Okra sliced open','Fried okra']
 });
okra.save();
			

var romanesco = new Veg ({
 	name: 'Romanesco',
 	altName: 'romanesco cauliflower',
 	searchName: 'romanesco',
 	rId: ['9a85c3','45428'],
 	mainImgUrl: 'http://i.imgur.com/eB1Scpwh.jpg?2',
 	mainText: 'Romanesco is very similar to cauliflower and can be cooked the same way. Steam it, bake or grill it, or just eat it raw.',
 	mainImgThumbnailUrl: 'http://i.imgur.com/eB1Scpwh.jpg?2',
 	vegPageImgUrl: ['http://i.imgur.com/foBjSaG.jpg?1','http://i.imgur.com/9D2D8zS.jpg?1','http://i.imgur.com/zh0rjYr.jpg?1'],
 	vegPageCaption: ['Romanesco plant','Romanesco from above','Chopped romanesco']
 });
romanesco.save();
			

var rutabaga = new Veg ({
 	name: 'Rutabaga',
 	altName: null,
 	searchName: 'rutabaga',
 	rId: ['36574','27328','9683'],
 	mainImgUrl: 'http://i.imgur.com/oYsj0N4h.jpg',
 	mainText: 'Rutabagas are very similar to turnips. They can be cooked by boiling or baking them. Trim off the ends then slice into chunks and boil for 7 to 10 minutes or until soft. They can be served as is or mashed.',
 	mainImgThumbnailUrl: 'http://i.imgur.com/oYsj0N4.jpg',
 	vegPageImgUrl: ['http://i.imgur.com/jHwmLiE.jpg?1','http://i.imgur.com/huP0Wco.jpg?1','http://i.imgur.com/se2raiz.jpg?1'],
 	vegPageCaption: ['Freshly harvested rutabagas','Rutabagas for sale','Rutabagas and couscous']
 });
rutabaga.save();
			

var spaghettisquash = new Veg ({
 	name: 'Spaghetti-Squash',
 	altName: null,
 	searchName: 'spaghettisquash',
 	rId: ['29769','54325','48239'],
 	mainImgUrl: 'http://i.imgur.com/zLn7Vk3h.jpg',
 	mainText: 'Slice the squash in half (from the stem to the end) and scrape the seeds out of the middle. Cover the cut sides with olive oil and bake at 400 degrees for 40 to 50 minutes. When tender, scrape the squash out of the shell and serve with any sort of topping you like, including spaghetti sauce!',
 	mainImgThumbnailUrl: 'http://i.imgur.com/zLn7Vk3.jpg',
 	vegPageImgUrl: ['http://i.imgur.com/rAsE721.jpg?1','http://i.imgur.com/9bYuQ8w.jpg?1','http://i.imgur.com/dfCnD5b.jpg?1'],
 	vegPageCaption: ['Spaghetti Squash plant','Baked spaghetti squash','Prepared spaghetti squash']
 });
spaghettisquash.save();
			

var sunchoke = new Veg ({
 	name: 'Sunchoke',
 	altName: 'jerusalem artichoke',
 	searchName: 'sunchoke',
 	rId: ['47982','e0cbc4','31236'],
 	mainImgUrl: 'http://i.imgur.com/ryWQm9Nh.jpg',
 	mainText: 'Sunchokes are also known as jerusalem artichokes. Wash and peel them then boil for about 10 to 20 minutes or until tender. Slice  and eat them with butter, salt and pepper or any topping you like.',
 	mainImgThumbnailUrl: 'http://i.imgur.com/ryWQm9N.jpg',
 	vegPageImgUrl: ['http://i.imgur.com/XSghcLD.jpg?1','http://i.imgur.com/ru9dm5q.jpg?1','http://i.imgur.com/qMQDaRq.jpg?1'],
 	vegPageCaption: ['Sunchoke plant','Sunchokes on a plate','Sunchoke visits for dinner']
 });
sunchoke.save();
			






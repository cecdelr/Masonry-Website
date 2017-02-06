var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/*---MONGOOSE / MODEL CONFIG---*/
var postSchema = new Schema({
	title: String,
	description: String, //{ type: String, default: placeholder.jpg }
	image: String,
	body: String,
	created: { type: Date, default: Date.now } //default value for date
});

var Post = mongoose.model("Post", postSchema);

// connect to mongo function
//solution to "deprecated Promise library" from https://github.com/Automattic/mongoose/issues/4291
mongoose.Promise = global.Promise;
mongoose.connect('localhost:27017/DFM_Mockup_1');

var posts = [


	new Post({
		"title" : "Bubble Tea Place: Must Go!", 
		"description" : "This is a very delicious bubble tea place", 
		"image" : "https://static1.squarespace.com/static/5728bc1ae707ebe0b425b7c8/t/5742044fe707eb889470ed30/1463944273869/george_sbubbletea1.jpg?format=1500w"
	}),
	new Post({
		"title" : "Little Tokyo: Fun For The Family", 
		"description" : "This is a place in LA", 
		"image" : "https://jrafanan.files.wordpress.com/2011/03/little-tokyo-3-19-11-111.jpg"
	}),
	new Post({
		"title" : "Dragonfruit in SoCal", 
		"description" : "Find out more about this wonder fruit!", 
		"image" : "http://parade.com/wp-content/uploads/2013/08/dragon-fruit-ftr.jpg"
	}),
	new Post({
		"title" : "Taiko Ensembles To Watch Out For in 2017", 
		"description" : "Here's a list of groups that'll bring the beat in 2017", 
		"image" : "http://sohdaiko.org/wp/wp-content/uploads/2011/03/ECTC-group-shot.jpg"
	}),
	new Post({
		"title" : "What's Good in the Hood? Cheesecakes", 
		"description" : "Get to know this popular local Asian American staple.", 
		"image" : "http://www.seattlemag.com/sites/default/files/field/image/hood%20famous%20photo.JPG"
	}),
	new Post({
		"title" : "Celebrate the Year of the Rooster!", 
		"description" : "Lunar New Year events across the West Coast", 
		"image" : "https://upload.wikimedia.org/wikipedia/commons/c/cc/Seattle_-_Chinese_New_Year_2011_-_85.jpg"
	}),
	new Post({
		"title" : "Shiro Dreams of Sushi Too", 
		"description" : "Seattle sushi legend, Shiro Kashiba, opens a new location near the Pike Place area.", 
		"image" : "http://static.seattletimes.com/wp-content/uploads/2016/03/ad13d72e-e7ec-11e5-af38-76f25bfb6570-1020x754.jpg"
	}),
	new Post({
		"title" : "Asian American Representation in Television", 
		"description" : "We've come a long way with representation in television, movies, and media in general.", 
		"image" : "https://i.yomyomf.com/wp-content/uploads/2016/01/FreshOfftheBoat-711x400.jpg"
	}),
	new Post({
		"title" : "\"Allegiance\" on Broadway", 
		"description" : "George Takei’s brings the Japanese American interment camp experience in the form of a major Broadway musical.", 
		"image" : "https://i.yomyomf.com/wp-content/uploads/2016/01/cnoldglobe325297x001_r900x493-730x400.jpg"
	})


];

var done = 0;

for(var i = 0; i < posts.length; i++){
	posts[i].save(function(err, result){
		done++;
		if(done === posts.length){
			mongoose.disconnect();
		}
	});
}
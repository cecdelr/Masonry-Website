var express 	= require('express'),
	app 		= express(),
	mongoose 	= require('mongoose'),
	bodyParser 	= require('body-parser');

/*---APP CONFIG---*/
mongoose.connect("mongodb://localhost/DFM_Mockup_1");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

/*---MONGOOSE / MODEL CONFIG---*/

var postSchema = new mongoose.Schema({
	title: String,
	description: String,
	image: String,
	created: { type: Date, default: Date.now }
});

var Post = mongoose.model("Post", postSchema);

/*---ROUTES---*/

app.get("/", function(req, res){
	Post.find({}, function(err, posts){
		if(err){
			console.log(err);
		} else{
			res.render("index", {posts: posts});
		}
	});
});

app.listen("3000", function(){
	console.log("App Running at Port 3000");
});
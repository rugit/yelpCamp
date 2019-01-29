var express 		= require("express"),
	app 			= express(),
	bodyParser 		= require("body-parser"),
	mongoose 		= require("mongoose"),
	Campground 		= require("./models/campground"),
	Comment 		= require("./models/comment"),
	methodOverride  = require("method-override"),
	flash			= require("connect-flash"),
	seedDB  		= require("./seeds"),
	passport		= require("passport"),
	LocalStrategy 	= require("passport-local"),
	User 			= require("./models/user");

//requring routes
var commentRoutes 		= require("./routes/comments"),
	campgroundRoutes 	= require("./routes/campgrounds"),
	indexRoutes			= require("./routes/index");

mongoose.connect("mongodb://localhost/yelpCamp", { useNewUrlParser: true });
mongoose.set('useFindAndModify', false);

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());
//seedDB(); //seed the database with dummy data

//Passport configuration
app.use(require("express-session")({
	secret: "Encryption Key",
	resave: false,
	saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
	res.locals.currentUser = req.user;
	res.locals.error = req.flash("error");
	res.locals.success = req.flash("success");
	next();
});


//using route files
app.use(indexRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);
app.use("/campgrounds", campgroundRoutes);



app.listen(3000, function(){
	console.log("Yelp started");
});


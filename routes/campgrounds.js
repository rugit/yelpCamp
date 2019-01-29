var express = require("express");
var router 	= express.Router();
var Campground = require("../models/campground");
var middleware = require("../middleware");

//render all campgrounds
router.get("/", function(req, res){
	Campground.find({}, function(err, allCampgrounds){
		if(err){
			console.log(err);
		}else{
			res.render("campgrounds/index", {campgrounds: allCampgrounds, currentUser: req.user});
		}
	});
});

//add new campgeound form
router.get("/new", middleware.isLoggedIn, function(req, res){
	res.render("campgrounds/new");
});

//add new campground
router.post("/", middleware.isLoggedIn, function(req, res){
	var name = req.body.name;
	var image = req.body.image;
	var desc = req.body.description;
	var price = req.body.price;
	var user = {
		id: req.user.id,
		username: req.user.username
	}

	var newCampground = { "name": name, "image" : image, "description" : desc, "author": user, "price" : price};
	
	Campground.create(newCampground, function(err, newCampground){
		if(err){
			console.log(err);
		}else{
			res.redirect("/campgrounds");			
		}
	});

});


//show more details about campgrounds
router.get("/:id", function(req, res){
	Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
		if(err){
			console.log(err);
		} else{
			res.render("campgrounds/show", {campground: foundCampground});
		}
	});

});

//edit campground
router.get("/:id/edit", middleware.checkCampgroundOwnerShip, function(req, res){
	Campground.findById(req.params.id, function(err, foundCampground){
		if(err){
			console.log(err);
		}else{
			res.render("campgrounds/edit", {campground: foundCampground});
		}
	});
});


//update campground 
router.put("/:id/", middleware.checkCampgroundOwnerShip, function(req, res){
	Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground){
		if(err){
			console.log(err);
		}else{
			res.redirect("/campgrounds/" + req.params.id );
		}
	});

});

//destroy campground
router.delete("/:id/", middleware.checkCampgroundOwnerShip, function(req, res){
	Campground.findByIdAndRemove(req.params.id, function(err){
		if(err){
			res.redirect("/campgrounds");
		}else{
			res.redirect("/campgrounds");
		}
	});
});


module.exports = router;
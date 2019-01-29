var mongoose 	= require("mongoose"),
	Campground 	= require("./models/campground"),
	Comment 	= require("./models/comment");

var data = [
	{
		name: "Cloud's Rest",
		image: "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2FTK1PUJn0DMe-xfZqp4yU5aPtMto%3D%2F0x271%3A5225x3210%2F1600x900%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_image%2Fimage%2F54137641%2Fcamping_tents.0.jpg&f=1",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse purus massa, sagittis ac semper sed, semper sit amet lacus. Morbi tincidunt enim ut libero maximus molestie id sed justo. Aenean eget libero eu nibh ullamcorper malesuada. Cras a ultrices sem, vitae pulvinar arcu. Etiam non neque consectetur, rutrum enim sed, mattis diam. Aenean molestie vulputate volutpat. Aenean vehicula mauris nec orci lacinia, a tempus diam luctus. Curabitur mauris diam, faucibus eu neque in, tincidunt fringilla leo. Pellentesque tempus, turpis at mattis tincidunt, ante metus eleifend mauris, vel suscipit justo metus vel erat. Sed at volutpat leo. Aliquam at orci tincidunt, elementum dui a, pharetra risus. Sed et neque a quam varius tempus. "
	},
	{
		name: "Lake Laky",
		image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZVRHyS-5nC1G4Qs2R0P_0QmNiMXPkwtmV_toRHHDfsosKUpvgjA",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse purus massa, sagittis ac semper sed, semper sit amet lacus. Morbi tincidunt enim ut libero maximus molestie id sed justo. Aenean eget libero eu nibh ullamcorper malesuada. Cras a ultrices sem, vitae pulvinar arcu. Etiam non neque consectetur, rutrum enim sed, mattis diam. Aenean molestie vulputate volutpat. Aenean vehicula mauris nec orci lacinia, a tempus diam luctus. Curabitur mauris diam, faucibus eu neque in, tincidunt fringilla leo. Pellentesque tempus, turpis at mattis tincidunt, ante metus eleifend mauris, vel suscipit justo metus vel erat. Sed at volutpat leo. Aliquam at orci tincidunt, elementum dui a, pharetra risus. Sed et neque a quam varius tempus. "
		
	},
	{
		name: "Canyon Floor",
		image: "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fs3.amazonaws.com%2Fimagescloud%2Fimages%2Fmedias%2Fcamping%2Fcamping-tente.jpg&f=1",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse purus massa, sagittis ac semper sed, semper sit amet lacus. Morbi tincidunt enim ut libero maximus molestie id sed justo. Aenean eget libero eu nibh ullamcorper malesuada. Cras a ultrices sem, vitae pulvinar arcu. Etiam non neque consectetur, rutrum enim sed, mattis diam. Aenean molestie vulputate volutpat. Aenean vehicula mauris nec orci lacinia, a tempus diam luctus. Curabitur mauris diam, faucibus eu neque in, tincidunt fringilla leo. Pellentesque tempus, turpis at mattis tincidunt, ante metus eleifend mauris, vel suscipit justo metus vel erat. Sed at volutpat leo. Aliquam at orci tincidunt, elementum dui a, pharetra risus. Sed et neque a quam varius tempus. "		
	}
]

function seedDB(){

	Campground.deleteMany({}, function(err){
		// if(err){
		// 	console.log(err);
		// }else{
		// 	console.log("removed Campgrounds");

		// 	data.forEach(function(seed){
			
		// 	Campground.create(seed, function(err, data){
		// 		if(err){
		// 			console.log(err);
		// 		}else{
		// 			console.log("added a campground");
					
		// 			Comment.create({
		// 				text: "I wished there was internet",
		// 				author: "Homer"
		// 			}, function(err, comment){
		// 				if(err){
		// 					console.log(err);
		// 				}else{
		// 					data.comments.push(comment);
		// 					data.save();
		// 					console.log("Created new comment");
		// 				}
		// 			});
		// 		}
		// 	});

		// });
		// }
	});

	
}

module.exports = seedDB;
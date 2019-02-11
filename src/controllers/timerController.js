module.exports = {

	index(req, res, next){
		console.log("index called");
		res.render("timer/timer", {title: "Get ready to work!"});
	},


}
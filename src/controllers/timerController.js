module.exports = {

	getTimer(req, res, next){
		res.render("../views/timer/timer", {title: "Get ready to work!"});
	},


}
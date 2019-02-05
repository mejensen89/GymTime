module.exports = {
	init(app){

		const staticRoutes = require("../routes/static");
		const slideRoutes = require("../routes/slide");

		app.use(staticRoutes);
		app.use(slideRoutes);
	}
}
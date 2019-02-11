module.exports = {
	init(app){

		const staticRoutes = require("../routes/static");
		const slideRoutes = require("../routes/slide");
		const timerRoutes = require("../routes/timer");

		app.use(staticRoutes);
		app.use(slideRoutes);
	}
}
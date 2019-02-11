const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../db/models").User;
/*const authHelper = require("../auth/helpers");*/

module.exports = {
	init(app){

		app.use(passport.initialize());
		app.use(passport.session());

		passport.use(new LocalStrategy({
			usernameField: "email"
		}, (email, password, done) => {
			
		}))
	}
}
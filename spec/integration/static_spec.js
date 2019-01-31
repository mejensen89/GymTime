const request = require("request");
const server = require("../../src/server");
const base = "http://localhost/3000/";

describe("routes: static", ()=> {

	describe("GET /", ()=>{
		it("should render a view that contains the index page", (done)=>{
			request.get(base, (err, res, body)=> {
				expect(body).toContain("welcome to GymTime");
				done();
			})
		})
	})
})
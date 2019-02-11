const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000"

describe("routes : timer", ()=>{
	it("should render a view with the timer",(done)=>{
		request(base, (err, res, body)=>{
			expect(err).toBeNull();
			expect(body).toContain("Slide title");
			expect(body).toContain("This should pull the info of slide title and slide time from a database ");
			done();
		})
	})
})
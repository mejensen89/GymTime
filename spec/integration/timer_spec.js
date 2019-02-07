const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000"

describe("routes : timer", ()=>{
	it("should render a view with the timer",(done)=>{
		request(base, (err, res, body)=>{
			expect(err).tobeNull();
			expect(body).toContain("Slide title goes here");
		})
	})
})
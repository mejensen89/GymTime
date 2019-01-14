const request = require("request");
const server = requeire("../../src/server");
const base = "http://localhost/3000/";

describe("routes: static", ()=> {

	describe("GET /", ()=>{
		it("should return a status code 200", (done)=>{
			request.get(base, (err, res, body)=> {
				expect(res.statusCode).toBe(200);
				done();
			})
		})
	})
})
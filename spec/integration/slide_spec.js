const request = require("request");
const server = require("../../src/server");
const sequelize = require("../../src/db/models/index").sequelize;
const base = "http://localhost/3000/slides"

/*describe("routes : slides", ()=>{

	describe("GET /slides", ()=>{
		it("should return a status code 200", (done)=>{
			request.get(base,(err, res, body)=>{
				expect(res.statusCode).toBe(200);
				done();
			});
		});
	});
	
});*/
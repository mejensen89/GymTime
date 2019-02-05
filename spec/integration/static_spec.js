const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/";

describe('routes : static', () => {

 	describe('GET /', () => {
    	it('should contain "Welcome to Bloccit" in the body of the response', (done) => {
      		request.get(base, (err, res, body) => {
        		expect(body).toContain('Welcome to GymTime');
       			 done();
     		});
    	});
  	});

  	describe('GET/about', ()=>{
  		it("should render the 'about' view ", (done)=>{
  			request.get(`${base}about`, (err, res, body)=>{
  				expect(body).toContain("About GymTime");
  				done();
  			});
  		});
  	});

}); 
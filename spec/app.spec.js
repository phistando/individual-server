var  app = require('../app');
var request = require("request");
var supertest = require("supertest");
var base_url = "http://localhost:7000/";


describe("Express Server API", function () {
  describe('should return users json on get /users', function() {
    it("returns status code 200", function (done) {
      supertest(app)
        .get('/profile')
        .set('Accept', 'text/html')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });

    it("returns a correct json format", function (done) {
      supertest(app)
        .get('/profile')
        .expect({
          name: 'Sebastian Sim',
          email: 'phistando@yahoo.com',
          hobbies: 'archery and la kopi with friends',
          description: 'A programming learner trying to explore the web development world'
        }, done);
    });

  });
});

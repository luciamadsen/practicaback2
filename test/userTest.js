const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const User = require('../models/User');

chai.should();
chai.use(chaiHttp);

describe('Users API', () => {
    describe("GET /api/users", () => {
        it("It should GET all the users", (done) => {
            chai.request(app)
                .get("/api/users")
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('array');
                    done();
                });
        });
    });

});

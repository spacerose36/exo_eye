const chai = require('chai');
const expect = chai.expect;
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../index');

chai.use(chaiHttp);


describe('Validate entry point', (done) => {
    it('Validate message', (done) => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                const actualValue = res.body.info;
                expect(actualValue).to.be.equal('Planets and stars API')
                done();
            })
    })
})

describe('Validate stars endpoint', (done) => {
    it('Validate object', (done) => {
        chai.request(server)
            .get('/stars')
            .end((err, res) => {
                res.should.have.status(500);
                res.body.should.be.a('array');
                done();
            })
    })
})
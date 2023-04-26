const { expect } = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");
const { describe } = require("mocha");
chai.use(chaiHttp);
const server = require("../index");
const mongoose = require("mongoose");
const { catModel } = require("../db");

describe("API Tests", function () {
  let testCat;
  beforeEach(async () => {
    await catModel.deleteMany({});
    testCat = await catModel.create({
      name: "Sergent paws",
      colour: "Cat brown",
      evil: false,
    });
    testCat = JSON.parse(JSON.stringify(testCat));
  });
  //   console.log({ testCat });
  it("should create a cat", (done) => {
    chai
      .request(server)
      .post("/cats/create")
      .send({ name: "Major whiskers", colour: "green", evil: true })
      .end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(res.body).to.include({
          name: "Major whiskers",
          colour: "green",
          evil: true,
        });
        chai.expect(res.status).to.equal(201);
        done();
      });
  });
  after(async () => {
    await mongoose.disconnect();
  });

  it("Show all cats", (done) => {
    chai
      .request(server)
      .get("/cats/getAll")
      .end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(res.body).to.deep.include(testCat);
        done();
      });
  });
  after(async () => {
    await mongoose.disconnect();
  });

  it("Deletes cat", (done) => {
    chai
      .request(server)
      .delete("/cats/remove/testCat._id")
      .end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(testCat._id).to.deep.include(testCat._id);
        done();
      });
  });
  after(async () => {
    await mongoose.disconnect();
  });
});

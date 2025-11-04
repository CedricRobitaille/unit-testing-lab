const { expect } = require("chai");
const app = require("../server");
const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");
const user = require("../models/user");

const request = require("supertest");




const mockUserData = [
  {
    name: "Jane Doe",
    email: "janeDoe@mail.com",
    password: "password123",
    phoneNumber: "1234567890",
  },
];


before(() => {
  // Connect to the DB
  mongoose.connect(process.env.MONGODB_URI);

  // Once connected to the DB
  mongoose.connection.once("open", async () => {
    try {
      // Create a new user
      await user.create(mockUserData);
      done();
    } catch (error) {
      done(error);
    }
  })
})

// Test Cases go here
describe("GET /users", () => {
  it("responds with JSON containing the list of users", (done) => {
    // Use the request method to build  a request to our server
    request(app)
      // Choose which type of request we want to send
      .get("/users")
      // Test to ensure response is a JSON object
      .expect("Content-Type", /json/)
      // Test to ensure the status code is 200
      .expect(200)
      // end to see the response, and to end the request/response cycle
      .end((err, res) => {
        if (err) {
          done(err) // Notify Mocha about the error
        } else {
          // Test the response body
          expect(res.body.users).to.be.an("array"); // Users to be an array
          res.body.users.forEach((user) => {
            expect(user).to.have.property("name").that.is.a("string");
            expect(user).to.have.property("email").that.is.a("string");
          });
          done(); // Notify Mocha that the test is complete
        }
      })
  });
});


after((done) => {
  // Disconenct from the DB
  app.close(() => {
    // Drop the database
    mongoose.connection.db.dropDatabase(() => {
      // Close the connection to the DB
      mongoose.connection.close();
    });
    // Tell Mocha we're done
    done();
  })
})
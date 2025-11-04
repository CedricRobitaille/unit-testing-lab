const { expect } = require("chai");
const app = require("../server");

const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");
const user = require("../models/user");





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

after(() => {
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
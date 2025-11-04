const { expect } = require("chai");
const app = require("../server");

const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");
const user = require("../models/user");

before(() => {
  // Connect to the DB
  mongoose.connect(process.env.MONGODB_URI);

  // Once connected to the DB
  mongoose.connection.once("open", async () => {
    try {
      // Create a new user
      await UserActivation.create();
      done();
    } catch (error) {
      done(error);
    }
  })
})

// Test Cases go here

after(() => {
  // Disconenct from the DB
})
const { expect } = require("chai");
const app = require("../server");

const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");
const user = require("../models/user");

before(() => {
  // Connect to the DB
})

// Test Cases go here

after(() => {
  // Disconenct from the DB
})
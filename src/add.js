const add = (param1, param2) => {
  const param1Type = typeof param1;
  const param2Type = typeof param2
  
  // Check if both parameters are numbers
  if (param1Type === "number" && param2Type === "number") {
    // Both are numbers, so add them
    return param1 + param2;
  }

  //Check is both parameters are strings
  if (param1Type === "string" && param2Type === "string") {
    // Both are strings, so concatenate them
    return param1 + param2;
  }

  if ((param1Type === "string" && param2Type === "number") || (param1Type === "number" && param2Type === "string")) {
    return parseInt(param1) + parseInt(param2);
  }

  // If neither condition is met, return a default value or an error message
  return "Invalid input";
};

const unitTestExampleOne = () => {
  // Test adding two numbers
  console.log("Test 1: Adding two numbers (2 and 3)");
  console.log(add(2, 3) === 5 ? "Passed" : "Failed");
};

const unitTestExampleTwo = () => {
  // Test adding two non-numeric strings
  console.log('Test 2: Adding two non-numeric strings ("Hello " and "world")');
  console.log(add("Hello ", "world") === "Hello world" ? "Passed" : "Failed");
};

const unitTestExampleThree = () => {
  // Test adding two non-numeric strings
  console.log('Test 3: Adding two mismatched values ("1" and 1)');
  console.log(add("1", 1) === 2 ? "Passed" : "Failed");
};

unitTestExampleOne();
unitTestExampleTwo();
unitTestExampleThree();

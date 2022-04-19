require("dotenv").config(); // this line is mandatory when you want to read variables from the '.env' file
console.log(`My name is ${process.env.NAME}`);
console.log(`My city is ${process.env.CITY} and i am in love with it!`);
console.log(`I speak also ${process.env.LANGUAGE}`);

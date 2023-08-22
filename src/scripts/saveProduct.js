import readline from "readline";
import pool from "../config/sql.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const isValidString = (input) => {
  return /^[A-Za-z\s]+$/.test(input);
};

const isValidNumber = (input) => {
  return /^\d+$/.test(input);
};

rl.question("Enter product name: ", (name) => {
  if (!isValidString(name)) {
    console.log("Invalid name. Please enter a valid string.");
    rl.close();
    return;
  }
  rl.question("Enter product price: ", (price) => {
    if (!isValidNumber(price)) {
      console.log("Invalid price. Please enter a valid number.");
      rl.close();
      return;
    }
    rl.question("Enter product id: ", async (id) => {
      if (!isValidNumber(id)) {
        console.log("Invalid ID. Please enter a valid number.");
        rl.close();
        return;
      }
      await pool.query(
        "INSERT INTO product (name, price, product_id) VALUES ($1, $2, $3)",
        [name, price, id]
      );
      rl.close();
    });
  });
});

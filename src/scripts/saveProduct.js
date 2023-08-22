import readline from "readline";
import pool from "../config/sql.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter product name: ", (name) => {
  rl.question("Enter product price: ", (price) => {
    rl.question("Enter product id: ", async (id) => {
      await pool.query(
        "INSERT INTO product (name, price, product_id) VALUES ($1, $2, $3)",
        [name, price, id]
      );
      rl.close();
    });
  });
});

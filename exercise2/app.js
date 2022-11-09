const express = require("express");
const app = express();
const Wallet = require("./../exercise1/modules/wallet");
const wallet = new Wallet();

const hostname = "127.0.0.1";
const port = 3000;

class Balance {
  constructor() {
    this.balance = 100;

    this.getBalance = () => {
      return this.balance;
    };

    this.addBalance = (amount) => {
      console.log(amount);
      this.balance += amount;
      console.log(this.balance);
    };
  }
}

const balance = new Balance();

app.get("/", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
});

app.get("/deposit", (req, res) => {
  var amount = (req.query && req.query.amount) || 0;
  if (amount) {
    balance.addBalance(parseInt(amount));
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end(`Deposit request received : $${amount}`);
  } else {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Deposit request received");
  }
});

app.get("/address", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Address request received");
});

app.get("/balance", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  const walletBalance = balance.getBalance();
  res.end(`Wallet balance is : $ ${walletBalance}`);
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

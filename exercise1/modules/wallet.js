const SHA256 = require("crypto-js/sha256");
const EventEmitter = require("events");
const emitter = new EventEmitter();

class Wallet extends EventEmitter {
  getAddress() {
    // relace Math.random with crypto hash
    //   const address = Math.random(1000);

    const address = SHA256("walletAddress");
    console.log(`Wallet Address is ${address}`);
  }

  depositAmount(amount) {
    this.emit("deposited");
    console.log(`Amount : ${amount} deposited`);
  }
}

module.exports = Wallet;

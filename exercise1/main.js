const Wallet = require("./modules/wallet");
const wallet = new Wallet();

const EventEmitter = require("events");
const emitter = new EventEmitter();

wallet.getAddress();

const receviedTransaction = () => {
  console.log("Transaction received");
};
wallet.on("deposited", receviedTransaction);
wallet.depositAmount(100);

const fn = () => {
  console.log("call me.");
};

emitter.on("call", fn);
emitter.emit("call");

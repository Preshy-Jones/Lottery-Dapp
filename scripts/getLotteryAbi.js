const fs = require("fs");
const contract = JSON.parse(
  fs.readFileSync("../artifacts/contracts/Lottery.sol/Lottery.json", "utf8")
);
console.log(JSON.stringify(contract.abi));

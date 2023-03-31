require("@nomiclabs/hardhat-waffle");

function mnemonic() {
  try {
    return fs.readFileSync("./mnemonic.txt").toString().trim();
  } catch (e) {
    console.log("No mnemonic file found. If you are trying to publish this contract via Etherscan verify, you will need to have a mnemonic file. Otherwise, you can ignore this message!")
  }
  return "";
}

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    goerli: {
      url: "https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
      accounts: {
        mnemonic: mnemonic(),
      }
    }
  }
};

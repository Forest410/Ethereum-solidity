import web3 from "./web3";

/***
 * The following contract address and ABI are for a deployment of the Lottery contract made to the
 * Rinkeby Test Network. The contract itself was compiled using version 0.5.15 of the Solidity
 * compiler and NOT the latest compiler version, 0.6.0.
 *
 * See https://github.com/owanhunte/ethereum-solidity-course-updated-code/issues/2 for
 * further details on why.
 */
const contractAddress = "0x9972A7b3e63fD6cB184445a7888F78BC630dC4E7";

const abi = [
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    constant: false,
    inputs: [],
    name: "enter",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "getPlayers",
    outputs: [
      {
        internalType: "address payable[]",
        name: "",
        type: "address[]"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "manager",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [],
    name: "pickWinner",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "players",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  }
];

export default new web3.eth.Contract(abi, contractAddress);

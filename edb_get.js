var Web3 = require('web3')

const rpc = "http://127.0.0.1:7545" // local Ganache

// abi
const abi = [{"constant":false,"inputs":[{"name":"adr","type":"address"}],"name":"getsmth","outputs":[{"name":"mth","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"adr","type":"address"},{"name":"str","type":"string"},{"name":"num","type":"uint256"}],"name":"store","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]

// addr
const c_addr = "0x19a4bac624fc92d88efbdc86c66f5041acd14d67"

const pkey = "c335db07c8af4a7036c3d5d89a8f56e1390593e77046e0f02ab4443cf092b95f"
const wallet = "0xF1014518B7A48EF291A6b3437D696a56597B86Cf"

var web3 = new Web3(rpc)

var contract = new web3.eth.Contract(abi, c_addr)



console.log("Retrieving smth from edb")
contract.methods.getsmth("0x37A95120EdA595B2f9b06BA234C286FeEa40A229").call( (err, result)=> {
  console.log("stored is " + result)
  console.log("End")
})

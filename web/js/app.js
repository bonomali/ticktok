const rpc = "http://127.0.0.1:7545"; // local Ganache
const abi = [{"constant":!0,"inputs":[{"name":"adr","type":"address"}],"name":"getnum","outputs":[{"name":"num","type":"uint256"}],"payable":!1,"stateMutability":"view","type":"function"},{"constant":!0,"inputs":[{"name":"adr","type":"address"}],"name":"getsmth","outputs":[{"name":"mth","type":"string"}],"payable":!1,"stateMutability":"view","type":"function"},{"constant":!1,"inputs":[{"name":"adr","type":"address"},{"name":"str","type":"string"},{"name":"num","type":"uint256"}],"name":"store","outputs":[],"payable":!1,"stateMutability":"nonpayable","type":"function"}];

const c_addr = "0xb9074492fdf13554d0267da8fada1c8cdc3669d7";

var web3;
var edb;
var Tx;
var Buffer;

function init() {
  console.log("init");

  web3 = new Web3(new Web3.providers.HttpProvider(rpc));

  edb = web3.eth.contract(abi).at(c_addr);

  Tx = ethereumjs.Tx;
  Buffer = ethereumjs.Buffer;
}

function get() {
  let addr = $("#GaddressI").val();
  console.log("Retrieving smth from edb");
  $("#GresultBox").html("");
  edb.getsmth(addr, (err, result)=> {
    console.log("stored is " + result);
    console.log("End");
    $("#GresultBox").append( "smth: "+result +"<br/>");
    if (err === null) err = "OK";
    $("#GerrorBox").html(err);
  });
  edb.getnum(addr, (err, result)=> {
    console.log("stored is " + result);
    console.log("End");
    $("#GresultBox").append( "snum: "+result +"<br />");
    if (err === null) err = "OK";
    $("#GerrorBox").html(err);
  });
}

function set() {
  let addr = $("#SaddressI").val();
  let pk = Buffer.Buffer.from($("#SpkI").val(),'hex');
  let msg = $("#SmsgI").val();

  let num = parseInt($("#SnumI").val());
  web3.eth.getTransactionCount(addr, (err, txCount) => {

    let txObj = {
        nonce: txCount,
        gasLimit: web3.toHex(800000),
        gasPrice: web3.toHex(web3.toWei('10','gwei')),
        to: c_addr,
        data: edb.store.getData(addr, msg, num)
    };

    let tx = new Tx(txObj);
    tx.sign(pk)
    var sTx = tx.serialize()
    var raw = '0x'+ sTx.toString('hex')

    web3.eth.sendRawTransaction(raw, (err, result)=> {
      $("#SresultBox").html(result);
      if (err === null) err = "OK";
      $("#SerrorBox").html(err);
    });
  });
/*

    let sTx = tx.serialize();
    let raw = '0x'+ sTx.toString('hex');

    web3.eth.sendSignedTransaction(raw, (err, txHash) => {
      console.log('err:', err, 'txHash:', txHash);
    });*/
}

window.onload = init;

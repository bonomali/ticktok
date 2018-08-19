function buy() {
  let amount = 1;
  let tClass = 0;
  let addr = '0x37A95120EdA595B2f9b06BA234C286FeEa40A229';
  let seatStr = '0-8r9c';


  let a_addr = '0xF1014518B7A48EF291A6b3437D696a56597B86Cf';
  web3.personal.unlockAccount(a_addr, 'c335db07c8af4a7036c3d5d89a8f56e1390593e77046e0f02ab4443cf092b95f', 2000);
  let pk = Buffer.Buffer.from('c335db07c8af4a7036c3d5d89a8f56e1390593e77046e0f02ab4443cf092b95f', 'hex');
  ctri.updateCap(0, 10000, {from: a_addr}, (err, result)=> {
    console.log(err);
    console.log(result);
  });
  console.log('update Cap');

  ctri.sellToken(addr, seatStr, tClass, amount, {from: a_addr}, (err, result) => {
    console.log(err);
    console.log(result);
  });
}

function createCI() {

}

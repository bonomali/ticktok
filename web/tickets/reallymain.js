function buy() {
  let c_addr = localStorage.getItem('c_addr');
  let abi = JSON.parse(localStorage.getItem('abi'));
  let ctri = web3.eth.contract(abi).at(c_addr);

  let amount = 1;
  let tClass = 0;
  let addr = localStorage.getItem("u_addr");
  let seatStr = '0-' + Math.random().toString(36).substring(2,6);



  let a_addr = localStorage.getItem('admin');
  web3.personal.unlockAccount(a_addr, localStorage.getItem('admin-pk'), 2000);
  console.log('update Cap');
  ctri.updateCap(0, 10000, {from: a_addr}, (err, result)=> {
    if (err == null) {
      console.log(result);
      ctri.getToken(addr, (err, result) => {
        if (err == null) {
          result += seatStr+ ";";
          ctri.sellToken(addr, result, tClass, amount, {from: a_addr}, (err, result) => {
            if (err == null)
            console.log(result);
            window.location = "../Table_Responsive_v1/";
          });
        }
      });

    }
  });
}

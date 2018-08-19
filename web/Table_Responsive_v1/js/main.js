
(function ($) {
    "use strict";



})(jQuery);

let c_addr = localStorage.getItem('c_addr');
let abi = JSON.parse(localStorage.getItem('abi'));
let u_addr = localStorage.getItem('u_addr');

let ctri = web3.eth.contract(abi).at(c_addr);

ctri.getToken(u_addr, (err, result) => {
  if (result != null) {
    console.log(result);
    dynamic(result);
  } else {
    console.log(err);
  }
});

function dynamic(ticketStr) {

   ctri.getEventTitle( (err, result) => {
     let eT = result;
     ctri.getOrganizer( (err, result) => {
       let org = result;
       ctri.getTimestamp( (err, result) => {
         let time = result;
         let ar = [];
         ticketStr.split(';').forEach( function (tick) {
           if (tick == "") return;
           if (ar.includes(tick)) return;
           ar.push(tick);
           document.getElementById("targetPlace").innerHTML += "<tr id=\"resetTarget\">" +
                           "<td class=\"column1\">" + tick + "</td>" +
                           "<td class=\"column2\">" + time + "</td>" +
                           "<td>" + eT + "</td>" +
                           "<td> Normal </td>" +
                           "</tr>";
                         });
       })
     })
   });
}
/*if (localStorage.getItem("add") != null) {
	document.getElementById("targetPlace").innerHTML += "<tr id=\"resetTarget\">" +
									"<td class=\"column1\">" + "0-6c7a" + "</td>" +
									"<td class=\"column2\">" + "2017-09-29" + "</td>" +
									"<td class=\"column3\">" + "01:22" + "</td>" +
									"<td>JJ Lin World Tour 2018</td>" +
									"<td>Normal</td>" +
									"</tr>"


}*/

function reset() {
	let child = document.getElementById("resetTarget")
	child.parentNode.removeChild(child)
	localStorage.removeItem("add")
}

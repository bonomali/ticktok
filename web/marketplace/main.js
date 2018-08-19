// '.tbl-content' consumed little space for vertical scrollbar, scrollbar width depend on browser/os/platfrom. Here calculate the scollbar width .

let c_addr = localStorage.getItem('c_addr');
let abi = JSON.parse(localStorage.getItem('abi'));
let u_addr = localStorage.getItem('u_addr');

let ctri = web3.eth.contract(abi).at(c_addr);

ctri.getToken(u_addr, (err, result) => {
  if (result != null) {
    dynamic(result);
  } else {
    console.log(err);
  }
});

let classStr = [ "Normal", "Front Stage", "VIP"];
let price = [100, 300, 400];



function dynamic(ticketStr) {

   ctri.getEventTitle( (err, result) => {
     let eT = result;
     ctri.getOrganizer( (err, result) => {
       let org = result;
       ctri.getTimestamp( (err, result) => {
         let time = result;
         let counts = [0,0,0,0,0,0,0,0,0,0];
         let sellQs = [localStorage.getItem('sellQ-0'), localStorage.getItem('sellQ-1'), localStorage.getItem('sellQ-2')];
         let tq = [];
         ticketStr.split(';').forEach( function (tick) {
           if (tick == "") return;
           if (tq.includes(tick)) return;
           tq.push(tick);
           let i = tick.split('-')[0];
           if (sellQs[i]!=null) {
             if (!sellQs[i].includes(tick))

              counts[i]++;
          }
          else {
            counts[i]++;
          }
        });

         [0, 1, 2].forEach( function (i) {
           if (counts[i] == 0) return;
           document.getElementById("addHere").innerHTML +=  "<tr><td>"+ counts[i] +"</td>" +
            "<td>" +classStr[i] + "</td> " +
            "<td>" + price[i] + "</td>" +
            "<td>"+
              "<button class=\"mdl-button mdl-js-button mdl-button--primary\" onclick=\"sell("+i+")\">Sell</button></td></tr>"
           });
         })
     })
   });

   [0,1,2].forEach( function(i) {
     let q = localStorage.getItem('sellQ-'+i);
     if (q == null || q == "") return;
     if (q.endsWith(";")) q = q.substring(0,q.length-1);
     if (q.startsWith(";")) q = q.substring(1);
     let count = q.split(";").length;
     document.getElementById("sellplace").innerHTML +=  "<tr><td>"+ count +"</td>" +
         "<td>" +classStr[i] + "</td> " +
         "<td>" + price[i] + "</td>" +
         "<td>"+
           "<button class=\"mdl-button mdl-js-button mdl-button--primary\" onclick=\"buy("+i+")\">Buy</button></td></tr>";
   });
}

function sell(i) {
  ctri.getToken(u_addr, (err, result) => {
    if (result != null) {
      console.log(result);
      let ticks = result.split(";");
      for (let i=0;i<ticks.length; i++) {
        if (ticks[i].substring(0,1) == i) {
          let a = localStorage.getItem('sellQ-'+i);
          if (a === null) a="";
		   else a +=";"
          if (a.includes(ticks[i]))
            continue;
         ;
          localStorage.setItem('sellQ-'+i, a + ticks[i]);
          location.reload();
          break;

        };
      }

    } else {
      console.log(err);
    }
  });
}

function buy(i) {

  let c_addr = localStorage.getItem('c_addr');
  let abi = JSON.parse(localStorage.getItem('abi'));
  let ctri = web3.eth.contract(abi).at(c_addr);

  let amount = 1;
  let tClass = i;
  let addr = localStorage.getItem("u_addr");
  let q = localStorage.getItem("sellQ-"+i);
  if (q.endsWith(";")) q = q.substring(0,q.length-1);
  if (q.startsWith(";")) q = q.substring(1);
  let tqs =q.split(';');
  let seatStr = tqs.pop();
  localStorage.setItem("sellQ-"+i, tqs.join(';'));
  location.reload();

}

function openInNewTab() {
  var win = window.open('../Table_Responsive_v1/index.html', '_blank');
  localStorage.setItem("add", "yes");

  let child = document.getElementById("child");
  child.parentNode.removeChild(child);

  let par = document.getElementById("addHere")
  par.innerHTML += "<tr>" +
            "<td><font color=\"red\">1</font></td>" +
            "<td><font color=\"red\">Front Stage</font></td><td><font color=\"red\">300</font></td>" +
            "<td>" + "<button class=\"mdl-button mdl-js-button mdl-button--primary\">" +
              "<font color=\"red\">Sell</font>" +
            "</button></td>" +
          "</tr>"
  win.focus();
}

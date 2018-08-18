// '.tbl-content' consumed little space for vertical scrollbar, scrollbar width depend on browser/os/platfrom. Here calculate the scollbar width .

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
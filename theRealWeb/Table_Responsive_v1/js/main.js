
(function ($) {
    "use strict";

        
    

})(jQuery);
if (localStorage.getItem("add") != null) {
	document.getElementById("targetPlace").innerHTML += "<tr id=\"resetTarget\">" + 
									"<td class=\"column1\">" + "0-6c7a" + "</td>" +
									"<td class=\"column2\">" + "2017-09-29" + "</td>" +
									"<td class=\"column3\">" + "01:22" + "</td>" + 
									"<td>JJ Lin World Tour 2018</td>" +
									"<td>Normal</td>" +
									"</tr>"


}

function reset() {
	let child = document.getElementById("resetTarget")
	child.parentNode.removeChild(child)
	localStorage.removeItem("add")
}
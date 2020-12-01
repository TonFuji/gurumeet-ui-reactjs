
function mainMember() {

(function () {
   'use strict';

  //member sidebar
  /*
  $("#sidebar").click(function (event) {
    alert("Hello! I am an alert box!!");
    var toggle = $("#sidebar").is(":visible");
    if (toggle) {
      $("#siderbar").addClass("collapse");
    }
  });
  */

  window.onload = function() {
    var btnSidebarId = document.getElementById("btnSidebar");
    btnSidebarId.onclick = function(){
      //var toggle = $("#sidebar").is(":visible");
      //if (toggle) {
      //  $("#siderbar").addClass("collapse");
      // }
      };	

  };

}());


}
mainMember();
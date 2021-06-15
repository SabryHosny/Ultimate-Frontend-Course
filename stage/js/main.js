$(function (callback) {
   "use strict";

   // Toggle Sidebar
   $(".toggle-sidebar").on("click", function () {
      $(".sidebar, .content-area").toggleClass("no-sidebar");
   });

   // Toggle Submenu
   $(".toggle-submenu").on("click", function () {
      $(this).toggleClass("fa-angle-right fa-angle-down");
      console.log("hifffffff");
   });
});

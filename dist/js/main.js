$(function (callback) {
   "use strict";

   // Toggle Sidebar
   $(".toggle-sidebar").on("click", function () {
      $(".sidebar, .content-area").toggleClass("no-sidebar");
   });

   // Toggle Submenu
   $(".toggle-submenu").on("click", function () {
      $(this).find(".fa-angle-right").toggleClass("down");
      $(this).next(".child-links").slideToggle();
   });
});

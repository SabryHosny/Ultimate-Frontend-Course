$(function () {
   "use strict";
   $(".toggle-sidebar").on("click", function () {
      $(".sidebar, .content-area").toggleClass("no-sidebar");
   });
});
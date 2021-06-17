$(function () {
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

   // Toggle Fullscreen
   $(".toggle-fullscreen").on("click", function () {
      $(this).toggleClass("fullscreen");
      if ($(this).hasClass("fullscreen")) {
         openFullscreen();
      } else {
         closeFullscreen();
      }
   });

   // Toggle Settings-Box
   $(".toggle-settings").on("click", function () {
      $(this).parent(".settings-box ").toggleClass("hide-settings");
      $(this).find("i").toggleClass("fa-spin");
   });

   // Switch Theme Color
   var themesClasses = [];
   $(".color-options  li").each(function () {
      themesClasses.push($(this).data("theme"));
   });

   $(".color-options  li").on("click", function () {
      $("body").removeClass([...themesClasses])
         .addClass($(this).data("theme"));
      $(this).addClass("active").siblings().removeClass("active"); //siblings() => all this brothers
   });

   // Switch fonts
   var fontsFamilies = [];
   $(".font-item").each(function () {
      fontsFamilies.push($(this).data("font"));
   });

   $(".font-item").on("click", function () {
      $("body").removeClass([...fontsFamilies])
         .addClass($(this).data("font"));
      $(this).addClass("active").siblings().removeClass("active");
   });
});

/* Get the documentElement (<html>) to display the page in fullscreen */
var elem = document.documentElement;

/* View in fullscreen */
function openFullscreen() {
   if (elem.requestFullscreen) {
      elem.requestFullscreen();
   } else if (elem.webkitRequestFullscreen) {
      /* Safari */
      elem.webkitRequestFullscreen();
   } else if (elem.msRequestFullscreen) {
      /* IE11 */
      elem.msRequestFullscreen();
   }
}

/* Close fullscreen */
function closeFullscreen() {
   if (document.exitFullscreen) {
      document.exitFullscreen();
   } else if (document.webkitExitFullscreen) {
      /* Safari */
      document.webkitExitFullscreen();
   } else if (document.msExitFullscreen) {
      /* IE11 */
      document.msExitFullscreen();
   }
}

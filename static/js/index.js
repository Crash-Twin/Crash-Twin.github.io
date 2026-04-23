window.HELP_IMPROVE_VIDEOJS = false;

document.addEventListener("DOMContentLoaded", function () {
  var burgers = Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"));

  burgers.forEach(function (burger) {
    burger.addEventListener("click", function () {
      var target = document.getElementById(burger.dataset.target);

      burger.classList.toggle("is-active");
      if (target) {
        target.classList.toggle("is-active");
      }
    });
  });

  document.querySelectorAll(".navbar-menu .navbar-item").forEach(function (item) {
    item.addEventListener("click", function () {
      document.querySelectorAll(".navbar-burger, .navbar-menu").forEach(function (el) {
        el.classList.remove("is-active");
      });
    });
  });
});

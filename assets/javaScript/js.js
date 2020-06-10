// Hi Marko :)
// I only use javascript to detect when the css classes are in viewport in order to trigger them.
const loader = document.querySelector(".loader");
const preloader = document.querySelector(".preloader");
function init() {
  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.display = "none";

    preloader.style.display = "block";
    setTimeout(() => (preloader.style.opacity = 1), 50);
  }, 100);
}
init();

document.addEventListener("DOMContentLoaded", function () {
  const doc = document;
  const menuOpen = doc.querySelector(".menu");
  const menuClose = doc.querySelector(".close");
  const overlay = doc.querySelector(".overlay");

  menuOpen.addEventListener("click", () => {
    overlay.classList.add("overlay--active");
  });

  menuClose.addEventListener("click", () => {
    overlay.classList.remove("overlay--active");
  });

  // ps: disable on small devices!
  var $animationElements = $('.animation-element');
  var $window = $(window);

  // ps: Let's FIRST disable triggering on small devices!
  var isMobile = window.matchMedia("only screen and (min-width: 768px)");
  if (isMobile.matches) {
    $animationElements.removeClass('animation-element');
  }

  function checkIfInView() {

    var windowHeight = $window.height();
    var windowTopPosition = $window.scrollTop();
    var windowBottomPosition = (windowTopPosition + windowHeight);

    $.each($animationElements, function () {
      var $element = $(this);
      var elementHeight = $element.outerHeight();
      var elementTopPosition = $element.offset().top;
      var elementBottomPosition = (elementTopPosition + elementHeight);

      //check cards is within viewport
      if ((elementBottomPosition >= windowTopPosition) &&
        (elementTopPosition <= windowBottomPosition)) {
        $element.addClass('in-view');
      } else {
        $element.removeClass('in-view');
      }
    });
  }

  $window.on('scroll resize', checkIfInView);
  $window.trigger('scroll');

});
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("videoImg");
var modalImg = document.getElementById("videoImgZoom");
var captionText = document.getElementById("caption");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeme")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}
// Main scroll functions

$(document).ready(function () {
  // Targetting all links with class of smooth-scroll

  $(".smooth-scroll").on("click", function (event) {
    // Make sure this.hash has a value
    if (this.hash !== "") {
      // Prevent default anchor click behavior if this.hash has a value
      event.preventDefault();

      var hash = this.hash;

      // Using jQuery's scrollIntoView() method with "smooth" behavior for smooth scrolling
      $(hash)[0].scrollIntoView(
        {
          behavior: "smooth",
          block: "center",
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

// Blur effect using addClass

//  Targetting all nav-items

$(".nav-item").mouseenter(function () {
  $(this).addClass("light-border-thin");
});

$(".nav-item").mouseleave(function () {
  $(this).removeClass("light-border-thin");
});

// Targetting the social media links icons

$(".list-inline-item").mouseenter(function () {
  $(this, "i").addClass("zoom");
  $(this).siblings().addClass("blur");
});

$(".list-inline-item").mouseleave(function () {
  $(this, "i").removeClass("zoom");
  $(this).siblings().removeClass("blur");
});

// Targetting the buttons in the wine suggestion modal

$(".btn-blur").mouseenter(function () {
  $(this).siblings().addClass("blur");
});

$(".btn-blur").mouseleave(function () {
  $(this).siblings().removeClass("blur");
});

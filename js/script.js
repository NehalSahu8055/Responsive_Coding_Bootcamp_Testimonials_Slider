const icon_prev = document.querySelectorAll(".icon-prev");
const icon_next = document.querySelectorAll(".icon-next");
const slide1 = document.querySelector(".slide-1");
const slide2 = document.querySelector(".slide-2");


if (!slide1.classList.contains("hidden")) {
  for (var i = 0; i < icon_prev.length; i++) {
    icon_next[i].addEventListener("click", function () {
      slide1.classList.toggle("hidden");
      slide2.classList.toggle("hidden");
    });
    icon_prev[i].addEventListener("click", function () {
      slide1.classList.toggle("hidden");
      slide2.classList.toggle("hidden");
    });
  }
} else {
  for (var i = 0; i < icon_prev.length; i++) {
    icon_next[i].addEventListener("click", function () {
      slide1.classList.toggle("hidden");
      slide2.classList.toggle("hidden");
    });
    icon_prev[i].addEventListener("click", function () {
      slide1.classList.toggle("hidden");
      slide2.classList.toggle("hidden");
    });
  }
}

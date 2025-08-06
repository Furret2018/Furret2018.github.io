function changeColor() {
  var eleBody = document.getElementsByTagName("body")[0];

  var colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "purple",
    "AliceBlue",
  ];

  var randomColor = colors[Math.floor(Math.random() * colors.length)];
  eleBody.style.backgroundColor = randomColor;
}

function changeFont() {
  var eleBody = document.getElementsByTagName("body")[0];

  var fonts = [
    "Arial",
    "Times New Roman",
    "Courier New",
    "Verdana",
    "Georgia",
    "Comic Sans MS",
    "Impact",
  ];

  var randomFont = fonts[Math.floor(Math.random() * fonts.length)];
  eleBody.style.fontFamily = randomFont;
}

/** when click the li tag, active the link in its inner a tag */
function activeLink(event) {
  var ele = event.target;
  if (ele.tagName.toLowerCase() === "li") {
    ele = ele.firstElementChild;
  }

  if (ele.tagName.toLowerCase() === "a") {
    var links = document.querySelectorAll("nav>ul>li>a");
    for (var i = 0; i < links.length; i++) {
      links[i].classList.remove("active");
    }
    ele.classList.add("active");
  }
}
// document.addEventListener("DOMContentLoaded", function () {
//   var navItems = document.querySelectorAll("nav>ul>li");
//   for (var i = 0; i < navItems.length; i++) {
//     navItems[i].addEventListener("click", activeLink);
//   }

//   // Set the first link as active by default
//   if (navItems.length > 0) {
//     var firstLink = navItems[0].querySelector("a");
//     firstLink.classList.add("active");
//   }
// });

// document.querySelectorAll("nav>ul>li").forEach(function (li) {
//   li.addEventListener("click", function () {
//     window.location.href = this.firstElementChild.href;

//     // this.firstElementChild.classList.add("active");
//   });
// });

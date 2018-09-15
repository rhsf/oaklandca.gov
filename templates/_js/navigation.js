function hasClass(ele, cls) {
  return !!ele.className.match(new RegExp("(\\s|^)" + cls + "(\\s|$)"));
}

function addClass(ele, cls) {
  if (!hasClass(ele, cls)) ele.className += " " + cls;
}

function removeClass(ele, cls) {
  if (hasClass(ele, cls)) {
    var reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
    ele.className = ele.className.replace(reg, " ");
  }
}

function init() {
  document.getElementById("menu-toggle").addEventListener("click", toggleMenu);
  document.getElementById("close-menu").addEventListener("click", toggleMenu);
  document.getElementById("search-menu-toggle").addEventListener("click", toggleSearch);
}

//The actual fuction
function toggleMenu() {
  var ele = document.getElementsByTagName("body")[0];
  if (!hasClass(ele, "open")) {
    addClass(ele, "open");
  } else {
    removeClass(ele, "open");
  }
}

function toggleSearch(e) {
  var ele = document.getElementById("global-search-bar");
  e.preventDefault();
  if (!hasClass(ele, "lg:flex")) {
    addClass(ele, "lg:flex");
  } else {
    removeClass(ele, "lg:flex");
  }
}

//Prevent the function to run before the document is loaded
document.addEventListener("readystatechange", function () {
  if (document.readyState === "complete") {
    init();
  }
});

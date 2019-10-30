function fixFunction() {
  var x = document.getElementById("navbar");
  if (x.className === "menu") {
    x.className += " responsive";
  } else {
    x.className = "menu";
  }
}

function loaded() {
  document.getElementById("loading").classList.remove("active");
}
window.addEventListener("load", function () {
  setTimeout(loaded, 3100);
});

setTimeout(loaded, 8000);

window.onload = function () {
  document.querySelector("svg").classList.add("start");
};

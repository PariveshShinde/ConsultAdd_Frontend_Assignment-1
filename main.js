document.querySelector(".circle1").addEventListener("click", (e) => {
  alert("Green Circle");
  e.stopPropagation();
});
document.querySelector(".circle2").addEventListener("click", (e) => {
  alert("Yellow Circle");
  e.stopPropagation();
});
document.querySelector(".circle3").addEventListener("click", (e) => {
  alert("Blue Circle");
  e.stopPropagation();
});

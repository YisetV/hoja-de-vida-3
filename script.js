window.onscroll = function () {
  const btn = document.getElementById("btn-volver-arriba");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};


// BONUShacer que el botón suba al principio
document.getElementById("btn-volver-arriba").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
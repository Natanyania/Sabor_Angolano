(function () {
  var btn = document.getElementById("back-to-top");
  if (!btn) return;

  // Mostra o botão só depois de fazer scroll (ex: 300px)
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  });

  // Ao clicar, sobe suavemente até ao topo
  btn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
})();
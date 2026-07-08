
(function () {
  var root = document.documentElement;
  var STORAGE_KEY = "sabor-angolano-theme";

  function getPreferredTheme() {
    var stored = null;
    try {
      stored = localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      /* localStorage indisponível (ex: modo privado) — ignora */
    }
    if (stored === "dark" || stored === "light") return stored;
    var prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  }

  function updateButton(theme) {
    var btn = document.getElementById("theme-toggle");
    if (!btn) return;
    var icon = btn.querySelector(".theme-toggle-icon");
    if (icon) icon.textContent = theme === "dark" ? "☀️" : "🌙";
    btn.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
  }

  function applyTheme(theme) {
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
    } else {
      root.removeAttribute("data-theme");
    }
    updateButton(theme);
  }

  /* Aplica o tema o mais cedo possível, para evitar "flash" de tema errado */
  applyTheme(getPreferredTheme());

  document.addEventListener("DOMContentLoaded", function () {
    applyTheme(getPreferredTheme());

    var btn = document.getElementById("theme-toggle");
    if (btn) {
      btn.addEventListener("click", function () {
        var current = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
        var next = current === "dark" ? "light" : "dark";
        try {
          localStorage.setItem(STORAGE_KEY, next);
        } catch (e) {
          /* ignora se não for possível guardar */
        }
        applyTheme(next);
      });
    }
  });

  /* Se o utilizador nunca escolheu manualmente, segue a preferência do sistema */
  if (window.matchMedia) {
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener(
      "change",
      function (e) {
        var stored = null;
        try {
          stored = localStorage.getItem(STORAGE_KEY);
        } catch (err) {}
        if (!stored) {
          applyTheme(e.matches ? "dark" : "light");
        }
      }
    );
  }
})();

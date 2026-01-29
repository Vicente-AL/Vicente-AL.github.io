(function () {
  "use strict";

  // Footer year
  var yearEl = document.querySelector(".footer__year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  var toggle = document.querySelector(".nav__toggle");
  var links = document.querySelector(".nav__links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var isOpen = links.style.display === "flex";
      links.style.display = isOpen ? "" : "flex";
      links.style.position = isOpen ? "" : "absolute";
      links.style.top = isOpen ? "" : "100%";
      links.style.left = isOpen ? "" : "0";
      links.style.right = isOpen ? "" : "0";
      links.style.flexDirection = "column";
      links.style.gap = "0.5rem";
      links.style.padding = isOpen ? "" : "1rem 1.5rem";
      links.style.background = isOpen ? "" : "rgba(5, 8, 16, 0.98)";
      links.style.borderBottom = isOpen ? "" : "1px solid rgba(0, 212, 255, 0.12)";
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      var id = this.getAttribute("href");
      if (id === "#") return;
      var target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        if (links && window.getComputedStyle(links).display === "flex" && window.innerWidth <= 768) {
          links.style.display = "";
        }
      }
    });
  });

  // Optional: subtle fade-in on scroll for cards
  var observerOptions = { root: null, rootMargin: "0px 0px -60px 0px", threshold: 0.1 };
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      }
    });
  }, observerOptions);

  document.querySelectorAll("[data-skill], [data-project]").forEach(function (el) {
    el.style.opacity = "0";
    el.style.transform = "translateY(12px)";
    el.style.transition = "opacity 0.4s ease, transform 0.4s ease";
    observer.observe(el);
  });

  document.head.appendChild(
    Object.assign(document.createElement("style"), {
      textContent: "[data-skill].in-view, [data-project].in-view { opacity: 1 !important; transform: translateY(0) !important; }",
    })
  );
})();

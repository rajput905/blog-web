(() => {
  "use strict";

  const root = document.documentElement;
  root.classList.add("js");

  // ---------- Header: solid background after scrolling ----------
  const header = document.getElementById("siteHeader");

  function updateHeader() {
    header.classList.toggle("scrolled", window.scrollY > 60);
  }

  window.addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();

  // ---------- Show more / show less ----------
  document.querySelectorAll(".show-more").forEach((button) => {
    button.addEventListener("click", () => {
      const article = button.closest(".article");
      const isOpen = article.classList.toggle("open");

      button.setAttribute("aria-expanded", String(isOpen));
      button.textContent = isOpen ? "Show less" : "Show more";
    });
  });

  // ---------- Reveal sections as they scroll into view ----------
  const revealItems = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.15 }
    );

    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("visible"));
  }
})();
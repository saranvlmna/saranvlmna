(function () {
  "use strict";

  const select = (el, all = false) => {
    el = el.trim();
    return all
      ? [...document.querySelectorAll(el)]
      : document.querySelector(el);
  };

  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  /**
   * Navbar active state on scroll
   */
  let navbarlinks = select("#navbar .scrollto", true);
  const navbarlinksActive = () => {
    let position = window.scrollY + 200;
    navbarlinks.forEach((navbarlink) => {
      if (!navbarlink.hash) return;
      let section = select(navbarlink.hash);
      if (!section) return;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        navbarlink.classList.add("active");
      } else {
        navbarlink.classList.remove("active");
      }
    });
  };
  window.addEventListener("load", navbarlinksActive);
  document.addEventListener("scroll", navbarlinksActive);

  /**
   * Smooth scroll
   */
  const scrollto = (el) => {
    let elementPos = select(el).offsetTop;
    window.scrollTo({
      top: elementPos,
      behavior: "smooth"
    });
  };

  /**
   * Mobile nav toggle
   */
  on("click", ".mobile-nav-toggle", function () {
    select("body").classList.toggle("mobile-nav-active");
    this.classList.toggle("bi-list");
    this.classList.toggle("bi-x");
  });

  /**
   * Scroll on .scrollto click
   */
  on(
    "click",
    ".scrollto",
    function (e) {
      if (select(this.hash)) {
        e.preventDefault();
        let body = select("body");
        if (body.classList.contains("mobile-nav-active")) {
          body.classList.remove("mobile-nav-active");
          let navbarToggle = select(".mobile-nav-toggle");
          navbarToggle.classList.toggle("bi-list");
          navbarToggle.classList.toggle("bi-x");
        }
        scrollto(this.hash);
      }
    },
    true
  );

  /**
   * Back to top button
   */
  let backtotop = select(".back-to-top");
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 400) {
        backtotop.classList.add("active");
      } else {
        backtotop.classList.remove("active");
      }
    };
    window.addEventListener("load", toggleBacktotop);
    document.addEventListener("scroll", toggleBacktotop);
  }

  /**
   * Hero mouse glow effect
   */
  let heroGlow = select("#heroGlow");
  let heroSection = select("#hero");
  if (heroGlow && heroSection) {
    heroSection.addEventListener("mousemove", (e) => {
      heroGlow.style.left = e.clientX + "px";
      heroGlow.style.top = e.clientY + "px";
      heroGlow.style.opacity = "1";
    });
    heroSection.addEventListener("mouseleave", () => {
      heroGlow.style.opacity = "0";
    });
  }

  /**
   * Animated stat counters
   */
  const animateCounters = () => {
    let counters = select(".stat-number", true);
    counters.forEach((counter) => {
      let target = parseInt(counter.getAttribute("data-count"));
      let current = 0;
      let increment = target / 60;
      let timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          counter.textContent = target;
          clearInterval(timer);
        } else {
          counter.textContent = Math.floor(current);
        }
      }, 25);
    });
  };

  let statsSection = select(".stats");
  let statsAnimated = false;
  if (statsSection) {
    document.addEventListener("scroll", () => {
      if (statsAnimated) return;
      let pos = statsSection.getBoundingClientRect();
      if (pos.top < window.innerHeight && pos.bottom > 0) {
        statsAnimated = true;
        animateCounters();
      }
    });
  }

  /**
   * Page load initialization
   */
  window.addEventListener("load", () => {
    if (window.location.hash && select(window.location.hash)) {
      scrollto(window.location.hash);
    }

    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true,
      mirror: false
    });
  });

  /**
   * Hero type effect
   */
  const typed = select(".typed");
  if (typed) {
    let typed_strings = typed.getAttribute("data-typed-items");
    typed_strings = typed_strings.split(",");
    new Typed(".typed", {
      strings: typed_strings,
      loop: true,
      typeSpeed: 80,
      backSpeed: 40,
      backDelay: 2000
    });
  }
})();

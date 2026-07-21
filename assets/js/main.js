(function () {
  "use strict";

  var roles = [
    {
      period: "Jan 2025 — Present",
      title: "Senior Software Engineer",
      company: "Thought Minds",
      companyUrl: "https://www.thoughtminds.io/",
      summary:
        "Leveraging AI to revolutionize software development with a Half Human + Half AI approach — blending human creativity with AI precision to build advanced applications that improve efficiency and drive revenue growth."
    },
    {
      period: "Oct 2022 — Dec 2024",
      title: "Software Engineer",
      company: "Metric Tree Labs",
      companyUrl: "https://metrictreelabs.com/",
      summary:
        "Built custom software solutions, mobile apps, ERP systems, website design and MVP development. Delivered quality outputs to customers on time."
    },
    {
      period: "Aug 2021 — Oct 2022",
      title: "Software Engineer",
      company: "Codelattice Digital Solutions",
      companyUrl: "https://www.codelattice.com/",
      summary:
        "Contributed to a global tech-first agency across web, mobile, ecommerce and cloud computing for worldwide clients alongside 200+ technocrats spanning 8 offices."
    }
  ];

  var skillGroups = [
    { label: "Languages", items: ["TypeScript", "JavaScript", "Python"] },
    { label: "Backend", items: ["Node.js", "Express.js", "NestJS"] },
    { label: "Databases", items: ["MongoDB", "DynamoDB", "MySQL", "PostgreSQL"] },
    { label: "Architecture", items: ["Microservices", "Multitenant", "Git"] }
  ];

  var HOME_POST_LIMIT = 5;
  var posts = window.SITE_POSTS || [];

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function renderTimeline() {
    var el = document.getElementById("timeline");
    if (!el) return;
    el.innerHTML = roles
      .map(function (r) {
        return (
          '<div class="timeline-row">' +
          '<span class="timeline-period">' + escapeHtml(r.period) + "</span>" +
          "<div>" +
          "<h3>" + escapeHtml(r.title) + "</h3>" +
          '<p class="timeline-company"><a href="' + r.companyUrl + '" target="_blank" rel="noopener">' + escapeHtml(r.company) + "</a></p>" +
          '<p class="timeline-summary">' + escapeHtml(r.summary) + "</p>" +
          "</div>" +
          "</div>"
        );
      })
      .join("");
  }

  function renderSkills() {
    var el = document.getElementById("skillGroups");
    if (!el) return;
    el.innerHTML = skillGroups
      .map(function (g) {
        var chips = g.items
          .map(function (s) {
            return '<span class="tag tag-neutral">' + escapeHtml(s) + "</span>";
          })
          .join("");
        return (
          '<div class="skill-group">' +
          '<div class="skill-group-label">' + escapeHtml(g.label) + "</div>" +
          '<div class="tag-row">' + chips + "</div>" +
          "</div>"
        );
      })
      .join("");
  }

  function coverHtml(post) {
    return '<div class="cover-art" style="background-image:' + post.cover + '"></div>';
  }

  function renderPostGrid(gridEl, list) {
    gridEl.innerHTML = "";
    list.forEach(function (post) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "post-card";
      btn.innerHTML =
        '<div class="cover-wrap washed">' + coverHtml(post) + "</div>" +
        '<div class="post-card-body">' +
        '<span class="post-card-cat">' + escapeHtml(post.category) + "</span>" +
        "<h3>" + escapeHtml(post.title) + "</h3>" +
        '<p class="post-excerpt">' + escapeHtml(post.excerpt) + "</p>" +
        '<span class="post-meta">' + escapeHtml(post.date) + " · " + escapeHtml(post.readTime) + "</span>" +
        "</div>";
      btn.addEventListener("click", function () { openArticle(post.id); });
      gridEl.appendChild(btn);
    });
  }

  function renderWriting() {
    var featured = posts.filter(function (p) { return p.featured; })[0];
    var rest = posts.filter(function (p) { return !p.featured; });

    var featuredEl = document.getElementById("featuredPost");
    if (featuredEl && featured) {
      featuredEl.innerHTML =
        '<div class="cover-wrap washed">' + coverHtml(featured) + "</div>" +
        '<div class="post-featured-body">' +
        '<div class="post-meta-row"><span class="tag tag-accent">Featured</span><span class="post-meta-cat">' + escapeHtml(featured.category) + "</span></div>" +
        "<h3>" + escapeHtml(featured.title) + "</h3>" +
        '<p class="post-excerpt">' + escapeHtml(featured.excerpt) + "</p>" +
        '<span class="post-meta">' + escapeHtml(featured.date) + " · " + escapeHtml(featured.readTime) + "</span>" +
        "</div>";
      featuredEl.addEventListener("click", function () { openArticle(featured.id); });
    }

    var homeGrid = document.getElementById("postGrid");
    if (homeGrid) {
      renderPostGrid(homeGrid, rest.slice(0, HOME_POST_LIMIT));
      var viewAllEl = document.getElementById("viewAllWriting");
      if (viewAllEl) viewAllEl.hidden = rest.length <= HOME_POST_LIMIT;
    }

    var allGrid = document.getElementById("allPostGrid");
    if (allGrid) {
      renderPostGrid(allGrid, rest);
    }
  }

  var backdrop = null;
  var articleBody = null;
  var lastFocused = null;

  function renderBodyBlock(block) {
    if (typeof block === "string") {
      return "<p>" + escapeHtml(block) + "</p>";
    }
    if (block.type === "h3") {
      return "<h3>" + escapeHtml(block.text) + "</h3>";
    }
    if (block.type === "code") {
      return "<pre class=\"article-code\"><code>" + escapeHtml(block.text) + "</code></pre>";
    }
    if (block.type === "ul") {
      return "<ul class=\"article-list\">" + block.items.map(function (item) { return "<li>" + escapeHtml(item) + "</li>"; }).join("") + "</ul>";
    }
    if (block.type === "table") {
      var head = "<thead><tr>" + block.headers.map(function (h) { return "<th>" + escapeHtml(h) + "</th>"; }).join("") + "</tr></thead>";
      var body = "<tbody>" + block.rows.map(function (row) {
        return "<tr>" + row.map(function (cell) { return "<td>" + escapeHtml(cell) + "</td>"; }).join("") + "</tr>";
      }).join("") + "</tbody>";
      return '<div class="article-table-wrap"><table class="article-table">' + head + body + "</table></div>";
    }
    return "<p>" + escapeHtml(block.text) + "</p>";
  }

  function openArticle(id) {
    var post = posts.filter(function (p) { return p.id === id; })[0];
    if (!post) return;

    lastFocused = document.activeElement;

    var sourceLink = post.link
      ? '<p class="article-source"><a href="' + post.link + '" target="_blank" rel="noopener">Originally published on Medium ↗</a></p>'
      : "";

    articleBody.innerHTML =
      '<div class="post-meta-row"><span class="tag tag-accent">' + escapeHtml(post.category) + '</span><span class="post-meta-cat">' + escapeHtml(post.date) + " · " + escapeHtml(post.readTime) + "</span></div>" +
      "<h1>" + escapeHtml(post.title) + "</h1>" +
      '<div class="article-cover washed">' + coverHtml(post) + "</div>" +
      post.body.map(renderBodyBlock).join("") +
      sourceLink +
      '<div class="article-author">' +
      "<div>" +
      '<p class="article-author-name">Saranjith P</p>' +
      '<p class="article-author-role">Senior Software Engineer, Kochi</p>' +
      "</div>" +
      "</div>";

    backdrop.hidden = false;
    document.body.classList.add("no-scroll");
    var closeBtn = document.getElementById("articleClose");
    if (closeBtn) closeBtn.focus();
  }

  function closeArticle() {
    if (backdrop.hidden) return;
    backdrop.hidden = true;
    document.body.classList.remove("no-scroll");
    if (lastFocused && typeof lastFocused.focus === "function") lastFocused.focus();
  }

  function initOverlay() {
    backdrop = document.getElementById("articleBackdrop");
    articleBody = document.getElementById("articleBody");

    backdrop.addEventListener("click", function (e) {
      if (e.target === backdrop) closeArticle();
    });
    document.getElementById("articlePanel").addEventListener("click", function (e) {
      e.stopPropagation();
    });
    document.getElementById("articleClose").addEventListener("click", closeArticle);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeArticle();
    });
  }

  function initFooterYear() {
    document.getElementById("year").textContent = new Date().getFullYear();
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderTimeline();
    renderSkills();
    renderWriting();
    initOverlay();
    initFooterYear();
  });
})();

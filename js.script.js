// ===== EDIT YOUR CONTENT HERE =====
const CONFIG = {
  email: "",                                   // add your real email, e.g. "name@gmail.com"
  github: "https://github.com/kktano-eng",
  linkedin: ""                                 // optional profile URL
};

const coursework = ["Web Development", "Programming Fundamentals", "Data Structures", "Database Management", "Networking", "Systems Analysis & Design"];

const skills = [
  { name: "HTML5", group: "web", level: 4, label: "Strong" },
  { name: "CSS3", group: "web", level: 4, label: "Strong" },
  { name: "JavaScript", group: "web", level: 3, label: "Comfortable" },
  { name: "Python", group: "web", level: 2, label: "Learning" },
  { name: "Java / C++", group: "web", level: 2, label: "Learning" },
  { name: "Git & GitHub", group: "tools", level: 3, label: "Comfortable" },
  { name: "VS Code", group: "tools", level: 4, label: "Strong" },
  { name: "Figma", group: "tools", level: 2, label: "Learning" },
  { name: "MySQL", group: "tools", level: 2, label: "Learning" },
  { name: "Chrome DevTools", group: "tools", level: 3, label: "Comfortable" },
  { name: "Problem-solving", group: "soft", level: 4, label: "Strong" },
  { name: "Teamwork", group: "soft", level: 4, label: "Strong" },
  { name: "Time management", group: "soft", level: 3, label: "Comfortable" }
];

const projects = [
  { title: "TechHub Store", type: "Web", year: 2026, desc: "A shopping site with live search, category filters, sorting, and a cart that remembers your items.", tech: ["HTML", "CSS", "JavaScript"], link: "https://github.com/kktano-eng/-csit-web-final-2026" },
  { title: "Personal Portfolio", type: "Web", year: 2026, desc: "This site. Responsive, keyboard friendly, and built to load fast on phones.", tech: ["HTML", "CSS", "JavaScript"], link: "https://github.com/kktano-eng/-csit-web-final-2026" },
  { title: "Smarter Campus Study Spaces", type: "Design", year: 2026, desc: "A one-page infographic comparing IoT and AR, recommending IoT for finding open library seats, with privacy safeguards.", tech: ["Canva", "Research"], link: "" }
];

const journey = [
  { when: "2022 to present", what: "BS Information Technology", where: "University of San Agustin, Iloilo City" }
  // Add more, e.g. { when: "2020 to 2022", what: "Senior High School", where: "Your school" }
];

const values = [
  { t: "Punctuality", d: "I respect deadlines and other people's time." },
  { t: "Adaptability", d: "I stay calm when requirements or tools change." },
  { t: "Clean code", d: "I write readable, well-organized, commented code." },
  { t: "Collaboration", d: "I share knowledge, welcome feedback, and use version control." },
  { t: "Continuous learning", d: "I keep exploring new technologies." },
  { t: "Integrity", d: "I own my work and my mistakes." }
];

// ===== Helpers =====
const $ = (id) => document.getElementById(id);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const state = { skill: "all", project: "all", q: "", sort: "newest" };

// ===== Renderers =====
function renderStatic() {
  $("coursework").innerHTML = coursework.map((c) => `<li>${esc(c)}</li>`).join("");
  $("value-grid").innerHTML = values.map((v) => `<div class="card"><div><h3>${esc(v.t)}</h3><p>${esc(v.d)}</p></div></div>`).join("");
  $("timeline").innerHTML = journey.map((j) => `<li><strong>${esc(j.what)}</strong><span>${esc(j.where)} · ${esc(j.when)}</span></li>`).join("");
}

function renderSkills() {
  const list = skills.filter((s) => state.skill === "all" || s.group === state.skill);
  $("skill-grid").innerHTML = list.map((s) => `
    <div class="card"><div>
      <strong>${esc(s.name)}</strong>
      <div class="level" role="img" aria-label="${esc(s.label)}">${[1,2,3,4].map((n) => `<i class="${n <= s.level ? "on" : ""}"></i>`).join("")}</div>
      <span class="meta">${esc(s.label)}</span>
    </div></div>`).join("");
}

function renderProjects() {
  let list = projects.filter((p) =>
    (state.project === "all" || p.type === state.project) &&
    (p.title + p.desc + p.tech.join(" ")).toLowerCase().includes(state.q));
  list.sort((a, b) => state.sort === "az" ? a.title.localeCompare(b.title) : b.year - a.year);
  $("empty-msg").classList.toggle("hidden", list.length > 0);
  $("project-grid").innerHTML = list.map((p) => `
    <article class="card">
      <div><span class="meta">${esc(p.type)} · ${p.year}</span>
        <h3>${esc(p.title)}</h3><p>${esc(p.desc)}</p></div>
      <div class="tech">${p.tech.map((t) => `<span>${esc(t)}</span>`).join("")}</div>
      ${p.link ? `<a href="${esc(p.link)}" target="_blank" rel="noopener">View on GitHub</a>` : ""}
    </article>`).join("");
}

// ===== Tabs, search, sort =====
document.querySelectorAll(".tabs").forEach((box) => {
  box.addEventListener("click", (e) => {
    const tab = e.target.closest(".tab"); if (!tab) return;
    box.querySelectorAll(".tab").forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    if (box.dataset.group === "skills") { state.skill = tab.dataset.cat; renderSkills(); }
    else { state.project = tab.dataset.cat; renderProjects(); }
  });
});
$("search-input").addEventListener("input", (e) => { state.q = e.target.value.toLowerCase().trim(); renderProjects(); });
$("sort-select").addEventListener("change", (e) => { state.sort = e.target.value; renderProjects(); });

// ===== Contact drawer =====
const drawer = $("drawer"), overlay = $("overlay");
function openDrawer() { drawer.classList.add("open"); drawer.setAttribute("aria-hidden", "false"); overlay.classList.remove("hidden"); $("close-drawer").focus(); }
function closeDrawer() { drawer.classList.remove("open"); drawer.setAttribute("aria-hidden", "true"); overlay.classList.add("hidden"); $("contact-btn").focus(); }
$("contact-btn").addEventListener("click", openDrawer);
document.querySelectorAll("[data-open-contact]").forEach((b) => b.addEventListener("click", openDrawer));
$("close-drawer").addEventListener("click", closeDrawer);
overlay.addEventListener("click", closeDrawer);
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeDrawer(); });

const links = [];
if (CONFIG.email) links.push(`<a href="mailto:${esc(CONFIG.email)}">Email: ${esc(CONFIG.email)}</a>`);
if (CONFIG.github) links.push(`<a href="${esc(CONFIG.github)}" target="_blank" rel="noopener">GitHub profile</a>`);
if (CONFIG.linkedin) links.push(`<a href="${esc(CONFIG.linkedin)}" target="_blank" rel="noopener">LinkedIn profile</a>`);
$("contact-links").innerHTML = links.join("");
if (CONFIG.email) $("contact-form").classList.remove("hidden");

$("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = $("msg-name").value.trim(), text = $("msg-text").value.trim();
  location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent("Hello from " + name)}&body=${encodeURIComponent(text)}`;
  $("form-msg").textContent = "Opening your email app. Send the message there.";
});

// ===== Theme =====
function setTheme(t) { document.documentElement.dataset.theme = t; try { localStorage.setItem("theme", t); } catch (_) {} }
let saved = null; try { saved = localStorage.getItem("theme"); } catch (_) {}
setTheme(saved || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
$("theme-btn").addEventListener("click", () => setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark"));

renderStatic(); renderSkills(); renderProjects();
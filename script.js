/* ===== CSS Variables & Theme Setup ===== */
:root {
  --bg-primary: #0b0f19;
  --bg-secondary: #111827;
  --bg-card: #1f2937;
  --text-primary: #f9fafb;
  --text-secondary: #9ca3af;
  --accent: #3b82f6;
  --accent-hover: #2563eb;
  --border: #374151;
  --shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.4);
  --radius: 12px;
  --transition: all 0.25s ease;
}

[data-theme="light"] {
  --bg-primary: #f8fafc;
  --bg-secondary: #f1f5f9;
  --bg-card: #ffffff;
  --text-primary: #0f172a;
  --text-secondary: #475569;
  --accent: #2563eb;
  --accent-hover: #1d4ed8;
  --border: #e2e8f0;
  --shadow: 0 10px 25px -5px rgba(15, 23, 42, 0.08);
}

/* ===== Reset & Base ===== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  line-height: 1.6;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.container {
  width: 90%;
  max-width: 1140px;
  margin: 0 auto;
}

.section {
  padding: 5rem 0;
}

.section-alt {
  background-color: var(--bg-secondary);
}

.section-header {
  text-align: center;
  max-width: 600px;
  margin: 0 auto 3rem;
}

.section-header h2 {
  font-size: 2.2rem;
  margin-bottom: 0.5rem;
}

.section-header p {
  color: var(--text-secondary);
}

/* ===== Navbar ===== */
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: rgba(11, 15, 25, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
}

[data-theme="light"] .navbar {
  background-color: rgba(248, 250, 252, 0.85);
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
}

.logo {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--text-primary);
  text-decoration: none;
  letter-spacing: -0.5px;
}

.logo span {
  color: var(--accent);
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-links a {
  color: var(--text-secondary);
  text-decoration: none;
  font-weight: 500;
  transition: var(--transition);
}

.nav-links a:hover {
  color: var(--accent);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.icon-btn {
  background: var(--bg-card);
  border: 1px solid var(--border);
  color: var(--text-primary);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.1rem;
  display: grid;
  place-items: center;
  transition: var(--transition);
}

.icon-btn:hover {
  border-color: var(--accent);
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
}

.hamburger span {
  width: 24px;
  height: 2px;
  background-color: var(--text-primary);
  transition: var(--transition);
}

/* ===== Hero Section ===== */
.hero {
  padding: 7rem 0 6rem;
  text-align: center;
  background: radial-gradient(circle at top, rgba(59, 130, 246, 0.15), transparent 60%);
}

.badge {
  display: inline-block;
  padding: 0.35rem 0.9rem;
  background-color: rgba(59, 130, 246, 0.15);
  color: var(--accent);
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.hero h1 {
  font-size: clamp(2.2rem, 5vw, 3.75rem);
  font-weight: 800;
  line-height: 1.15;
  max-width: 800px;
  margin: 0 auto 1.25rem;
  letter-spacing: -1px;
}

.hero p {
  font-size: 1.15rem;
  color: var(--text-secondary);
  max-width: 620px;
  margin: 0 auto 2.25rem;
}

.hero-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

/* ===== Buttons ===== */
.btn {
  display: inline-block;
  padding: 0.8rem 1.6rem;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  border: none;
  font-size: 1rem;
  transition: var(--transition);
}

.btn-primary {
  background-color: var(--accent);
  color: #ffffff;
}

.btn-primary:hover {
  background-color: var(--accent-hover);
  transform: translateY(-2px);
}

.btn-secondary {
  background-color: var(--bg-card);
  color: var(--text-primary);
  border: 1px solid var(--border);
}

.btn-secondary:hover {
  border-color: var(--accent);
  transform: translateY(-2px);
}

.btn-link {
  background: none;
  border: none;
  color: var(--accent);
  font-weight: 600;
  cursor: pointer;
  padding: 0;
  margin-top: 1rem;
  font-size: 0.95rem;
}

.btn-link:hover {
  text-decoration: underline;
}

.full-width {
  width: 100%;
}

/* ===== Grid & Cards ===== */
.grid-3 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.75rem;
}

.card {
  background-color: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 2rem;
  box-shadow: var(--shadow);
  transition: var(--transition);
}

.card:hover {
  transform: translateY(-5px);
  border-color: var(--accent);
}

.feature-card .icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.card h3 {
  font-size: 1.25rem;
  margin-bottom: 0.6rem;
}

.card p {
  color: var(--text-secondary);
  font-size: 0.95rem;
}

.tag {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--accent);
  background: rgba(59, 130, 246, 0.12);
  padding: 0.25rem 0.65rem;
  border-radius: 6px;
  margin-bottom: 0.9rem;
}

/* ===== Filter & Search Controls ===== */
.controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2.5rem;
}

.filter-buttons {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 0.5rem 1rem;
  border-radius: 8px;
  border: 1px solid var(--border);
  background-color: var(--bg-card);
  color: var(--text-secondary);
  cursor: pointer;
  font-weight: 500;
  transition: var(--transition);
}

.filter-btn.active,
.filter-btn:hover {
  background-color: var(--accent);
  color: #ffffff;
  border-color: var(--accent);
}

.search-input {
  padding: 0.6rem 1rem;
  border-radius: 8px;
  border: 1px solid var(--border);
  background-color: var(--bg-card);
  color: var(--text-primary);
  min-width: 240px;
  font-size: 0.95rem;
}

.search-input:focus {
  outline: none;
  border-color: var(--accent);
}

.no-results {
  text-align: center;
  color: var(--text-secondary);
  margin-top: 2rem;
}

/* ===== Contact Form ===== */
.contact-container {
  max-width: 600px;
}

.contact-form {
  background-color: var(--bg-card);
  padding: 2.25rem;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
}

.form-group {
  margin-bottom: 1.25rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.4rem;
  font-weight: 600;
  font-size: 0.9rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: 1px solid var(--border);
  background-color: var(--bg-primary);
  color: var(--text-primary);
  font-family: inherit;
  font-size: 0.95rem;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--accent);
}

.error-msg {
  color: #ef4444;
  font-size: 0.8rem;
  display: block;
  margin-top: 0.3rem;
  min-height: 1rem;
}

.form-status {
  margin-top: 1rem;
  text-align: center;
  font-weight: 600;
  font-size: 0.95rem;
}

.form-status.success {
  color: #10b981;
}

/* ===== Modal ===== */
.modal {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: grid;
  place-items: center;
  z-index: 200;
  padding: 1rem;
}

.modal-content {
  background-color: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 2rem;
  max-width: 500px;
  width: 100%;
  position: relative;
}

.close-modal {
  position: absolute;
  top: 1rem;
  right: 1.25rem;
  background: none;
  border: none;
  color: var(--text-secondary);
  font-size: 1.75rem;
  cursor: pointer;
}

.modal-content h3 {
  margin-bottom: 0.75rem;
}

.modal-content p {
  color: var(--text-secondary);
}

.hidden {
  display: none !important;
}

/* ===== Footer ===== */
.footer {
  border-top: 1px solid var(--border);
  padding: 2rem 0;
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.back-to-top {
  color: var(--accent);
  text-decoration: none;
  font-weight: 600;
}

/* ===== Responsive Media Query ===== */
@media (max-width: 768px) {
  .nav-links {
    display: none;
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    background-color: var(--bg-card);
    flex-direction: column;
    padding: 1.5rem;
    border-bottom: 1px solid var(--border);
    gap: 1rem;
  }

  .nav-links.open {
    display: flex;
  }

  .hamburger {
    display: flex;
  }

  .search-input {
    width: 100%;
  }
}

import './style.css'
import {
  profile,
  stats,
  projects,
  navLinks,
  marqueeTech,
} from './data.ts'
import { initAnimations, initHeroEntrance } from './animations.ts'
import { initUi } from './ui.ts'
import { renderBeyondSection } from './about-visual.ts'
import { renderSocialIcons } from './social.ts'
import { renderSkillsSection, initSkillFilters } from './skills-section.ts'
import { renderContactSection, initContactForm } from './contact-section.ts'
import { renderJourneySection, initJourneyKeyboard } from './journey-section.ts'

const socialIcons = renderSocialIcons()

function externalLinkSvg() {
  return `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>`
}

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id="scroll-progress"></div>
  <div id="cursor-glow"></div>

  <div class="bg-grid min-h-screen relative">
    <div class="glow-orb glow-orb-blue w-[500px] h-[500px] -top-32 -right-32"></div>
    <div class="glow-orb glow-orb-cyan w-[400px] h-[400px] top-1/2 -left-48"></div>
    <div class="glow-orb glow-orb-purple w-[350px] h-[350px] bottom-0 right-1/4"></div>

    <!-- Navbar -->
    <header class="site-header sticky top-0 z-50">
      <div class="nav-bar">
        <a href="#home" class="nav-brand" aria-label="${profile.name} — Home">
          <span class="nav-brand-mark">V</span>
          <span class="nav-brand-text">
            <span class="nav-brand-name">${profile.displayName}</span>
            <span class="nav-brand-role">Full-Stack Developer</span>
          </span>
        </a>

        <nav class="nav-desktop" aria-label="Main navigation">
          <ul class="nav-list">
            ${navLinks
              .map(
                (link, i) =>
                  `<li><a href="${link.href}" class="nav-link"><span class="nav-link-index">${String(i + 1).padStart(2, '0')}</span>${link.label}</a></li>`
              )
              .join('')}
          </ul>
        </nav>

        <div class="nav-actions">
          <button type="button" class="nav-icon-btn" data-theme-toggle data-theme-icon aria-label="Switch to light mode"></button>
          <a href="#contact" class="nav-cta btn-primary">LET'S TALK ↗</a>
          <button
            type="button"
            id="menu-toggle"
            class="nav-menu-btn md:hidden"
            aria-label="Open menu"
            aria-expanded="false"
            aria-controls="mobile-menu"
          >
            <span class="nav-menu-icon" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </div>

      <div id="mobile-menu" class="nav-mobile-panel" aria-hidden="true">
        <div class="nav-mobile-backdrop" data-mobile-close></div>
        <nav class="nav-mobile-drawer" aria-label="Mobile navigation">
          <p class="nav-mobile-label">Navigation</p>
          <ul class="nav-mobile-list">
            ${navLinks
              .map(
                (link, i) =>
                  `<li><a href="${link.href}" class="nav-mobile-link mobile-nav-link"><span class="nav-link-index">${String(i + 1).padStart(2, '0')}</span>${link.label}</a></li>`
              )
              .join('')}
          </ul>
          <div class="nav-mobile-footer">
            <a href="#contact" class="btn-primary w-full justify-center mobile-nav-link">LET'S TALK ↗</a>
            <p class="nav-mobile-note">${profile.role}</p>
          </div>
        </nav>
      </div>
    </header>

    <main>
      <!-- ══════════════════════════════════════════════════════
           HERO  — Section 01
      ══════════════════════════════════════════════════════ -->
      <section id="home" class="hero-section relative overflow-hidden">
        <div class="container hero-container">

          <!-- Left: text block -->
          <div class="hero-text-col">
            ${profile.available ? `<div class="status-badge hero-enter hero-enter-1 mb-6"><span class="status-dot"></span> REMOTE WORLDWIDE</div>` : ''}

            <p class="hero-hello hero-enter hero-enter-2">HELLO, WORLD. I'M</p>

            <h1 class="hero-name hero-enter hero-enter-3">
              <span class="hero-name-plus">+</span>${profile.displayName}<span class="hero-name-dot">.</span>
            </h1>

            <h2 class="hero-role-line hero-enter hero-enter-4">
              <span class="hero-role-primary">FULL-STACK DEVELOPER</span>
              <span class="hero-role-sep"> &amp; </span>
              <span class="typing-cursor" id="typing-role"></span>
            </h2>

            <div class="hero-code-block hero-enter hero-enter-5" aria-hidden="true">
              <pre class="hero-code"><span class="code-kw">const</span> developer = {
  name: <span class="code-str">"Vishnu"</span>,
  focus: <span class="code-str">"full-stack"</span>,
  remote: <span class="code-str">"Worldwide"</span>,
  onSite: <span class="code-str">"Sri Lanka"</span>
};

<span class="code-kw">async function</span> <span class="code-fn">build</span>() {
  <span class="code-kw">const</span> idea = <span class="code-kw">await</span> imagine();
  <span class="code-kw">return</span> create(idea);
}

<span class="code-kw">while</span> (curious) {
  learn(); build(); improve();
}</pre>
            </div>

            <div class="hero-ctas hero-enter hero-enter-6">
              <a href="#work" class="btn-primary btn-magnetic">EXPLORE MY WORK ↗</a>
              <a href="${profile.github}" target="_blank" rel="noopener noreferrer" class="btn-secondary btn-magnetic">
                GitHub ${externalLinkSvg()}
              </a>
            </div>

            <p class="hero-scroll-hint hero-enter hero-enter-7">SCROLL TO ENTER ↓</p>
          </div>

          <!-- Right: photo + name block -->
          <div class="hero-photo-col hero-enter hero-enter-4">
            <div class="hero-photo-wrap">
              <img
                src="${profile.photo}"
                alt="${profile.name}"
                class="hero-photo"
              />
              <a href="${profile.github}" target="_blank" rel="noopener noreferrer" class="hero-photo-label">
                Show original photo ↗
              </a>
            </div>
            <div class="hero-name-block">
              <p class="hero-full-name">${profile.name.toUpperCase()}</p>
              <p class="hero-full-location">${profile.availability.toUpperCase()}</p>
            </div>
          </div>

        </div>

        <!-- Section indicators -->
        <div class="hero-section-tags" aria-hidden="true">
          <span class="hero-section-tag active">01 / THE INTRODUCTION</span>
          <span class="hero-section-tag">02 / MY UNIVERSE</span>
        </div>
      </section>

      <!-- Tech Marquee -->
      <div class="marquee-wrap" aria-hidden="true">
        <div class="marquee-track">
          ${[...marqueeTech, ...marqueeTech].map((tech) => `<span class="marquee-item">${tech}</span>`).join('')}
        </div>
      </div>

      <!-- ══════════════════════════════════════════════════════
           ABOUT  — Section 01 / THE INTRODUCTION
      ══════════════════════════════════════════════════════ -->
      <section id="about" class="section-border py-20 md:py-28">
        <div class="container">
          <div class="mb-12 reveal">
            <p class="section-label">01 / THE INTRODUCTION</p>
          </div>

          <div class="about-layout">
            <!-- About text -->
            <div class="about-text-col reveal-left">
              <h2 class="about-tagline">${profile.tagline}</h2>
              <p class="about-bio mt-6">${profile.about}</p>

              <div class="about-stats stagger-group mt-10">
                ${stats
                  .map(
                    (stat) => `
                  <div class="stat-card stagger-item">
                    <p class="stat-value"><span data-count="${stat.value}">0</span><span class="stat-plus">+</span></p>
                    <p class="stat-label">${stat.label}</p>
                  </div>`
                  )
                  .join('')}
              </div>

              <div class="about-edu-card mt-10 reveal">
                <p class="about-edu-degree">${profile.degree}</p>
                <p class="about-edu-school">${profile.faculty}, ${profile.university}</p>
                <p class="about-edu-period">${profile.studyPeriod}</p>
                <p class="about-edu-note">${profile.honoursNote}</p>
              </div>
            </div>

            <!-- Availability pill -->
            <div class="about-availability-col reveal-right">
              <div class="about-avail-card">
                <span class="status-dot"></span>
                <p class="about-avail-label">Available</p>
                <p class="about-avail-text">${profile.availability}</p>
                <p class="about-avail-note">${profile.availabilityNote}</p>
                <a href="#contact" class="btn-primary btn-magnetic mt-4">Remote worldwide ↗</a>
                <div class="about-social-row mt-4">${socialIcons}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ══════════════════════════════════════════════════════
           SKILLS  — Section 02 / MY UNIVERSE
      ══════════════════════════════════════════════════════ -->
      <section id="skills" class="section-border py-20 md:py-28">
        <div class="container">
          ${renderSkillsSection()}
        </div>
      </section>

      <!-- ══════════════════════════════════════════════════════
           JOURNEY  — Section 03 / THE TIME MACHINE
      ══════════════════════════════════════════════════════ -->
      <section id="journey" class="section-border py-20 md:py-28">
        <div class="container">
          ${renderJourneySection()}
        </div>
      </section>

      <!-- ══════════════════════════════════════════════════════
           WORK  — Section 04 / SELECTED WORK
      ══════════════════════════════════════════════════════ -->
      <section id="work" class="section-border py-20 md:py-28">
        <div class="container">
          <div class="mb-12 reveal">
            <p class="section-label">04 / SELECTED WORK</p>
            <p class="section-super-heading">EXPERIMENTS THAT BECAME SYSTEMS</p>
            <h2 class="section-heading mt-4">Ideas, made real.</h2>
            <p class="section-sub mt-2">A selection of platforms, services, and experiments.<br>Built with curiosity. Refined through doing.</p>
          </div>

          <div class="projects-grid stagger-group reveal-scale">
            ${projects
              .map(
                (project) => `
              <article class="project-card stagger-item${project.featured ? ' featured' : ''}">
                <!-- Card header -->
                <div class="project-card-header bg-gradient-to-br ${project.gradient}">
                  <span class="project-card-symbol">${project.cardSymbol}</span>
                  <span class="project-card-arrow">↗</span>
                </div>

                <!-- Card body -->
                <div class="project-card-body">
                  <div class="project-card-meta">
                    <span class="project-card-category">${project.category}</span>
                    <span class="project-card-tag">${project.tag}</span>
                  </div>

                  <h3 class="project-card-title">${project.cardName}</h3>
                  <p class="project-card-tagline">${project.cardTagline}</p>
                  <p class="project-card-desc">${project.description}</p>

                  <div class="project-tech-row">
                    ${project.tech.map((t) => `<span class="tech-tag">${t}</span>`).join('')}
                  </div>

                  <div class="project-card-footer">
                    <span class="project-card-keyword">${project.cardKeyword}</span>
                    <div class="project-links">
                      ${project.github ? `<a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link btn-magnetic">GitHub ${externalLinkSvg()}</a>` : ''}
                      ${project.demo ? `<a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="project-link btn-magnetic">Live ${externalLinkSvg()}</a>` : ''}
                    </div>
                  </div>
                </div>
              </article>`
              )
              .join('')}
          </div>

          <div class="projects-github-cta reveal mt-12">
            <p class="projects-github-text">THERE'S MORE IN THE REPOSITORIES</p>
            <a href="${profile.github}" target="_blank" rel="noopener noreferrer" class="btn-secondary btn-magnetic">
              Explore my GitHub ↗
            </a>
          </div>
        </div>
      </section>

      <!-- ══════════════════════════════════════════════════════
           BEYOND THE EDITOR  — Section 05
      ══════════════════════════════════════════════════════ -->
      <section id="beyond" class="section-border py-20 md:py-28">
        <div class="container">
          ${renderBeyondSection()}
        </div>
      </section>

      <!-- ══════════════════════════════════════════════════════
           CONTACT  — Section 06 / THE NEXT CHAPTER
      ══════════════════════════════════════════════════════ -->
      <section id="contact" class="section-border py-20 md:py-28">
        <div class="container">
          ${renderContactSection()}
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="site-footer">
      <div class="container footer-inner">
        <div class="footer-brand">
          <span class="footer-name">${profile.displayName}</span>
          <span class="footer-copy">© ${new Date().getFullYear()} ${profile.name}</span>
        </div>
        <div class="footer-links">
          <a href="${profile.github}" target="_blank" rel="noopener noreferrer" class="footer-link">GITHUB ↗</a>
          <button type="button" id="back-to-top" class="footer-link">BACK TO TOP ↑</button>
        </div>
      </div>
    </footer>
  </div>
`

// ─── Initialise ────────────────────────────────────────────────────────────────
initHeroEntrance()
initAnimations()
initUi()
initSkillFilters()
initContactForm()
initJourneyKeyboard()

// ─── Mobile menu ──────────────────────────────────────────────────────────────
const menuToggle = document.querySelector<HTMLButtonElement>('#menu-toggle')
const mobileMenu = document.querySelector<HTMLElement>('#mobile-menu')

function setMobileMenuOpen(open: boolean) {
  mobileMenu?.classList.toggle('open', open)
  document.body.classList.toggle('nav-open', open)
  menuToggle?.classList.toggle('is-open', open)
  menuToggle?.setAttribute('aria-expanded', String(open))
  menuToggle?.setAttribute('aria-label', open ? 'Close menu' : 'Open menu')
  mobileMenu?.setAttribute('aria-hidden', String(!open))
}

menuToggle?.addEventListener('click', () => {
  setMobileMenuOpen(!mobileMenu?.classList.contains('open'))
})

document.querySelectorAll('[data-mobile-close]').forEach((el) => {
  el.addEventListener('click', () => setMobileMenuOpen(false))
})

document.querySelectorAll('.mobile-nav-link').forEach((link) => {
  link.addEventListener('click', () => setMobileMenuOpen(false))
})

window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) setMobileMenuOpen(false)
})

// ─── Back to top ──────────────────────────────────────────────────────────────
document.getElementById('back-to-top')?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
})

// ─── Active nav highlight ─────────────────────────────────────────────────────
const sections = document.querySelectorAll('section[id]')
const navLinksEls = document.querySelectorAll('.nav-link')

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id')
        navLinksEls.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`)
        })
      }
    })
  },
  { rootMargin: '-40% 0px -55% 0px' }
)
sections.forEach((section) => navObserver.observe(section))

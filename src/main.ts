import './style.css'
import {
  profile,
  stats,
  projects,
  organizations,
  navLinks,
  marqueeTech,
} from './data.ts'
import { initAnimations, initHeroEntrance } from './animations.ts'
import { initUi } from './ui.ts'
import { aboutItVisual } from './about-visual.ts'
import { renderSocialIcons } from './social.ts'
import { renderSkillsSection, initSkillFilters } from './skills-section.ts'
import { renderContactSection, initContactForm } from './contact-section.ts'
import { renderJourneySection } from './journey-section.ts'

const socialIcons = renderSocialIcons()

function externalLinkSvg() {
  return `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>`
}

function arrowRightSvg() {
  return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`
}

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id="scroll-progress"></div>
  <div id="cursor-glow"></div>

  <div class="bg-grid min-h-screen relative">
    <div class="glow-orb glow-orb-blue w-[500px] h-[500px] -top-32 -right-32"></div>
    <div class="glow-orb glow-orb-cyan w-[400px] h-[400px] top-1/2 -left-48"></div>
    <div class="glow-orb glow-orb-purple w-[350px] h-[350px] bottom-0 right-1/4"></div>

    <!-- Navbar -->
    <header class="sticky top-0 z-50 border-b border-[var(--color-border)] backdrop-blur-xl" style="background: var(--color-header-bg)">
      <div class="container flex items-center justify-between py-4">
        <a href="#home" class="flex items-center gap-2.5 text-lg font-bold text-[var(--color-text)] no-underline">
          <span class="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--color-accent)]/10 text-[var(--color-accent)] font-mono text-sm">&lt;/&gt;</span>
          <span>${profile.shortName}<span class="text-[var(--color-accent)]">.</span></span>
        </a>
        <nav class="hidden items-center gap-8 md:flex">
          ${navLinks.map((link) => `<a href="${link.href}" class="nav-link">${link.label}</a>`).join('')}
        </nav>
        <div class="flex items-center gap-3">
          <button type="button" class="icon-btn" data-theme-toggle data-theme-icon aria-label="Switch to light mode"></button>
          <a href="#contact" class="btn-primary hidden text-sm md:inline-flex">Hire Me</a>
          <button id="menu-toggle" class="icon-btn md:hidden" aria-label="Toggle menu">
            <span class="flex flex-col gap-1">
              <span class="block h-0.5 w-5 bg-current"></span>
              <span class="block h-0.5 w-5 bg-current"></span>
            </span>
          </button>
        </div>
      </div>
      <nav id="mobile-menu" class="flex-col gap-4 border-t border-[var(--color-border)] px-6 py-4 md:hidden">
        ${navLinks.map((link) => `<a href="${link.href}" class="nav-link mobile-nav-link">${link.label}</a>`).join('')}
        <a href="#contact" class="btn-primary text-sm justify-center mobile-nav-link">Hire Me</a>
      </nav>
    </header>

    <main>
      <!-- Hero -->
      <section id="home" class="relative py-20 md:py-28 overflow-hidden">
        <div class="container">
          <div class="grid items-center gap-12 lg:grid-cols-2">
            <div>
              ${profile.available ? `<div class="status-badge hero-enter hero-enter-1 mb-6"><span class="status-dot"></span> Open to internships & collaborations</div>` : ''}
              <p class="font-mono text-sm text-[var(--color-accent)] mb-4 hero-enter hero-enter-2">Hello, I'm</p>
              <h1 class="mb-4 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl hero-enter hero-enter-3">
                <span class="gradient-text">${profile.shortName}</span>
              </h1>
              <h2 class="mb-6 text-xl font-medium md:text-2xl hero-enter hero-enter-4">
                <span class="gradient-text-accent typing-cursor" id="typing-role"></span>
              </h2>
              <p class="mb-8 max-w-lg text-base leading-relaxed text-[var(--color-muted)] hero-enter hero-enter-5">
                ${profile.tagline}
              </p>
              <div class="flex flex-wrap gap-4 mb-10 hero-enter hero-enter-6">
                <a href="#projects" class="btn-primary">View Projects ${arrowRightSvg()}</a>
                <a href="${profile.linkedin}" target="_blank" rel="noopener noreferrer" class="btn-secondary">LinkedIn ${externalLinkSvg()}</a>
              </div>
              <div class="flex items-center gap-4 hero-enter hero-enter-7">
                <span class="text-sm text-[var(--color-muted)]">Connect:</span>
                ${socialIcons}
              </div>
            </div>
            <div class="flex justify-center lg:justify-end hero-enter hero-enter-5">
              <div class="hero-photo-wrap">
                <span class="floating-badge floating-badge-1">BSc IT</span>
                <span class="floating-badge floating-badge-2">IEEEan</span>
                <span class="floating-badge floating-badge-3">AIESEC</span>
                <img src="${profile.photo}" alt="${profile.name}" class="hero-photo" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Tech Marquee -->
      <div class="marquee-wrap" aria-hidden="true">
        <div class="marquee-track">
          ${[...marqueeTech, ...marqueeTech].map((tech) => `<span class="marquee-item">${tech}</span>`).join('')}
        </div>
      </div>

      <!-- About & Stats -->
      <section id="about" class="relative border-t border-[var(--color-border)] py-20 md:py-28">
        <div class="container">
          <div class="mb-12 reveal">
            <p class="section-label mb-4">About Me</p>
            <h2 class="section-heading">Nice to meet you, I'm <span class="gradient-text-accent">${profile.name.split(' ')[0]}</span></h2>
          </div>
          <div class="grid items-center gap-12 lg:grid-cols-[1fr_auto]">
            <div class="reveal-left">
              <div class="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 stagger-group">
                ${stats
                  .map(
                    (stat) => `
                  <div class="stat-card stagger-item">
                    <p class="text-3xl font-bold md:text-4xl">
                      <span data-count="${stat.value}">0</span><span class="stat-plus">+</span>
                    </p>
                    <p class="mt-2 text-sm text-[var(--color-muted)]">${stat.label}</p>
                  </div>`
                  )
                  .join('')}
              </div>
              <p class="max-w-2xl text-base leading-relaxed text-[var(--color-muted)] mb-6">${profile.about}</p>
              <div class="glass-card inline-flex flex-col gap-2 p-4">
                <p class="text-sm font-semibold">${profile.education.degree}</p>
                <p class="text-sm text-[var(--color-muted)]">${profile.education.school} · ${profile.education.period}</p>
                <p class="font-mono text-xs text-[var(--color-accent)]">${profile.education.focus}</p>
              </div>
              <p class="mt-4 flex items-center gap-2 text-sm text-[var(--color-muted)]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                ${profile.location}
              </p>
            </div>
            ${aboutItVisual()}
          </div>
        </div>
      </section>

      <!-- Journey -->
      <section id="journey" class="relative border-t border-[var(--color-border)] py-20 md:py-28">
        <div class="container">
          ${renderJourneySection()}
        </div>
      </section>

      <!-- Skills -->
      <section id="skills" class="relative border-t border-[var(--color-border)] py-20 md:py-28">
        <div class="container">
          ${renderSkillsSection()}

          <!-- Organizations -->
          <div class="mt-16 grid gap-6 md:grid-cols-2 stagger-group reveal">
            ${organizations
              .map(
                (org) => `
              <div class="org-card stagger-item">
                <div class="mb-3 flex items-center gap-3">
                  <span class="text-2xl">${org.icon}</span>
                  <div>
                    <h3 class="font-semibold">${org.name}</h3>
                    <p class="text-sm text-[var(--color-accent)]">${org.role}</p>
                  </div>
                </div>
                <p class="text-sm leading-relaxed text-[var(--color-muted)]">${org.description}</p>
              </div>`
              )
              .join('')}
          </div>
        </div>
      </section>

      <!-- Projects -->
      <section id="projects" class="relative border-t border-[var(--color-border)] py-20 md:py-28">
        <div class="container">
          <div class="mb-12 reveal">
            <p class="section-label mb-4">Portfolio</p>
            <h2 class="section-heading">Featured projects & academic work</h2>
            <p class="mt-4 max-w-xl text-[var(--color-muted)]">A selection of web apps, Java systems, and creative work from my IT journey.</p>
          </div>
          <div class="reveal-scale">
          <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 stagger-group">
            ${projects
              .map(
                (project) => `
              <article class="project-card stagger-item ${project.featured ? 'featured' : ''}">
                <div class="project-image-wrap">
                  <img src="${project.image}" alt="${project.title} preview" class="project-image" loading="lazy" />
                  <div class="project-image-overlay"></div>
                  <span class="project-image-tag">${project.tag}</span>
                </div>
                <div class="p-6 project-body">
                  <h3 class="mb-3 text-xl font-bold">${project.title}</h3>
                  <p class="mb-4 text-sm leading-relaxed text-[var(--color-muted)]">${project.description}</p>
                  <div class="mb-5 flex flex-wrap gap-2">
                    ${project.tech.map((t) => `<span class="tech-tag">${t}</span>`).join('')}
                  </div>
                  <div class="flex gap-4">
                    ${project.github ? `<a href="${project.github}" class="project-link">${externalLinkSvg()} GitHub</a>` : ''}
                    ${project.demo ? `<a href="${project.demo}" class="project-link">${externalLinkSvg()} Live Demo</a>` : ''}
                  </div>
                </div>
              </article>`
              )
              .join('')}
          </div>
          </div>
        </div>
      </section>

      <!-- Contact -->
      <section id="contact" class="relative border-t border-[var(--color-border)] py-20 md:py-28">
        <div class="container">
          ${renderContactSection()}
        </div>
      </section>
    </main>

    <footer class="border-t border-[var(--color-border)] py-8">
      <div class="container flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p class="font-mono text-sm text-[var(--color-muted)]">
          &copy; ${new Date().getFullYear()} ${profile.name} · Built with passion
        </p>
        <div class="flex gap-2">${socialIcons}</div>
      </div>
    </footer>
  </div>

  <button type="button" id="back-to-top" class="back-to-top" aria-label="Back to top">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
  </button>
`

// Init animations
initHeroEntrance()
initAnimations()
initUi()
initSkillFilters()
initContactForm()

// Mobile menu
const menuToggle = document.querySelector<HTMLButtonElement>('#menu-toggle')
const mobileMenu = document.querySelector<HTMLElement>('#mobile-menu')

menuToggle?.addEventListener('click', () => mobileMenu?.classList.toggle('open'))
document.querySelectorAll('.mobile-nav-link').forEach((link) => {
  link.addEventListener('click', () => mobileMenu?.classList.remove('open'))
})

// Active nav
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

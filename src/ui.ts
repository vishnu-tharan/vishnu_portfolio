const STORAGE_KEY = 'portfolio-theme'

export function initUi() {
  initTheme()
  initBackToTop()
}

function getTheme(): 'dark' | 'light' {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'light' || stored === 'dark') return stored
  return 'dark'
}

function setTheme(theme: 'dark' | 'light') {
  document.documentElement.setAttribute('data-theme', theme)
  localStorage.setItem(STORAGE_KEY, theme)
  updateThemeIcon(theme)
}

function updateThemeIcon(theme: 'dark' | 'light') {
  document.querySelectorAll('[data-theme-icon]').forEach((btn) => {
    const el = btn as HTMLElement
    el.innerHTML = theme === 'dark' ? sunIcon() : moonIcon()
    el.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode')
  })
}

function sunIcon() {
  return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`
}

function moonIcon() {
  return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>`
}

function initTheme() {
  const theme = getTheme()
  document.documentElement.setAttribute('data-theme', theme)
  updateThemeIcon(theme)

  document.querySelectorAll('[data-theme-toggle]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark'
      setTheme(current === 'dark' ? 'light' : 'dark')
    })
  })
}

function initBackToTop() {
  const btn = document.getElementById('back-to-top')
  if (!btn) return

  const toggle = () => {
    btn.classList.toggle('visible', window.scrollY > 400)
  }

  window.addEventListener('scroll', toggle, { passive: true })
  toggle()

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  })
}

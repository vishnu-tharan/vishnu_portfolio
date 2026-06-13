export function initAnimations() {
  initScrollProgress()
  initRevealObserver()
  initCounters()
  initTypingRole()
  initParallax()
  initCursorGlow()
  initHeaderScroll()
  initMagneticButtons()
}

function initScrollProgress() {
  const bar = document.getElementById('scroll-progress')
  if (!bar) return

  const update = () => {
    const scrollTop = window.scrollY
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
    bar.style.width = `${progress}%`
  }

  window.addEventListener('scroll', update, { passive: true })
  update()
}

function initRevealObserver() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return

        const el = entry.target as HTMLElement
        el.classList.add('visible')

        el.querySelectorAll('.skill-bar-fill').forEach((bar) => {
          const level = bar.getAttribute('data-level')
          if (level) (bar as HTMLElement).style.width = `${level}%`
        })

        el.querySelectorAll('.stagger-item').forEach((child, i) => {
          ;(child as HTMLElement).style.transitionDelay = `${i * 80}ms`
          child.classList.add('visible')
        })

        observer.unobserve(el)
      })
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  )

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-group').forEach((el) => {
    observer.observe(el)
  })
}

function initCounters() {
  const counters = document.querySelectorAll('[data-count]')

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return

        const el = entry.target as HTMLElement
        const target = parseInt(el.getAttribute('data-count') ?? '0', 10)
        const suffix = el.getAttribute('data-suffix') ?? ''
        const duration = 1600
        const start = performance.now()

        const tick = (now: number) => {
          const elapsed = now - start
          const progress = Math.min(elapsed / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          el.textContent = `${Math.round(target * eased)}${suffix}`

          if (progress < 1) requestAnimationFrame(tick)
        }

        requestAnimationFrame(tick)
        observer.unobserve(el)
      })
    },
    { threshold: 0.5 }
  )

  counters.forEach((c) => observer.observe(c))
}

function initTypingRole() {
  const el = document.getElementById('typing-role')
  if (!el) return

  const roles = [
    'Software Developer',
    'Front-End Engineer',
    'Java Developer',
    'IT Student',
    'Video Editor',
  ]
  let roleIndex = 0
  let charIndex = 0
  let deleting = false

  const type = () => {
    const current = roles[roleIndex]

    if (!deleting) {
      charIndex++
      el.textContent = current.slice(0, charIndex)
      if (charIndex === current.length) {
        deleting = true
        setTimeout(type, 2200)
        return
      }
      setTimeout(type, 70)
    } else {
      charIndex--
      el.textContent = current.slice(0, charIndex)
      if (charIndex === 0) {
        deleting = false
        roleIndex = (roleIndex + 1) % roles.length
        setTimeout(type, 400)
        return
      }
      setTimeout(type, 35)
    }
  }

  setTimeout(type, 1200)
}

function initParallax() {
  const photo = document.querySelector<HTMLElement>('.hero-photo-wrap')
  const hero = document.getElementById('home')
  if (!photo || !hero || window.matchMedia('(max-width: 768px)').matches) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  hero.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    photo.style.transform = `perspective(900px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateZ(0)`
  })

  hero.addEventListener('mouseleave', () => {
    photo.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg)'
  })
}

function initCursorGlow() {
  const glow = document.getElementById('cursor-glow')
  if (!glow || window.matchMedia('(max-width: 768px)').matches) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  let visible = false
  document.addEventListener('mousemove', (e) => {
    glow.style.left = `${e.clientX}px`
    glow.style.top = `${e.clientY}px`
    if (!visible) {
      glow.style.opacity = '1'
      visible = true
    }
  })

  document.addEventListener('mouseleave', () => {
    glow.style.opacity = '0'
    visible = false
  })
}

function initHeaderScroll() {
  const header = document.querySelector('header')
  if (!header) return

  let lastY = window.scrollY

  window.addEventListener(
    'scroll',
    () => {
      const y = window.scrollY
      if (y > 80) header.classList.add('header-scrolled')
      else header.classList.remove('header-scrolled')

      if (y > lastY && y > 200) header.classList.add('header-hidden')
      else header.classList.remove('header-hidden')

      lastY = y
    },
    { passive: true }
  )
}

function initMagneticButtons() {
  if (window.matchMedia('(max-width: 768px)').matches) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  document.querySelectorAll('.btn-primary, .btn-secondary').forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
      const ev = e as MouseEvent
      const el = btn as HTMLElement
      const rect = el.getBoundingClientRect()
      const x = ev.clientX - rect.left - rect.width / 2
      const y = ev.clientY - rect.top - rect.height / 2
      el.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`
    })
    btn.addEventListener('mouseleave', () => {
      ;(btn as HTMLElement).style.transform = ''
    })
  })
}

export function initHeroEntrance() {
  document.body.classList.add('loaded')
}

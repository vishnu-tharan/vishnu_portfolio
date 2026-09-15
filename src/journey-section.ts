import { journeyEntries } from './data.ts'

export function renderJourneySection(): string {
  return `
    <section id="journey" class="section-container reveal">
      <div class="section-label-row mb-12">
        <p class="section-label">03 / THE TIME MACHINE</p>
        <p class="section-super-heading">A JOURNEY STILL IN MOTION</p>
      </div>

      <div class="journey-intro mb-12 reveal">
        <p class="journey-intro-built">Built over time<span class="journey-dot">.</span></p>
        <p class="journey-intro-sub">Every chapter adds a new perspective.</p>
        <p class="journey-sub-tag">PAST / PRESENT / POSSIBILITY</p>
      </div>

      <div class="journey-hint reveal">
        <span class="journey-hint-year">26</span>
        <span class="journey-hint-label">MOVE THROUGH THE YEARS</span>
        <span class="journey-hint-keys">HOVER · TAP · ARROW KEYS</span>
        <span class="journey-hint-arrow">↔</span>
      </div>

      <div class="journey-timeline stagger-group" id="journey-timeline">
        ${journeyEntries
          .map(
            (entry, i) => `
          <div class="journey-entry stagger-item" data-index="${i}">
            <div class="journey-year-col">
              <span class="journey-year">${entry.year}</span>
            </div>
            <div class="journey-connector">
              <span class="journey-dot-node"></span>
              <span class="journey-line"></span>
            </div>
            <div class="journey-content">
              <div class="journey-period-tag">${entry.period}</div>
              <h3 class="journey-title">${entry.title}</h3>
              <p class="journey-subtitle">${entry.subtitle}</p>
              <p class="journey-desc">${entry.description}</p>
              <div class="journey-milestones">
                ${entry.milestones
                  .map(
                    (m) => `<span class="journey-milestone">${m}</span>`
                  )
                  .join('')}
              </div>
            </div>
          </div>`
          )
          .join('')}
      </div>
    </section>
  `
}

export function initJourneyKeyboard(): void {
  const timeline = document.getElementById('journey-timeline')
  if (!timeline) return

  const entries = timeline.querySelectorAll<HTMLElement>('.journey-entry')
  let active = -1

  const activate = (i: number) => {
    entries.forEach((e) => e.classList.remove('journey-entry--active'))
    if (i >= 0 && i < entries.length) {
      entries[i].classList.add('journey-entry--active')
      entries[i].scrollIntoView({ behavior: 'smooth', block: 'nearest' })
      active = i
    }
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') activate(active + 1)
    if (e.key === 'ArrowLeft') activate(active - 1)
  })

  entries.forEach((entry, i) => {
    entry.addEventListener('mouseenter', () => activate(i))
    entry.addEventListener('click', () => activate(i))
  })
}

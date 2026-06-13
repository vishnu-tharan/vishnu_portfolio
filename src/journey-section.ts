import { journeyPhases } from './data.ts'

export function renderJourneySection() {
  return `
    <div class="mb-12 reveal">
      <p class="section-label mb-4">My Journey</p>
      <h2 class="section-heading">Academic path & milestones</h2>
      <p class="mt-4 max-w-2xl text-[var(--color-muted)]">
        From school days in Jaffna to pursuing Information Technology at university — a timeline of learning, growth, and achievement.
      </p>
    </div>

    <div class="journey-phases space-y-16">
      ${journeyPhases
        .map(
          (phase) => `
        <div class="reveal">
          <div class="journey-phase-header">
            <span class="journey-phase-icon">${phase.icon}</span>
            <div>
              <h3 class="journey-phase-title">${phase.label}</h3>
              <p class="journey-phase-sub">${phase.subtitle}</p>
            </div>
          </div>

          <div class="journey-timeline stagger-group">
            ${phase.items
              .map(
                (item) => `
              <article class="journey-item stagger-item journey-item-${item.level}">
                <div class="journey-marker">
                  <span class="journey-dot"></span>
                </div>
                <div class="journey-card">
                  <div class="journey-card-top">
                    <span class="journey-period">${item.period}</span>
                    ${item.badge ? `<span class="journey-badge journey-badge-${item.level}">${item.badge}</span>` : ''}
                  </div>
                  <h4 class="journey-title">${item.title}</h4>
                  <p class="journey-institution">${item.institution}</p>
                  <p class="journey-desc">${item.description}</p>
                  <ul class="journey-highlights">
                    ${item.highlights.map((h) => `<li>${h}</li>`).join('')}
                  </ul>
                </div>
              </article>`
              )
              .join('')}
          </div>
        </div>`
        )
        .join('')}
    </div>
  `
}

import { skillCategories } from './data.ts'
import { skillIcons } from './icons.ts'

const filterMap: Record<string, string> = {
  Languages: 'Languages',
  'Frameworks & Tools': 'Frameworks',
  'Other Skills': 'Other',
}

function skillIcon(name: string) {
  return skillIcons[name] ?? skillIcons.api
}

function skillRing(level: number) {
  return `
    <div class="skill-ring" style="--level: ${level}">
      <svg viewBox="0 0 36 36" aria-hidden="true">
        <circle class="skill-ring-track" cx="18" cy="18" r="15.5" pathLength="100" />
        <circle class="skill-ring-progress" cx="18" cy="18" r="15.5" pathLength="100" />
      </svg>
      <span class="skill-ring-value">${level}%</span>
    </div>
  `
}

export function renderSkillsSection() {
  const totalSkills = skillCategories.reduce((n, c) => n + c.skills.length, 0)

  const tabs = [
    { key: 'all', label: 'All Skills' },
    ...skillCategories.map((c) => ({ key: filterMap[c.title], label: c.title })),
  ]

  const allSkillsHtml = skillCategories
    .flatMap((cat) =>
      cat.skills.map((skill) => {
        const catKey = filterMap[cat.title]
        return `
          <div class="skill-bento-card stagger-item" data-skill-category="${catKey}">
            <div class="skill-bento-top">
              <div class="skill-icon-box">${skillIcon(skill.icon)}</div>
              ${skillRing(skill.level)}
            </div>
            <h3 class="skill-bento-name">${skill.name}</h3>
            <span class="skill-bento-cat">${catKey}</span>
          </div>`
      })
    )
    .join('')

  return `
    <div class="skills-header reveal">
      <div>
        <p class="section-label mb-4">Technical Skills</p>
        <h2 class="section-heading">Tools & technologies I work with</h2>
        <p class="mt-4 max-w-xl text-[var(--color-muted)]">
          A modern toolkit spanning languages, frameworks, and creative tools — honed through academic projects and real-world practice.
        </p>
      </div>
      <div class="skills-summary">
        <div class="skills-summary-card">
          <span class="skills-summary-num">${totalSkills}</span>
          <span class="skills-summary-label">Technologies</span>
        </div>
        <div class="skills-summary-card">
          <span class="skills-summary-num">${skillCategories.length}</span>
          <span class="skills-summary-label">Categories</span>
        </div>
      </div>
    </div>

    <div class="skills-tabs reveal" role="tablist" aria-label="Filter skills">
      ${tabs
        .map(
          (tab, i) =>
            `<button type="button" class="skills-tab${i === 0 ? ' active' : ''}" data-skill-filter="${tab.key}" role="tab">${tab.label}</button>`
        )
        .join('')}
    </div>

    <div class="skills-bento stagger-group reveal">
      ${allSkillsHtml}
    </div>
  `
}

export function initSkillFilters() {
  const tabs = document.querySelectorAll<HTMLButtonElement>('[data-skill-filter]')
  const cards = document.querySelectorAll<HTMLElement>('[data-skill-category]')

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const filter = tab.getAttribute('data-skill-filter') ?? 'all'

      tabs.forEach((t) => t.classList.toggle('active', t === tab))
      cards.forEach((card) => {
        const cat = card.getAttribute('data-skill-category')
        const show = filter === 'all' || cat === filter
        card.classList.toggle('skill-hidden', !show)
      })
    })
  })
}

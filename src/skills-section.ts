import { primarySkills, toolkitSkills } from './data.ts'
import { getIcon } from './icons.ts'

export function renderSkillsSection(): string {
  return `
    <section id="skills" class="section-container reveal">
      <div class="section-label-row mb-12">
        <p class="section-label">02 / MY UNIVERSE</p>
        <p class="section-super-heading">IDEAS → SYSTEMS → EXPERIENCES</p>
      </div>

      <div class="about-skills-intro reveal mb-10">
        <p class="about-skills-heading">THE CURIOSITY BEHIND THE CODE</p>
        <p class="about-skills-sub">Many technologies.<br>One connected mind.</p>
      </div>

      <div class="primary-skills-grid stagger-group">
        ${primarySkills
          .map(
            (skill) => `
          <div class="primary-skill-card stagger-item">
            <div class="primary-skill-icon">${getIcon(skill.icon)}</div>
            <div class="primary-skill-body">
              <div class="primary-skill-index">${skill.index}</div>
              <div class="primary-skill-name">${skill.name}</div>
              <div class="primary-skill-subtitle">/ ${skill.subtitle}</div>
            </div>
            <div class="primary-skill-level-bar">
              <div class="primary-skill-level-fill skill-bar-fill" data-level="${skill.level}" style="width:0%"></div>
            </div>
          </div>`
          )
          .join('')}
      </div>

      <div class="toolkit-section reveal mt-12">
        <p class="toolkit-label">Also in my toolkit:</p>
        <div class="toolkit-tags">
          ${toolkitSkills.map((t) => `<span class="toolkit-tag">${t}</span>`).join(' · ')}
        </div>
      </div>
    </section>
  `
}

export function initSkillFilters(): void {
  // Skills section no longer has filter tabs — handled by primary/toolkit split
  // Animate skill bars on reveal (handled by IntersectionObserver in animations.ts)
}

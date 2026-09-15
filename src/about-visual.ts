import { profile, certifications, communityItems, competitionItems } from './data.ts'

export function renderBeyondSection(): string {
  return `
    <section id="beyond" class="section-container reveal">
      <div class="section-label-row mb-12">
        <p class="section-label">05 / BEYOND THE EDITOR</p>
        <p class="section-super-heading">PEOPLE. PERSPECTIVE. PROGRESS.</p>
      </div>

      <div class="beyond-intro reveal mb-10">
        <p class="beyond-intro-text">Code is only<br><span class="beyond-intro-accent">part of the story.</span></p>
      </div>

      <div class="beyond-grid stagger-group">

        <!-- Education -->
        <div class="beyond-card stagger-item">
          <div class="beyond-card-index">01 / EDUCATION</div>
          <div class="beyond-card-title">${profile.degree}</div>
          <div class="beyond-card-body">
            <p>${profile.faculty}, ${profile.university}</p>
            <p>${profile.studyPeriod}</p>
            <p class="beyond-card-note">${profile.honoursNote}</p>
          </div>
        </div>

        <!-- Certifications -->
        <div class="beyond-card stagger-item">
          <div class="beyond-card-index">02 / CERTIFICATIONS</div>
          <div class="beyond-card-title">Always a student.</div>
          <div class="beyond-card-body">
            ${certifications
              .map(
                (cert) =>
                  `<p class="beyond-cert-line"><span class="beyond-cert-name">${cert.name}</span> — <span class="beyond-cert-issuer">${cert.issuer}</span></p>`
              )
              .join('')}
          </div>
        </div>

        <!-- Community -->
        <div class="beyond-card stagger-item">
          <div class="beyond-card-index">03 / COMMUNITY</div>
          <div class="beyond-card-title">IEEE &amp; AIESEC — 2023 to present</div>
          <div class="beyond-card-body">
            ${communityItems.map((item) => `<p class="beyond-list-item">· ${item}</p>`).join('')}
          </div>
        </div>

        <!-- Competition -->
        <div class="beyond-card stagger-item">
          <div class="beyond-card-index">04 / COMPETITION</div>
          <div class="beyond-card-title">IEEEXtreme 17.0 &amp; 18.0</div>
          <div class="beyond-card-body">
            ${competitionItems.map((item) => `<p class="beyond-list-item">· ${item}</p>`).join('')}
          </div>
        </div>

      </div>
    </section>
  `
}

// Legacy export kept so any old import doesn't break
export function aboutItVisual(): string {
  return renderBeyondSection()
}

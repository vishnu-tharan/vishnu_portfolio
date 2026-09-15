import { profile } from './data.ts'
import { renderSocialButtons } from './social.ts'

const mailIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`
const phoneIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>`
const mapIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>`

const directContacts = [
  {
    href: `mailto:${profile.email}`,
    icon: mailIcon,
    label: 'EMAIL',
    value: profile.email,
    external: false,
  },
  {
    href: `tel:${profile.phone.replace(/\s/g, '')}`,
    icon: phoneIcon,
    label: 'PHONE',
    value: profile.phone,
    external: false,
  },
  {
    href: '#',
    icon: mapIcon,
    label: 'AVAILABILITY',
    value: profile.availability,
    external: false,
    static: true,
  },
]

const discussOptions = [
  'An internship opportunity',
  'A project collaboration',
  'A question about your work',
  'Something else',
]

export function renderContactSection(): string {
  return `
    <section id="contact" class="section-container">

      <div class="contact-section-inner">
        <!-- Left panel -->
        <div class="contact-left reveal">
          <p class="section-label">06 / THE NEXT CHAPTER</p>
          <p class="contact-super">STARTS WITH A CONVERSATION</p>
          <p class="contact-open-tag">OPEN TO INTERNSHIPS</p>
          <h2 class="contact-heading">Let's build<br>what's next.</h2>
          <p class="contact-sub">
            Looking for a curious developer to join your team? I'm open to full-stack, frontend, and backend internship opportunities — remotely worldwide or on-site in Sri Lanka. Get in touch about a role, a project, or a question about my work.
          </p>

          <div class="contact-direct-links">
            ${directContacts
              .map(
                (c) =>
                  c.static
                    ? `<div class="contact-direct-item contact-direct-static">
                        <span class="contact-direct-icon">${c.icon}</span>
                        <span class="contact-direct-body">
                          <span class="contact-direct-label">${c.label}</span>
                          <span class="contact-direct-value">${c.value}</span>
                        </span>
                      </div>`
                    : `<a href="${c.href}" class="contact-direct-item" ${c.external ? 'target="_blank" rel="noopener noreferrer"' : ''}>
                        <span class="contact-direct-icon">${c.icon}</span>
                        <span class="contact-direct-body">
                          <span class="contact-direct-label">${c.label}</span>
                          <span class="contact-direct-value contact-direct-link-text">${c.value} ↗</span>
                        </span>
                      </a>`
              )
              .join('')}
          </div>

          <div class="contact-social-row mt-6">
            ${renderSocialButtons()}
          </div>
        </div>

        <!-- Right panel — form -->
        <div class="contact-right reveal">
          <div class="contact-form-card">
            <p class="contact-form-heading">LET'S CONNECT</p>
            <p class="contact-form-subheading">What's on your mind?</p>
            <p class="contact-form-note">All fields are required. This form prepares an email in your email app. Review it there and press Send.</p>

            <form id="contact-form" class="contact-form" novalidate>
              <div class="form-group">
                <label for="contact-name" class="form-label">Your name</label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  class="form-input"
                  placeholder="Your name"
                  required
                  autocomplete="name"
                />
              </div>

              <div class="form-group">
                <label for="contact-email" class="form-label">Your email</label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  class="form-input"
                  placeholder="Your email"
                  required
                  autocomplete="email"
                />
              </div>

              <div class="form-group">
                <label for="contact-subject" class="form-label">I'd like to discuss</label>
                <select id="contact-subject" name="subject" class="form-input form-select" required>
                  <option value="" disabled selected>Select a topic</option>
                  ${discussOptions.map((o) => `<option value="${o}">${o}</option>`).join('')}
                </select>
              </div>

              <div class="form-group">
                <label for="contact-message" class="form-label">Your message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  class="form-input form-textarea"
                  placeholder="Your message"
                  rows="5"
                  required
                ></textarea>
              </div>

              <div id="contact-error" class="form-error hidden">Please fill in all fields.</div>

              <button type="submit" class="btn-primary btn-magnetic w-full justify-center mt-2">
                OPEN EMAIL APP ↗
              </button>
            </form>

            <p class="contact-form-fallback mt-4">
              Prefer to write directly?
              <a href="mailto:${profile.email}" class="contact-inline-link">Email me</a>
              or
              <a href="tel:${profile.phone.replace(/\s/g, '')}" class="contact-inline-link">call me</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  `
}

export function initContactForm(): void {
  const form = document.getElementById('contact-form') as HTMLFormElement | null
  if (!form) return

  form.addEventListener('submit', (e) => {
    e.preventDefault()

    const name = (form.querySelector('#contact-name') as HTMLInputElement).value.trim()
    const email = (form.querySelector('#contact-email') as HTMLInputElement).value.trim()
    const subject = (form.querySelector('#contact-subject') as HTMLSelectElement).value
    const message = (form.querySelector('#contact-message') as HTMLTextAreaElement).value.trim()
    const errorEl = document.getElementById('contact-error')

    if (!name || !email || !subject || !message) {
      errorEl?.classList.remove('hidden')
      return
    }
    errorEl?.classList.add('hidden')

    const body = encodeURIComponent(
      `Hi Vishnu,\n\nI'd like to discuss: ${subject}\n\n${message}\n\nFrom: ${name}\nEmail: ${email}`
    )
    const mailtoLink = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${body}`
    window.location.href = mailtoLink
  })
}

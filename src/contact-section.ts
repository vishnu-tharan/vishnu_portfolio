import { profile } from './data.ts'
import { whatsappUrl, renderSocialButtons } from './social.ts'

const mailIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`
const phoneIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>`
const mapIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>`
const linkedinIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.127 0 2.065 2.065 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`

const directContacts = [
  {
    href: `mailto:${profile.email}`,
    icon: mailIcon,
    label: 'Email',
    value: profile.email,
    external: false,
  },
  {
    href: whatsappUrl(),
    icon: phoneIcon,
    label: 'WhatsApp',
    value: `+${profile.whatsapp}`,
    external: true,
  },
  {
    href: profile.linkedin,
    icon: linkedinIcon,
    label: 'LinkedIn',
    value: 'Connect professionally',
    external: true,
  },
  {
    href: '#',
    icon: mapIcon,
    label: 'Location',
    value: profile.location,
    external: false,
    static: true,
  },
]

export function renderContactSection() {
  return `
    <div class="mb-12 reveal">
      <p class="section-label mb-4">Contact</p>
      <h2 class="section-heading">Let's work together</h2>
      <p class="mt-4 max-w-2xl text-[var(--color-muted)]">
        Have a project idea, internship opportunity, or collaboration in mind? Reach out directly or send a message — I'll get back to you as soon as possible.
      </p>
    </div>

    <div class="grid gap-10 lg:grid-cols-[1fr_1.15fr]">
      <div class="reveal-left space-y-6">
        <div class="contact-direct-grid">
          ${directContacts
            .map(
              (item) => `
            ${
              item.static
                ? `<div class="contact-direct-card contact-direct-static">
                    <div class="contact-direct-icon">${item.icon}</div>
                    <div>
                      <p class="contact-direct-label">${item.label}</p>
                      <p class="contact-direct-value">${item.value}</p>
                    </div>
                  </div>`
                : `<a href="${item.href}" ${item.external ? 'target="_blank" rel="noopener noreferrer"' : ''} class="contact-direct-card">
                    <div class="contact-direct-icon">${item.icon}</div>
                    <div>
                      <p class="contact-direct-label">${item.label}</p>
                      <p class="contact-direct-value">${item.value}</p>
                    </div>
                  </a>`
            }`
            )
            .join('')}
        </div>

        ${profile.available ? `
          <div class="contact-available">
            <span class="status-dot"></span>
            <span>Available for internships & freelance projects</span>
          </div>` : ''}

        <div>
          <p class="section-label mb-4">Social profiles</p>
          ${renderSocialButtons()}
        </div>
      </div>

      <div class="contact-form-box reveal-right">
        <h3 class="contact-form-title">Send a message</h3>
        <p class="contact-form-sub">Fill in the form below and it will be delivered to my inbox.</p>

        <form id="contact-form" class="contact-form" novalidate>
          <input type="text" name="_honey" class="contact-honey" tabindex="-1" autocomplete="off" aria-hidden="true" />

          <div class="form-row">
            <div class="form-group">
              <label class="form-label" for="contact-name">Full name</label>
              <input type="text" id="contact-name" name="name" class="form-input" placeholder="Your name" required />
            </div>
            <div class="form-group">
              <label class="form-label" for="contact-email">Email address</label>
              <input type="email" id="contact-email" name="email" class="form-input" placeholder="you@email.com" required />
            </div>
          </div>

          <div class="form-group">
            <label class="form-label" for="contact-subject">Subject</label>
            <select id="contact-subject" name="subject" class="form-input form-select" required>
              <option value="" disabled selected>Select a topic</option>
              <option value="Internship Opportunity">Internship Opportunity</option>
              <option value="Project Collaboration">Project Collaboration</option>
              <option value="Freelance Work">Freelance Work</option>
              <option value="General Inquiry">General Inquiry</option>
            </select>
          </div>

          <div class="form-group">
            <label class="form-label" for="contact-message">Message</label>
            <textarea id="contact-message" name="message" class="form-input form-textarea" rows="5" placeholder="Tell me about your project or opportunity..." required></textarea>
          </div>

          <button type="submit" id="contact-submit" class="btn-primary w-full justify-center">
            <span class="contact-submit-text">Send Message</span>
            <span class="contact-submit-loading hidden">Sending...</span>
          </button>

          <p id="contact-status" class="contact-status" role="status" aria-live="polite"></p>
        </form>
      </div>
    </div>
  `
}

export function initContactForm() {
  const form = document.querySelector<HTMLFormElement>('#contact-form')
  const status = document.querySelector<HTMLParagraphElement>('#contact-status')
  const submitBtn = document.querySelector<HTMLButtonElement>('#contact-submit')
  const submitText = submitBtn?.querySelector('.contact-submit-text')
  const submitLoading = submitBtn?.querySelector('.contact-submit-loading')

  if (!form || !status || !submitBtn) return

  form.addEventListener('submit', async (e) => {
    e.preventDefault()

    const honey = form.querySelector<HTMLInputElement>('input[name="_honey"]')
    if (honey?.value) return

    const name = (form.querySelector('#contact-name') as HTMLInputElement).value.trim()
    const email = (form.querySelector('#contact-email') as HTMLInputElement).value.trim()
    const subject = (form.querySelector('#contact-subject') as HTMLSelectElement).value
    const message = (form.querySelector('#contact-message') as HTMLTextAreaElement).value.trim()

    if (!name || !email || !subject || !message) {
      status.textContent = 'Please fill in all required fields.'
      status.className = 'contact-status contact-status-error'
      return
    }

    submitBtn.disabled = true
    submitText?.classList.add('hidden')
    submitLoading?.classList.remove('hidden')
    status.textContent = ''
    status.className = 'contact-status'

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(profile.email)}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
          _subject: `Portfolio Contact: ${subject}`,
          _template: 'table',
          _captcha: 'false',
        }),
      })

      const data = await res.json()

      if (data.success) {
        status.textContent = 'Message sent successfully! I will reply to your email soon.'
        status.className = 'contact-status contact-status-success'
        form.reset()
      } else {
        throw new Error('Send failed')
      }
    } catch {
      status.textContent = 'Could not send message. Please email me directly using the link on the left.'
      status.className = 'contact-status contact-status-error'
    } finally {
      submitBtn.disabled = false
      submitText?.classList.remove('hidden')
      submitLoading?.classList.add('hidden')
    }
  })
}

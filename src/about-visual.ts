import { skillIcons } from './icons.ts'

const aboutTechIcons = [
  { icon: 'java', label: 'Java', pos: 'about-orbit-1' },
  { icon: 'react', label: 'React', pos: 'about-orbit-2' },
  { icon: 'javascript', label: 'JS', pos: 'about-orbit-3' },
  { icon: 'git', label: 'Git', pos: 'about-orbit-4' },
  { icon: 'database', label: 'SQL', pos: 'about-orbit-5' },
  { icon: 'api', label: 'API', pos: 'about-orbit-6' },
]

export function aboutItVisual() {
  return `
    <div class="about-visual reveal-right" aria-hidden="true">
      <div class="about-visual-glow"></div>
      <div class="about-terminal">
        <div class="about-terminal-header">
          <span class="about-dot about-dot-red"></span>
          <span class="about-dot about-dot-yellow"></span>
          <span class="about-dot about-dot-green"></span>
          <span class="about-terminal-title">vishnu@portfolio ~</span>
        </div>
        <div class="about-terminal-body">
          <p><span class="about-code-keyword">const</span> <span class="about-code-var">developer</span> = {</p>
          <p class="about-code-indent"><span class="about-code-key">name</span>: <span class="about-code-string">"Vishnutharan"</span>,</p>
          <p class="about-code-indent"><span class="about-code-key">role</span>: <span class="about-code-string">"IT Student"</span>,</p>
          <p class="about-code-indent"><span class="about-code-key">stack</span>: [<span class="about-code-string">"React"</span>, <span class="about-code-string">"Java"</span>, <span class="about-code-string">"MySQL"</span>],</p>
          <p class="about-code-indent"><span class="about-code-key">passion</span>: <span class="about-code-string">"Building software"</span></p>
          <p>}<span class="about-code-cursor">|</span></p>
        </div>
      </div>
      <div class="about-orbit-wrap">
        <div class="about-orbit-center">
          <span class="about-orbit-code">&lt;/&gt;</span>
        </div>
        ${aboutTechIcons
          .map(
            (item) => `
          <div class="about-orbit-icon ${item.pos}" title="${item.label}">
            <span class="about-orbit-icon-inner">${skillIcons[item.icon] ?? skillIcons.api}</span>
          </div>`
          )
          .join('')}
      </div>
      <div class="about-visual-tags">
        <span class="about-visual-tag">BSc IT</span>
        <span class="about-visual-tag">Full-Stack</span>
        <span class="about-visual-tag">IEEE</span>
      </div>
    </div>
  `
}

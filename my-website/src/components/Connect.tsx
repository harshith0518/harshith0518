import { ArrowUpRight } from 'lucide-react'

const links = [
  { label: 'Email', href: 'mailto:bsharshith1808@gmail.com' },
  { label: 'GitHub', href: 'https://github.com/harshith0518' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/harshith-balla-355199299' },
  { label: 'Codeforces', href: 'https://codeforces.com/profile/Harshith7946' },
]

const Connect = () => (
  <footer id="connect" className="connect-section">
    <div className="footer-orbit" aria-hidden="true"><span /><i>hello</i></div>
    <div className="section-frame connect-inner" data-reveal>
      <p className="eyebrow">03 / open channel</p>
      <h2>Have an interesting problem?<br /><em>Let’s talk.</em></h2>
      <a
        className="contact-launch"
        href="mailto:bsharshith1808@gmail.com?subject=Portfolio%20conversation"
        aria-label="Email Surya Harshith Balla to start a conversation"
      >
        <span>Start a conversation</span>
        <ArrowUpRight size={28} />
      </a>
    </div>

    <div className="section-frame footer-bottom">
      <p>Surya Harshith Balla · {new Date().getFullYear()}</p>
      <div className="footer-links">
        {links.map((link) => (
          <span key={link.label}>
            <a href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
              {link.label}<sup>↗</sup>
            </a>
          </span>
        ))}
      </div>
    </div>
  </footer>
)

export default Connect

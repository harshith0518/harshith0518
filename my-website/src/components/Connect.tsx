import { ArrowUpRight } from 'lucide-react'

const links = [
  { label: 'Email', href: 'mailto:bsharshith1808@gmail.com' },
  { label: 'GitHub', href: 'https://github.com/harshith0518' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/harshith-balla-355199299' },
  { label: 'Codeforces', href: 'https://codeforces.com/profile/Harshith7946' },
]

const Connect = () => (
  <footer id="connect" className="connect-section">
    <div className="contact-city" aria-hidden="true">
      <svg viewBox="0 0 1200 640" preserveAspectRatio="xMaxYMid slice" focusable="false">
        <g className="contact-web">
          <path d="M1200 0Q946 128 864 388" />
          <path d="M1200 0Q1032 191 1019 457" />
          <path d="M1200 0Q1129 215 1150 494" />
          <path d="M1200 0 864 388M1200 0 1019 457M1200 0 1150 494" />
          <path d="M1099 104Q1013 143 958 227M1047 173Q993 218 955 296M1019 252Q989 288 971 338" />
        </g>
        <g className="contact-buildings">
          <path d="M0 640V431H176V361H324V640ZM259 640V458H431V305H563V640Z" />
          <path d="M711 640V420H838V348H991V640ZM921 640V463H1073V316H1200V640Z" />
          <path d="M52 418H291V640H52ZM305 330H530V640H305ZM754 374H958V640H754ZM973 341H1170V640H973Z" className="contact-windows" />
        </g>
        <g transform="translate(955 274)">
          <g className="contact-signal">
            <path className="contact-signal-thread" pathLength="1" d="M245-252C154-138 110-81 0 0" />
            <g className="contact-signal-spokes">
              <path d="M0-36V-116M31-18 100-58M31 18l69 40M0 36v80M-31 18l-69 40M-31-18l-69-40" />
            </g>
            <circle className="contact-signal-ring contact-signal-ring-outer" pathLength="1" cx="0" cy="0" r="132" />
            <circle className="contact-signal-ring contact-signal-ring-middle" pathLength="1" cx="0" cy="0" r="88" />
            <circle className="contact-signal-ring contact-signal-ring-inner" pathLength="1" cx="0" cy="0" r="42" />
            <circle className="contact-signal-runner contact-signal-runner-red" pathLength="1" cx="0" cy="0" r="105" />
            <circle className="contact-signal-runner contact-signal-runner-blue" pathLength="1" cx="0" cy="0" r="64" />
            <circle className="contact-signal-ripple contact-signal-ripple-one" cx="0" cy="0" r="12" />
            <circle className="contact-signal-ripple contact-signal-ripple-two" cx="0" cy="0" r="12" />
            <circle className="contact-signal-core" cx="0" cy="0" r="5" />
          </g>
        </g>
      </svg>
    </div>
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

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

const links = [
  { label: 'Work', index: '01', href: '#work' },
  { label: 'About', index: '02', href: '#about' },
  { label: 'Contact', index: '03', href: '#connect' },
]

const Navbar = () => {
  const { theme, toggleTheme } = useTheme()
  const [active, setActive] = useState('home')

  useEffect(() => {
    const sections = ['home', 'work', 'about', 'connect']
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target.id) setActive(visible.target.id)
      },
      { rootMargin: '-25% 0px -60% 0px', threshold: [0, 0.25, 0.6] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="nav-wrap">
      <nav className="nav-bar" aria-label="Primary navigation">
        <a className="wordmark" href="#home" aria-label="Surya Harshith Balla, home">
          <span className="wordmark-mark">SH</span>
          <span className="wordmark-copy">
            <strong>Harshith</strong>
            <small>CS @ IIT Madras</small>
          </span>
        </a>

        <div className="nav-links" aria-label="Section links">
          <span className="nav-signal" aria-hidden="true"><i /></span>
          {links.map((link) => (
            <a className={active === link.href.slice(1) ? 'is-active' : ''} key={link.href} href={link.href}>
              <sup>{link.index}</sup>{link.label}
            </a>
          ))}
          <button
            className="theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

const links = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#connect' },
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
        <a
          className={`wordmark nav-plate ${active === 'home' ? 'is-active' : ''}`}
          href="#home"
          aria-label="Surya Harshith Balla, home"
          aria-current={active === 'home' ? 'location' : undefined}
        >
          <span className="wordmark-mark" aria-hidden="true">SH</span>
          <span className="wordmark-copy">
            <strong>Harshith Balla</strong>
            <small>CS · IIT Madras</small>
          </span>
        </a>

        <div className="nav-console nav-plate">
          <div className="nav-links" data-active={active} aria-label="Section links">
            {links.map((link) => {
              const isActive = active === link.href.slice(1)

              return (
                <a
                  className={isActive ? 'is-active' : ''}
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? 'location' : undefined}
                >
                  {link.label}
                </a>
              )
            })}
            <span className="nav-active-rail" aria-hidden="true" />
          </div>
          <span className="nav-divider" aria-hidden="true" />
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

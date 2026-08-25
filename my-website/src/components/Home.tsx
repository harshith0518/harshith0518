import { useEffect, useState } from 'react'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import SystemsPlayground from './Elements/SystemsPlayground'

const tickerItems = ['GPU observability', 'core software', 'system design', 'agents + networks', 'AI/ML + robotics']
const rotatingDescriptors = ['software engineer', 'backend & infrastructure', 'AI/ML + robotics']

const Home = () => {
  const [descriptorIndex, setDescriptorIndex] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const timer = window.setInterval(() => {
      setDescriptorIndex((current) => (current + 1) % rotatingDescriptors.length)
    }, 3000)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <>
      <section id="home" className="hero section-frame">
        <div className="hero-copy" data-reveal>
          <p className="eyebrow hero-kicker">
            <span>Surya Harshith Balla</span>
            <span className="kicker-separator" aria-hidden="true">/</span>
            <span className="rotating-kicker" key={rotatingDescriptors[descriptorIndex]} aria-hidden="true">
              {rotatingDescriptors[descriptorIndex]}
            </span>
            <span className="sr-only">Software engineer interested in backend, infrastructure, AI, machine learning, and robotics.</span>
          </p>
          <h1>
            <span>I like building</span>
            <em>useful software.</em>
          </h1>
          <p className="hero-intro">
            I’m a Computer Science student at IIT Madras, with experience in GPU
            observability, backend engineering, and deployment systems. I’m also
            exploring AI/ML, computer vision, and robotics.
          </p>

          <div className="hero-actions">
            <a className="button button-primary magnetic-link" href="#work">
              View my work <ArrowDownRight size={17} />
            </a>
            <a className="text-link" href="mailto:bsharshith1808@gmail.com">
              Say hello <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="hero-footnote">
            <span>IIT Madras · CSE ’27</span>
            <span>Chennai, India</span>
            <span className="available"><i /> open to opportunities</span>
          </div>
        </div>

        <div className="hero-playground" data-reveal>
          <SystemsPlayground />
        </div>

      </section>

      <div className="ticker" aria-label={tickerItems.join(', ')}>
        <div className="ticker-track" aria-hidden="true">
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <span key={`${item}-${index}`}><i>✳</i>{item}</span>
          ))}
        </div>
      </div>
    </>
  )
}

export default Home

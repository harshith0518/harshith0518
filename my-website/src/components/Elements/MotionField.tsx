import { useEffect } from 'react'

const MotionField = () => {
  useEffect(() => {
    const root = document.documentElement
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let frame = 0

    const updateScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(() => {
        const available = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1)
        root.style.setProperty('--page-progress', String(Math.min(window.scrollY / available, 1)))
        frame = 0
      })
    }

    const updatePointer = (event: PointerEvent) => {
      if (reducedMotion) return
      const x = (event.clientX / window.innerWidth - 0.5) * 2
      const y = (event.clientY / window.innerHeight - 0.5) * 2
      root.style.setProperty('--pointer-x', x.toFixed(3))
      root.style.setProperty('--pointer-y', y.toFixed(3))
    }

    const revealNodes = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
    let observer: IntersectionObserver | undefined

    if (reducedMotion) {
      revealNodes.forEach((node) => node.classList.add('is-visible'))
    } else {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible')
              observer?.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.12 },
      )
      revealNodes.forEach((node) => observer?.observe(node))
    }

    updateScroll()
    window.addEventListener('scroll', updateScroll, { passive: true })
    window.addEventListener('resize', updateScroll)
    window.addEventListener('pointermove', updatePointer, { passive: true })

    return () => {
      window.removeEventListener('scroll', updateScroll)
      window.removeEventListener('resize', updateScroll)
      window.removeEventListener('pointermove', updatePointer)
      observer?.disconnect()
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div className="motion-field" aria-hidden="true">
      <div className="motion-grid" />
      <div className="drift-object drift-orb"><span /></div>
      <div className="drift-object drift-capsule"><span>01</span></div>
      <div className="drift-object drift-bracket"><span>{'{ }'}</span></div>
      <div className="drift-object drift-cross"><span>+</span></div>
      <div className="scroll-rail"><span /></div>
    </div>
  )
}

export default MotionField

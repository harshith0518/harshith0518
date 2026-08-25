import { useEffect, useRef } from 'react'
import ScrollSpidey from './ScrollSpidey'

type SpideyPose = 'swing' | 'crawl' | 'strike' | 'land'

type RoutePoint = {
  p: number
  x: number
  y: number
  rotation: number
  scale: number
}

const desktopRoute: RoutePoint[] = [
  { p: 0, x: 1.03, y: 0.18, rotation: -27, scale: 0.76 },
  { p: 0.17, x: 0.78, y: 0.62, rotation: 16, scale: 1 },
  { p: 0.3, x: 0.05, y: 0.27, rotation: 88, scale: 0.86 },
  { p: 0.48, x: 0.08, y: 0.73, rotation: 92, scale: 0.94 },
  { p: 0.6, x: 0.45, y: 0.25, rotation: -9, scale: 1.06 },
  { p: 0.77, x: 0.92, y: 0.63, rotation: 18, scale: 0.95 },
  { p: 0.89, x: 0.69, y: 0.79, rotation: 5, scale: 0.98 },
  { p: 0.93, x: 0.53, y: 0.73, rotation: -4, scale: 1.02 },
  { p: 0.965, x: 0.52, y: 0.79, rotation: -2, scale: 0.98 },
  { p: 1, x: 0.52, y: 1.34, rotation: 20, scale: 0.78 },
]

const mobileRoute: RoutePoint[] = [
  { p: 0, x: 0.98, y: 0.24, rotation: -24, scale: 0.72 },
  { p: 0.2, x: 0.84, y: 0.68, rotation: 13, scale: 0.9 },
  { p: 0.32, x: 0.02, y: 0.32, rotation: 88, scale: 0.76 },
  { p: 0.5, x: 0.05, y: 0.75, rotation: 91, scale: 0.82 },
  { p: 0.62, x: 0.91, y: 0.28, rotation: -8, scale: 0.84 },
  { p: 0.8, x: 0.96, y: 0.68, rotation: 15, scale: 0.78 },
  { p: 0.89, x: 0.87, y: 0.78, rotation: 3, scale: 0.8 },
  { p: 0.93, x: 0.72, y: 0.72, rotation: -3, scale: 0.82 },
  { p: 0.965, x: 0.7, y: 0.79, rotation: -1, scale: 0.8 },
  { p: 1, x: 0.69, y: 1.3, rotation: 18, scale: 0.65 },
]

const clamp = (value: number) => Math.min(Math.max(value, 0), 1)
const mix = (from: number, to: number, progress: number) => from + (to - from) * progress
const smootherStep = (progress: number) => progress ** 3 * (progress * (progress * 6 - 15) + 10)

const poseForProgress = (progress: number): SpideyPose => {
  if (progress < 0.28) return 'swing'
  if (progress < 0.54) return 'crawl'
  if (progress < 0.83) return 'strike'
  return 'land'
}

const MotionField = () => {
  const spideyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = document.documentElement
    const spidey = spideyRef.current
    const playground = document.querySelector<HTMLElement>('.systems-playground')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let frame = 0
    let currentPose: SpideyPose = 'swing'

    const updateSpidey = (progress: number) => {
      if (!spidey || reducedMotion) return

      const route = window.innerWidth <= 700 ? mobileRoute : desktopRoute
      const nextIndex = route.findIndex((point) => point.p >= progress)
      const endIndex = nextIndex < 0 ? route.length - 1 : nextIndex
      const startIndex = Math.max(0, endIndex - 1)
      const start = route[startIndex]
      const end = route[endIndex]
      const distance = Math.max(end.p - start.p, 0.0001)
      const linearProgress = clamp((progress - start.p) / distance)
      const easedProgress = smootherStep(linearProgress)
      const x = mix(start.x, end.x, easedProgress)
      const y = mix(start.y, end.y, easedProgress)
      const scale = mix(start.scale, end.scale, easedProgress)

      spidey.style.setProperty('--spidey-x', `${x * window.innerWidth}px`)
      spidey.style.setProperty('--spidey-y', `${y * window.innerHeight}px`)
      spidey.style.setProperty('--spidey-rotation', `${mix(start.rotation, end.rotation, easedProgress)}deg`)
      spidey.style.setProperty('--spidey-scale', String(scale))

      const senseIn = smootherStep(clamp((progress - 0.88) / 0.04))
      const senseOut = 1 - smootherStep(clamp((progress - 0.945) / 0.02))
      spidey.style.setProperty('--sense-progress', String(senseIn * senseOut))

      const nextPose = poseForProgress(progress)
      if (nextPose !== currentPose) {
        currentPose = nextPose
        spidey.dataset.pose = nextPose
      }
    }

    const updatePlayground = () => {
      if (!playground || reducedMotion) return
      const bounds = playground.getBoundingClientRect()
      if (bounds.bottom < -160 || bounds.top > window.innerHeight + 160) return

      const localProgress = clamp((window.innerHeight - bounds.top) / (window.innerHeight + bounds.height))
      const apex = Math.sin(localProgress * Math.PI)
      playground.style.setProperty('--scene-pan-x', `${(localProgress - 0.5) * -24}px`)
      playground.style.setProperty('--scene-pan-y', `${(localProgress - 0.5) * 18}px`)
      playground.style.setProperty('--scene-scale', String(1.045 + apex * 0.045))
      playground.style.setProperty('--scene-roll', `${(localProgress - 0.5) * 0.7}deg`)
      playground.style.setProperty('--scene-hang', String(apex))
    }

    const updateScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(() => {
        const available = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1)
        const scrollY = Math.max(window.scrollY, 0)
        const progress = clamp(scrollY / available)
        root.style.setProperty('--page-progress', String(progress))
        root.style.setProperty('--page-progress-inverse', String(1 - progress))
        updateSpidey(progress)
        updatePlayground()
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
    window.addEventListener('load', updateScroll)
    window.addEventListener('pointermove', updatePointer, { passive: true })
    const resizeObserver = new ResizeObserver(updateScroll)
    resizeObserver.observe(document.body)

    return () => {
      window.removeEventListener('scroll', updateScroll)
      window.removeEventListener('resize', updateScroll)
      window.removeEventListener('load', updateScroll)
      window.removeEventListener('pointermove', updatePointer)
      resizeObserver.disconnect()
      observer?.disconnect()
      if (frame) window.cancelAnimationFrame(frame)
      spidey?.style.removeProperty('--spidey-x')
      spidey?.style.removeProperty('--spidey-y')
      spidey?.style.removeProperty('--spidey-rotation')
      spidey?.style.removeProperty('--spidey-scale')
    }
  }, [])

  return (
    <div className="motion-field" aria-hidden="true">
      <div className="motion-grid" />
      <svg className="motion-web-route" viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <path className="motion-route-line motion-route-line-main" pathLength="1" d="M890-40C1030 142 783 236 914 402S1001 704 805 842Q690 920 520 1040" />
        <path className="motion-route-line motion-route-line-soft" d="M1030 92C852 145 870 270 1008 322M1010 496C847 536 853 676 974 748M738 864Q628 928 522 1018" />
      </svg>
      <ScrollSpidey figureRef={spideyRef} />
      <div className="scroll-rail"><span /></div>
    </div>
  )
}

export default MotionField

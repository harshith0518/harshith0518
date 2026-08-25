import { useRef, useState, type PointerEvent } from 'react'
import { Play } from 'lucide-react'
import CinematicCityScene from './CinematicCityScene'

const modes = [
  {
    name: 'observe',
    note: 'GPU monitoring and observability.',
    nodes: ['eBPF', 'CUDA', 'DCGM', 'PromQL', 'GPU'],
  },
  {
    name: 'build',
    note: 'Backend systems and deployment.',
    nodes: ['Go', 'Docker', 'K8s', 'Postgres', 'Linux'],
  },
  {
    name: 'explore',
    note: 'AI/ML, computer vision, and robotics.',
    nodes: ['CV', 'RL', 'Graphs', 'Agents', 'Robotics'],
  },
]

const SystemsPlayground = () => {
  const [modeIndex, setModeIndex] = useState(0)
  const [pulseKey, setPulseKey] = useState(0)
  const [transitionFrom, setTransitionFrom] = useState<number | null>(null)
  const fieldRef = useRef<HTMLDivElement>(null)
  const parallaxEnabled = useRef(
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches
      && window.matchMedia('(hover: hover) and (pointer: fine)').matches,
  )
  const mode = modes[modeIndex]
  const nextMode = modes[(modeIndex + 1) % modes.length]

  const moveField = (event: PointerEvent<HTMLDivElement>) => {
    if (!fieldRef.current || !parallaxEnabled.current) return
    const bounds = fieldRef.current.getBoundingClientRect()
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2
    fieldRef.current.style.setProperty('--field-x', x.toFixed(3))
    fieldRef.current.style.setProperty('--field-y', y.toFixed(3))
  }

  const resetField = () => {
    fieldRef.current?.style.setProperty('--field-x', '0')
    fieldRef.current?.style.setProperty('--field-y', '0')
  }

  const cycleMode = () => {
    setTransitionFrom(modeIndex)
    setModeIndex((modeIndex + 1) % modes.length)
    setPulseKey((current) => current + 1)
  }

  return (
    <div
      ref={fieldRef}
      className={`systems-playground mode-${modeIndex}`}
      onPointerMove={moveField}
      onPointerLeave={resetField}
    >
      <div className="playground-topline">
        <span>Engineering route</span>
        <span className="live-signal"><i /> tap the signal</span>
      </div>

      <div className="playground-scene">
        <CinematicCityScene modeIndex={modeIndex} pulseKey={pulseKey} transitionFrom={transitionFrom} />
        {mode.nodes.map((node, index) => (
          <span className={`system-node node-${index + 1}`} key={`${mode.name}-${node}`}>
            {node}
          </span>
        ))}
        <button
          className="system-core"
          type="button"
          onClick={cycleMode}
          aria-label={`Current view: ${mode.name}. Show ${nextMode.name}.`}
        >
          <span className="system-core-orbit" aria-hidden="true"><i /></span>
          <span className={`system-core-face ${pulseKey > 0 ? 'is-switched' : ''}`} key={`${mode.name}-${pulseKey}`}>
            <span className="system-core-play"><Play size={13} fill="currentColor" /></span>
            <span className="system-core-copy">
              <small>change focus</small>
              <strong>{mode.name}</strong>
            </span>
          </span>
          <span className="system-core-steps" aria-hidden="true">
            {modes.map((item, index) => <i className={index === modeIndex ? 'is-active' : ''} key={item.name} />)}
          </span>
        </button>
      </div>

      <div className="playground-footer">
        <p aria-live="polite">{mode.note}</p>
      </div>
    </div>
  )
}

export default SystemsPlayground

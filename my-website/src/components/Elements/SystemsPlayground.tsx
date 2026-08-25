import { useRef, useState, type PointerEvent } from 'react'

const modes = [
  {
    code: '01',
    name: 'observe',
    note: 'GPU monitoring and observability.',
    nodes: ['eBPF', 'CUDA', 'DCGM', 'PromQL', 'GPU'],
  },
  {
    code: '02',
    name: 'build',
    note: 'Backend systems and deployment.',
    nodes: ['Go', 'Docker', 'K8s', 'Postgres', 'Linux'],
  },
  {
    code: '03',
    name: 'explore',
    note: 'AI/ML, computer vision, and robotics.',
    nodes: ['CV', 'RL', 'Graphs', 'Agents', 'Robotics'],
  },
]

const SystemsPlayground = () => {
  const [modeIndex, setModeIndex] = useState(0)
  const fieldRef = useRef<HTMLDivElement>(null)
  const mode = modes[modeIndex]

  const moveField = (event: PointerEvent<HTMLDivElement>) => {
    if (!fieldRef.current) return
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

  const cycleMode = () => setModeIndex((current) => (current + 1) % modes.length)

  return (
    <div
      ref={fieldRef}
      className={`systems-playground mode-${modeIndex}`}
      onPointerMove={moveField}
      onPointerLeave={resetField}
    >
      <div className="playground-topline">
        <span>Things I enjoy / {mode.code}</span>
        <span className="live-signal"><i /> click to switch</span>
      </div>

      <div className="playground-scene">
        <div className="orbit orbit-outer" />
        <div className="orbit orbit-inner" />
        <div className="scan-line" />
        {mode.nodes.map((node, index) => (
          <span className={`system-node node-${index + 1}`} key={`${mode.name}-${node}`}>
            {node}
          </span>
        ))}
        <button className="system-core" type="button" onClick={cycleMode} aria-label={`Current topic ${mode.name}. Show the next topic`}>
          <span>{mode.name}</span>
          <small>tap</small>
        </button>
      </div>

      <div className="playground-footer">
        <p aria-live="polite">{mode.note}</p>
        <span>move your pointer · tap to change</span>
      </div>
    </div>
  )
}

export default SystemsPlayground

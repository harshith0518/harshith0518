import { useMemo, useState } from 'react'

const nodes = [
  [48, 72], [94, 48], [142, 76], [198, 48], [254, 70], [308, 45],
  [66, 132], [120, 124], [178, 142], [234, 118], [292, 136], [338, 104],
  [42, 196], [104, 184], [158, 214], [218, 188], [274, 210], [330, 178],
  [82, 250], [142, 268], [206, 246], [264, 274], [322, 244],
] as const

const edges = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [0, 6], [1, 7], [2, 7],
  [2, 8], [3, 8], [3, 9], [4, 9], [4, 10], [5, 11], [6, 7], [7, 8],
  [8, 9], [9, 10], [10, 11], [6, 12], [6, 13], [7, 13], [8, 14], [8, 15],
  [9, 15], [10, 16], [10, 17], [11, 17], [12, 13], [13, 14], [14, 15],
  [15, 16], [16, 17], [12, 18], [13, 18], [13, 19], [14, 19], [14, 20],
  [15, 20], [15, 21], [16, 21], [16, 22], [17, 22], [18, 19], [19, 20],
  [20, 21], [21, 22],
] as const

const spreadOrder = [8, 7, 14, 15, 2, 3, 9, 13, 19, 20, 1, 4, 6, 10, 16, 18, 21, 0, 5, 11, 12, 17, 22]
const phaseSizes = [1, 5, 11, 18, 23]

const NetworkToy = () => {
  const [phase, setPhase] = useState(0)
  const infected = useMemo(() => new Set(spreadOrder.slice(0, phaseSizes[phase])), [phase])
  const advance = () => setPhase((current) => (current + 1) % phaseSizes.length)

  return (
    <div className="network-toy">
      <div className="network-toolbar">
        <span>SIR field / t={phase}</span>
        <span>{infected.size} active {infected.size === 1 ? 'node' : 'nodes'}</span>
      </div>
      <svg viewBox="0 0 380 310" role="img" aria-label={`Interactive contact network with ${infected.size} highlighted nodes`}>
        <g className="network-web" aria-hidden="true">
          <ellipse cx="190" cy="158" rx="52" ry="44" />
          <ellipse cx="190" cy="158" rx="104" ry="88" />
          <ellipse cx="190" cy="158" rx="154" ry="130" />
          <line x1="190" y1="158" x2="190" y2="26" />
          <line x1="190" y1="158" x2="344" y2="77" />
          <line x1="190" y1="158" x2="344" y2="240" />
          <line x1="190" y1="158" x2="190" y2="290" />
          <line x1="190" y1="158" x2="36" y2="240" />
          <line x1="190" y1="158" x2="36" y2="77" />
        </g>
        <g className="network-edges">
          {edges.map(([from, to]) => (
            <line key={`${from}-${to}`} x1={nodes[from][0]} y1={nodes[from][1]} x2={nodes[to][0]} y2={nodes[to][1]} />
          ))}
        </g>
        <g className="network-nodes" key={phase}>
          {nodes.map(([x, y], index) => (
            <circle
              key={index}
              className={infected.has(index) ? 'is-infected' : ''}
              cx={x}
              cy={y}
              r={infected.has(index) ? 7 : 4.5}
              style={{ animationDelay: `${index * 24}ms` }}
            />
          ))}
        </g>
      </svg>
      <button type="button" onClick={advance}>
        {phase === phaseSizes.length - 1 ? 'reset the field' : 'advance the spread'}
        <span aria-hidden="true">↗</span>
      </button>
    </div>
  )
}

export default NetworkToy

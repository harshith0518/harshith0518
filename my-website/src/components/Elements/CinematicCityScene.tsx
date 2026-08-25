type CinematicCitySceneProps = {
  modeIndex: number
  pulseKey: number
  transitionFrom: number | null
}

const webRoutes = [
  'M163 471C268 368 382 500 480 440',
  'M480 440C588 370 688 506 787 471',
  'M787 471C650 238 310 238 163 471',
]

const targetPoints = [
  [163, 471],
  [480, 440],
  [787, 471],
] as const

const CinematicCityScene = ({ modeIndex, pulseKey, transitionFrom }: CinematicCitySceneProps) => (
  <div className="cinematic-scene" data-city-mode={modeIndex} aria-hidden="true">
    <div className="cinematic-scroll-layer">
      <div className="cinematic-pointer-layer">
        <div className="cinematic-camera-entry">
          <picture className="cinematic-camera">
            <source media="(max-width: 700px)" srcSet="/cinematic-city-mobile.webp" type="image/webp" />
            <source media="(max-width: 700px)" srcSet="/cinematic-city-mobile.png" />
            <source srcSet="/cinematic-city-wide.webp" type="image/webp" />
            <img
              src="/cinematic-city-wide.png"
              alt=""
              width="1672"
              height="943"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </picture>
        </div>
      </div>
    </div>

    <div className="cinematic-grade" />
    <div className="cinematic-haze" />
    <i className="cinematic-cloud-bank" />

    {transitionFrom !== null && (
      <svg
        className="cinematic-mode-web"
        key={pulseKey}
        viewBox="0 0 960 620"
        preserveAspectRatio="none"
        focusable="false"
      >
        <path
          className="cinematic-mode-web-glow"
          pathLength="1"
          d={webRoutes[transitionFrom]}
        />
        <path
          className="cinematic-mode-web-thread"
          pathLength="1"
          d={webRoutes[transitionFrom]}
        />
        <circle
          className="cinematic-mode-web-hit"
          cx={targetPoints[modeIndex][0]}
          cy={targetPoints[modeIndex][1]}
          r="6"
        />
      </svg>
    )}
  </div>
)

export default CinematicCityScene

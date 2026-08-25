const RooftopTransition = () => (
  <aside className="rooftop-transition" data-reveal>
    <div className="rooftop-copy">
      <p className="eyebrow">How I approach a problem</p>
      <h3>Follow the signal across every layer.</h3>
      <p>
        I enjoy starting with a vague failure, tracing it through the stack,
        and turning what I learn into reliable software.
      </p>
      <div className="route-legend" aria-label="My working process">
        <span><i /> observe</span>
        <span><i /> understand</span>
        <span><i /> build</span>
      </div>
    </div>

    <svg
      className="rooftop-route"
      viewBox="0 0 920 390"
      aria-hidden="true"
      focusable="false"
      shapeRendering="geometricPrecision"
    >
      <defs>
        <linearGradient id="route-sky" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#06162e" />
          <stop offset="1" stopColor="#10366f" />
        </linearGradient>
        <linearGradient id="route-signal" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#e32232" />
          <stop offset="1" stopColor="#2463d4" />
        </linearGradient>
        <pattern id="route-windows" width="28" height="28" patternUnits="userSpaceOnUse">
          <rect x="8" y="7" width="6" height="9" rx="1" fill="#f7f9fc" fillOpacity="0.12" />
        </pattern>
      </defs>

      <rect width="920" height="390" rx="30" fill="url(#route-sky)" />
      <g className="route-web">
        <path d="M920 0Q760 88 702 250" />
        <path d="M920 0Q826 129 818 282" />
        <path d="M920 0 702 250M920 0 818 282" />
        <path d="M844 74Q794 108 764 164M803 129Q773 157 750 205" />
      </g>

      <g className="route-buildings">
        <path d="M0 390V275H118V202H256V390Z" />
        <path d="M312 390V230H414V174H548V390Z" />
        <path d="M628 390V264H736V205H920V390Z" />
        <path d="M36 218H226V390H36ZM348 190H526V390H348ZM674 220H891V390H674Z" fill="url(#route-windows)" />
      </g>

      <path className="route-line route-line-shadow" d="M102 236C245 55 327 298 447 193S670 65 823 190" />
      <path className="route-line route-line-main" pathLength="1" d="M102 236C245 55 327 298 447 193S670 65 823 190" />

      <g className="route-stop stop-one">
        <circle cx="102" cy="236" r="13" />
        <circle cx="102" cy="236" r="4" />
      </g>
      <g className="route-stop stop-two">
        <circle cx="447" cy="193" r="13" />
        <circle cx="447" cy="193" r="4" />
      </g>
      <g className="route-stop stop-three">
        <circle cx="823" cy="190" r="13" />
        <circle cx="823" cy="190" r="4" />
      </g>

      <g className="route-runner">
        <path d="M0-15 13-5 9 11-9 11-13-5Z" fill="url(#route-signal)" />
        <path d="M-5-5 0-9 5-5 0-2Z" fill="#f7f9fc" />
      </g>
    </svg>
  </aside>
)

export default RooftopTransition

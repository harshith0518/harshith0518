const interests = [
  ['core software', 'building reliable software by understanding the layers underneath'],
  ['system design', 'thinking through scale, trade-offs, and how the parts fit together'],
  ['AI/ML & robotics', 'exploring software that can perceive, decide, and act'],
  ['sketching', 'a slower way to notice form, detail, and composition'],
  ['fitness', 'consistency, measured in repetitions instead of commits'],
]

const About = () => (
  <section id="about" className="content-section section-frame about-section">
    <div className="section-heading about-heading" data-reveal>
      <p className="eyebrow">02 / off-screen</p>
      <h2>What I enjoy working on.</h2>
    </div>

    <div className="about-layout">
      <div className="about-story" data-reveal>
        <p>
          I enjoy working on backend, infrastructure, and systems problems. I like
          taking an issue, understanding its root cause, and finding a practical fix.
        </p>
        <p>
          I am also exploring computer vision, reinforcement learning, and AI systems,
          with a growing interest in robotics. I am open to new areas and difficult
          problems, even when they are outside my current stack.
        </p>
      </div>

      <aside className="education-card" data-reveal>
        <div className="education-orbit" aria-hidden="true"><span>’27</span></div>
        <p className="card-label">Current coordinates</p>
        <h3>Indian Institute of Technology Madras</h3>
        <p>B.Tech · Computer Science and Engineering</p>
        <dl>
          <div><dt>Year</dt><dd>4th</dd></div>
          <div><dt>Since</dt><dd>2023</dd></div>
        </dl>
      </aside>
    </div>

    <div className="interest-table" data-reveal>
      <div className="interest-title">
        <p className="eyebrow">Things I keep returning to</p>
        <span>hover the rows</span>
      </div>
      {interests.map(([title, note], index) => (
        <div className="interest-row" key={title}>
          <span>0{index + 1}</span>
          <h3>{title}</h3>
          <p>{note}</p>
          <i aria-hidden="true">↗</i>
        </div>
      ))}
    </div>

  </section>
)

export default About

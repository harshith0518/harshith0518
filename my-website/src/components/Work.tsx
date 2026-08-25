import { ArrowUpRight, Terminal } from 'lucide-react'
import {
  SiAmazon,
  SiC,
  SiCplusplus,
  SiCss3,
  SiDjango,
  SiDocker,
  SiGit,
  SiGo,
  SiGrafana,
  SiHtml5,
  SiKubernetes,
  SiLinux,
  SiNodedotjs,
  SiNvidia,
  SiNumpy,
  SiPandas,
  SiPostgresql,
  SiPrometheus,
  SiPython,
  SiReact,
  SiRedis,
  SiScikitlearn,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'
import { PiNetworkX } from 'react-icons/pi'
import { VscGraph } from 'react-icons/vsc'
import NetworkToy from './Elements/NetworkToy'

const experience = [
  {
    company: 'NVIDIA',
    role: 'System Software Engineer Summer Intern',
    period: 'May — Jul 2026',
    link: 'https://github.com/NVIDIA/NVSentinel',
    signal: 'observe',
    lead: 'Made GPU workloads less invisible.',
    summary: 'Prototyped workload observability for NVSentinel across B100, H100, and A100 clusters.',
    details: [
      'Captured CUDA Runtime API activity with a Go/eBPF monitoring agent.',
      'Ran collection node-wide as a Kubernetes DaemonSet and connected DCGM telemetry to Prometheus and Grafana.',
      'Replayed GPU failure patterns to validate cordon, drain, and remediation behavior.',
    ],
    tools: ['Go', 'eBPF', 'CUDA', 'Kubernetes', 'Prometheus'],
  },
  {
    company: 'Internhire',
    role: 'Software Engineering Co-op',
    period: 'Feb — Mar 2026',
    link: 'https://internhire.in/',
    signal: 'ship',
    lead: 'Worked where product met infrastructure.',
    summary: 'Joined an IIT Madras alumni-founded startup as one of its early engineering interns.',
    details: [
      'Moved between backend and frontend work as the product needed it.',
      'Built CI/CD pipelines for deployments on self-hosted infrastructure.',
    ],
    tools: ['Next.js', 'PostgreSQL', 'Docker'],
  },
  {
    company: 'AlgoUniversity · YC S21',
    role: 'Software Engineering Co-op',
    period: 'Jun — Jul 2025',
    link: 'https://github.com/harshith0518/WebDev-project-',
    signal: 'judge',
    lead: 'Built the judge, not just the interface.',
    summary: 'Created the core workflows of a competitive-programming platform from execution to leaderboard.',
    details: [
      'Designed JWT-authenticated APIs for problems, compilation, submissions, evaluation, and rankings.',
      'Containerized the backend and database, then connected Vercel and Amazon S3 for delivery and storage.',
    ],
    tools: ['Django', 'React', 'Docker', 'AWS', 'PostgreSQL'],
  },
]

const achievements = [
  { value: '342', unit: 'AIR', label: 'JEE Main 2023', note: 'nearly 1.1 million candidates' },
  { value: '99', unit: 'rank', label: 'TS EAPCET 2023', note: 'nearly 200,000 candidates' },
  { value: '580', unit: 'AIR', label: 'JEE Advanced 2023', note: 'nearly 160,000 candidates' },
  { value: '1362', unit: 'max', label: 'Codeforces rating', note: 'Harshith7946' },
  { value: '50', unit: 'of 1,700+', label: 'AlgoUniversity cohort', note: 'Accelerator Camp selection' },
]

const skillGroups = [
  {
    index: 'A',
    title: 'Languages',
    items: [
      { name: 'Python', icon: SiPython },
      { name: 'C', icon: SiC },
      { name: 'C++', icon: SiCplusplus },
      { name: 'Go', icon: SiGo },
      { name: 'TypeScript', icon: SiTypescript },
    ],
  },
  {
    index: 'B',
    title: 'Backend & systems',
    items: [
      { name: 'Linux', icon: SiLinux },
      { name: 'eBPF', icon: Terminal },
      { name: 'Django', icon: SiDjango },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'Redis', icon: SiRedis },
    ],
  },
  {
    index: 'C',
    title: 'Frontend',
    items: [
      { name: 'React', icon: SiReact },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'HTML', icon: SiHtml5 },
      { name: 'CSS', icon: SiCss3 },
    ],
  },
  {
    index: 'D',
    title: 'Cloud & DevOps',
    items: [
      { name: 'AWS', icon: SiAmazon },
      { name: 'Docker', icon: SiDocker },
      { name: 'Kubernetes', icon: SiKubernetes },
      { name: 'Prometheus', icon: SiPrometheus },
      { name: 'Grafana', icon: SiGrafana },
      { name: 'Git', icon: SiGit },
    ],
  },
  {
    index: 'E',
    title: 'AI/ML & libraries',
    items: [
      { name: 'CUDA', icon: SiNvidia },
      { name: 'DCGM', icon: SiNvidia },
      { name: 'NetworkX', icon: PiNetworkX },
      { name: 'scikit-learn', icon: SiScikitlearn },
      { name: 'pandas', icon: SiPandas },
      { name: 'NumPy', icon: SiNumpy },
      { name: 'Matplotlib', icon: VscGraph },
    ],
  },
]

const Work = () => (
  <section id="work" className="content-section section-frame work-section">
    <div className="section-heading split-heading" data-reveal>
      <p className="eyebrow">01 / field work</p>
      <h2>Work experience.</h2>
      <p>What I have worked on so far.</p>
    </div>

    <div className="experience-stack">
      {experience.map((item, index) => (
        <article className={`experience-card experience-${index + 1}`} key={item.company} data-reveal>
          <div className="card-number">0{index + 1}</div>
          <header className="experience-header">
            <div>
              <p className="experience-company">{item.company}</p>
              <h3>{item.lead}</h3>
            </div>
            <div className="experience-meta">
              <span>{item.role}</span>
              <span>{item.period}</span>
            </div>
          </header>

          <div className="experience-layout">
            <div className="experience-copy">
              <p className="experience-summary">{item.summary}</p>
              <ul>{item.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
            </div>
            <div className={`signal-glyph signal-${item.signal}`} aria-hidden="true">
              <span /><span /><span /><span /><i />
            </div>
          </div>

          <footer className="experience-footer">
            <div className="tag-row">{item.tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
            <a href={item.link} target="_blank" rel="noreferrer">
              open field note <ArrowUpRight size={17} />
            </a>
          </footer>
        </article>
      ))}
    </div>

    <div className="project-block">
      <div className="section-heading project-heading" data-reveal>
        <p className="eyebrow">Beyond internships</p>
        <h2>Independent projects.</h2>
      </div>
      <article className="featured-project" data-reveal>
        <div className="project-copy">
          <p className="project-meta">Course project · Prof. Danny Raj · Jan—May 2025</p>
          <h3>Agent-Based Analysis of Epidemic Dynamics</h3>
          <p>
            I modeled how individual movement becomes population-level behavior:
            an SIR simulation with core-periphery structure, stochastic mobility,
            proximity-based transmission, and time-varying contact graphs.
          </p>
          <div className="tag-row">
            {['Python', 'NetworkX', 'NumPy', 'Matplotlib'].map((tool) => <span key={tool}>{tool}</span>)}
          </div>
          <a className="project-link" href="https://github.com/harshith0518/Mini-Projects/tree/main/DataScience%20and%20ML/Complex%20Systems/CourseProject" target="_blank" rel="noreferrer">
            inspect the project <ArrowUpRight size={18} />
          </a>
        </div>
        <NetworkToy />
      </article>

      <div className="achievement-strip project-achievements" data-reveal>
        {achievements.map((achievement) => (
          <div className="achievement-card" key={achievement.label}>
            <p><strong>{achievement.value}</strong><span>{achievement.unit}</span></p>
            <h3>{achievement.label}</h3>
            <small>{achievement.note}</small>
          </div>
        ))}
        <a href="https://codeforces.com/profile/Harshith7946" target="_blank" rel="noreferrer">
          See the problem trail <ArrowUpRight size={17} />
        </a>
      </div>
    </div>

    <div className="skills-block" data-reveal>
      <div className="skills-intro">
        <p className="eyebrow">Working toolkit</p>
        <h2>Tools are verbs here.</h2>
      </div>
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.title}>
            <div className="skill-group-title">
              <span>{group.index}</span>
              <h3>{group.title}</h3>
            </div>
            <div className="skill-items">
              {group.items.map((item) => {
                const Icon = item.icon
                return (
                  <span className="skill-item" key={item.name}>
                    <Icon aria-hidden="true" />
                    <span>{item.name}</span>
                  </span>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Work

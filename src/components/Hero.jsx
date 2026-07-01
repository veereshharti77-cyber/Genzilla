const stats = [
  { num: '240+', label: 'Brands Scaled', color: '' },
  { num: '₹18Cr+', label: 'Revenue Generated', color: 'pink' },
  { num: '900%', label: 'Avg. Campaign ROI', color: 'yellow' },
  { num: '12M+', label: 'Reach Delivered', color: '' },
]

const stripItems = [
  'Content Creation', 'Influencer Marketing', 'Paid Performance',
  'Brand Identity', 'Community Building', 'Strategy & Analytics',
]

export default function Hero() {
  return (
    <section id="home" style={{ paddingTop: 0, marginTop: -8 }}>
      <div className="hero-bg"></div>
      <div className="hero-blob"></div>
      <div className="hero-blob-pink"></div>

      <div className="hero-content">
        <div className="hero-left">
          <div className="hero-tag">◈ &nbsp; Mumbai's #1 GenZ Agency</div>
          <h1 className="hero-h1">
            <span className="line-green">We Make</span>
            <span className="line-outlined">Brands</span>
            <span className="line-pink glitch" data-text="Go Viral.">Go Viral.</span>
          </h1>
          <p className="hero-sub">Culture-first. Platform-native. ROI-obsessed. We build social media presence that doesn't just perform — it dominates.</p>
          <div className="hero-ctas">
            <a className="btn-slash btn-filled" href="#portfolio">See Our Work</a>
            <a className="btn-slash btn-ghost" href="#contact">Start a Project →</a>
          </div>
        </div>

        <div className="hero-right">
          {stats.map((s, i) => (
            <div
              className={`stat-card reveal${s.color ? ' ' + s.color : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
              key={s.label}
            >
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-strip">
        {stripItems.map((item, i) => (
          <span key={item} style={{ display: 'contents' }}>
            <span className="strip-item">{item}</span>
            {i < stripItems.length - 1 && <span className="strip-dot"></span>}
          </span>
        ))}
      </div>
    </section>
  )
}

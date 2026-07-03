const stats = [
  { num: 'Genzilla', label: '', color: '' },
  { num: 'Your Marketing', label: '', color: 'pink' },
  { num: 'Plug-in', label: '', color: 'yellow' },
 
]

const openWhatsApp = () => {
  window.open(
    "https://wa.me/919008824184?text=Hi%20I'm%20interested%20in%20your%20services.",
    "_blank"
  );
};

const stripItems = [
  'Content Creation', 'Influencer Marketing', 'Paid Performance',
  'Brand Identity', 'Community Building', 'Strategy & Analytics',
]

export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="hero-bg"></div>
      <div className="hero-blob"></div>
      <div className="hero-blob-pink"></div>

      <div className="hero-content">
        <div className="hero-left">
          <div className="hero-tag">◈ &nbsp; Your GenZ MArketing Plug-in</div>
          <h1 className="hero-h1">
            <span className="line-green">We Make</span>
            <span className="line-outlined">Brands</span>
            <span className="line-pink glitch" data-text="Go Viral.">Go Viral.</span>
          </h1>
          <p className="hero-sub">
            Culture-first. Platform-native. ROI-obsessed. We build social
            media presence that doesn't just perform — it dominates.
          </p>
          <div className="hero-ctas">
            <a className="btn-slash btn-ghost" href="#portfolio">See Our Work</a>
            <a className="btn-slash btn-filled" href="#contact">Start a Project →</a>
            
          </div>
          <div
  className="
    absolute
    left-1/2
    -translate-x-1/2
    z-30
    top-[93%]
    sm:top-[100%]
    md:top-[96%]
    md:-translate-y-1/2
  "
>
  <button
    type="button"
    onClick={openWhatsApp}
    className="btn-slash btn-ghost"
  >
    Let's Talk
  </button>
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
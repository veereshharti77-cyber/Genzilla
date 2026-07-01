const projects = [
  { cat: 'Influencer Campaign', name: 'NIGHTOUT BOMBAY', result: '14 influencers · 2.1M reach · 900% ROI · Sold-out event, 3× capacity', pink: true },
  { cat: 'B2B Social Strategy', name: 'ZARAN TECH', result: 'LinkedIn growth +340% in 90 days. Organic leads 4×.', pink: false },
  { cat: 'Content & Brand', name: 'VELVET BEAUTY', result: '0 → 18K followers in 6 months. Zero paid budget.', pink: true },
  { cat: 'Paid + Organic', name: 'URBAN DINE', result: '₹42L social revenue in Q4. ROAS: 8.4×', pink: false },
  { cat: 'Event + Social', name: 'CHRONIX EVENTS', result: 'Sold-out via social. 3× projected capacity.', pink: true },
  { cat: 'AI Content Pipeline', name: 'LUXE REALTY MUMBAI', result: '60 AI-generated videos · 4.4M impressions · 12 leads/week', pink: false, big: true },
]

export default function Portfolio() {
  return (
    <section id="portfolio">
      <div className="portfolio-head reveal">
        <div>
          <div className="section-eyebrow">Selected Work</div>
          <h2 className="section-h2">Archive of<br/><span style={{ color: 'var(--green)' }}>Excellence.</span></h2>
        </div>
        <a
          className="btn-slash btn-ghost"
          href="#contact"
          style={{
            fontFamily: "'Bebas Neue',sans-serif",
            fontSize: 16,
            letterSpacing: 2,
            padding: '12px 28px',
            color: 'var(--muted)',
            border: '1px solid var(--border)',
            textDecoration: 'none',
            clipPath: 'polygon(8px 0%,100% 0%,calc(100% - 8px) 100%,0% 100%)',
          }}
        >
          View All →
        </a>
      </div>

      <div className="portfolio-grid">
        {projects.map((p, i) => (
          <div
            className={`pcard${p.pink ? ' pink-p' : ''} reveal`}
            style={{ transitionDelay: `${i * 0.05}s` }}
            key={p.name}
          >
            <div className="pcard-accent"></div>
            <div className="pcard-bg"></div>
            <div
              className="pcard-body"
              style={p.big ? { flexDirection: 'row', alignItems: 'center', gap: 64 } : undefined}
            >
              <span className="pcard-cat" style={p.big ? { whiteSpace: 'nowrap' } : undefined}>{p.cat}</span>
              <div className="pcard-content" style={p.big ? { marginTop: 0, flex: 1 } : undefined}>
                <div className="pcard-name">{p.name}</div>
                <div className="pcard-result">{p.result}</div>
              </div>
            </div>
            <div className="pcard-arrow">↗</div>
          </div>
        ))}
      </div>
    </section>
  )
}

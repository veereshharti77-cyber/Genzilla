const services = [
  { num: '01', name: 'Content Creation', tag: 'Reels · Carousels · Memes · Long-Form', pink: false },
  { num: '02', name: 'Influencer Marketing', tag: 'Nano → Mega · ROI Tracked', pink: true },
  { num: '03', name: 'Paid Performance', tag: 'Meta · Google ', pink: false },
  { num: '04', name: 'Brand Identity', tag: 'Visual Systems · Digital-First', pink: true },
  { num: '05', name: 'Community Building', tag: 'Followers → Tribe', pink: false },
  { num: '06', name: 'Strategy & Analytics', tag: 'KPI-Clear · Weekly Reports', pink: true },
]

export default function Work() {
  return (
    <section id="work">
      <div className="work-head">
        <div>
          <div className="section-eyebrow reveal">Capabilities</div>
          <h2 className="section-h2 reveal">What We<br/><span style={{ color: 'var(--pink)' }}>Actually Do.</span></h2>
        </div>
        <p className="work-sub reveal">No templates. No copy-paste strategies. Every brief gets a GenZ lens — platform-native, culture-first, built to perform.</p>
      </div>

      <div className="services-list">
        {services.map((s) => (
          <div className={`svc-row reveal${s.pink ? ' pink-row' : ''}`} key={s.num}>
            <span className="svc-num">{s.num}</span>
            <span className="svc-name">{s.name}</span>
            <span className="svc-tag">{s.tag}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

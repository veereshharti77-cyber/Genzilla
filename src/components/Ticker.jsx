const items = [
  'Content Creation', 'Influencer Marketing', 'Paid Performance', 'Brand Strategy',
  'Community Growth', '900% ROI', '12M+ Reach', '240+ Brands', '₹18Cr+ Revenue',
]

export default function Ticker() {
  const doubled = [...items, ...items]
  return (
    <div style={{ marginTop: 68 }}>
      <div className="ticker-wrap">
        <div className="ticker-track">
          {doubled.map((t, i) => (
            <span className="ticker-item" key={i}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

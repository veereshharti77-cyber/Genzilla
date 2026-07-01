export default function Marquee({ items, color = 'green' }) {
  const doubled = [...items, ...items]
  return (
    <div className={`marquee-divider${color === 'pink' ? ' pink' : ''}`}>
      <div className="marquee-track">
        {doubled.map((t, i) => (
          <span className="marquee-item" key={i}>{t}</span>
        ))}
      </div>
    </div>
  )
}

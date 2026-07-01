const team = [
  { num: '01', initials: 'KR', avatarColor: 'green', name: 'Kiran B H', role: 'Co-Founder & Strategy Lead', bio: '5+ yrs events. 1 yr social. Zero filter, full output. Built Chronix Media from scratch.', pink: false },
  { num: '02', initials: 'AR', avatarColor: 'pink', name: 'Arya R.', role: 'Creative Director', bio: 'Reels-first brain. Ex-agency. Trend whisperer. Makes brands feel alive on the timeline.', pink: true },
  { num: '03', initials: 'MS', avatarColor: 'green', name: 'Mihail S.', role: 'Influencer Partnerships', bio: '500+ creator network. Campaign architect. Believes authentic > reach, always.', pink: false },
  { num: '04', initials: 'PP', avatarColor: 'pink', name: 'Pooja P.', role: 'Performance Marketing', bio: 'Meta & Google certified. ROAS obsessed. Data with a creative soul.', pink: true },
]

export default function Team() {
  return (
    <section id="team">
      <div className="section-eyebrow reveal">The Minds Behind the Mayhem</div>
      <h2 className="section-h2 reveal">Meet the<br/><span style={{ color: 'var(--pink)' }}>Genzillas.</span></h2>

      <div className="team-grid">
        {team.map((t, i) => (
          <div
            className={`tcard${t.pink ? ' pink-t' : ''} reveal`}
            style={{ transitionDelay: `${i * 0.1}s` }}
            key={t.num}
          >
            <div className="tcard-num">{t.num}</div>
            <div className={`tcard-avatar tcard-av-${t.avatarColor}`}>{t.initials}</div>
            <div className="tcard-name">{t.name}</div>
            <div className="tcard-role">{t.role}</div>
            <div className="tcard-bio">{t.bio}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

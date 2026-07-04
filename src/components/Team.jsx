import member1 from "../assets/member1.jpeg";
import member2 from "../assets/member2.jpeg";
import member3 from "../assets/member3.png";
import member4 from "../assets/member4.jpg";
import member5 from "../assets/member5.jpg";



const team = [
  { num: '01', img: member1, avatarColor: 'green', name: 'Kiran B H', role: 'Founder and CEO', bio: '5+ yrs events. 1 yr social. Zero filter, full output. Built Chronix Media from scratch.', pink: false },
  { num: '02', img: member2, avatarColor: 'pink', name: 'Tarun', role: 'Creative Director', bio: 'Reels-first brain. Makes brands feel alive on the timeline.', pink: true },
  { num: '03', img: member3, avatarColor: 'green', name: 'Veeresh', role: 'Full Stack Developer', bio: 'Master mind behind the domain', pink: false },
  { num: '04', img: member4, avatarColor: 'pink', name: 'Sathvik', role: '', bio: '', pink: true },
  { num: '05', img: member5, avatarColor: 'green', name: 'Nitish', role: 'Operations', bio: 'The person who keeps the agency from turning into chaos', pink: false },
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
            <div className={`tcard-avatar tcard-av-${t.avatarColor}`}>
              <img src={t.img} alt={t.name} className="tcard-avatar-img" />
            </div>
            <div className="tcard-name">{t.name}</div>
            <div className="tcard-role">{t.role}</div>
            <div className="tcard-bio">{t.bio}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
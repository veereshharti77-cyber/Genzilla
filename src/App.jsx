import Cursor from './components/Cursor.jsx'
import Nav from './components/Nav.jsx'
import Ticker from './components/Ticker.jsx'
import Marquee from './components/Marquee.jsx'
import Hero from './components/Hero.jsx'
import Work from './components/Work.jsx'
import Portfolio from './components/Portfolio.jsx'
import Team from './components/Team.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import useReveal from './hooks/useReveal.js'

export default function App() {
  useReveal()

  return (
    <>
      <Cursor />
      <Nav />
      <Ticker />
      <Hero />
      <Work />
      <Marquee items={['We Make Brands Go Viral', 'Content That Converts', 'Strategy That Scales', 'Culture-First Always', 'ROI Obsessed']} color="green" />
      <Portfolio />
      <Marquee items={['Follow Us @Genzilla', "Mumbai's #1 GenZ Agency", "Let's Build Something Viral", 'DM Us Anytime']} color="pink" />
      <Team />
      <Contact />
      <Footer />
    </>
  )
}

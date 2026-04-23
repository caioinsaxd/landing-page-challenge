import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import LetsMakeThingsHappen from '../components/LetsMakeThingsHappen'
import CaseStudies from '../components/CaseStudies'

export default function Home() {
  return (
    <div>
      <NavBar />
      <main>
        <Hero />
        <Services />
        <LetsMakeThingsHappen />
        <CaseStudies />
      </main>
    </div>
  )
}
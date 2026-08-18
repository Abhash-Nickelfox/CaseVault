import Hero from '../components/home/Hero.jsx'
import Problem from '../components/home/Problem.jsx'
import Solution from '../components/home/Solution.jsx'
import Experience from '../components/home/Experience.jsx'
import Impact from '../components/home/Impact.jsx'
import GraphShowcase from '../components/home/GraphShowcase.jsx'
import Cta from '../components/home/Cta.jsx'

// Note: Snapshot.jsx (Category/Product/Platform/Tech Stack strip) has been
// archived — removed from the page but kept in components/home/ in case
// it's needed again later.

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <Experience />
      <Impact />
      <GraphShowcase />
      <Cta />
    </>
  )
}

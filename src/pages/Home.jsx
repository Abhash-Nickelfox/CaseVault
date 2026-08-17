import Hero from '../components/home/Hero.jsx'
import Snapshot from '../components/home/Snapshot.jsx'
import Problem from '../components/home/Problem.jsx'
import Solution from '../components/home/Solution.jsx'
import Experience from '../components/home/Experience.jsx'
import Impact from '../components/home/Impact.jsx'
import GraphShowcase from '../components/home/GraphShowcase.jsx'
import Cta from '../components/home/Cta.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <Snapshot />
      <Problem />
      <Solution />
      <Experience />
      <Impact />
      <GraphShowcase />
      <Cta />
    </>
  )
}

import { Link } from 'react-router-dom'
import heroBackground from '../../assets/hero-background.jpg'
import heroDashboardMockup from '../../assets/hero-dashboard.jpg'

export default function Hero() {
  return (
    <section
      id="overview"
      className="relative w-full min-h-[max(720px,90vh)] flex items-center pt-stack-lg pb-stack-lg overflow-hidden border-b border-outline-variant/20"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 w-full h-full z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
        role="img"
        aria-label="A cinematic, high-tech intelligence workspace environment with deep navy tones and soft cyan light flares illuminating server racks and digital interfaces."
      />
      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 w-3/5 bg-gradient-to-r from-black/95 via-black/70 to-transparent z-10" />

      <div className="relative z-20 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
        <div className="lg:col-span-5 space-y-stack-md">
          <h1 className="font-display-lg text-display-lg text-white leading-tight">
            <span className="whitespace-nowrap">Transform Investigations</span>
            <br />
            Into <span className="text-secondary">Intelligence</span>
          </h1>
          <p className="font-body-lg text-body-lg text-white/90 max-w-lg">
            CaseVault gives investigative teams a structured way to work with complex case data.
            From evidence ingestion and entity extraction to relationship analysis and controlled
            collaboration, everything comes together in one governed platform.
          </p>
          <div className="flex flex-wrap gap-stack-sm pt-stack-sm">
            <Link
              to="/discuss"
              className="bg-secondary text-on-secondary px-stack-md py-stack-sm rounded font-label-sm text-label-sm hover:opacity-90 transition-opacity uppercase tracking-widest"
            >
              Let's Connect
            </Link>
          </div>
        </div>

        <div className="lg:col-span-7 relative">
          {/* Desktop dashboard mockup */}
          <div className="glass-panel rounded-xl py-2 px-0 shadow-[0_0_50px_rgba(71,216,236,0.1)] relative z-30 border border-secondary/20 w-[75%] ml-auto">
            <img
              className="w-full h-auto rounded object-cover aspect-[1.48]"
              alt="A desktop computer displaying the CaseVault dashboard interface, with deep navy backgrounds, glowing cyan accents, evidence lists, and an interactive map showing intelligence connections."
              src={heroDashboardMockup}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

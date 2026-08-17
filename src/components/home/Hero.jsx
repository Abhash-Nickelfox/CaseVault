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
      <div className="absolute inset-0 w-3/5 bg-gradient-to-r from-primary/95 via-primary/70 to-transparent z-10" />

      <div className="relative z-20 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
        <div className="lg:col-span-5 space-y-stack-md">
          <p className="text-secondary font-mono-data text-mono-data uppercase tracking-[0.2em]">
            INTELLIGENCE PLATFORM
          </p>
          <h1 className="font-display-lg text-display-lg text-white leading-tight">
            Turn fragmented investigations into{' '}
            <span className="text-secondary">connected intelligence.</span>
          </h1>
          <p className="font-body-lg text-body-lg text-white/90 max-w-lg">
            CaseVault is an enterprise-grade, AI-powered desktop investigation platform designed
            to eliminate data silos. By unifying unstructured evidence, automatically extracting
            critical entities, and visualizing hidden relationships, it transforms fragmented
            investigations into connected intelligence while maintaining an uncompromising chain
            of custody for modern law enforcement and legal teams.
          </p>
          <div className="flex flex-wrap gap-stack-sm pt-stack-sm">
            <Link
              to="/discuss"
              className="bg-secondary text-on-secondary px-stack-md py-stack-sm rounded font-label-sm text-label-sm hover:opacity-90 transition-opacity uppercase tracking-widest"
            >
              Let's Discuss
            </Link>
            <a
              href="#problem"
              className="border border-secondary text-secondary px-stack-md py-stack-sm rounded font-label-sm text-label-sm hover:bg-secondary/10 transition-colors uppercase tracking-widest"
            >
              Explore the Case Study
            </a>
          </div>
        </div>

        <div className="lg:col-span-7 relative">
          {/* Desktop dashboard mockup */}
          <div className="glass-panel rounded-xl p-2 shadow-[0_0_50px_rgba(71,216,236,0.1)] relative z-30 border border-secondary/20">
            <img
              className="w-full h-auto rounded object-cover aspect-[1.79]"
              alt="A desktop computer displaying the CaseVault dashboard interface, with deep navy backgrounds, glowing cyan accents, evidence lists, and an interactive map showing intelligence connections."
              src={heroDashboardMockup}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

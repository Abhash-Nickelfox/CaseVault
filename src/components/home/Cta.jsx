import { Link } from 'react-router-dom'
import ctaBackground from '../../assets/cta-background.jpg'

export default function Cta() {
  return (
    <section className="relative min-h-[500px] flex items-center py-[100px] border-b border-outline-variant/20">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-60"
        style={{ backgroundImage: `url(${ctaBackground})` }}
        role="img"
        aria-label="A secure, cinematic intelligence workspace backdrop."
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/30 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto text-center px-container-padding space-y-stack-md">
        <h2 className="font-display-lg text-display-lg text-on-surface">
          Ready to secure your intelligence?
        </h2>
        <p className="font-body-lg text-body-lg text-black">
          Deploy CaseVault in your environment and bring structure to your investigations.
        </p>
        <div className="pt-stack-sm">
          <Link
            to="/discuss"
            className="inline-block bg-secondary text-on-secondary px-stack-lg py-stack-md rounded font-label-sm text-label-sm hover:opacity-90 transition-opacity text-lg uppercase tracking-widest font-bold shadow-[0_0_30px_rgba(71,216,236,0.3)]"
          >
            Request a Demo
          </Link>
        </div>
      </div>
    </section>
  )
}

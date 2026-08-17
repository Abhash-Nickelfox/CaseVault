import Icon from '../shared/Icon.jsx'
import impactBackground from '../../assets/impact-background.jpg'

const LEGACY_POINTS = [
  {
    icon: 'timer',
    label: 'Time Intensive:',
    detail: 'Weeks spent manually cross-referencing suspect aliases and phone records.',
  },
  {
    icon: 'dns',
    label: 'Data Silos:',
    detail: 'Evidence siloed in individual investigator hard drives, risking massive data loss.',
  },
  {
    icon: 'policy',
    label: 'Compliance Risk:',
    detail: 'Highly vulnerable chain of custody tracked via error-prone spreadsheets.',
  },
]

const CASEVAULT_POINTS = [
  {
    icon: 'hub',
    label: 'Instant Discovery:',
    detail: 'Instantaneous visualization of multi-degree entity connections across all cases.',
  },
  {
    icon: 'lock',
    label: 'Secure Repo:',
    detail: 'Centralized, cryptographically secure evidence repository accessible agency-wide.',
  },
  {
    icon: 'gavel',
    label: 'Immutable Audits:',
    detail: 'Automated, immutable audit trails guaranteeing strict prosecutorial integrity.',
  },
]

export default function Impact() {
  return (
    <section className="relative py-[120px] border-b border-outline-variant/20" id="impact">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-luminosity"
        style={{ backgroundImage: `url(${impactBackground})` }}
        role="img"
        aria-label="A subtle, abstract network backdrop evoking data connectivity."
      />
      <div className="absolute inset-0 bg-surface/95" />

      <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center max-w-3xl mx-auto mb-stack-lg">
          <p className="text-secondary font-mono-data text-xs uppercase tracking-[0.2em] mb-4">
            PERFORMANCE METRICS
          </p>
          <h2 className="font-display-lg text-display-lg text-on-surface mb-stack-sm">
            Measurable Impact
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Transitioning to CaseVault yields immediate operational improvements, ensuring strict
            chain of custody and automated entity tagging.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
          {/* Before */}
          <div className="bg-surface-container-low border border-error/20 p-stack-md rounded-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Icon name="history" className="text-9xl text-error" />
            </div>
            <h3 className="font-headline-lg text-headline-lg text-error mb-stack-md flex items-center gap-3 relative z-10">
              <Icon name="close" className="bg-error/10 p-2 rounded-lg" /> Legacy Process
            </h3>
            <div className="space-y-4 relative z-10">
              {LEGACY_POINTS.map((point) => (
                <div key={point.label} className="flex gap-4 items-start">
                  <Icon name={point.icon} className="text-error mt-1" />
                  <p className="font-body-md text-on-surface-variant">
                    <strong className="text-on-surface block">{point.label}</strong>
                    {point.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* After */}
          <div className="bg-surface-container border border-secondary/30 p-stack-md rounded-xl relative overflow-hidden shadow-[0_0_40px_rgba(71,216,236,0.05)]">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Icon name="rocket_launch" className="text-9xl text-secondary" />
            </div>
            <h3 className="font-headline-lg text-headline-lg text-secondary mb-stack-md flex items-center gap-3 relative z-10">
              <Icon name="check" className="bg-secondary/10 p-2 rounded-lg" /> CaseVault Intelligence
            </h3>
            <div className="space-y-4 relative z-10">
              {CASEVAULT_POINTS.map((point) => (
                <div key={point.label} className="flex gap-4 items-start">
                  <Icon name={point.icon} className="text-secondary mt-1" />
                  <p className="font-body-md text-on-surface-variant">
                    <strong className="text-on-surface block">{point.label}</strong>
                    {point.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

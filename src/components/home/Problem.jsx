import problemBackground from '../../assets/problem-background.jpg'

const CHALLENGES = [
  {
    title: 'No Controlled User Registration',
    severity: 'critical',
    description:
      'Open self-registration on an investigations platform would create unauthorized access to sensitive case data. There was no mechanism to restrict who could enter and see active case records.',
  },
  {
    title: 'No Role-Based Access Control',
    severity: 'critical',
    description:
      'Without role-based restrictions, all users would have equal access to every case and module, including sensitive cases managed exclusively by senior investigators.',
  },
  {
    title: 'Manual Entity Analysis',
    severity: 'critical',
    description:
      'Manually identifying connections between people, places, and events across large volumes of case evidence was time-intensive and error-prone, so critical relationships were routinely missed.',
  },
  {
    title: 'Inconsistent Case Creation',
    severity: 'high',
    description:
      'Creating cases from scratch for every investigation produced inconsistent data capture across investigators. No two cases for the same crime type shared the same structure.',
  },
  {
    title: 'No Structured Evidence Handling',
    severity: 'high',
    description:
      'Evidence was shared via physical handoff or email with no centralized ingestion, no validation, and no deduplication, so investigators had no unified repository for case materials.',
  },
  {
    title: 'No Collaboration Governance',
    severity: 'medium',
    description:
      'Informal case sharing via email or verbal communication left no audit trail and no read-only enforcement, so multiple investigators could modify the same case record simultaneously, creating conflicts.',
  },
]

const SEVERITY_STYLES = {
  critical: 'bg-error/15 text-error border-error/40',
  high: 'bg-error/10 text-error/90 border-error/25',
  medium: 'bg-outline-variant/15 text-on-surface-variant border-outline-variant/30',
}

export default function Problem() {
  return (
    <section
      className="relative w-full border-b border-outline-variant/20 overflow-hidden py-[100px]"
      id="problem"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity"
        style={{ backgroundImage: `url(${problemBackground})` }}
        role="img"
        aria-label="A dim, tense investigation scene evoking scattered, disconnected evidence."
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-transparent to-background/90" />

      <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <p className="text-secondary font-mono-data text-xs uppercase tracking-[0.2em] mb-4">
          Industry Challenges
        </p>
        <h2 className="font-display-lg text-display-lg text-on-surface max-w-3xl">
          Problems worth solving
        </h2>
        <p className="mt-stack-md font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
          Law enforcement investigators had no structured digital platform for managing
          investigations. Case creation was inconsistent, evidence sharing happened via email,
          entity analysis required exhausting manual review across large document volumes, and
          there was no role-based access control governing who could see sensitive case data.
        </p>

        <div className="mt-stack-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {CHALLENGES.map((challenge, index) => (
            <div
              key={challenge.title}
              className="glass-panel p-stack-md rounded-xl flex flex-col"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="text-5xl font-extrabold text-secondary/80 font-headline-lg">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span
                  className={`shrink-0 rounded-full border px-3 py-1 font-mono-data text-[10px] uppercase tracking-widest ${SEVERITY_STYLES[challenge.severity]}`}
                >
                  {challenge.severity}
                </span>
              </div>
              <h3 className="mt-stack-sm font-headline-md text-headline-md text-on-surface">
                {challenge.title}
              </h3>
              <p className="mt-2 font-body-md text-body-md text-on-surface-variant">
                {challenge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

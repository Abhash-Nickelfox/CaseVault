import Icon from '../shared/Icon.jsx'
import dashboardAdmin from '../../assets/dashboard-admin.jpg'
import dashboardSeniorInvestigator from '../../assets/dashboard-senior-investigator.jpg'
import dashboardInvestigator from '../../assets/dashboard-investigator.jpg'

const ROLES = [
  {
    icon: 'admin_panel_settings',
    title: 'Administrator',
    description:
      'Provides strict user governance and granular access control, ensuring absolute visibility into system integrity and managing agency-wide security protocols.',
    bullets: [
      'Strict RBAC and user governance',
      'Comprehensive immutable audit trails',
      'Centralized security protocol management',
    ],
    image: dashboardAdmin,
    alt: 'The CaseVault administrator dashboard, showing user governance controls and system-wide security metrics.',
    accent: 'secondary',
    layout: 'text-first',
  },
  {
    icon: 'visibility',
    title: 'Senior Investigator',
    description:
      'High-level case oversight empowering senior personnel with aggregate views of active operations, enabling swift strategic decision-making and resource deployment.',
    bullets: [
      'Macro-level oversight & cross-case previews',
      'Real-time aggregate views & priority alerts',
      'Workload monitoring & analytics',
    ],
    image: dashboardSeniorInvestigator,
    alt: 'The CaseVault senior investigator dashboard, showing aggregate case oversight and cross-case relationship previews.',
    accent: 'primary',
    layout: 'image-first',
  },
  {
    icon: 'person_search',
    title: 'Investigator',
    description:
      'Meticulously designed for streamlined case creation and structured evidence ingestion with automated entity tagging and deep-dive analysis tools.',
    bullets: [
      'Streamlined case creation & evidence ingestion',
      'Automated entity tagging & relationship highlighting',
      'Secure, isolated workspace per investigation',
    ],
    image: dashboardInvestigator,
    alt: 'The CaseVault investigator workspace, showing structured evidence ingestion and automated entity tagging.',
    accent: 'tertiary',
    layout: 'text-first',
  },
]

// Tailwind's JIT scanner needs each class it generates to appear as a
// complete, literal string somewhere in source — so opacity variants are
// spelled out in full here rather than built with template concatenation.
const ACCENT_CLASSES = {
  secondary: {
    text: 'text-secondary',
    bg: 'bg-secondary',
    border: 'border-secondary',
    borderSoft: 'border-secondary/30',
  },
  primary: {
    text: 'text-primary',
    bg: 'bg-primary',
    border: 'border-primary',
    borderSoft: 'border-primary/30',
  },
  tertiary: {
    text: 'text-tertiary',
    bg: 'bg-tertiary',
    border: 'border-tertiary',
    borderSoft: 'border-tertiary/30',
  },
}

function RoleRow({ role }) {
  const accent = ACCENT_CLASSES[role.accent]
  const isImageFirst = role.layout === 'image-first'

  const textBlock = (
    <div
      className={
        isImageFirst
          ? 'lg:col-span-5 space-y-stack-md lg:order-2 order-1'
          : 'lg:col-span-5 space-y-stack-md'
      }
    >
      <h3
        className={`font-headline-lg text-[36px] text-on-surface flex items-center gap-3 ${
          isImageFirst ? 'justify-end' : ''
        }`}
      >
        {isImageFirst ? (
          <>
            {role.title} <Icon name={role.icon} className={`${accent.text} text-4xl`} />
          </>
        ) : (
          <>
            <Icon name={role.icon} className={`${accent.text} text-4xl`} /> {role.title}
          </>
        )}
      </h3>
      <p className="font-body-md text-body-md text-on-surface-variant text-lg">
        {role.description}
      </p>
      <ul
        className={`space-y-3 text-on-surface-variant font-body-md mt-6 ${
          isImageFirst ? 'inline-block text-left' : ''
        }`}
      >
        {role.bullets.map((bullet) => (
          <li key={bullet} className="flex items-center gap-3">
            <span className={`w-1.5 h-1.5 rounded-full ${accent.bg}`} /> {bullet}
          </li>
        ))}
      </ul>
    </div>
  )

  const imageBlock = (
    <div
      className={isImageFirst ? 'lg:col-span-7 lg:order-1 order-2' : 'lg:col-span-7'}
    >
      <div className="glass-panel p-2 rounded-xl shadow-2xl">
        <img
          className="w-full h-auto rounded border border-outline-variant/20"
          src={role.image}
          alt={role.alt}
        />
      </div>
    </div>
  )

  const wrapperClass = isImageFirst
    ? `grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center flex-row-reverse border-r-2 ${accent.borderSoft} pr-8 relative text-right`
    : `grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center border-l-2 ${accent.borderSoft} pl-8 relative`

  const dotClass = isImageFirst
    ? `absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-background border-2 ${accent.border} rounded-full`
    : `absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-background border-2 ${accent.border} rounded-full`

  return (
    <div className={wrapperClass}>
      <div className={dotClass} />
      {isImageFirst ? (
        <>
          {imageBlock}
          {textBlock}
        </>
      ) : (
        <>
          {textBlock}
          {imageBlock}
        </>
      )}
    </div>
  )
}

export default function Experience() {
  return (
    <section className="py-[120px] bg-background" id="experience">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop space-y-[100px]">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-secondary font-mono-data text-xs uppercase tracking-[0.2em] mb-4">
            ROLE-BASED WORKFLOWS
          </p>
          <h2 className="font-display-lg text-display-lg text-on-surface mb-stack-sm">
            Tailored Desktop Interfaces
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Ensuring security, robust oversight, and deep investigatory focus across distinct
            operational roles.
          </p>
        </div>

        {ROLES.map((role) => (
          <RoleRow key={role.title} role={role} />
        ))}
      </div>
    </section>
  )
}

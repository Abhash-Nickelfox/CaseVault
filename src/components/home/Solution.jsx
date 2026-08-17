import solutionArchitecture from '../../assets/solution-background.jpg'

const STEPS = [
  {
    title: 'Platform Architecture & Design',
    description:
      'Figma designs scoped across Admin, Senior Investigator, and Investigator portals. Role-specific dashboards and 7 module flows designed before development begins, with scope frozen at design sign-off.',
  },
  {
    title: 'Authentication & Role Management',
    description:
      'Admin-controlled user registration built with employee ID and role assignment. System generates unique credentials; admin delivers offline. Role-based access control restricts module visibility by assigned role.',
  },
  {
    title: 'Onboarding & Role Dashboards',
    description:
      'First-login guided tour tailored per role. Post-login dashboard surfaces only modules relevant to the authenticated user: Admin sees user management, Senior Investigator sees case and investigator tools, Investigator sees cases, notifications, and reports.',
  },
  {
    title: 'Case Management Module',
    description:
      'Template-driven case creation (Theft, Kidnapping, and other crime types) with extensible custom fields. Case updates allow investigators to record progress and findings at any time. Shared cases enforce read-only access for receiving investigators.',
  },
  {
    title: 'Data Ingestion & LLM Pipeline',
    description:
      'Six-format file upload (PDF, DOC, images, audio, video, OCR & CDR) with LLM-driven validation and categorization. Data cleaning tools handle deduplication and metadata tagging, keeping evidence stored in a unified, queryable repository.',
  },
  {
    title: 'Entity Extraction & Neo4j Graph',
    description:
      'Pre-trained LLM processes case files and identifies entities and relationships, passing structured data to Neo4j for interactive graph visualization. Audio/video transcription, text summarization, image object detection, and prompt refinement also delivered.',
  },
  {
    title: 'Collaboration, Notifications & Audit',
    description:
      'In-case collaboration enables comment, edit, and data addition on owned cases. Shared cases remain view-only. Real-time web notifications alert all stakeholders on case changes. All changes synced and logged with full access records for compliance.',
  },
]

export default function Solution() {
  return (
    <section
      className="relative py-[100px] border-b border-outline-variant/20 bg-surface-container-lowest/40"
      id="solution"
    >
      <div className="max-w-[1200px] mx-auto px-container-padding text-center">
        <p className="text-secondary font-mono-data text-xs uppercase tracking-[0.2em] mb-4">
          How it works end-to-end
        </p>
        <h2 className="font-display-lg text-display-lg text-on-surface">Solution Architecture</h2>
        <p className="mt-stack-md font-body-lg text-body-lg text-on-surface-variant">
          An AI-powered investigations and case management platform with 3-tier RBAC (Admin,
          Senior Investigator, Investigator), template-driven case creation, multi-format file
          upload across 6 evidence types, LLM entity extraction, Neo4j relationship graph
          visualization, and in-platform collaboration with full audit logs.
        </p>
        <p className="mt-stack-sm font-body-md text-body-md text-on-surface-variant/80">
          The complete user journey from onboarding to actionable intelligence.
        </p>
      </div>

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mt-stack-lg">
        <div className="glass-panel rounded-xl p-2 shadow-[0_0_60px_rgba(71,216,236,0.1)] border border-secondary/20">
          <img
            className="w-full h-auto rounded border border-outline-variant/20 object-cover"
            src={solutionArchitecture}
            alt="An architecture diagram overlaying a connected intelligence workspace, representing CaseVault's data flow from ingestion through LLM processing to the Neo4j relationship graph."
          />
        </div>
      </div>

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mt-stack-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {STEPS.map((step, index) => (
          <div
            key={step.title}
            className="rounded-xl border-t-2 border-secondary/50 bg-surface-container/40 p-stack-md"
          >
            <span className="font-mono-data text-xs text-secondary uppercase tracking-widest">
              Step {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-2 font-headline-md text-headline-md text-on-surface">
              {step.title}
            </h3>
            <p className="mt-2 font-body-md text-body-md text-on-surface-variant">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

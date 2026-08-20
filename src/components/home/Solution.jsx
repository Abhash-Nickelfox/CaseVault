import solutionArchitecture from '../../assets/solution-background.jpg'

const STEPS = [
  {
    title: 'Platform Architecture & Design',
    description:
      'Figma designs define the Admin, Senior Investigator, and Investigator portals, with role-specific dashboards and 7 core module flows mapped end-to-end. The complete platform structure, user journeys, and interaction patterns are finalized and scope-frozen before development begins.',
  },
  {
    title: 'Authentication & Role Management',
    description:
      'Admin-controlled registration using employee ID and role assignment, with unique credentials generated for each user. 3-tier RBAC ensures role-specific access, restricting module visibility and permissions based on assigned roles.',
  },
  {
    title: 'Onboarding & Role Dashboards',
    description:
      'Role-specific first-login guidance helps users quickly understand their workspace. Dashboards dynamically surface relevant modules and actions—Admin manages users, Senior Investigator manages cases and investigators, while Investigator accesses cases, notifications, and reports.',
  },
  {
    title: 'Case Management Module',
    description:
      'Template-driven case creation supports Theft, Kidnapping, and other crime types, with extensible custom fields for evolving requirements. Investigators can continuously update case progress and findings, while shared cases enforce read-only access for receiving investigators.',
  },
  {
    title: 'Data Ingestion & LLM Pipeline',
    description:
      'Multi-format evidence ingestion across PDF, DOC, images, audio, video, OCR, and CDR with LLM-powered validation and categorization. Deduplication, data cleaning, and metadata tagging organize evidence into a unified, structured, and queryable repository for investigation.',
  },
  {
    title: 'Entity Extraction & Neo4j Graph',
    description:
      'Pre-trained LLMs analyze case files to extract entities and relationships, transforming structured data into interactive Neo4j graphs. The pipeline also supports audio/video transcription, text summarization, image object detection, and prompt refinement for deeper investigative intelligence.',
  },
  {
    title: 'Collaboration, Notifications & Audit',
    description:
      'In-case collaboration enables comments, edits, and data additions on owned cases, while shared cases remain view-only. Real-time notifications keep stakeholders informed of case updates, with every change synchronized and recorded through complete access and activity logs for compliance.',
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
          CaseVault connects the complete investigation lifecycle, from secure onboarding and
          template-driven case creation to multi-format evidence ingestion and AI-powered entity
          extraction. With 3-tier RBAC (Admin, Senior Investigator, Investigator), Neo4j
          relationship graphs, in-platform collaboration, and complete audit logs, investigators
          turn fragmented evidence into actionable intelligence.
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

const TECH_STACK = [
  { name: 'React & Node:', detail: 'Secure, scalable desktop-class architecture' },
  { name: 'Neo4j:', detail: 'Critical for performant relationship visualization' },
  { name: 'PostgreSQL:', detail: 'Robust relational storage for data integrity' },
  { name: 'Custom LLMs:', detail: 'Precision automated entity extraction' },
]

export default function Snapshot() {
  return (
    <section className="border-b border-outline-variant/20 bg-surface-container/50">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-md grid grid-cols-2 md:grid-cols-5 gap-stack-md">
        <div className="flex flex-col border-l border-secondary/30 pl-4">
          <span className="font-mono-data text-xs text-secondary uppercase tracking-widest mb-1">
            Category
          </span>
          <span className="font-body-md text-body-md text-on-surface">
            Law Enforcement/LegalTech
          </span>
        </div>
        <div className="flex flex-col border-l border-secondary/30 pl-4">
          <span className="font-mono-data text-xs text-secondary uppercase tracking-widest mb-1">
            Product
          </span>
          <span className="font-body-md text-body-md text-on-surface">AI Investigations</span>
        </div>
        <div className="flex flex-col border-l border-secondary/30 pl-4">
          <span className="font-mono-data text-xs text-secondary uppercase tracking-widest mb-1">
            Platform
          </span>
          <span className="font-body-md text-body-md text-on-surface">Desktop Web</span>
        </div>
        <div className="flex flex-col md:col-span-2 border-l border-secondary/30 pl-4">
          <span className="font-mono-data text-xs text-secondary uppercase tracking-widest mb-2">
            Architecture &amp; Tech Stack
          </span>
          <ul className="font-mono-data text-xs text-on-surface-variant space-y-1">
            {TECH_STACK.map((item) => (
              <li key={item.name}>
                <span className="text-secondary font-semibold">{item.name}</span> {item.detail}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

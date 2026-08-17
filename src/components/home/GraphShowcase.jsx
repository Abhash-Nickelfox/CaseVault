import neo4jGraph from '../../assets/neo4j-graph.jpg'

export default function GraphShowcase() {
  return (
    <section className="py-stack-lg border-y border-outline-variant/20 relative overflow-hidden bg-surface-container-lowest">
      <div className="absolute inset-0 bg-primary-container/20" />

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10 text-center mb-stack-md">
        <h2 className="font-display-lg text-display-lg text-on-surface mb-stack-sm">
          Connected Intelligence
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Powered by Neo4j, the dynamic relationship graph interface empowers investigators to
          visually navigate complex, multi-layered entity connections automatically extracted by
          our specialized AI models.
        </p>
      </div>

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div className="glass-panel p-2 rounded-xl shadow-[0_0_80px_rgba(71,216,236,0.15)] border-secondary/30">
          <img
            className="w-full h-auto rounded border border-outline-variant/20"
            alt="A detailed Neo4j relationship graph interface with glowing cyan nodes representing people, places, and events, connected by thin lines, with a side panel showing detailed data about a selected node."
            src={neo4jGraph}
          />
        </div>
      </div>
    </section>
  )
}

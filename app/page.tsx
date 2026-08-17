const features = [
  ['Text first', 'Begin with the manuscript text, not a polished translation.'],
  ['Word analysis', 'Inspect script, language candidates, roots, morphology, and confidence.'],
  ['Witnesses', 'Connect passages to manuscripts, variants, sources, and evidence notes.'],
  ['Verum Chat', 'Ask historical and theological questions with source boundaries.'],
  ['Via Verum', 'Turn researched conclusions into responsible public scholarship.'],
  ['Admin tools', 'Prepare providers, language catalogues, sources, usage, and feature controls.'],
];

const apiNeeds = ['Supabase', 'OpenAI', 'Anthropic', 'Google Gemini', 'Scholarly datasets', 'Email', 'Stripe', 'Monitoring'];

export default function Home() {
  return (
    <>
      <main className="hero">
        <section className="hero-copy" aria-labelledby="home-title">
          <p className="eyebrow">Ancient text research platform</p>
          <h1 id="home-title">Glossa</h1>
          <h2>Go behind the translation.</h2>
          <p>
            Explore languages, words, manuscripts, textual variants, and traditions behind the ancient texts that shaped Christianity and the Abrahamic world.
          </p>
          <div className="actions" aria-label="Primary actions">
            <a className="primary" href="/app">Start research — free</a>
            <a className="secondary" href="/glossa">Explore Glossa</a>
          </div>
        </section>
        <aside className="hero-visual" aria-label="Manuscript research illustration">
          <img src="/images/manuscript-desk.svg" alt="Illustrated manuscript research desk with evidence cards" />
        </aside>
      </main>

      <section className="section split-section" aria-labelledby="api-title">
        <div>
          <p className="eyebrow dark">Setup checklist</p>
          <h2 id="api-title">APIs and services to gather</h2>
          <p className="lede">Start with Supabase plus one AI provider. Add scholarly datasets, email, billing, and monitoring as the product features become active.</p>
        </div>
        <div className="api-list">
          {apiNeeds.map((api) => <span className="pill" key={api}>{api}</span>)}
          <a className="text-link" href="/api-requirements">View full API checklist in docs</a>
        </div>
      </section>

      <section className="grid feature-grid" aria-label="Platform capabilities">
        {features.map(([title, body]) => (
          <article className="card" key={title}>
            <h3>{title}</h3>
            <p>{body}</p>
          </article>
        ))}
      </section>
    </>
  );
}

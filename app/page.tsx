const features = [
  ['Text first', 'Begin with the manuscript text, not a polished translation.'],
  ['Word analysis', 'Inspect script, language candidates, roots, morphology, and confidence.'],
  ['Witnesses', 'Connect passages to manuscripts, variants, sources, and evidence notes.'],
  ['Verum Chat', 'Ask historical and theological questions with source boundaries.'],
  ['Via Verum', 'Turn researched conclusions into responsible public scholarship.'],
  ['Admin tools', 'Prepare providers, language catalogues, sources, usage, and feature controls.'],
];

const apiNeeds = ['Supabase', 'OpenAI', 'Anthropic', 'Google Gemini', 'Scholarly datasets', 'Email', 'Stripe', 'Monitoring'];

const newsPlaceholders = [
  ['Persecuted church', 'Global watch brief for verified persecution reports, aid needs, and legal updates.'],
  ['Messianic Jewish world', 'Community, ministry, education, and Israel/Diaspora updates with source review.'],
  ['Faith and business', 'Christian and Jewish founders, publishing, media, finance, and philanthropy signals.'],
  ['Catholic life', 'Mass broadcasts, priest interviews, catechesis, parish missions, and evangelization events.'],
];

export default function Home() {
  return (
    <>
      <main className="hero">
        <section className="hero-copy" aria-labelledby="home-title">
          <p className="eyebrow">Ancient text · public witness · serious research</p>
          <h1 id="home-title">Glossa</h1>
          <h2>Go behind the translation.</h2>
          <p>
            A scholarly web platform for ancient languages, manuscripts, Christian history, Messianic Jewish context, and responsible media rooted in evidence rather than spectacle.
          </p>
          <div className="actions" aria-label="Primary actions">
            <a className="primary" href="/app">Start research — free</a>
            <a className="secondary" href="/media">Open media studio</a>
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

      <section className="image-band" aria-label="Platform image cards">
        <article className="image-card manuscript-card">
          <span>Manuscript desk</span>
          <strong>Languages, witnesses, variants, and notes in one research flow.</strong>
        </article>
        <article className="image-card broadcast-card">
          <span>Broadcast ready</span>
          <strong>Prepare live teaching, Mass streams, interviews, and social clips.</strong>
        </article>
      </section>

      <section className="section split-section" aria-labelledby="api-title">
        <div>
          <p className="eyebrow dark">Setup checklist</p>
          <h2 id="api-title">APIs and services to gather</h2>
          <p className="lede">Start with Supabase plus one AI provider. Add scholarly datasets, email, billing, social connectors, and monitoring as each product surface becomes active.</p>
        </div>
        <div className="api-list">
          {apiNeeds.map((api) => <span className="pill" key={api}>{api}</span>)}
          <a className="text-link" href="/api-requirements">View full API checklist</a>
        </div>
      </section>

      <section className="section news-preview" aria-labelledby="news-title">
        <div className="section-heading">
          <p className="eyebrow dark">Newsroom placeholder</p>
          <h2 id="news-title">Christian and Messianic Jewish world brief</h2>
          <p className="lede">A future editorial board for sourced updates across persecution, Catholic life, Messianic Jewish ministries, business, finance, media, and public witness.</p>
        </div>
        <div className="grid compact-grid">
          {newsPlaceholders.map(([title, body]) => (
            <article className="card news-card" key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
        <a className="primary section-cta" href="/media">Open live and media connectors</a>
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

type ApiGroup = {
  title: string;
  items: string[];
};

const groups: ApiGroup[] = [
  { title: 'Required for persistence', items: ['Supabase URL', 'Supabase anon key', 'Supabase service-role key'] },
  { title: 'AI providers', items: ['OpenAI API key', 'Anthropic API key', 'Google Gemini API key'] },
  { title: 'Scholarship datasets', items: ['Bible/manuscript provider', 'Lexicon/dictionary datasets', 'Church Fathers corpus'] },
  { title: 'Production operations', items: ['Email provider', 'Stripe billing', 'Sentry monitoring', 'Analytics', 'Object storage/CDN'] },
];

export default function ApiRequirements() {
  return (
    <main className="section">
      <p className="eyebrow dark">Setup checklist</p>
      <h1>APIs and services to gather</h1>
      <p className="lede">Configure only the services needed for the features you are enabling. Start with Supabase plus one AI provider, then add licensed scholarly datasets and production services as the product matures.</p>
      <section className="grid" aria-label="API groups">
        {groups.map((group) => (
          <article className="card" key={group.title}>
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
        ))}
      </section>
    </main>
  );
}

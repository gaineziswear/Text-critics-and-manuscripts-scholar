import { providerStatus } from '@/lib/agents/orchestrator';

export default function Page() {
  const providers = providerStatus();

  return (
    <main className="section">
      <h1 style={{ textTransform: 'capitalize' }}>verum academy</h1>
      <p>This production web application area belongs to the unified Glossa, Verum Academy, Verum Chat, Verum Media, and Via Verum research platform.</p>
      <div className="grid">
        <div className="card">
          <h3>Evidence-first</h3>
          <p>Claims require source provenance and uncertainty labels.</p>
        </div>
        <div className="card">
          <h3>Server providers</h3>
          <p>Keys are checked on the server only. No secret is sent to the browser.</p>
          <ul>
            <li>OpenAI: {providers.openai ? 'Configured' : 'Not configured'}</li>
            <li>Anthropic: {providers.anthropic ? 'Configured' : 'Not configured'}</li>
            <li>Google: {providers.google ? 'Configured' : 'Not configured'}</li>
          </ul>
        </div>
        <div className="card">
          <h3>Research pipeline</h3>
          <p>Script → language candidates → morphology → roots → lexical evidence → manuscripts → textual criticism → historical and theological synthesis.</p>
        </div>
      </div>
    </main>
  );
}

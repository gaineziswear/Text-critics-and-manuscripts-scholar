'use client';

import { useEffect, useState } from 'react';

type ProviderResponse = {
  environment: string;
  deployment: string | null;
  project: string | null;
  providers: {
    openai: boolean;
    anthropic: boolean;
    google: boolean;
  };
};

export default function Page() {
  const [status, setStatus] = useState<ProviderResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    fetch('/api/providers', { cache: 'no-store' })
      .then(async (response) => {
        if (!response.ok) throw new Error(`Provider check failed (${response.status})`);
        return response.json() as Promise<ProviderResponse>;
      })
      .then((data) => {
        if (active) setStatus(data);
      })
      .catch((err: unknown) => {
        if (active) setError(err instanceof Error ? err.message : 'Provider check failed');
      });

    return () => {
      active = false;
    };
  }, []);

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
          <p>Keys are checked through a server-only diagnostic endpoint. No secret is sent to the browser.</p>
          {error ? (
            <p role="alert">{error}</p>
          ) : status ? (
            <>
              <p><strong>Environment:</strong> {status.environment}</p>
              <ul>
                <li>OpenAI: {status.providers.openai ? 'Configured' : 'Not configured'}</li>
                <li>Anthropic: {status.providers.anthropic ? 'Configured' : 'Not configured'}</li>
                <li>Google: {status.providers.google ? 'Configured' : 'Not configured'}</li>
              </ul>
            </>
          ) : (
            <p>Checking server configuration…</p>
          )}
        </div>
        <div className="card">
          <h3>Research pipeline</h3>
          <p>Script → language candidates → morphology → roots → lexical evidence → manuscripts → textual criticism → historical and theological synthesis.</p>
        </div>
      </div>
    </main>
  );
}

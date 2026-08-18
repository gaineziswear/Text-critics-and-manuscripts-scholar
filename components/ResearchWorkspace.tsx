'use client';

import { useMemo, useState } from 'react';
import { analyzeText, type TokenAnalysis } from '@/lib/glossa/engine';
import { LANGUAGE_NAMES } from '@/lib/glossa/languages';

type ResearchResponse = {
  ok: boolean;
  code?: string;
  error?: string;
  agentsUsed?: string[];
  transparency?: string[];
  localAnalysis?: TokenAnalysis[];
  result?: {
    summary?: string;
    wordAnalyses?: Array<Record<string, string | string[]>>;
    textualCriticism?: {
      variants?: string[];
      corruptionsOrScribalIssues?: string[];
      manuscriptNotes?: string[];
      assessment?: string;
    };
    historicalContext?: string;
    christianInterpretation?: string;
    scholarlyDisagreements?: string[];
    sourcesNeeded?: string[];
    cautions?: string[];
  };
};

export function ResearchWorkspace() {
  const [text, setText] = useState('בראשית ܡܠܬܐ λόγος');
  const [excluded, setExcluded] = useState<string[]>([]);
  const [selected, setSelected] = useState<TokenAnalysis | null>(null);
  const [task, setTask] = useState('glossa-analysis');
  const [context, setContext] = useState('');
  const [response, setResponse] = useState<ResearchResponse | null>(null);
  const [loading, setLoading] = useState(false);

  const analyses = useMemo(() => analyzeText(text, excluded), [text, excluded]);

  async function runResearch() {
    setLoading(true);
    setResponse(null);
    try {
      const result = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, excludedLanguages: excluded, task, context: context || undefined }),
      });
      const data = await result.json() as ResearchResponse;
      setResponse(data);
    } catch {
      setResponse({ ok: false, code: 'NETWORK_ERROR', error: 'Unable to reach the research server.' });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="shell">
      <aside className="card">
        <h3>Research</h3>
        <input placeholder="Project title" />
        <p className="small">Candidate languages are filtered locally before the scholarly model is called.</p>
        <label className="small" htmlFor="task">Research mode</label>
        <select id="task" value={task} onChange={(e) => setTask(e.target.value)}>
          <option value="glossa-analysis">Glossa word analysis</option>
          <option value="translate">Translation & lexical analysis</option>
          <option value="textual-criticism">Textual criticism</option>
          <option value="chat">Deep scholarly analysis</option>
        </select>
        <label className="small" htmlFor="context">Research context</label>
        <textarea id="context" className="textarea" rows={5} value={context} onChange={(e) => setContext(e.target.value)} placeholder="Reference, passage, manuscript, scholarly question…" />
        <label className="small" htmlFor="exclude">Language exclusions</label>
        <select id="exclude" onChange={(e) => e.target.value && setExcluded([...new Set([...excluded, e.target.value])])}>
          <option value="">Exclude language…</option>
          {LANGUAGE_NAMES.map((language) => <option key={language}>{language}</option>)}
        </select>
        <div>{excluded.map((language) => <span className="pill" key={language}>{language} <button onClick={() => setExcluded(excluded.filter((item) => item !== language))}>×</button></span>)}</div>
        <button className="primary" onClick={runResearch} disabled={loading || !text.trim()}>
          {loading ? 'Researching…' : 'Run scholarly analysis'}
        </button>
      </aside>

      <main className="card">
        <h2>Research Workspace</h2>
        <p className="small">Local analysis is deterministic. AI research runs through the server and never exposes your provider key to the browser.</p>
        <textarea className="textarea" rows={7} value={text} onChange={(e) => setText(e.target.value)} />
        <h3>Word-by-word analysis</h3>
        <div>
          {analyses.map((analysis) => (
            <button key={analysis.index} className={`word ${analysis.fallback ? 'low' : ''}`} onClick={() => setSelected(analysis)}>
              {analysis.token}<br /><span className="small">{analysis.language} · {analysis.confidence}</span>
            </button>
          ))}
        </div>

        {response?.result && (
          <section className="card" style={{ marginTop: 24 }}>
            <h3>Scholarly synthesis</h3>
            <p>{response.result.summary}</p>
            {response.result.wordAnalyses?.length ? <><h4>Lexical findings</h4>{response.result.wordAnalyses.map((word, index) => <div key={`${String(word.token)}-${index}`} className="pill">{String(word.token)} · {String(word.language)} · {String(word.translation)}</div>)}</> : null}
            {response.result.textualCriticism?.assessment ? <><h4>Textual criticism</h4><p>{response.result.textualCriticism.assessment}</p></> : null}
            {response.result.historicalContext ? <><h4>Historical context</h4><p>{response.result.historicalContext}</p></> : null}
            {response.result.christianInterpretation ? <><h4>Christian interpretation</h4><p>{response.result.christianInterpretation}</p></> : null}
            {response.result.scholarlyDisagreements?.length ? <><h4>Scholarly disagreements</h4><ul>{response.result.scholarlyDisagreements.map((item, index) => <li key={index}>{item}</li>)}</ul></> : null}
            {response.result.cautions?.length ? <><h4>Cautions</h4><ul>{response.result.cautions.map((item, index) => <li key={index}>{item}</li>)}</ul></> : null}
            {response.agentsUsed?.length ? <p className="small">Agents: {response.agentsUsed.join(' · ')}</p> : null}
          </section>
        )}
        {response && !response.ok && <p className="pill">{response.error}</p>}
      </main>

      <aside className="card">
        <h3>Word Detail</h3>
        {selected ? (
          <div>
            <h2>{selected.token}</h2>
            {Object.entries({ Script: selected.script, 'Script tier': selected.scriptTier, Language: selected.language, Transliteration: selected.transliteration, Morphology: selected.morphology, Root: selected.root, 'Literal gloss EN': selected.glossEn, 'Literal gloss FR': selected.glossFr, Confidence: selected.confidence, 'Evidence type': selected.evidenceType }).map(([key, value]) => <p key={key}><b>{key}:</b> {value}</p>)}
            {selected.fallback && <p className="pill">Matched via fallback.</p>}
            <p className="small">{selected.note}</p>
          </div>
        ) : <p>Select any word.</p>}
      </aside>
    </div>
  );
}

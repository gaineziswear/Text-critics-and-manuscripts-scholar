'use client';

import { useMemo, useState } from 'react';
import { analyzeText, type TokenAnalysis } from '@/lib/glossa/engine';
import { LANGUAGE_NAMES } from '@/lib/glossa/languages';

type ResearchResponse={ok:boolean;code?:string;error?:string;agentsUsed?:string[];transparency?:string[];localAnalysis?:TokenAnalysis[];result?:{summary?:string;wordAnalyses?:Array<Record<string,string|string[]>>;textualCriticism?:{variants?:string[];corruptionsOrScribalIssues?:string[];manuscriptNotes?:string[];assessment?:string};historicalContext?:string;christianInterpretation?:string;scholarlyDisagreements?:string[];sourcesNeeded?:string[];cautions?:string[]}};
type Props={corpus?:'hadith'|'quran'};

export function ResearchWorkspace({corpus='hadith'}:Props){
 const [text,setText]=useState(''); const [excluded,setExcluded]=useState<string[]>([]); const [selected,setSelected]=useState<TokenAnalysis|null>(null);
 const [task,setTask]=useState('textual-criticism'); const [context,setContext]=useState(''); const [forcedLanguage,setForcedLanguage]=useState(''); const [response,setResponse]=useState<ResearchResponse|null>(null); const [loading,setLoading]=useState(false);
 const analyses=useMemo(()=>analyzeText(text,excluded),[text,excluded]);
 async function runResearch(){setLoading(true);setResponse(null);try{const r=await fetch('/api/analyze',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({text,excludedLanguages:excluded,task,context:context||undefined,corpus,forcedLanguage:forcedLanguage||undefined})});const d=await r.json() as ResearchResponse;setResponse(d)}catch{setResponse({ok:false,code:'NETWORK_ERROR',error:'Unable to reach the research server.'})}finally{setLoading(false)}}
 return <div className="shell">
  <aside className="card research-controls"><p className="eyebrow dark">{corpus==='quran'?"Qur'an":"Hadith"} laboratory</p><h3>Research controls</h3>
   <label className="small">Research mode</label><select value={task} onChange={e=>setTask(e.target.value)}><option value="textual-criticism">Textual criticism</option><option value="translate">Translation & lexical analysis</option><option value="glossa-analysis">Word / root analysis</option><option value="chat">Deep scholarly analysis</option></select>
   <label className="small">Force / test a language</label><select value={forcedLanguage} onChange={e=>setForcedLanguage(e.target.value)}><option value="">No forced language</option>{LANGUAGE_NAMES.map(x=><option key={x}>{x}</option>)}</select>
   <p className="small">Forced-language output is a controlled experiment. It does not establish original composition, borrowing or transmission.</p>
   <label className="small">Exclude languages</label><select onChange={e=>e.target.value&&setExcluded([...new Set([...excluded,e.target.value])])}><option value="">Exclude…</option>{LANGUAGE_NAMES.map(x=><option key={x}>{x}</option>)}</select>
   <div>{excluded.map(x=><span className="pill" key={x}>{x} <button onClick={()=>setExcluded(excluded.filter(y=>y!==x))}>×</button></span>)}</div>
   <textarea className="textarea" rows={5} value={context} onChange={e=>setContext(e.target.value)} placeholder="Manuscript reference, verse/hadith number, edition, scholarly question…"/>
   <button className="primary" onClick={runResearch} disabled={loading||!text.trim()}>{loading?'Researching…':'Run evidence analysis'}</button>
  </aside>
  <main className="card research-main"><div className="research-header"><div><p className="eyebrow dark">Exact witness input</p><h2>{corpus==='quran'?"Qur'an":"Hadith"} Research Workspace</h2></div><span className="pill">Witness preserved</span></div>
   <textarea className="textarea witness-box" rows={9} value={text} onChange={e=>setText(e.target.value)} placeholder={corpus==='quran'?"Paste the Arabic Qur'anic witness exactly as received…":"Paste the Arabic Hadith witness exactly as received…"}/>
   <div className="notice"><b>Method guardrail:</b> original witness → normalization → linguistic analysis → textual criticism. Similarity is not automatically borrowing; a cognate is not automatically transmission evidence.</div>
   <h3>Word-by-word analysis</h3><div>{analyses.map(a=><button key={a.index} className={`word ${a.fallback?'low':''}`} onClick={()=>setSelected(a)}>{a.token}<br/><span className="small">{a.language} · {a.confidence}</span></button>)}</div>
   {response?.result&&<section className="result-panel"><p className="eyebrow dark">Scholarly synthesis</p><h3>{response.result.summary||'Analysis complete'}</h3>
    {response.result.wordAnalyses?.length?<><h4>Lexical findings</h4>{response.result.wordAnalyses.map((w,i)=><div className="finding" key={i}><b>{String(w.token)}</b><span>{String(w.language)} · {String(w.lemma||'—')} · {String(w.translation||'—')}</span><small>{String(w.confidence||'')}</small></div>)}</>:null}
    {response.result.textualCriticism?.assessment?<><h4>Textual criticism</h4><p>{response.result.textualCriticism.assessment}</p></>:null}
    {response.result.historicalContext?<><h4>Historical context</h4><p>{response.result.historicalContext}</p></>:null}
    {response.result.cautions?.length?<><h4>Cautions</h4><ul>{response.result.cautions.map((x,i)=><li key={i}>{x}</li>)}</ul></>:null}
    {response.agentsUsed?.length?<p className="small">Analytical stages: {response.agentsUsed.join(' · ')}</p>:null}
   </section>}
   {response&&!response.ok?<p className="pill">{response.error}</p>:null}
  </main>
  <aside className="card"><p className="eyebrow dark">Evidence panel</p><h3>Word detail</h3>{selected?<div><h2>{selected.token}</h2>{Object.entries({Script:selected.script,'Language':selected.language,Transliteration:selected.transliteration,Morphology:selected.morphology,Root:selected.root,'Literal EN':selected.glossEn,'Literal FR':selected.glossFr,Confidence:selected.confidence,'Evidence':selected.evidenceType}).map(([k,v])=><p key={k}><b>{k}:</b> {v}</p>)}<p className="small">{selected.note}</p></div>:<p>Select a token to inspect its evidence fields.</p>}</aside>
 </div>
}

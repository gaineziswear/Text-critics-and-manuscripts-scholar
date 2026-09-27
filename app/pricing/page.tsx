const plans = [
  {name:'Open Research',price:'$0',period:'forever',desc:'For exploration and public scholarship.',features:['Core linguistic analysis','Script & language detection','Manuscript catalogue access','20 research operations / month','Evidence and uncertainty labels'],cta:'Start free'},
  {name:'Researcher',price:'$7.90',period:'month',desc:'For regular independent textual research.',features:['Everything in Open Research','150 operations / month','Forced-language experiments','Saved investigations','Research exports'],cta:'Start 14-day trial'},
  {name:'Scholar',price:'$14.90',period:'month',desc:'For sustained manuscript and comparative work.',features:['500 operations / month','Deep textual criticism','Advanced comparative analysis','Larger dossiers','Priority processing'],cta:'Start 14-day trial'},
  {name:'Professional',price:'$29.90',period:'month',desc:'For researchers, educators and specialist teams.',features:['1,500 operations / month','Institution-ready workspaces','Audit/provenance metadata','Advanced monitoring','Priority support'],cta:'Start 14-day trial'},
];

export default function Pricing(){
 return <main className="section pricing-page">
  <p className="eyebrow dark">Transparent research access</p><h1>Powerful research without hiding the method.</h1>
  <p className="lede">Glossa keeps the free tier useful. Higher plans increase research capacity rather than locking basic scholarship behind a paywall. Final billing is subject to payment-provider availability in your jurisdiction.</p>
  <div className="pricing-grid">{plans.map(p=><article className="price-card" key={p.name}><p className="eyebrow dark">{p.name}</p><h2>{p.price}<small> / {p.period}</small></h2><p>{p.desc}</p><ul>{p.features.map(x=><li key={x}>{x}</li>)}</ul><a className={p.name==='Open Research'?'secondary dark-button':'primary'} href="/auth">{p.cta}</a></article>)}</div>
  <section className="method-callout"><h2>What an operation means</h2><p>Basic analysis uses fewer resources than a full dossier. Glossa meters expensive research operations, caches identical analyses, and preserves the witness hash, configuration and engine version for reproducibility.</p></section>
 </main>
}

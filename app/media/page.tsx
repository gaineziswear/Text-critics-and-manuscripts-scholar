const connectors = [
  ['YouTube', 'Live streams, Shorts, homilies, catechesis, interviews, and documentary cuts.'],
  ['Facebook', 'Parish updates, livestream restreams, community posts, and event invitations.'],
  ['X', 'News briefs, quote cards, apologetics threads, and source-linked updates.'],
  ['TikTok', 'Short-form explainers, testimony clips, and public scholarship cuts.'],
  ['Rumble', 'Long-form interviews, archived lives, and alternative video distribution.'],
  ['Podcast/RSS', 'Audio homilies, priest conversations, roundtables, and teaching series.'],
];

const liveSlots = [
  'Catholic Mass broadcast placeholder',
  'Priest interview: sharing the Good News',
  'Persecuted church prayer and aid briefing',
  'Messianic Jewish ministry conversation',
];

export default function Media() {
  return (
    <main className="section media-page">
      <p className="eyebrow dark">Verum Media</p>
      <h1>Live broadcasts and public scholarship studio</h1>
      <p className="lede">A placeholder hub for scheduled lives, Catholic Mass broadcasts, priest interviews, Christian and Messianic Jewish news briefs, and publishing connectors.</p>

      <section className="media-hero-card">
        <div>
          <h2>Schedule a live</h2>
          <p>Prepare a broadcast title, ministry focus, guest priest or speaker, source notes, and target platforms before going live.</p>
          <a className="primary" href="/app/media">Create live placeholder</a>
        </div>
        <img src="/images/manuscript-desk.svg" alt="Research and broadcast planning illustration" />
      </section>

      <section className="grid compact-grid" aria-label="Scheduled live placeholders">
        {liveSlots.map((slot) => (
          <article className="card news-card" key={slot}>
            <h3>{slot}</h3>
            <p>Status: placeholder. Add date, time, guest, source notes, stream destination, and moderation plan.</p>
          </article>
        ))}
      </section>

      <section className="section nested-section" aria-labelledby="connectors-title">
        <p className="eyebrow dark">Connectors</p>
        <h2 id="connectors-title">Social and broadcast platforms</h2>
        <div className="grid compact-grid">
          {connectors.map(([name, description]) => (
            <article className="card connector-card" key={name}>
              <h3>{name}</h3>
              <p>{description}</p>
              <span className="connector-status">Connector placeholder</span>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

import './globals.css';

export const metadata = {
  title: 'Glossa — Textual Criticism & Ancient Language Research',
  description: 'Evidence-first manuscript, linguistic, phonological and textual-critical research for Hadith, Qur\'an and ancient texts.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>
    <nav className="nav">
      <a className="brand" href="/">GLOSSA</a>
      <a href="/hadith">Hadith Lab</a>
      <a href="/quran">Qur'an Lab</a>
      <a href="/manuscripts">Manuscripts</a>
      <a href="/methodology">Methodology</a>
      <a href="/pricing">Pricing</a>
      <a href="/auth">Sign in</a>
      <a className="button" href="/app">Start Free</a>
    </nav>
    {children}
    <footer className="footer"><span>GLOSSA · Evidence before assertion.</span><span><a href="/privacy">Privacy</a> · <a href="/terms">Terms</a> · <a href="/faq">FAQ</a></span></footer>
  </body></html>;
}

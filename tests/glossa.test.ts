import { describe, expect, it } from 'vitest';
import { analyzeText, analyzeToken, candidatesForScript, detectScript, tokenize } from '@/lib/glossa/engine';
import { LANGUAGES } from '@/lib/glossa/languages';
describe('Glossa core', () => {
  it('preserves the 53 language catalog', () => { expect(LANGUAGES).toHaveLength(53); });
  it('tokenizes unicode words independently', () => { expect(tokenize('בראשית ܡܠܬܐ λόγος')).toEqual(['בראשית','ܡܠܬܐ','λόγος']); });
  it('detects scripts', () => { expect(detectScript('λόγος')).toBe('Greek'); expect(detectScript('ברא')).toBe('Hebrew'); });
  it('removes excluded languages before candidates reach classification', () => { expect(candidatesForScript('Greek',['Greek'])).not.toContain('Greek'); });
  it('marks unknown fallback as low confidence', () => { const a=analyzeToken('123',0,[]); expect(a.confidence).toBe('LOW'); expect(a.note).toContain('Matched via fallback'); });
});

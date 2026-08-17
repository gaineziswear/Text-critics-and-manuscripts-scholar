export type Confidence = 'HIGH' | 'MEDIUM' | 'LOW' | 'UNCERTAIN';
export type EvidenceType = 'DIRECT' | 'COMPARATIVE' | 'RECONSTRUCTED' | 'HYPOTHETICAL' | 'INTERPRETIVE' | 'FALLBACK';

export type Language = { id: number; name: string; family: string; scripts: string[]; tier: 1|2|3|4; fallback?: string[] };

export const LANGUAGES: Language[] = 'Syriac,Aramaic,Hebrew,Greek,Ethiopic,Pahlavi,Persian,Akkadian,South Arabian,Armenian,Phoenician,Avestic,Mandaean,Sanskrit,Pazand,Nabatean,Safaite,Palmyrene,Ugaritic,Coptic,Latin,Berber,Egyptian,Babylonian,Assyrian,Arabic,Old Persian,Parthian,Sogdian,Elamite,Hurrian,Hittite,Himyaritic,Thamudic,Lihyanite,Pashto,Baluchi,Beja,Bilin,Bishari,Edomitish,Georgian,Judeo-Tunisian,Mehri,Moabitish,Norse,Pali,Sinhalese,Slavonic,Turki,Turkish,Umani,Geʽez'.split(',').map((name, i) => {
  const semitic = ['Syriac','Aramaic','Hebrew','Akkadian','South Arabian','Phoenician','Mandaean','Nabatean','Safaite','Palmyrene','Ugaritic','Babylonian','Assyrian','Arabic','Himyaritic','Thamudic','Lihyanite','Edomitish','Mehri','Moabitish','Geʽez'];
  const scripts: Record<string,string[]> = { Greek:['Greek'], Hebrew:['Hebrew'], Syriac:['Syriac'], Arabic:['Arabic'], Coptic:['Coptic'], Armenian:['Armenian'], Georgian:['Georgian'], Sanskrit:['Devanagari'], Pali:['Devanagari'], Sinhalese:['Sinhala'], Slavonic:['Cyrillic'], Latin:['Latin'] };
  const fallback: Record<string,string[]> = { Syriac:['Aramaic'], Hebrew:['Aramaic','Phoenician'], Mandaean:['Aramaic','Syriac'], Coptic:['Egyptian'], Egyptian:['Coptic'], Phoenician:['Hebrew','Moabitish','Edomitish'], Ugaritic:['Phoenician','Hebrew'], Nabatean:['Aramaic','Arabic'], 'Old Persian':['Avestic'], Persian:['Pahlavi','Old Persian'], Arabic:['Safaite','Thamudic','Lihyanite','South Arabian'] };
  return { id:i+1, name, family: semitic.includes(name)?'Semitic / Afroasiatic':'Research catalog', scripts: scripts[name] ?? ['Shared/Latin transliteration'], tier: (scripts[name]?.length ? 1 : 3) as 1|2|3|4, fallback: fallback[name] };
});

export const LANGUAGE_NAMES = LANGUAGES.map(l => l.name);

import { analyzeText } from '@/lib/glossa/engine';

export const AGENTS = [
  'Language Identification Agent',
  'Script Agent',
  'Morphology Agent',
  'Root Agent',
  'Cognate Agent',
  'Etymology Agent',
  'Dictionary Agent',
  'Translation Agent',
  'Manuscript Agent',
  'Textual Criticism Agent',
  'Semitic Textual Critic',
  'Historical Context Agent',
  'Church Fathers Agent',
  'Christian Theology Agent',
  'Exegesis Agent',
  'Comparative Abrahamic Agent',
  'Scholarly Research Agent',
  'Deep Analysis Agent',
  'Challenge Agent',
  'Source Verification Agent',
  'Content Generation Agent',
  'Content Fact Checker',
  'Media Director Agent',
] as const;

type ResearchInput = {
  text: string;
  excludedLanguages?: string[];
  task?: string;
  context?: string;
};

export function providerStatus() {
  return {
    openai: Boolean(process.env.OPENAI_API_KEY),
    anthropic: Boolean(process.env.ANTHROPIC_API_KEY),
    google: Boolean(process.env.GOOGLE_GENERATIVE_AI_API_KEY),
  };
}

function selectAgents(task: string) {
  if (task.includes('content')) {
    return ['Content Generation Agent', 'Content Fact Checker'];
  }
  if (task.includes('chat')) {
    return ['Scholarly Research Agent', 'Source Verification Agent', 'Challenge Agent', 'Deep Analysis Agent'];
  }
  if (task.includes('textual')) {
    return ['Language Identification Agent', 'Manuscript Agent', 'Textual Criticism Agent', 'Semitic Textual Critic', 'Source Verification Agent'];
  }
  if (task.includes('translate')) {
    return ['Script Agent', 'Language Identification Agent', 'Morphology Agent', 'Root Agent', 'Dictionary Agent', 'Translation Agent'];
  }
  return ['Script Agent', 'Language Identification Agent', 'Morphology Agent', 'Dictionary Agent', 'Root Agent', 'Source Verification Agent'];
}

function buildScholarPrompt(input: ResearchInput, localAnalysis: ReturnType<typeof analyzeText>) {
  const task = input.task ?? 'glossa-analysis';
  const tokenEvidence = localAnalysis.map((item) => ({
    token: item.token,
    script: item.script,
    candidates: item.candidates,
    language: item.language,
    confidence: item.confidence,
    transliteration: item.transliteration,
    morphology: item.morphology,
    root: item.root,
    note: item.note,
  }));

  return `You are the primary scholarly reasoning engine for Glossa, an evidence-first research platform for Biblical studies, Semitic languages, Greek, Syriac, Hebrew, textual criticism, manuscripts, early Christianity, and comparative Abrahamic studies.

Task: ${task}
Input text: ${input.text}
Additional context: ${input.context ?? 'None provided'}

LOCAL SCRIPT/LANGUAGE PRE-ANALYSIS:
${JSON.stringify(tokenEvidence, null, 2)}

Research rules:
1. Never invent a manuscript, quotation, lexical root, variant, scholar, date, or source.
2. Treat script identification as a clue, not proof of language. Consider broader language families and dialects before choosing a lexical origin.
3. For each word, distinguish script, likely language, dialect/register, lemma, morphology, root/etymology, semantic range, and translation.
4. For Semitic material, explicitly consider Hebrew, Aramaic/Syriac, Arabic and relevant Northwest Semitic or other historical languages where justified. Do not force a Semitic root merely because spellings resemble one another.
5. For Greek, distinguish Classical, Koine, Septuagintal, and New Testament usage when relevant.
6. For textual criticism, separate the reading in the supplied text from manuscript evidence, variant readings, conjectural emendation, harmonization, scribal error, and later interpretation.
7. Distinguish primary evidence, secondary scholarship, and model inference. Mark uncertainty clearly.
8. When a claim cannot be verified from the available evidence, say so rather than filling the gap.
9. For Christian interpretation, represent Catholic, Orthodox, Protestant, patristic, and critical scholarly positions fairly where relevant; do not manufacture consensus.
10. Return a concise but genuinely scholarly answer suitable for a research workspace.

Return JSON with this shape:
{
  "summary": string,
  "wordAnalyses": [{"token":string,"language":string,"dialect":string,"lemma":string,"morphology":string,"root":string,"semanticRange":string,"translation":string,"confidence":"HIGH|MEDIUM|LOW|UNCERTAIN","evidence":string[]}],
  "textualCriticism": {"variants":string[],"corruptionsOrScribalIssues":string[],"manuscriptNotes":string[],"assessment":string},
  "historicalContext": string,
  "christianInterpretation": string,
  "scholarlyDisagreements": string[],
  "sourcesNeeded": string[],
  "cautions": string[]
}`;
}

export async function orchestrateResearch(input: ResearchInput) {
  const task = input.task ?? 'glossa-analysis';
  const localAnalysis = analyzeText(input.text, input.excludedLanguages ?? []);
  const agents = selectAgents(task);

  return {
    agentsUsed: agents,
    transparency: [
      'Script identified before language classification.',
      'Candidate languages are filtered before model reasoning.',
      'Dictionary and manuscript evidence are required for high-certainty claims.',
      'Uncertainty is preserved instead of silently resolved.',
    ],
    localAnalysis,
    provider: providerStatus(),
    prompt: buildScholarPrompt(input, localAnalysis),
  };
}

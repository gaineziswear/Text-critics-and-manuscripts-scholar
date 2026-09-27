const OPENAI_RESPONSES_URL = 'https://api.openai.com/v1/responses';
const DEFAULT_MODEL = process.env.OPENAI_MODEL || 'gpt-5.6-luna';

export class ProviderNotConfiguredError extends Error {
  constructor() {
    super('OpenAI provider is not configured on the server.');
    this.name = 'ProviderNotConfiguredError';
  }
}

export async function runOpenAIResearch(input: string) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) throw new ProviderNotConfiguredError();

  const response = await fetch(OPENAI_RESPONSES_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: DEFAULT_MODEL,
      input,
      text: { format: { type: 'json_object' } },
      store: false,
    }),
    cache: 'no-store',
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => '');
    throw new Error(`OpenAI request failed (${response.status}): ${detail.slice(0, 500)}`);
  }

  const payload = await response.json() as {
    output_text?: string;
    output?: Array<{ type?: string; content?: Array<{ type?: string; text?: string }> }>;
  };

  const outputText = payload.output_text ?? payload.output
    ?.flatMap((item) => item.content ?? [])
    .filter((content) => content.type === 'output_text' && content.text)
    .map((content) => content.text)
    .join('');

  if (!outputText) throw new Error('OpenAI returned an empty research response.');

  try {
    return JSON.parse(outputText);
  } catch {
    return { summary: outputText, raw: outputText };
  }
}

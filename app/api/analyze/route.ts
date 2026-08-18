import { NextResponse } from 'next/server';
import { z } from 'zod';
import { orchestrateResearch } from '@/lib/agents/orchestrator';
import { ProviderNotConfiguredError, runOpenAIResearch } from '@/lib/ai/openai';

export const runtime = 'nodejs';

const schema = z.object({
  text: z.string().min(1).max(10000),
  excludedLanguages: z.array(z.string()).default([]),
  task: z.string().default('glossa-analysis'),
  context: z.string().max(5000).optional(),
});

export async function POST(req: Request) {
  try {
    const body = schema.parse(await req.json());
    const research = await orchestrateResearch(body);
    const ai = await runOpenAIResearch(research.prompt);

    return NextResponse.json({
      ok: true,
      provider: 'openai',
      agentsUsed: research.agentsUsed,
      transparency: research.transparency,
      localAnalysis: research.localAnalysis,
      result: ai,
    });
  } catch (error) {
    if (error instanceof ProviderNotConfiguredError) {
      return NextResponse.json(
        { ok: false, code: 'PROVIDER_NOT_CONFIGURED', error: 'OpenAI is not configured for this deployment.' },
        { status: 503 },
      );
    }

    console.error('Research API error', error);
    const message = error instanceof Error ? error.message : 'Research temporarily unavailable.';
    return NextResponse.json({ ok: false, code: 'RESEARCH_FAILED', error: message }, { status: 400 });
  }
}

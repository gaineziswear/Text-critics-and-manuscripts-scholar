import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

function present(...names: string[]) {
  return names.some((name) => typeof process.env[name] === 'string' && process.env[name]!.trim().length > 0);
}

export async function GET() {
  const envNames = Object.keys(process.env)
    .filter((name) => /(?:OPENAI|ANTHROPIC|GOOGLE|GEMINI|API_KEY|KEY)/i.test(name))
    .sort();

  const providers = {
    openai: present('OPENAI_API_KEY'),
    anthropic: present('ANTHROPIC_API_KEY'),
    google: present('GOOGLE_GENERATIVE_AI_API_KEY', 'GOOGLE_API_KEY', 'GEMINI_API_KEY'),
  };

  return NextResponse.json(
    {
      environment: process.env.VERCEL_ENV ?? 'development',
      deployment: process.env.VERCEL_DEPLOYMENT_ID ?? null,
      project: process.env.VERCEL_PROJECT_PRODUCTION_URL ?? null,
      providers,
      diagnostic: {
        matchingEnvironmentVariableNames: envNames,
        runtimeNodeEnv: process.env.NODE_ENV ?? null,
      },
    },
    {
      headers: {
        'Cache-Control': 'no-store, max-age=0',
      },
    },
  );
}

import { NextResponse } from 'next/server';
import { providerStatus } from '@/lib/agents/orchestrator';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  const providers = providerStatus();

  return NextResponse.json(
    {
      environment: process.env.VERCEL_ENV ?? 'development',
      deployment: process.env.VERCEL_DEPLOYMENT_ID ?? null,
      project: process.env.VERCEL_PROJECT_PRODUCTION_URL ?? null,
      providers,
    },
    {
      headers: {
        'Cache-Control': 'no-store, max-age=0',
      },
    },
  );
}

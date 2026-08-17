import { NextResponse } from 'next/server';
import { getSupabaseConfig } from '@/lib/supabase';
import { providerStatus } from '@/lib/agents/orchestrator';

export const dynamic = 'force-dynamic';

export function GET() {
  return NextResponse.json({
    ok: true,
    service: 'glossa-verum-platform',
    timestamp: new Date().toISOString(),
    supabase: getSupabaseConfig(),
    providers: providerStatus(),
  });
}

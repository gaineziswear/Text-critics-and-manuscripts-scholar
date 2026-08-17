import { NextResponse } from 'next/server';
import { z } from 'zod';
import { providerStatus } from '@/lib/agents/orchestrator';
const schema=z.object({question:z.string().min(1), tradition:z.string().default('Historical Neutral')});
export async function POST(req:Request){ const body=schema.safeParse(await req.json()); if(!body.success) return NextResponse.json({error:'Research temporarily unavailable.'},{status:400}); return NextResponse.json({shortAnswer:'Provider not configured.', structure:['PRIMARY EVIDENCE','TEXTUAL EVIDENCE','HISTORICAL EVIDENCE','WHAT IS CERTAIN','WHAT IS DISPUTED','SOURCES'], tradition:body.data.tradition, providerStatus:providerStatus()}); }

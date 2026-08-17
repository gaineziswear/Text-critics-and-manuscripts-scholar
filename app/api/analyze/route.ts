import { NextResponse } from 'next/server';
import { z } from 'zod';
import { orchestrateResearch } from '@/lib/agents/orchestrator';
const schema=z.object({text:z.string().min(1).max(10000), excludedLanguages:z.array(z.string()).default([])});
export async function POST(req:Request){ try{ const body=schema.parse(await req.json()); return NextResponse.json(orchestrateResearch(body)); }catch(e){ return NextResponse.json({error:'Research temporarily unavailable.'},{status:400}); }}

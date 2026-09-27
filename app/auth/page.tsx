'use client';

import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

function client() {
 const url=process.env.NEXT_PUBLIC_SUPABASE_URL; const key=process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
 return url&&key?createClient(url,key):null;
}

export default function Auth(){
 const [mode,setMode]=useState<'signin'|'signup'>('signin'); const [email,setEmail]=useState(''); const [password,setPassword]=useState(''); const [status,setStatus]=useState('');
 async function submit(e:React.FormEvent){e.preventDefault(); const supa=client(); if(!supa){setStatus('Authentication is not configured on this deployment yet.');return;} setStatus('Working…'); const result=mode==='signin'?await supa.auth.signInWithPassword({email,password}):await supa.auth.signUp({email,password}); if(result.error){setStatus(result.error.message);return;} setStatus(mode==='signin'?'Signed in successfully.':'Account created. Check your email if confirmation is enabled.');}
 return <main className="section auth-page"><div className="auth-card"><p className="eyebrow dark">Research account</p><h1>{mode==='signin'?'Return to your research.':'Create your free research account.'}</h1><p>Save investigations, preserve provenance, and continue work across Hadith, Qur'an and manuscript projects.</p><form onSubmit={submit}><input required type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)}/><input required minLength={8} type="password" placeholder="Password (8+ characters)" value={password} onChange={e=>setPassword(e.target.value)}/><button className="primary" type="submit">{mode==='signin'?'Sign in':'Create account'}</button></form><p className="small">{status}</p><button className="text-button" onClick={()=>setMode(mode==='signin'?'signup':'signin')}>{mode==='signin'?'Need an account? Create one':'Already registered? Sign in'}</button></div></main>
}

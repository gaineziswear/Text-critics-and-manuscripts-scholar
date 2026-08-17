const requiredPublic = ['NEXT_PUBLIC_SUPABASE_URL', 'NEXT_PUBLIC_SUPABASE_ANON_KEY'];
const optionalServer = ['SUPABASE_SERVICE_ROLE_KEY', 'OPENAI_API_KEY', 'ANTHROPIC_API_KEY', 'GOOGLE_GENERATIVE_AI_API_KEY'];
const missingPublic = requiredPublic.filter((key) => !process.env[key]);
console.log(JSON.stringify({
  ok: missingPublic.length === 0,
  missingPublic,
  optionalServerConfigured: Object.fromEntries(optionalServer.map((key) => [key, Boolean(process.env[key])])),
}, null, 2));
if (missingPublic.length) process.exitCode = 1;

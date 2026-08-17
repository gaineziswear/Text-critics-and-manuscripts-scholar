# Deployment Runbook

## Vercel

1. Connect the Git repository to Vercel as a Next.js project.
2. Use the included `vercel.json` defaults: `npm install` followed by `npm run build`.
3. Configure environment variables from `.env.example` in Vercel Project Settings.
4. Keep provider keys server-side only. Do not create `NEXT_PUBLIC_` AI provider variables.
5. After deploy, verify `/api/health` returns `ok: true` and shows Supabase/provider configuration status.

## Supabase

1. Link the Supabase project with the Supabase CLI or dashboard.
2. Apply `supabase/migrations/001_glossa_platform.sql`.
3. Confirm RLS is enabled for profile/project/passage/conversation/message tables.
4. Confirm the `languages` table contains 53 rows.
5. Configure Auth redirect URLs for the production Vercel domain.

## Local checks

```bash
npm install
npm run typecheck
npm test
npm run build
node scripts/verify-deployment-env.mjs
```

If package installation is blocked by local registry/network policy, run the same checks in Vercel or another environment with npm registry access.

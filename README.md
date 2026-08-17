# Glossa — Verum Research Platform

Glossa is the web research platform in this repository. It combines ancient-language analysis, manuscript/textual-criticism workflows, Christian historical scholarship, Verum Chat, and Via Verum media preparation in one Next.js application.

This repo is **not** an Android application, a landing-page-only site, or a mock AI button demo. The current codebase is a deployable Next.js scaffold with route coverage, API status endpoints, a Glossa analysis slice, Supabase schema work, and Vercel configuration.

## Current source of truth

- [`glossa-system-spec.md`](./glossa-system-spec.md) preserves the foundational Glossa requirements that originally lived in the README.
- [`docs/migration-plan.md`](./docs/migration-plan.md) records what was discovered and implemented during the web-platform migration.
- [`docs/deployment.md`](./docs/deployment.md) is the deployment runbook.

The README is intentionally the operator/developer entry point. Product requirements belong in the spec and implementation notes above so the README remains usable.

## Platform map

| Platform layer | Purpose | Implemented surface |
| --- | --- | --- |
| **Glossa** | Per-word text, script, language, root, morphology, literal gloss, confidence, and fallback analysis. | `/`, `/glossa`, `/languages`, `/textual-criticism`, `/manuscripts`, `/app`, `/app/translator`, `/app/word`, `/app/research`, `/api/analyze` |
| **Verum Academy** | Christian scholarship, Church Fathers, exegesis, comparative Abrahamic study, and historical theology. | `/verum-academy`, `/church-fathers`, `/exegesis`, `/christian-library`, `/abrahamic-studies`, `/app/church-fathers`, `/app/exegesis`, `/app/library` |
| **Verum Chat** | Evidence-aware scholarly chat/status surface. | `/verum-chat`, `/app/verum-chat`, `/api/verum-chat` |
| **Verum Media / Via Verum** | Public scholarship, content preparation, and fact-check/export scaffolding. | `/media`, `/via-verum`, `/app/media`, `/app/content`, `/api/content` |
| **Admin** | Operations for users, sources, manuscripts, books, authors, languages, agents, providers, usage, and features. | `/admin`, `/admin/*` |

## Research philosophy

Glossa starts with the text, not with a polished translation:

```text
word → script → language → historical stage → dialect → morphology → root
→ cognates → attestation → semantic range → context → manuscript witnesses
→ variants → textual criticism → translation → historical interpretation
→ reception history → theological interpretation → public communication
```

The platform should favor evidence over assertion, primary sources over summaries, honest uncertainty over artificial confidence, and server-side provider status over fabricated AI responses.

## Tech stack

- **Framework:** Next.js 15 App Router
- **Language:** TypeScript
- **UI:** React 19
- **Validation:** Zod
- **Tests:** Vitest
- **Database/auth target:** Supabase/PostgreSQL
- **Deployment target:** Vercel
- **Node runtime:** `>=20.11.0`

## Repository structure

```text
app/                         Next.js App Router pages and API routes
components/                  Reusable React UI
lib/glossa/                  Glossa tokenizer/script/language analysis slice
lib/agents/                  Provider/orchestration status helpers
lib/supabase.ts              Supabase configuration status helper
supabase/migrations/         Supabase/PostgreSQL schema migration
docs/                        Migration and deployment documentation
scripts/                     Operational verification scripts
tests/                       Vitest coverage for Glossa core behavior
vercel.json                  Vercel project/build configuration
```

## Local development

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Scripts

```bash
npm run dev              # Start the Next.js dev server
npm run build            # Build for production
npm run start            # Start a production build locally
npm run test             # Run Vitest tests
npm run typecheck        # Run TypeScript without emitting files
npm run deployment:check # Verify required deployment env vars are present
npm run ci               # Typecheck, test, and build
```

## Environment variables

Copy `.env.example` to `.env.local` for local development or configure the same names in Vercel Project Settings.

```bash
cp .env.example .env.local
```

Required for Supabase-backed auth/data flows:

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

Optional server-only provider/database secrets:

```bash
SUPABASE_SERVICE_ROLE_KEY=
OPENAI_API_KEY=
ANTHROPIC_API_KEY=
GOOGLE_GENERATIVE_AI_API_KEY=
```

Optional automation placeholder. Do **not** commit a real token:

```bash
GITHUB_PAT=ghp_REPLACE_WITH_REAL_TOKEN_IN_GITHUB_OR_VERCEL_SECRETS
```

Security rules:

- Do not paste real PATs or API keys into source files, README edits, issues, or PR comments.
- Do not expose AI provider keys with `NEXT_PUBLIC_` prefixes.
- Store secrets in GitHub Actions secrets, Vercel environment variables, or an approved secret manager.
- The app should report missing provider configuration instead of pretending AI integrations are active.

## Vercel deployment trigger status

Repo-side Vercel configuration is present in [`vercel.json`](./vercel.json):

```json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "regions": ["iad1"],
  "crons": []
}
```

For a repository imported into Vercel through the GitHub integration, this configuration is sufficient for normal Vercel behavior:

1. Pushes to connected branches should trigger deployments.
2. Pull requests should trigger preview deployments.
3. The first import/build should use `npm install` and `npm run build`.
4. No GitHub PAT is required for standard Vercel Git integration; Vercel uses its GitHub App installation permissions.

What can be verified from this repo:

- The project declares the Next.js framework for Vercel.
- The install, dev, and build commands are explicitly configured.
- No repo file disables Vercel Git-triggered deploys.
- `/api/health` exists for post-deploy smoke testing.
- The repository is safe to import first: a standard Vercel import can build from the committed `package.json` and `vercel.json` without needing a committed PAT.

What requires Vercel/GitHub account access to verify:

- Whether the Vercel project has actually been imported.
- Whether the GitHub App has access to this repository.
- Which branch Vercel treats as the production branch.
- Whether the latest push/PR produced a Vercel deployment event.

After import, confirm the trigger by pushing a commit to the connected production branch or opening a pull request, then check the Vercel Deployments tab for a matching build.

## Deployment health checks

With real or placeholder Supabase public values:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://example.supabase.co \
NEXT_PUBLIC_SUPABASE_ANON_KEY=placeholder \
npm run deployment:check
```

After deployment:

```text
GET /api/health
```

Expected behavior: the endpoint returns `ok: true` plus configuration-presence booleans for Supabase and providers without revealing secret values.

## Current limitations

- Supabase must be configured and migrations applied before real persistence/auth flows are complete.
- AI providers remain server-side and report missing configuration until keys are supplied.
- Registry/network policy in this environment may block `npm install`; run full CI in Vercel or another environment with npm registry access if local install fails.

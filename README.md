# Glossa — Verum Research Platform

Glossa is a production-oriented Next.js web application for ancient-language research, manuscript study, textual criticism, Christian scholarship, and responsible public-facing media workflows.

The platform is intentionally **not** an Android app, a landing page, or a mock AI demo. It is organized as a multi-page research environment where users begin with the text, inspect words and witnesses, evaluate evidence, and only then move toward translation, interpretation, and public communication.

## Platform areas

| Area | Purpose | Current routes |
| --- | --- | --- |
| **Glossa** | Ancient language, script, root, morphology, and translation research. | `/`, `/glossa`, `/languages`, `/textual-criticism`, `/manuscripts`, `/app`, `/app/translator`, `/app/word`, `/app/research` |
| **Verum Academy** | Christian historical, theological, Church Fathers, and Abrahamic studies workspace. | `/verum-academy`, `/church-fathers`, `/exegesis`, `/christian-library`, `/abrahamic-studies`, `/app/church-fathers`, `/app/exegesis`, `/app/library` |
| **Verum Chat** | Evidence-aware scholarly assistant surface for historical and theological analysis. | `/verum-chat`, `/app/verum-chat`, `/api/verum-chat` |
| **Verum Media / Via Verum** | Converts researched conclusions into public scholarship formats while preserving source boundaries. | `/media`, `/via-verum`, `/app/media`, `/app/content`, `/api/content` |
| **Administration** | Operational management for content, sources, manuscripts, users, languages, features, usage, providers, and agents. | `/admin/*` |

The foundational specification remains [`glossa-system-spec.md`](./glossa-system-spec.md). Implementation planning notes live in [`docs/migration-plan.md`](./docs/migration-plan.md), and deployment details live in [`docs/deployment.md`](./docs/deployment.md).

## Core research philosophy

Glossa starts with the text rather than with a finished translation:

```text
word → script → language → historical stage → dialect → morphology → root
→ cognates → attestations → semantic range → context → manuscript witnesses
→ variants → textual criticism → translation → historical interpretation
→ early Christian reception → theological interpretation → public content
```

Every research output should distinguish evidence, inference, uncertainty, and missing provider configuration. Provider-backed features must not fabricate results when credentials or sources are unavailable.

## Tech stack

- **Framework:** Next.js 15 App Router
- **Runtime:** Node.js 20.11+
- **UI:** React 19
- **Validation:** Zod
- **Testing:** Vitest
- **Database/Auth target:** Supabase
- **Deployment target:** Vercel

## Getting started locally

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Environment variables

Create a local `.env.local` file and configure only the values you have. Public Supabase values are required for a fully configured app; provider keys are server-only and optional until those integrations are enabled.

```bash
# Required for Supabase-backed auth/data flows
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

# Server-only secrets. Never expose these with NEXT_PUBLIC_ prefixes.
SUPABASE_SERVICE_ROLE_KEY=
OPENAI_API_KEY=
ANTHROPIC_API_KEY=
GOOGLE_GENERATIVE_AI_API_KEY=

# Deployment automation placeholder only. Do not commit a real PAT.
GITHUB_PAT=ghp_REPLACE_WITH_REAL_TOKEN_IN_VERCEL_OR_GITHUB_SECRETS
```

Do **not** paste real personal access tokens into chat, source files, README edits, or client-side code. Store GitHub/Vercel automation tokens only in GitHub Actions secrets, Vercel environment variables, or an approved secret manager.

## Available scripts

```bash
npm run dev              # Start the local Next.js dev server
npm run build            # Build the production Next.js app
npm run start            # Serve a production build locally
npm run test             # Run Vitest tests
npm run typecheck        # Run TypeScript without emitting files
npm run deployment:check # Verify required deployment environment variables
npm run ci               # Typecheck, test, and build
```

## Vercel deployment and trigger check

This repository is configured for Vercel through [`vercel.json`](./vercel.json):

- framework: `nextjs`
- install command: `npm install`
- build command: `npm run build`
- dev command: `npm run dev`
- preferred region: `iad1`

When the repository is imported into Vercel through the normal Git integration, Vercel should automatically trigger deployments on pushes to connected branches and create preview deployments for pull requests. No GitHub PAT is required for the standard Vercel import flow; Vercel receives repository access through its GitHub app installation.

Use this checklist after the first import:

1. Import the GitHub repository in Vercel and confirm the detected framework is **Next.js**.
2. Confirm Vercel shows `npm install` and `npm run build` from `vercel.json`.
3. Add the environment variables listed above in Vercel Project Settings.
4. Push a commit to the connected production branch and confirm a production deployment starts.
5. Open a pull request and confirm Vercel creates a preview deployment.
6. After deployment, visit `/api/health` and confirm it returns `ok: true` plus Supabase/provider configuration status.

If the repo has only just been imported, the deployment trigger is considered correctly configured when Vercel has repository permissions and the Git integration is enabled. The code-side configuration in this repo does not disable Vercel's default Git-triggered deploy behavior.

## Health and deployment checks

Run the deployment environment check locally or in CI:

```bash
npm run deployment:check
```

The command exits with a non-zero status when required public Supabase values are missing. The runtime health endpoint is:

```text
GET /api/health
```

It reports application health, Supabase configuration presence, and provider-key presence without revealing secret values.

## Repository structure

```text
app/                         Next.js routes, pages, and API handlers
components/                  Reusable React components
lib/glossa/                  Language catalog and analysis engine scaffolding
lib/agents/                  Provider/orchestration status helpers
lib/supabase.ts              Supabase configuration status helper
supabase/migrations/         Database schema migrations
docs/                        Migration and deployment documentation
scripts/                     Operational verification scripts
tests/                       Vitest test coverage
```

## Current implementation status

The repo contains a Next.js multi-page application scaffold, Glossa analysis engine tests, Supabase schema migration, Vercel configuration, health/status endpoints, and deployment verification tooling. Provider-backed AI operations currently report configuration status and should remain server-side until real keys and source integrations are configured.

## Security notes

- Never commit real PATs, API keys, Supabase service-role keys, or provider credentials.
- Never place AI provider keys in `NEXT_PUBLIC_` variables.
- Keep server-only credentials in Vercel environment variables, GitHub Actions secrets, or a managed secret store.
- Treat source provenance, confidence labels, and uncertainty as product requirements rather than optional UI copy.

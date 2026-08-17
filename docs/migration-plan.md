# Internal Migration Plan

## Repository inspection

- Framework before changes: none detected; repository contained only `README.md`.
- Database before changes: none detected.
- Authentication before changes: none detected.
- Existing Glossa implementation: no executable implementation detected; the specification existed in `README.md` and is now preserved in `glossa-system-spec.md`.
- Components/API routes/tests/deployment: none detected.
- Android assumptions: none in code, and the new architecture is responsive web only.
- Reusable assets: the detailed product specification in `README.md`.

## Vertical slice implemented

1. Next.js/React/TypeScript application shell.
2. Public, authenticated, and admin route coverage.
3. Glossa per-word tokenizer/script/candidate/exclusion/fallback engine.
4. Research workspace with active language exclusions and clickable word detail panel.
5. Server-side API routes for analysis, Verum Chat status, and content fact-check/export scaffolding.
6. Supabase/PostgreSQL migration with RLS-oriented research, source, manuscript, Church Father, media, entitlement, and fact-check entities.
7. Tests for language catalog size, Unicode tokenization, script detection, exclusions, and fallback confidence.

## Known limitations

- Package installation was blocked by registry 403 responses in this environment, so dependency-based tests/build could not be executed here.
- Supabase authentication is structurally represented and requires project credentials/migration execution.
- AI providers intentionally return provider-not-configured status until server-side keys are supplied.

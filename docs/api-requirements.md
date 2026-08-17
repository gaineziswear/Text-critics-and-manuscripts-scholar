# API and service checklist

The platform can launch in stages. Configure only the services needed for the features you are enabling.

## Required for authenticated research persistence

| Service | Needed values | Used for |
| --- | --- | --- |
| Supabase | `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY` | Auth, projects, passages, source records, manuscripts, conversations, and admin data. |

## Required for AI-assisted analysis

| Service | Needed values | Used for |
| --- | --- | --- |
| OpenAI | `OPENAI_API_KEY` | General analysis, orchestration, content drafting, and fallback reasoning when enabled. |
| Anthropic | `ANTHROPIC_API_KEY` | Secondary model provider for research/chat routing when enabled. |
| Google Gemini | `GOOGLE_GENERATIVE_AI_API_KEY` | Secondary model provider and multimodal/content workflows when enabled. |

## Recommended scholarly/source integrations

| Service/data source | Needed values | Used for |
| --- | --- | --- |
| Bible/manuscript text provider | Provider API key or licensed dataset credentials | Canonical text lookup, witnesses, apparatus data, and comparisons. |
| Dictionary/lexicon datasets | Dataset license/API key | Lemma, morphology, gloss, root, cognate, and attestation evidence. |
| Church Fathers / patristics corpus | Dataset license/API key | Reception history, citations, source-aware summaries. |
| Object storage/CDN | Supabase Storage or compatible storage credentials | Uploaded sources, media assets, exports, and generated content packages. |

## Optional production services

| Service | Needed values | Used for |
| --- | --- | --- |
| Stripe | `STRIPE_SECRET_KEY`, webhook secret, publishable key | Paid plans, future VIP access, invoices, and entitlements. |
| Resend/Postmark/SendGrid | Mail API key and verified sender/domain | Auth emails, onboarding, alerts, and contact forms. |
| Sentry | DSN/auth token | Runtime error monitoring and release tracking. |
| Analytics | Vercel Analytics or privacy-friendly analytics key | Traffic/product usage visibility. |
| Social publishing APIs | Platform OAuth credentials | Future Via Verum publishing automation; keep disabled until policy review. |

## Security rules

- Never commit real API keys or PATs.
- Keep provider keys server-side only; do not create `NEXT_PUBLIC_` AI keys.
- Start with Supabase public keys and one AI provider, then add datasets/providers as features become real.

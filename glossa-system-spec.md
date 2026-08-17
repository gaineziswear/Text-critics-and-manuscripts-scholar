# Glossa System Specification

This repository initially contained the product brief in `README.md` but did not include a separate `glossa-system-spec.md`. This file preserves the foundational requirements used by the implementation:

- Glossa is a web research platform, not Android and not a landing page.
- Analysis starts with the text and proceeds per word through script, candidate language, language exclusions, morphology, root, cognates, dictionary evidence, literal gloss, confidence, fallback, manuscripts, variants, textual criticism, interpretation, and public content.
- The catalog preserves 53 language entries, including the source numbering ambiguity by adding Geʽez as the 53rd entry rather than silently reducing the architecture.
- Excluded languages are removed before classification.
- Fallback results are visually distinct, marked “Matched via fallback,” and capped at LOW confidence.
- Provider credentials remain server-side; when unavailable, the platform says “Provider not configured.”
- Evidence categories are DIRECT, COMPARATIVE, RECONSTRUCTED, HYPOTHETICAL, INTERPRETIVE, and FALLBACK.

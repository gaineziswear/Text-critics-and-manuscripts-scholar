# Text-critics-and-manuscripts-scholar
You are the lead architect, senior full-stack engineer, AI systems engineer,
research-platform engineer, database architect and UX engineer for this project.

You are not being asked to create a mockup.

You are being asked to transform the existing Glossa project into a complete,
production-oriented, multi-page WEB APPLICATION and research platform.

The final product must be a WEB APPLICATION.

It must NOT be an Android application.

It must NOT be a simple website.

It must NOT be a landing-page-only product.

It must NOT be a collection of fake AI buttons.

It must be an actual working research platform with authentication,
database persistence, AI orchestration, source management, research projects,
multi-agent analysis, Christian scholarship tools and a media/content studio.

============================================================
0. EXISTING SOURCE OF TRUTH
============================================================

The existing project specification is:

glossa-system-spec.md

Treat this file as the foundational technical specification.

It defines:

- Glossa's purpose
- 53-language catalog
- per-word language identification
- Unicode/script detection
- script tiers
- literal translation
- language exclusion
- root-language fallback
- confidence handling
- interactive Deep Analysis Agent
- Semitic Textual-Critic Agent
- multi-provider architecture
- API security requirements
- acceptance criteria

Do NOT remove or simplify these requirements.

The new application expands the existing Glossa system into:

GLOSSA
+
VERUM ACADEMY
+
VERUM CHAT
+
VERUM MEDIA
+
VIA VERUM

These must operate as one coherent platform.

============================================================
1. PRODUCT VISION
============================================================

The platform should become an AI-assisted digital research environment
for ancient languages, manuscripts, textual criticism, Scripture,
early Christianity, Church Fathers, Christian theology, comparative
Abrahamic studies and public scholarship.

The central philosophy is:

DO NOT START WITH THE TRANSLATION.

START WITH THE TEXT.

Then investigate:

WORD
↓
SCRIPT
↓
LANGUAGE
↓
HISTORICAL LANGUAGE STAGE
↓
DIALECT
↓
MORPHOLOGY
↓
ROOT
↓
COGNATES
↓
EARLIEST ATTESTATION
↓
SEMANTIC RANGE
↓
CONTEXT
↓
MANUSCRIPT WITNESSES
↓
TEXTUAL VARIANTS
↓
TEXTUAL CRITICISM
↓
TRANSLATION
↓
HISTORICAL INTERPRETATION
↓
EARLY CHRISTIAN RECEPTION
↓
THEOLOGICAL INTERPRETATION
↓
PUBLIC CONTENT

This is the central intellectual architecture.

============================================================
2. BRAND ARCHITECTURE
============================================================

The platform consists of three major identities.

--------------------------
GLOSSA
--------------------------

Ancient language and textual research engine.

Purpose:

Study words, languages, roots, manuscripts, variants and translations.

--------------------------
VERUM ACADEMY
--------------------------

Christian historical and scholarly research environment.

Purpose:

Scripture
Church Fathers
Manuscripts
Christian history
Tradition
Exegesis
Historical theology
Catholic scholarship
Orthodox scholarship
Protestant scholarship
Comparative Abrahamic studies

--------------------------
VIA VERUM
--------------------------

Public scholarship and media production environment.

Purpose:

Turn research into:

X posts
X threads
Facebook posts
TikTok scripts
YouTube scripts
Short documentaries
Educational carousels
Narration
Images
Video concepts
Podcasts
Articles

These are not three unrelated products.

They are layers of the same ecosystem.

============================================================
3. CORE USER JOURNEY
============================================================

A user should be able to enter the platform and do this:

1. Create a free account.

2. Start a research project.

3. Enter a passage.

4. Glossa tokenizes the passage.

5. Each word is independently analyzed.

6. Script is identified.

7. Candidate languages are identified.

8. Excluded languages are removed.

9. Historical/dialect possibilities are evaluated.

10. Morphology is analyzed.

11. Root and cognates are investigated.

12. Dictionary sources are queried.

13. Literal gloss is generated.

14. Confidence is assigned.

15. If uncertain, root-language fallback is considered.

16. User can click any word.

17. User can request deeper analysis.

18. User can compare manuscript witnesses.

19. User can inspect textual variants.

20. User can invoke the Semitic Textual Critic.

21. User can ask Verum Chat for historical/theological analysis.

22. User can retrieve Church Father evidence.

23. User can compare Catholic / Orthodox / Protestant interpretation.

24. User can challenge the conclusion.

25. User can generate a VIA VERUM content package.

26. Content is fact checked.

27. User can create:

X post
X thread
Facebook post
TikTok
YouTube Short
Article
Podcast
Image
Audio
Video

This complete journey must be represented in the UI.

============================================================
4. WEB APPLICATION REQUIREMENT
============================================================

Use a modern web architecture.

Preferred:

Next.js
React
TypeScript

Use a robust component architecture.

Use:

Supabase/PostgreSQL

for:

authentication
database
storage
row-level security
user projects
research persistence

unless the existing repository already uses an equivalent architecture
that can safely be retained.

DO NOT destroy working infrastructure unnecessarily.

First inspect the repository.

============================================================
5. FIRST TASK BEFORE CODING
============================================================

Before changing anything:

1. Inspect the complete repository.

2. Identify framework.

3. Identify database.

4. Identify authentication.

5. Identify existing Glossa implementation.

6. Identify existing components.

7. Identify API routes.

8. Identify environment variables.

9. Identify existing AI integrations.

10. Identify tests.

11. Identify deployment configuration.

12. Identify Android-specific assumptions.

13. Identify website-specific assumptions.

14. Identify anything that can be reused.

15. Create an internal migration plan.

Do not rewrite working code merely for stylistic reasons.

============================================================
6. APPLICATION STRUCTURE
============================================================

Create these major public routes:

/
/about
/glossa
/languages
/manuscripts
/textual-criticism
/verum-academy
/church-fathers
/christian-library
/exegesis
/abrahamic-studies
/verum-chat
/media
/via-verum
/pricing
/faq
/contact
/privacy
/terms

Authenticated routes:

/app
/app/research
/app/translator
/app/word
/app/manuscripts
/app/textual-criticism
/app/church-fathers
/app/exegesis
/app/verum-chat
/app/media
/app/content
/app/projects
/app/sources
/app/library
/app/settings

Admin:

/admin
/admin/users
/admin/sources
/admin/manuscripts
/admin/books
/admin/authors
/admin/church-fathers
/admin/languages
/admin/agents
/admin/providers
/admin/usage
/admin/features

============================================================
7. LANDING PAGE
============================================================

The landing page must be highly explanatory.

Do not create a generic AI SaaS landing page.

The visitor must understand within seconds that this is a serious
research platform.

Hero:

GLOSSA

GO BEHIND THE TRANSLATION.

Subheading:

Explore the languages, words, manuscripts, textual variants and traditions
behind the ancient texts that shaped Christianity and the Abrahamic world.

Primary CTA:

START RESEARCH — FREE

Secondary:

EXPLORE GLOSSA

Hero visual:

Ancient manuscript + modern research interface.

Do not use cheesy stock imagery.

============================================================
8. LANDING PAGE SECTIONS
============================================================

Include:

1. What is Glossa?

2. Why translation alone is insufficient.

3. Word-by-word research.

4. 53-language research architecture.

5. Root-language investigation.

6. Manuscript research.

7. Textual criticism.

8. Semitic textual analysis.

9. Church Fathers.

10. Christian scholarship.

11. Catholic / Orthodox / Protestant comparison.

12. Verum Chat.

13. Research projects.

14. Media Studio.

15. VIA VERUM.

16. Free launch.

17. Future VIP.

18. Research transparency.

19. Evidence vs inference.

20. FAQ.

============================================================
9. GLOSSA LANGUAGE SYSTEM
============================================================

PRESERVE THE EXISTING 53-LANGUAGE SYSTEM.

Do not reduce it.

The existing specification defines:

1 Syriac
2 Aramaic
3 Hebrew
4 Greek
5 Ethiopic
6 Pahlavi
7 Persian
8 Akkadian
9 South Arabian
10 Armenian
11 Phoenician
12 Avestic
13 Mandaean
14 Sanskrit
15 Pazand
16 Nabatean
17 Safaite
18 Palmyrene
19 Ugaritic
20 Coptic
21 Latin
22 Berber
23 Egyptian
24 Babylonian
25 Assyrian
26 Arabic
27 Old Persian
28 Parthian
29 Sogdian
30 Elamite
31 Hurrian
32 Hittite
33 Himyaritic
34 Thamudic
35 Lihyanite
36 Pashto
37 Baluchi
38 Beja
39 Bilin
40 Bishari
41 Edomitish
42 Georgian
43 Judeo-Tunisian
44 Mehri
45 Moabitish
46 Norse
47 Pali
48 Sinhalese
49 Slavonic
50 Turki
51 Turkish
52 Umani

and the canonical count/specification should be checked against the
existing source before implementation because the source states 53 entries
and numbering/duplicates must not be silently altered.

Preserve the actual source specification.

============================================================
10. LANGUAGE IDENTIFICATION
============================================================

Language identification is PER WORD.

Never assume that a whole passage is one language.

Pipeline:

Unicode-aware tokenizer

↓

word

↓

script detection

↓

script tier

↓

candidate languages

↓

language classifier

↓

dictionary lookup

↓

literal gloss

↓

confidence

The sentence may be used as context.

The output unit remains the individual word.

============================================================
11. SCRIPT TIERS
============================================================

Preserve the existing script-tier architecture.

Tier 1:

unique script.

Tier 2:

script shared with only a small number of candidates.

Tier 3:

large shared-script cluster.

Tier 4:

extremely small corpus.

Script is evidence.

Script is not automatically proof except where the source specification
explicitly permits decisive classification.

============================================================
12. LITERAL TRANSLATION
============================================================

The automatic Glossa output is:

LITERAL.

It must not automatically become:

theological commentary
interpretation
sermon
paraphrase
devotional explanation

Output:

Original

Transliteration

Language

Dialect/stage where available

Morphology

Root

Literal gloss EN

Literal gloss FR

Confidence

Dictionary evidence

Source

Notes

============================================================
13. ROOT-LANGUAGE INVESTIGATION
============================================================

This is a major enhancement.

When a word cannot be securely identified:

DO NOT simply translate it.

Investigate:

candidate language

historical stage

ancestor language

sister languages

cognates

sound correspondences

known loanwords

semantic history

attestation

dictionary evidence

The system must distinguish:

DIRECTLY ATTESTED

COMPARATIVE

RECONSTRUCTED

HYPOTHETICAL

UNCERTAIN

Never turn speculation into fact.

============================================================
14. ROOT FALLBACK
============================================================

Preserve the fallback architecture in glossa-system-spec.md.

Examples include:

Syriac → Aramaic

Hebrew → Aramaic / Phoenician

Mandaean → Aramaic / Syriac

Coptic → Egyptian

Egyptian → Coptic

Phoenician → Hebrew / Moabitish / Edomitish

Ugaritic → Phoenician / Hebrew

Nabatean → Aramaic / Arabic

Old Persian → Avestic

Persian → Pahlavi / Old Persian

Arabic → relevant North Arabian candidates

etc.

A fallback match MUST be visually distinct.

Confidence must be capped at LOW.

The interface must explicitly state:

"Matched via fallback."

============================================================
15. LANGUAGE EXCLUSION
============================================================

Users must be able to exclude languages.

This is a SESSION/RUN setting.

Excluded languages:

must be removed before model classification.

Never:

ask the model to select an excluded language
then discard the result.

The UI must permanently display the active exclusions.

============================================================
16. WORD INTERACTION
============================================================

Every analyzed word should be clickable.

Clicking a word opens a research panel.

Actions:

Analyze

Translate

Morphology

Root

Cognates

Dictionary

Historical forms

Manuscripts

Variants

Textual Criticism

Deep Analysis

Church Fathers

Exegesis

Compare Providers

Create Content

============================================================
17. DEEP ANALYSIS AGENT
============================================================

Preserve the existing Interactive Deep-Analysis Agent.

This is NOT the automatic pipeline.

It is an interactive research agent.

User can ask:

"Analyze this word more deeply."

"Why did you classify it as Aramaic?"

"Check the Hebrew possibility."

"Try the root-language fallback."

"Compare GPT and Claude."

"Explain the confidence."

"Analyze this line."

"Do not rerun the entire passage."

The agent must retain:

current passage

selected word

current exclusions

previous results

research context

============================================================
18. SEMITIC TEXTUAL-CRITIC AGENT
============================================================

Create a dedicated specialist agent.

Persona:

A highly experienced historical philologist and textual critic specializing
in Semitic languages, ancient Near Eastern scripts, biblical languages,
Aramaic, Syriac, Hebrew and related manuscript traditions.

The agent should understand:

Hebrew

Aramaic

Syriac

Phoenician

Nabataean

Palmyrene

Ugaritic

Akkadian

Babylonian

Assyrian

Arabic

Old North Arabian

South Arabian

Mandaic

Edomite

Moabite

and related traditions.

Capabilities:

paleography

codicology

orthography

scribal practices

manuscript transmission

variant analysis

recension

Vorlage

textual families

haplography

dittography

homoioteleuton

homoeoarcton

visual letter confusion

orthographic normalization

marginal additions

omissions

transpositions

harmonization

copying errors

damage

lacunae

alternative readings

The agent must NOT invent a manuscript.

============================================================
19. TEXTUAL CRITICISM OUTPUT
============================================================

For every variant:

Witness

Reading

Language

Script

Date

Manuscript

Location

Variant type

Possible scribal explanation

Alternative explanation

Evidence

Confidence

Scholarly disagreement

Do not automatically select a "correct" reading.

Use:

Established

Probable

Possible

Contested

Unknown

============================================================
20. MANUSCRIPT SYSTEM
============================================================

Create manuscript entities.

Fields:

ID

Name

Date

Date range

Location

Provenance

Language

Script

Material

Repository

Catalogue number

Textual family

Digital source

Source URL

Bibliography

License

Notes

Create side-by-side witness comparison.

============================================================
21. VERUM ACADEMY
============================================================

Create the Christian scholarly environment.

Major areas:

Scripture

Biblical languages

Manuscripts

Textual criticism

Church Fathers

Patristics

Church history

Historical theology

Exegesis

Catholic theology

Orthodox theology

Protestant theology

Comparative Abrahamic studies

Apologetics

Christian philosophy

Christian tradition

============================================================
22. CHRISTIAN KNOWLEDGE BASE
============================================================

Do NOT simply create:

"Christian PDF embeddings."

Create a structured scholarly knowledge system.

Entities:

Bible passage

Word

Language

Manuscript

Variant

Author

Church Father

Book

Chapter

Quote

Scholar

Doctrine

Tradition

Interpretation

Historical event

Council

Creed

Commentary

Source

============================================================
23. CHURCH FATHERS
============================================================

Build a dedicated Church Fathers library.

Include, where legally available and appropriately sourced:

Apostolic Fathers

Ante-Nicene Fathers

Nicene Fathers

Post-Nicene Fathers

Examples:

Clement of Rome

Ignatius of Antioch

Polycarp

Justin Martyr

Irenaeus

Tertullian

Origen

Cyprian

Athanasius

Basil

Gregory Nazianzen

Gregory of Nyssa

John Chrysostom

Jerome

Augustine

Cyril of Alexandria

Leo the Great

and many others.

Do not treat the list above as exhaustive.

Every author is an entity.

============================================================
24. CHURCH FATHER ENTITY
============================================================

Fields:

Name

Dates

Region

Language

Tradition

Works

Historical period

Major theological themes

Primary sources

Secondary sources

Scholarly bibliography

Citation metadata

============================================================
25. CHRISTIAN SOURCE TYPES
============================================================

Every source must be classified.

PRIMARY

SECONDARY

TERTIARY

MAGISTERIAL

THEOLOGICAL

ACADEMIC

HISTORICAL

DEVOTIONAL

COMMENTARY

LITURGICAL

APOLOGETIC

Do not blur them.

============================================================
26. CATHOLIC MATERIAL
============================================================

Include properly sourced:

Catholic biblical scholarship

Catholic patristic scholarship

Catholic theology

Magisterial documents

Council documents

Catechetical material

historical theology

liturgical tradition

Catholic commentaries

Clearly distinguish:

official teaching

theological opinion

academic scholarship

historical practice

devotional interpretation

============================================================
27. ORTHODOX MATERIAL
============================================================

Include:

Eastern Orthodox

Oriental Orthodox

Syriac traditions

Coptic

Armenian

Ethiopian

other ancient Christian traditions

Do not reduce early Christianity to:

Catholic vs Protestant.

============================================================
28. PROTESTANT MATERIAL
============================================================

Include scholarly material from:

Lutheran

Reformed

Presbyterian

Anglican

Baptist

Methodist

Evangelical

Pentecostal

non-denominational

historical Protestant traditions.

Do not claim one Protestant scholar represents all Protestants.

============================================================
29. ABRAHAMIC STUDIES
============================================================

Create:

ABRAHAMIC RESEARCH

with:

Judaism

Christianity

Islam

The system must preserve source boundaries.

A Jewish source is a Jewish source.

A Christian source is a Christian source.

An Islamic source is an Islamic source.

An academic comparison is an academic comparison.

Do not create a synthetic "Abrahamic religion" that erases distinctions.

============================================================
30. VERUM CHAT
============================================================

Create a dedicated conversational research environment.

The user can ask:

"What does the Greek actually say?"

"What did Irenaeus believe?"

"Did this doctrine exist before Augustine?"

"Compare Augustine and Chrysostom."

"Show me the manuscript evidence."

"What does the Catholic tradition say?"

"What does the Orthodox tradition say?"

"What do Protestant scholars argue?"

"Is this interpretation ancient?"

"Where does this interpretation first appear?"

"Challenge my argument."

"Find the strongest counterargument."

The system should retrieve evidence before answering.

============================================================
31. VERUM CHAT SOURCE PIPELINE
============================================================

USER

↓

QUESTION CLASSIFIER

↓

RESEARCH ROUTER

↓

PRIMARY SOURCE SEARCH

↓

MANUSCRIPT SEARCH

↓

SECONDARY SCHOLARSHIP

↓

SOURCE RANKING

↓

THEOLOGICAL/TRADITION FILTER

↓

SYNTHESIS

↓

CITATIONS

↓

ANSWER

============================================================
32. VERUM CHAT RESPONSE STRUCTURE
============================================================

Where appropriate:

SHORT ANSWER

PRIMARY EVIDENCE

TEXTUAL EVIDENCE

HISTORICAL EVIDENCE

EARLY CHRISTIAN EVIDENCE

CATHOLIC VIEW

ORTHODOX VIEW

PROTESTANT VIEW

ACADEMIC VIEW

COUNTERARGUMENT

WHAT IS CERTAIN

WHAT IS DISPUTED

SOURCES

============================================================
33. EXEGESIS AGENT
============================================================

Create an Exegesis Agent.

Pipeline:

Original text

↓

Textual variants

↓

Grammar

↓

Morphology

↓

Lexicon

↓

Syntax

↓

Literary context

↓

Historical context

↓

Intertextual context

↓

Early Christian reception

↓

Patristic interpretation

↓

Catholic interpretation

↓

Orthodox interpretation

↓

Protestant interpretation

↓

Modern scholarship

↓

Alternative interpretations

↓

Conclusion

Exegesis must never pretend that theological interpretation is identical
to linguistic translation.

============================================================
34. CHALLENGE AGENT
============================================================

Create a dedicated critical agent.

Purpose:

Attack the user's argument constructively.

Ask:

What evidence contradicts this?

What assumptions are hidden?

Is the etymology sound?

Is the manuscript evidence sufficient?

Is the Church Father being represented accurately?

Is this a later theological interpretation?

Is there anachronism?

Is the argument dependent upon one translation?

Is there another plausible reading?

This agent should strengthen scholarship, not merely agree with the user.

============================================================
35. SOURCE VERIFICATION AGENT
============================================================

Every important claim should be checked.

Detect:

fabricated citation

fabricated quotation

wrong author

wrong date

wrong manuscript

wrong page

wrong language

anachronism

overstatement

false consensus

translation error

theological misrepresentation

If the system cannot verify something:

mark it uncertain.

============================================================
36. RESEARCH PROJECTS
============================================================

Users can create projects.

Example:

"John 1:1 Logos"

Project contains:

Passages

Words

Analyses

Manuscripts

Variants

Sources

Church Fathers

Scholarship

Arguments

Notes

Conversations

Images

Audio

Video

Social posts

Final conclusions

============================================================
37. RESEARCH TIMELINE
============================================================

Each project should maintain an event timeline.

Example:

09:12 — Passage imported

09:13 — Greek detected

09:14 — Word analysis completed

09:16 — Manuscript search performed

09:18 — Irenaeus sources retrieved

09:22 — Textual Critic invoked

09:25 — User challenged conclusion

09:30 — TikTok script generated

This creates research provenance.

============================================================
38. RESEARCH GRAPH
============================================================

Create a data model capable of eventually supporting:

WORD
↔ ROOT
↔ LANGUAGE
↔ DIALECT
↔ COGNATE
↔ MANUSCRIPT
↔ VARIANT
↔ PASSAGE
↔ AUTHOR
↔ CHURCH FATHER
↔ BOOK
↔ DOCTRINE
↔ SCHOLAR
↔ INTERPRETATION
↔ SOURCE

This should not necessarily be fully visualized in V1,
but the database should support it.

============================================================
39. MEDIA STUDIO
============================================================

Create:

VERUM MEDIA

Tabs:

TEXT

IMAGE

AUDIO

VIDEO

SOCIAL

============================================================
40. IMAGE GENERATION
============================================================

Users can generate:

Biblical scenes

Historical scenes

Manuscript illustrations

Ancient-world reconstructions

Educational diagrams

Infographics

Social-media artwork

YouTube thumbnails

TikTok backgrounds

Carousel slides

Research illustrations

Important:

Generated historical reconstructions must be explicitly labeled:

AI-GENERATED HISTORICAL RECONSTRUCTION

Never imply an AI-generated image is an authentic manuscript photograph.

============================================================
41. AUDIO GENERATION
============================================================

Support:

Research → narration

Script → narration

Bible passage → narration

TikTok script → narration

Podcast → narration

Options:

voice

language

speed

tone

duration

export

Use a provider abstraction.

============================================================
42. VIDEO SYSTEM
============================================================

Build a provider-independent video architecture.

Do not lock the application to one video provider.

Pipeline:

RESEARCH

↓

SCRIPT

↓

SHOT LIST

↓

IMAGE/VIDEO GENERATION

↓

VOICEOVER

↓

CAPTIONS

↓

TIMELINE

↓

VIDEO

↓

EXPORT

============================================================
43. SHOT BUILDER
============================================================

Every video can have structured shots.

Fields:

Shot number

Duration

Narration

On-screen text

Visual description

Image prompt

Video prompt

Transition

Music

Sound effects

Citation

Research source

Example:

SHOT 01

Duration: 5 sec

Hook:

"What if your English Bible hides the most important part of this word?"

Visual:

Ancient manuscript close-up.

On-screen:

GO BEHIND THE TRANSLATION.

Narration:

...

============================================================
44. VIA VERUM CONTENT ENGINE
============================================================

Any research project can become content.

Button:

CREATE VIA VERUM CONTENT

Options:

X

X Thread

Facebook

TikTok

YouTube Short

YouTube Video

Instagram

Carousel

Article

Podcast

Documentary

============================================================
45. CONTENT MODES
============================================================

Academic

Educational

Accessible

Apologetic

Documentary

Debate

Historical

Devotional

Do not allow a content mode to alter historical evidence.

It only changes presentation.

============================================================
46. SOCIAL CONTENT
============================================================

Generate:

headline

hook

body

CTA

hashtags

source citations

visual concept

thumbnail concept

thread structure

For X:

single post

thread

For Facebook:

long-form post

short post

For TikTok:

hook

narration

visuals

on-screen text

CTA

duration

caption

hashtags

============================================================
47. CONTENT FACT CHECK
============================================================

Before export:

Run Content Verification Agent.

Check:

historical accuracy

citation accuracy

quotation accuracy

manuscript claims

language claims

theological claims

denominational claims

overstatement

false certainty

AI-generated reconstruction labeling

The system should show:

PASS

NEEDS QUALIFICATION

UNSUPPORTED

DO NOT PUBLISH

============================================================
48. USER ACCOUNTS
============================================================

Launch FREE.

Users can:

register

login

logout

reset password

manage profile

save research

save projects

save conversations

save media

save sources

manage settings

View usage.

============================================================
49. FUTURE VIP
============================================================

Do not implement payment yet.

Build entitlement architecture.

Roles:

FREE

VIP

ADMIN

SUPERADMIN

Feature flags must support:

feature

tier requirement

usage limit

model requirement

provider requirement

enabled/disabled

VIP may later receive:

advanced textual criticism

larger documents

larger research projects

premium models

expanded source corpus

advanced media

high-resolution media

private projects

advanced export

higher limits

priority processing

============================================================
50. DATABASE
============================================================

Create a scalable relational schema.

Core tables:

users

profiles

roles

subscriptions

entitlements

usage_events

projects

project_members

documents

passages

words

word_occurrences

word_analyses

languages

dialects

language_families

roots

cognates

lexicons

lexicon_entries

sources

source_chunks

source_embeddings

authors

books

book_sections

quotes

church_fathers

manuscripts

manuscript_witnesses

manuscript_images

variants

variant_readings

textual_analyses

exegeses

interpretations

traditions

scholars

theological_positions

conversations

messages

agent_runs

agent_results

research_findings

research_events

media_projects

images

audio

videos

video_shots

social_posts

content_fact_checks

providers

provider_runs

feature_flags

audit_logs

============================================================
51. SOURCE INGESTION
============================================================

Build an ingestion architecture.

Admin can add:

book

author

text

edition

language

date

source

license

tradition

category

URL

metadata

The system:

parses

chunks

indexes

embeds

stores metadata

links entities

creates citations

============================================================
52. COPYRIGHT
============================================================

Do not scrape copyrighted books indiscriminately.

Support:

public domain

open license

properly licensed

user uploaded

authorized API

metadata-only records

For copyrighted works, only use material permitted by the source/license.

============================================================
53. SOURCE PROVENANCE
============================================================

Every source must have:

author

title

date

edition

publisher

language

source type

page/chapter/section

URL

repository

license

citation

Every generated scholarly answer should be able to trace claims back
to sources.

============================================================
54. AI ORCHESTRATION
============================================================

Create an Orchestrator Agent.

Agents:

1. Language Identification Agent
2. Script Agent
3. Morphology Agent
4. Root Agent
5. Cognate Agent
6. Etymology Agent
7. Dictionary Agent
8. Translation Agent
9. Manuscript Agent
10. Textual Criticism Agent
11. Semitic Textual Critic
12. Historical Context Agent
13. Church Fathers Agent
14. Christian Theology Agent
15. Exegesis Agent
16. Comparative Abrahamic Agent
17. Scholarly Research Agent
18. Deep Analysis Agent
19. Challenge Agent
20. Source Verification Agent
21. Content Generation Agent
22. Content Fact Checker
23. Media Director Agent

The Orchestrator determines which agents are necessary.

Do not call every agent for every question.

============================================================
55. MULTI-PROVIDER SYSTEM
============================================================

Preserve the architecture from the existing specification.

Support provider abstraction.

Potential providers:

OpenAI

Anthropic

Google Gemini

local/open-source model

The exact provider list must be configurable.

Never expose API keys in browser code.

All provider credentials remain server-side.

Architecture:

Browser

↓

Application API

↓

Agent Orchestrator

↓

Provider adapters

↓

AI providers

↓

Results

============================================================
56. MULTI-PROVIDER COMPARISON
============================================================

Allow:

Compare Models

For a selected word/passage:

Provider A

Provider B

Provider C

Local model

Display:

agreement

disagreement

confidence

missing evidence

The application must NOT automatically declare a provider the winner.

============================================================
57. AI RESEARCH TRANSPARENCY
============================================================

Do not expose hidden chain-of-thought.

Instead show:

Research steps

Sources consulted

Agents used

Evidence found

Confidence

Alternatives

Uncertainty

Example:

✓ Script identified

✓ Candidate language narrowed

✓ Dictionary checked

✓ Root investigated

✓ Manuscript evidence searched

⚠ Variant contested

⚠ Root reconstruction uncertain

============================================================
58. CONFIDENCE MODEL
============================================================

Use:

HIGH

MEDIUM

LOW

UNCERTAIN

And evidence type:

DIRECT

COMPARATIVE

RECONSTRUCTED

HYPOTHETICAL

INTERPRETIVE

FALLBACK

Never allow model confidence alone to override evidence quality.

============================================================
59. SEARCH
============================================================

Global search:

Words

Languages

Manuscripts

Variants

Church Fathers

Authors

Books

Sources

Verses

Projects

Conversations

Media

============================================================
60. ADMIN
============================================================

Admin dashboard:

Users

Sources

Books

Authors

Church Fathers

Manuscripts

Languages

Lexicons

Agents

Providers

Usage

Feature flags

Content

Fact checks

Reports

System health

============================================================
61. SECURITY
============================================================

Use:

server-side secrets

authentication

authorization

row-level security

input validation

rate limiting

audit logs

secure file access

private project isolation

provider error handling

Never expose:

API keys

private research

private documents

internal credentials

============================================================
62. RESPONSIVE DESIGN
============================================================

The application must work on:

Desktop

Laptop

Tablet

iPhone

Android browser

Do not create separate Android architecture.

The entire product is responsive web.

============================================================
63. DESIGN LANGUAGE
============================================================

Design should communicate:

LIBRARY

LABORATORY

STUDIO

Aesthetic:

scholarly

ancient

premium

modern

cinematic

restrained

serious

Christian-friendly

Avoid:

cheap church graphics

generic AI imagery

overuse of crosses

excessive gold

stock-photo aesthetics

The interface should feel like:

A digital research library combined with a modern philology laboratory.

============================================================
64. PRIMARY NAVIGATION
============================================================

Public:

GLOSSA

VERUM ACADEMY

VERUM CHAT

MEDIA

VIA VERUM

ABOUT

PRICING

SIGN IN

START FREE

Authenticated:

DASHBOARD

RESEARCH

TRANSLATE

MANUSCRIPTS

TEXTUAL CRITICISM

CHURCH FATHERS

EXEGESIS

VERUM CHAT

MEDIA STUDIO

CONTENT STUDIO

PROJECTS

LIBRARY

SETTINGS

============================================================
65. DASHBOARD
============================================================

Display:

Recent Projects

Continue Research

Recent Words

Recent Passages

Saved Sources

Recent Conversations

Media Projects

Content Drafts

Usage

Quick actions:

New Research

Analyze Word

Analyze Passage

Compare Manuscripts

Ask Verum Chat

Create Content

============================================================
66. RESEARCH WORKSPACE
============================================================

Three-column desktop architecture.

LEFT:

Project / passage navigation

CENTER:

Text and word analysis

RIGHT:

Research assistant / evidence panel

Mobile:

stack panels intelligently.

============================================================
67. WORD DETAIL PANEL
============================================================

Show:

Original

Transliteration

Script

Language

Historical stage

Dialect

Morphology

Root

Cognates

Literal gloss

Semantic range

Dictionary evidence

Manuscript evidence

Confidence

Fallback status

Sources

Actions

============================================================
68. MANUSCRIPT VIEWER
============================================================

Support:

witness list

side-by-side text

variant highlighting

metadata

source

date

language

script

notes

textual critic action

============================================================
69. CHRISTIAN CHAT UI
============================================================

Provide:

conversation list

new conversation

source panel

citation panel

selected tradition

research mode

challenge mode

deep analysis mode

Users should be able to highlight text and send it directly into chat.

============================================================
70. TRADITION FILTER
============================================================

User can select:

Historical Neutral

Catholic

Eastern Orthodox

Oriental Orthodox

Anglican

Lutheran

Reformed

Presbyterian

Baptist

Methodist

Evangelical

Pentecostal

Comparative

Academic

The filter controls interpretive presentation.

It must NOT rewrite historical evidence.

============================================================
71. MEDIA STUDIO UI
============================================================

Tabs:

IMAGE

AUDIO

VIDEO

PODCAST

CAROUSEL

SOCIAL

Research can be imported directly.

Example:

Research Project

↓

Create Media

↓

Choose format

↓

Generate

↓

Fact Check

↓

Edit

↓

Export

============================================================
72. VIA VERUM BRAND WORKFLOW
============================================================

Create brand presets.

VIA VERUM:

Name

Logo

Tone

Audience

Default CTA

Social handles

Default visual style

Citation style

Video intro

Video outro

This allows generated content to maintain a coherent identity.

============================================================
73. CONTENT EXPORT
============================================================

Allow:

copy

download

save project

export text

export image

export audio

export video

export script

Export should retain citations where appropriate.

============================================================
74. FUTURE SOCIAL API
============================================================

Do NOT initially implement automatic publishing unless credentials and APIs
are correctly configured.

First:

Generate

Review

Fact Check

Copy

Export

Later:

OAuth publishing for:

X

Facebook

Instagram

YouTube

TikTok

============================================================
75. RESEARCH MEMORY
============================================================

Within a project, remember:

selected passages

words

sources

analyses

conclusions

user notes

arguments

counterarguments

media

content

But distinguish:

SOURCE

AI ANALYSIS

USER NOTE

VERIFIED FACT

UNVERIFIED CLAIM

============================================================
76. NO FABRICATION POLICY
============================================================

This is a hard requirement.

Never fabricate:

manuscripts

Church Father quotations

book citations

page numbers

lexicon entries

etymologies

historical dates

variant readings

scholarly consensus

theological positions

If evidence is unavailable:

say:

NOT FOUND

or

UNCERTAIN

or

SOURCE REQUIRED

============================================================
77. HISTORICAL RECONSTRUCTION POLICY
============================================================

AI-generated:

manuscript reconstruction

historical portrait

ancient scene

ancient building

ancient clothing

historical visualization

must be labeled as reconstruction when there is no actual image evidence.

============================================================
78. TESTING
============================================================

Write actual tests.

Test:

Unicode tokenizer

language detection

script tiers

language exclusions

fallback chains

confidence

dictionary lookup

API retries

provider failure

multi-provider comparison

word analysis

manuscript comparison

variant handling

textual critic

Christian retrieval

Church Father retrieval

citation generation

content fact checking

authentication

authorization

project isolation

media pipeline

entitlements

responsive UI

============================================================
79. ACCEPTANCE CRITERIA
============================================================

The implementation is NOT complete unless:

1. A user can create an account.

2. A user can create a project.

3. A user can enter a passage.

4. Words are processed independently.

5. Script detection works.

6. Language exclusion works.

7. Excluded languages are never sent to the classifier.

8. Root fallback works.

9. Fallback results are clearly marked.

10. Confidence is capped appropriately for fallback.

11. A user can select a word.

12. Deep Analysis can analyze that word without rerunning everything.

13. Textual Critic can inspect relevant material.

14. Manuscript data can be represented.

15. Sources can be represented.

16. Christian Chat exists as an actual application feature.

17. Church Father entities exist.

18. Research projects persist.

19. Research citations persist.

20. Multi-agent orchestration exists.

21. Provider keys remain server-side.

22. Media architecture exists.

23. VIA VERUM content generation exists.

24. Fact checking exists.

25. Free account architecture exists.

26. Future VIP entitlements are structurally supported.

27. Admin architecture exists.

28. Responsive web UI works.

29. Tests are actually run.

30. No fake functionality is presented as complete.

============================================================
80. DEVELOPMENT STRATEGY
============================================================

Implement in vertical slices.

Do not create 100 empty pages first.

PHASE 1:

Inspect existing repository.

Repair/refactor foundation.

PHASE 2:

Authentication

Database

Application shell

Public website

Dashboard

PHASE 3:

Glossa core engine.

PHASE 4:

Word detail and deep analysis.

PHASE 5:

Textual criticism and manuscripts.

PHASE 6:

Christian source architecture.

PHASE 7:

Verum Chat.

PHASE 8:

Church Fathers / exegesis.

PHASE 9:

Media Studio.

PHASE 10:

VIA VERUM.

PHASE 11:

Admin.

PHASE 12:

Testing.

PHASE 13:

Deployment.

============================================================
81. DEVELOPMENT DISCIPLINE
============================================================

After each major phase:

run tests.

inspect errors.

fix errors.

verify database.

verify UI.

verify authentication.

verify responsive behavior.

Do not continue indefinitely while foundational functionality is broken.

============================================================
82. DO NOT MOCK IMPORTANT FUNCTIONALITY
============================================================

Do not create fake:

AI responses

source citations

manuscripts

Church Father quotations

translations

authentication

database entries

media generation

social publishing

If an integration is not configured:

show:

"Provider not configured."

Do not simulate success.

============================================================
83. ERROR HANDLING
============================================================

Users should see:

"Research temporarily unavailable."

not:

500 INTERNAL SERVER ERROR

Developer logs should retain technical details.

Retry transient AI failures.

Use exponential backoff with jitter.

============================================================
84. OBSERVABILITY
============================================================

Track:

agent runs

provider runs

latency

errors

token usage where available

research events

media jobs

failed jobs

authentication errors

Use structured logs.

============================================================
85. PERFORMANCE
============================================================

Do not run expensive agents unnecessarily.

Cache:

dictionary results

stable metadata

source retrieval where appropriate

Use background jobs for:

large document ingestion

embedding

media generation

long research runs

video generation

============================================================
86. FUTURE KNOWLEDGE GRAPH
============================================================

Design the schema so that future queries can answer:

"Show every early Christian author before AD 300 who uses this term."

"Show every manuscript containing this reading."

"Show all known variants."

"Show the earliest evidence for this interpretation."

"Compare how this term changed meaning."

"Show Catholic, Orthodox and Protestant interpretations."

============================================================
87. FUTURE VIP
============================================================

Do not build payment now.

But ensure every feature can eventually declare:

tier

limit

provider

usage cost

model

availability

============================================================
88. FINAL DELIVERABLE
============================================================

The final deliverable must be:

A functioning multi-page responsive web application.

Not Android.

Not a static website.

Not a landing page.

Not a prototype consisting of fake buttons.

The system must have:

authentication

database

research workspace

Glossa engine

multi-agent system

textual criticism

manuscript architecture

Christian knowledge architecture

Church Fathers

Verum Chat

exegesis

media studio

VIA VERUM content engine

fact checking

admin

free-tier architecture

future VIP architecture

============================================================
89. FINAL REPORT
============================================================

When implementation is complete, report:

1. What existed before.

2. What was retained.

3. What was rewritten.

4. Architecture.

5. Database schema.

6. Authentication.

7. Routes.

8. Agents.

9. Glossa pipeline.

10. Textual criticism.

11. Manuscript system.

12. Christian knowledge system.

13. Church Fathers.

14. Verum Chat.

15. Media Studio.

16. VIA VERUM.

17. Testing.

18. Deployment.

19. Environment variables.

20. Provider integrations.

21. What is genuinely functional.

22. What requires credentials.

23. What remains incomplete.

Never claim functionality that has not been tested.

============================================================
90. FINAL PRODUCT PRINCIPLE
============================================================

GLOSSA must answer:

"What does this word actually say?"

VERUM ACADEMY must investigate:

"What did the people closest to these texts understand?"

VERUM CHAT must investigate:

"What does the evidence allow us to conclude?"

VIA VERUM must communicate:

"How can we explain this evidence to the public responsibly?"

The system must favor:

evidence over assertion

primary sources over summaries

linguistics over speculation

manuscripts over assumptions

historical context over anachronism

honest uncertainty over artificial confidence

and scholarship over confirmation bias.

Build the platform accordingly.

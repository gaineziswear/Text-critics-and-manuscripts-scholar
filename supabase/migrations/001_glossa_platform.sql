create extension if not exists pgcrypto;
create table if not exists profiles (id uuid primary key references auth.users(id) on delete cascade, display_name text, role text not null default 'FREE' check (role in ('FREE','VIP','ADMIN','SUPERADMIN')), created_at timestamptz not null default now());
create table if not exists projects (id uuid primary key default gen_random_uuid(), owner_id uuid not null references auth.users(id) on delete cascade, title text not null, description text, visibility text not null default 'private', created_at timestamptz not null default now());
create table if not exists languages (id int primary key, name text unique not null, family text, scripts text[], tier int, fallback text[]);
create table if not exists passages (id uuid primary key default gen_random_uuid(), project_id uuid references projects(id) on delete cascade, content text not null, created_at timestamptz default now());
create table if not exists words (id uuid primary key default gen_random_uuid(), normalized text not null, script text, language_id int references languages(id));
create table if not exists word_occurrences (id uuid primary key default gen_random_uuid(), passage_id uuid references passages(id) on delete cascade, word_id uuid references words(id), position int not null, original text not null);
create table if not exists word_analyses (id uuid primary key default gen_random_uuid(), occurrence_id uuid references word_occurrences(id) on delete cascade, language text, morphology text, root text, gloss_en text, gloss_fr text, confidence text, evidence_type text, fallback boolean default false, sources jsonb default '[]');
create table if not exists sources (id uuid primary key default gen_random_uuid(), author text, title text not null, source_type text not null, license text, url text, citation text, metadata jsonb default '{}');
create table if not exists church_fathers (id uuid primary key default gen_random_uuid(), name text not null, dates text, region text, language text, tradition text, works jsonb default '[]', themes text[], citation_metadata jsonb default '{}');
create table if not exists manuscripts (id uuid primary key default gen_random_uuid(), name text not null, date_label text, date_range daterange, location text, provenance text, language text, script text, material text, repository text, catalogue_number text, textual_family text, digital_source text, source_url text, bibliography text, license text, notes text);
create table if not exists variants (id uuid primary key default gen_random_uuid(), passage_id uuid references passages(id), status text check (status in ('Established','Probable','Possible','Contested','Unknown')) default 'Unknown');
create table if not exists variant_readings (id uuid primary key default gen_random_uuid(), variant_id uuid references variants(id) on delete cascade, witness text, reading text, language text, script text, manuscript_id uuid references manuscripts(id), variant_type text, explanation text, evidence text, confidence text);
create table if not exists conversations (id uuid primary key default gen_random_uuid(), project_id uuid references projects(id), owner_id uuid references auth.users(id), mode text default 'research', created_at timestamptz default now());
create table if not exists messages (id uuid primary key default gen_random_uuid(), conversation_id uuid references conversations(id) on delete cascade, role text, content text, citations jsonb default '[]', created_at timestamptz default now());
create table if not exists agent_runs (id uuid primary key default gen_random_uuid(), project_id uuid references projects(id), agent_name text not null, status text not null, input jsonb, output jsonb, latency_ms int, created_at timestamptz default now());
create table if not exists media_projects (id uuid primary key default gen_random_uuid(), project_id uuid references projects(id), kind text, title text, metadata jsonb default '{}');
create table if not exists video_shots (id uuid primary key default gen_random_uuid(), media_project_id uuid references media_projects(id) on delete cascade, shot_number int, duration_seconds numeric, narration text, on_screen_text text, visual_description text, image_prompt text, video_prompt text, citation text, research_source uuid references sources(id));
create table if not exists social_posts (id uuid primary key default gen_random_uuid(), media_project_id uuid references media_projects(id), platform text, mode text, body text, citations jsonb default '[]');
create table if not exists content_fact_checks (id uuid primary key default gen_random_uuid(), media_project_id uuid references media_projects(id), status text check (status in ('PASS','NEEDS QUALIFICATION','UNSUPPORTED','DO NOT PUBLISH')), findings jsonb default '[]');
create table if not exists feature_flags (id uuid primary key default gen_random_uuid(), feature text unique not null, tier_requirement text default 'FREE', usage_limit int, provider_requirement text, enabled boolean default true);
alter table profiles enable row level security; alter table projects enable row level security; alter table passages enable row level security; alter table conversations enable row level security; alter table messages enable row level security;
create policy "own profile" on profiles for all using (auth.uid() = id);
create policy "own projects" on projects for all using (auth.uid() = owner_id);
create policy "project passages" on passages for all using (exists(select 1 from projects p where p.id=project_id and p.owner_id=auth.uid()));

insert into languages (id, name, family, scripts, tier, fallback) values
(1, 'Syriac', 'Research catalog', array['Syriac']::text[], 1, array['Aramaic']::text[]),
(2, 'Aramaic', 'Research catalog', array['Shared/Latin transliteration']::text[], 3, array[]::text[]),
(3, 'Hebrew', 'Research catalog', array['Hebrew']::text[], 1, array['Aramaic','Phoenician']::text[]),
(4, 'Greek', 'Research catalog', array['Greek']::text[], 1, array[]::text[]),
(5, 'Ethiopic', 'Research catalog', array['Shared/Latin transliteration']::text[], 3, array[]::text[]),
(6, 'Pahlavi', 'Research catalog', array['Shared/Latin transliteration']::text[], 3, array[]::text[]),
(7, 'Persian', 'Research catalog', array['Shared/Latin transliteration']::text[], 3, array['Pahlavi','Old Persian']::text[]),
(8, 'Akkadian', 'Research catalog', array['Shared/Latin transliteration']::text[], 3, array[]::text[]),
(9, 'South Arabian', 'Research catalog', array['Shared/Latin transliteration']::text[], 3, array[]::text[]),
(10, 'Armenian', 'Research catalog', array['Armenian']::text[], 1, array[]::text[]),
(11, 'Phoenician', 'Research catalog', array['Shared/Latin transliteration']::text[], 3, array['Hebrew','Moabitish','Edomitish']::text[]),
(12, 'Avestic', 'Research catalog', array['Shared/Latin transliteration']::text[], 3, array[]::text[]),
(13, 'Mandaean', 'Research catalog', array['Shared/Latin transliteration']::text[], 3, array['Aramaic','Syriac']::text[]),
(14, 'Sanskrit', 'Research catalog', array['Devanagari']::text[], 1, array[]::text[]),
(15, 'Pazand', 'Research catalog', array['Shared/Latin transliteration']::text[], 3, array[]::text[]),
(16, 'Nabatean', 'Research catalog', array['Shared/Latin transliteration']::text[], 3, array['Aramaic','Arabic']::text[]),
(17, 'Safaite', 'Research catalog', array['Shared/Latin transliteration']::text[], 3, array[]::text[]),
(18, 'Palmyrene', 'Research catalog', array['Shared/Latin transliteration']::text[], 3, array[]::text[]),
(19, 'Ugaritic', 'Research catalog', array['Shared/Latin transliteration']::text[], 3, array['Phoenician','Hebrew']::text[]),
(20, 'Coptic', 'Research catalog', array['Coptic']::text[], 1, array['Egyptian']::text[]),
(21, 'Latin', 'Research catalog', array['Latin']::text[], 1, array[]::text[]),
(22, 'Berber', 'Research catalog', array['Shared/Latin transliteration']::text[], 3, array[]::text[]),
(23, 'Egyptian', 'Research catalog', array['Shared/Latin transliteration']::text[], 3, array['Coptic']::text[]),
(24, 'Babylonian', 'Research catalog', array['Shared/Latin transliteration']::text[], 3, array[]::text[]),
(25, 'Assyrian', 'Research catalog', array['Shared/Latin transliteration']::text[], 3, array[]::text[]),
(26, 'Arabic', 'Research catalog', array['Arabic']::text[], 1, array['Safaite','Thamudic','Lihyanite','South Arabian']::text[]),
(27, 'Old Persian', 'Research catalog', array['Shared/Latin transliteration']::text[], 3, array['Avestic']::text[]),
(28, 'Parthian', 'Research catalog', array['Shared/Latin transliteration']::text[], 3, array[]::text[]),
(29, 'Sogdian', 'Research catalog', array['Shared/Latin transliteration']::text[], 3, array[]::text[]),
(30, 'Elamite', 'Research catalog', array['Shared/Latin transliteration']::text[], 3, array[]::text[]),
(31, 'Hurrian', 'Research catalog', array['Shared/Latin transliteration']::text[], 3, array[]::text[]),
(32, 'Hittite', 'Research catalog', array['Shared/Latin transliteration']::text[], 3, array[]::text[]),
(33, 'Himyaritic', 'Research catalog', array['Shared/Latin transliteration']::text[], 3, array[]::text[]),
(34, 'Thamudic', 'Research catalog', array['Shared/Latin transliteration']::text[], 3, array[]::text[]),
(35, 'Lihyanite', 'Research catalog', array['Shared/Latin transliteration']::text[], 3, array[]::text[]),
(36, 'Pashto', 'Research catalog', array['Shared/Latin transliteration']::text[], 3, array[]::text[]),
(37, 'Baluchi', 'Research catalog', array['Shared/Latin transliteration']::text[], 3, array[]::text[]),
(38, 'Beja', 'Research catalog', array['Shared/Latin transliteration']::text[], 3, array[]::text[]),
(39, 'Bilin', 'Research catalog', array['Shared/Latin transliteration']::text[], 3, array[]::text[]),
(40, 'Bishari', 'Research catalog', array['Shared/Latin transliteration']::text[], 3, array[]::text[]),
(41, 'Edomitish', 'Research catalog', array['Shared/Latin transliteration']::text[], 3, array[]::text[]),
(42, 'Georgian', 'Research catalog', array['Georgian']::text[], 1, array[]::text[]),
(43, 'Judeo-Tunisian', 'Research catalog', array['Shared/Latin transliteration']::text[], 3, array[]::text[]),
(44, 'Mehri', 'Research catalog', array['Shared/Latin transliteration']::text[], 3, array[]::text[]),
(45, 'Moabitish', 'Research catalog', array['Shared/Latin transliteration']::text[], 3, array[]::text[]),
(46, 'Norse', 'Research catalog', array['Shared/Latin transliteration']::text[], 3, array[]::text[]),
(47, 'Pali', 'Research catalog', array['Devanagari']::text[], 1, array[]::text[]),
(48, 'Sinhalese', 'Research catalog', array['Sinhala']::text[], 1, array[]::text[]),
(49, 'Slavonic', 'Research catalog', array['Cyrillic']::text[], 1, array[]::text[]),
(50, 'Turki', 'Research catalog', array['Shared/Latin transliteration']::text[], 3, array[]::text[]),
(51, 'Turkish', 'Research catalog', array['Shared/Latin transliteration']::text[], 3, array[]::text[]),
(52, 'Umani', 'Research catalog', array['Shared/Latin transliteration']::text[], 3, array[]::text[]),
(53, 'Geʽez', 'Research catalog', array['Shared/Latin transliteration']::text[], 3, array[]::text[])
on conflict (id) do update set name=excluded.name, family=excluded.family, scripts=excluded.scripts, tier=excluded.tier, fallback=excluded.fallback;

-- CaseVault schema
-- Run once in the Supabase SQL Editor (Project → SQL Editor → New query).

-- Inquiries submitted from the Discuss page.
create table if not exists public.inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  created_at timestamptz not null default now()
);

alter table public.inquiries enable row level security;

-- Allow anonymous visitors to submit an inquiry, but not read them back.
create policy "Anyone can submit an inquiry"
  on public.inquiries
  for insert
  to anon
  with check (true);

-- Cases: the core entity CaseVault manages.
create table if not exists public.cases (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid references auth.users (id) on delete set null,
  title text not null,
  description text,
  status text not null default 'open' check (status in ('open', 'in_progress', 'closed')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.cases enable row level security;

-- Authenticated users can manage only the cases they own.
create policy "Owners can view their cases"
  on public.cases
  for select
  to authenticated
  using (auth.uid() = owner_id);

create policy "Owners can insert their cases"
  on public.cases
  for insert
  to authenticated
  with check (auth.uid() = owner_id);

create policy "Owners can update their cases"
  on public.cases
  for update
  to authenticated
  using (auth.uid() = owner_id)
  with check (auth.uid() = owner_id);

create policy "Owners can delete their cases"
  on public.cases
  for delete
  to authenticated
  using (auth.uid() = owner_id);

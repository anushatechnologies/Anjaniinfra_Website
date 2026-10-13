-- ========================================================
-- ANJANI INFRA LUXURY HOME INTERIORS - SUPABASE SCHEMA
-- ONLY PROJECTS AND ADMIN_USERS PRESERVED
-- ========================================================

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- ----------------------------------------------------
-- 1. PROJECTS TABLE (Turnkey Architectural Projects Portfolio)
-- ----------------------------------------------------
create table if not exists public.projects (
    id text primary key default concat('proj-', gen_random_uuid()),
    slug text unique,
    title text not null,
    name text,
    category text not null default 'Interior Architecture',
    location text not null,
    type text default 'Turnkey Luxury Interior Fitout',
    area text,
    budget text,
    completion_days text default '40 Days',
    client text default 'Private Client',
    year text default '2026',
    description text,
    image_url text not null,
    is_featured boolean default false,
    display_order integer default 0,
    specs jsonb default '[]'::jsonb,
    gallery jsonb default '[]'::jsonb,
    before_after jsonb default '[]'::jsonb,
    floor_plans jsonb default '[]'::jsonb,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Performance Indexes
create index if not exists idx_projects_slug on public.projects(slug);
create index if not exists idx_projects_category on public.projects(category, is_featured);
create index if not exists idx_projects_order on public.projects(display_order);

-- Enable Row Level Security (RLS)
alter table public.projects enable row level security;

-- Public READ policy
drop policy if exists "Allow public read projects" on public.projects;
create policy "Allow public read projects" on public.projects for select using (true);

-- Admin FULL ACCESS policy
drop policy if exists "Allow admin full access projects" on public.projects;
create policy "Allow admin full access projects" on public.projects for all using (true) with check (true);

-- ----------------------------------------------------
-- 2. ADMIN USERS TABLE (Preserved for Admin Authentication)
-- ----------------------------------------------------
create table if not exists public.admin_users (
    id uuid default gen_random_uuid() primary key,
    email text unique not null,
    password_hash text not null,
    full_name text default 'Administrator',
    role text default 'admin',
    is_active boolean default true,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.admin_users enable row level security;

drop policy if exists "Allow service role full access admin_users" on public.admin_users;
create policy "Allow service role full access admin_users" on public.admin_users for all using (true) with check (true);

-- Insert default admin user if not exists
insert into public.admin_users (email, password_hash, full_name, role, is_active)
values ('admin@anjaniinfra.com', 'admin@anjani2026', 'Super Administrator', 'super_admin', true)
on conflict (email) do nothing;

-- FindPro Open database schema draft
-- Target: PostgreSQL / Supabase

create extension if not exists "pgcrypto";

create type lead_status as enum ('new', 'matched', 'contacted', 'booked', 'closed', 'archived');
create type expert_status as enum ('pending', 'active', 'suspended', 'archived');
create type match_event_type as enum ('recommended', 'invited', 'expert_replied', 'customer_selected', 'contact_opened', 'closed');
create type match_status as enum ('pending_expert_reply', 'pending_customer_confirm', 'contact_opened', 'booked', 'closed');
create type ad_plan_type as enum ('none', 'featured', 'category_top', 'city_top');
create type member_type as enum ('customer', 'expert', 'admin');
create type purchase_status as enum ('pending', 'paid', 'refunded', 'cancelled');

create table members (
  id uuid primary key default gen_random_uuid(),
  member_type member_type not null,
  email text unique,
  password_hash text,
  line_id text,
  phone text,
  address text,
  display_name text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint members_contact_required check (
    nullif(email, '') is not null or nullif(line_id, '') is not null or nullif(phone, '') is not null
  )
);

create table customer_leads (
  id uuid primary key default gen_random_uuid(),
  lead_status lead_status not null default 'new',
  source text not null default 'customer_request_form',
  customer_member_id uuid references members(id) on delete set null,
  title text not null,
  category text not null,
  city text not null,
  district text not null,
  location text generated always as (city || district) stored,
  weekday text not null,
  time_slot text not null,
  budget text not null default '待報價',
  detail text not null,
  email text,
  line_id text,
  phone text,
  public_contact_visible boolean not null default false,
  privacy_notice_version text not null,
  service_consent boolean not null default false,
  marketing_consent boolean not null default false,
  consented_at timestamptz,
  selected_expert_id uuid,
  admin_note text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint customer_leads_contact_required check (
    nullif(email, '') is not null or nullif(line_id, '') is not null or nullif(phone, '') is not null
  )
);

create table experts (
  id uuid primary key default gen_random_uuid(),
  profile_status expert_status not null default 'pending',
  expert_member_id uuid references members(id) on delete set null,
  name text not null,
  category text not null,
  mode text not null,
  price text not null,
  bio text not null,
  email text,
  line_id text,
  phone text,
  public_contact_visible boolean not null default false,
  ad_plan ad_plan_type not null default 'none',
  ad_started_at timestamptz,
  ad_ended_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint experts_contact_required check (
    nullif(email, '') is not null or nullif(line_id, '') is not null or nullif(phone, '') is not null
  )
);

create table expert_service_areas (
  id uuid primary key default gen_random_uuid(),
  expert_id uuid not null references experts(id) on delete cascade,
  city text not null,
  district text,
  is_all_city boolean not null default false,
  created_at timestamptz not null default now()
);

create table consent_logs (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid references customer_leads(id) on delete cascade,
  expert_id uuid references experts(id) on delete cascade,
  privacy_notice_version text not null,
  service_consent boolean not null default false,
  marketing_consent boolean not null default false,
  ip_address inet,
  user_agent text,
  consented_at timestamptz not null default now()
);

create table match_events (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid not null references customer_leads(id) on delete cascade,
  expert_id uuid references experts(id) on delete set null,
  match_score integer,
  event_type match_event_type not null,
  match_status match_status not null default 'pending_expert_reply',
  contact_released boolean not null default false,
  customer_confirmed_at timestamptz,
  contact_opened_at timestamptz,
  note text,
  created_at timestamptz not null default now()
);

create table lead_purchases (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid not null references customer_leads(id) on delete cascade,
  expert_id uuid not null references experts(id) on delete cascade,
  purchase_status purchase_status not null default 'pending',
  price_amount integer not null default 0,
  currency text not null default 'TWD',
  contact_released boolean not null default false,
  purchased_at timestamptz,
  created_at timestamptz not null default now()
);

create table admin_users (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  display_name text not null,
  role text not null default 'admin',
  created_at timestamptz not null default now()
);

create index customer_leads_status_idx on customer_leads(lead_status);
create index customer_leads_category_location_idx on customer_leads(category, city, district);
create index experts_status_category_idx on experts(profile_status, category);
create index expert_service_areas_lookup_idx on expert_service_areas(city, district, is_all_city);
create index match_events_lead_idx on match_events(lead_id, created_at desc);
create index members_type_idx on members(member_type);
create index lead_purchases_expert_idx on lead_purchases(expert_id, created_at desc);

-- Supabase RLS note:
-- Enable row level security before production and allow public inserts only through validated API routes.
-- Admin reads should require authenticated admin role.

-- ========================================================
-- ANJANI INFRA - EMPTY ALL TABLES SCRIPT
-- ========================================================
-- Run this in the Supabase Dashboard SQL Editor if you ever
-- need to truncate all tables while keeping schema and admin users.

BEGIN;

-- Truncate application data tables
TRUNCATE TABLE public.banners RESTART IDENTITY CASCADE;
TRUNCATE TABLE public.projects RESTART IDENTITY CASCADE;
TRUNCATE TABLE public.offers RESTART IDENTITY CASCADE;
TRUNCATE TABLE public.consultation_requests RESTART IDENTITY CASCADE;
TRUNCATE TABLE public.cost_estimates RESTART IDENTITY CASCADE;
TRUNCATE TABLE public.referrals RESTART IDENTITY CASCADE;
TRUNCATE TABLE public.media_library RESTART IDENTITY CASCADE;
TRUNCATE TABLE public.blogs RESTART IDENTITY CASCADE;
TRUNCATE TABLE public.testimonials RESTART IDENTITY CASCADE;
TRUNCATE TABLE public.video_showcase RESTART IDENTITY CASCADE;

-- Optional: Truncate audio_tracks and video_library if created
DO $$
BEGIN
    IF EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'audio_tracks') THEN
        TRUNCATE TABLE public.audio_tracks RESTART IDENTITY CASCADE;
    END IF;
    IF EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'video_library') THEN
        TRUNCATE TABLE public.video_library RESTART IDENTITY CASCADE;
    END IF;
END $$;

COMMIT;

-- Verify row counts
SELECT 'banners' as table_name, count(*) as count FROM public.banners
UNION ALL
SELECT 'projects', count(*) FROM public.projects
UNION ALL
SELECT 'offers', count(*) FROM public.offers
UNION ALL
SELECT 'consultation_requests', count(*) FROM public.consultation_requests
UNION ALL
SELECT 'cost_estimates', count(*) FROM public.cost_estimates
UNION ALL
SELECT 'referrals', count(*) FROM public.referrals
UNION ALL
SELECT 'media_library', count(*) FROM public.media_library
UNION ALL
SELECT 'blogs', count(*) FROM public.blogs
UNION ALL
SELECT 'testimonials', count(*) FROM public.testimonials
UNION ALL
SELECT 'video_showcase', count(*) FROM public.video_showcase
UNION ALL
SELECT 'admin_users', count(*) FROM public.admin_users;

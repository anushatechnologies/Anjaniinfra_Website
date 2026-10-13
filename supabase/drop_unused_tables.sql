-- ========================================================
-- DROP UNUSED TABLES SCRIPT FOR SUPABASE
-- Run this in your Supabase Dashboard SQL Editor (https://supabase.com/dashboard/project/nsmobuinpjloyiejtjth/sql)
-- This removes all tables EXCEPT projects and admin_users.
-- ========================================================

DROP TABLE IF EXISTS public.banners CASCADE;
DROP TABLE IF EXISTS public.offers CASCADE;
DROP TABLE IF EXISTS public.consultation_requests CASCADE;
DROP TABLE IF EXISTS public.cost_estimates CASCADE;
DROP TABLE IF EXISTS public.referrals CASCADE;
DROP TABLE IF EXISTS public.media_library CASCADE;
DROP TABLE IF EXISTS public.blogs CASCADE;
DROP TABLE IF EXISTS public.testimonials CASCADE;
DROP TABLE IF EXISTS public.video_showcase CASCADE;
DROP TABLE IF EXISTS public.audio_tracks CASCADE;
DROP TABLE IF EXISTS public.video_library CASCADE;

-- Verify remaining public tables (should only show: projects, admin_users)
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
ORDER BY table_name;

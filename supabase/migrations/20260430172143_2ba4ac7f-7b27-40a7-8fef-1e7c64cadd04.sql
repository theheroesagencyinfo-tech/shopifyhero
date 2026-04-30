
-- has_role is used INSIDE RLS policies (they execute as the caller),
-- so the calling role must be allowed to run it. Restore execute for authenticated.
GRANT EXECUTE ON FUNCTION public.has_role(UUID, public.app_role) TO authenticated;

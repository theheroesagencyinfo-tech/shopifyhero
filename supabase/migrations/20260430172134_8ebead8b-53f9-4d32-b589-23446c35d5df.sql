
-- Lock down SECURITY DEFINER functions: only the database/triggers may execute them
REVOKE EXECUTE ON FUNCTION public.has_role(UUID, public.app_role) FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.handle_new_user() FROM PUBLIC, anon, authenticated;

-- set_updated_at is invoker-safe; ensure it's invoker (not definer) and search_path is set
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY INVOKER
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

-- Tighten audit_submissions insert policy (no longer a blanket TRUE)
DROP POLICY IF EXISTS "Anyone can submit an audit request" ON public.audit_submissions;

CREATE POLICY "Anyone can submit an audit request"
  ON public.audit_submissions FOR INSERT TO anon, authenticated
  WITH CHECK (
    length(trim(store_url)) BETWEEN 3 AND 255
    AND length(trim(niche)) BETWEEN 1 AND 60
    AND length(trim(name)) BETWEEN 1 AND 80
    AND length(trim(contact_value)) BETWEEN 3 AND 120
    AND contact_method IN ('whatsapp','email','call')
    AND status = 'new'
    AND admin_notes IS NULL
  );

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { ArrowLeft, Lock, Mail, User as UserIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "@/hooks/use-toast";

const emailSchema = z.string().trim().email("Enter a valid email").max(255);
const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters")
  .max(72, "Password too long");
const nameSchema = z.string().trim().min(1, "Add your name").max(80);

const Auth = () => {
  const navigate = useNavigate();
  const { user, isAdmin, loading } = useAuth();

  const [tab, setTab] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    document.title = "Sign in — TheHeroes Agency";
  }, []);

  useEffect(() => {
    if (!loading && user) {
      navigate(isAdmin ? "/admin" : "/", { replace: true });
    }
  }, [user, isAdmin, loading, navigate]);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailParsed = emailSchema.safeParse(email);
    const passParsed = passwordSchema.safeParse(password);
    if (!emailParsed.success || !passParsed.success) {
      toast({
        title: "Check your details",
        description: emailParsed.success ? passParsed.error.issues[0].message : emailParsed.error.issues[0].message,
        variant: "destructive",
      });
      return;
    }
    setSubmitting(true);
    const { error } = await supabase.auth.signInWithPassword({ email: emailParsed.data, password });
    setSubmitting(false);
    if (error) {
      toast({ title: "Sign in failed", description: error.message, variant: "destructive" });
      return;
    }
    toast({ title: "Welcome back" });
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailParsed = emailSchema.safeParse(email);
    const passParsed = passwordSchema.safeParse(password);
    const nameParsed = nameSchema.safeParse(displayName);
    if (!emailParsed.success || !passParsed.success || !nameParsed.success) {
      const issue =
        (!nameParsed.success && nameParsed.error.issues[0].message) ||
        (!emailParsed.success && emailParsed.error.issues[0].message) ||
        (!passParsed.success && passParsed.error.issues[0].message);
      toast({ title: "Check your details", description: issue || "Invalid input", variant: "destructive" });
      return;
    }
    setSubmitting(true);
    const { error } = await supabase.auth.signUp({
      email: emailParsed.data,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/`,
        data: { display_name: nameParsed.data },
      },
    });
    setSubmitting(false);
    if (error) {
      toast({ title: "Sign up failed", description: error.message, variant: "destructive" });
      return;
    }
    toast({ title: "Account created", description: "You're signed in." });
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <header className="container py-5">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition">
          <ArrowLeft className="w-4 h-4" /> Back to site
        </Link>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 pb-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold tracking-tight">
              TheHeroes<span className="text-primary">.</span>Agency
            </h1>
            <p className="text-sm text-muted-foreground mt-2">
              Sign in or create an account
            </p>
          </div>

          <div className="bg-card/60 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl">
            <Tabs value={tab} onValueChange={(v) => setTab(v as "signin" | "signup")}>
              <TabsList className="grid grid-cols-2 w-full mb-6">
                <TabsTrigger value="signin">Sign in</TabsTrigger>
                <TabsTrigger value="signup">Sign up</TabsTrigger>
              </TabsList>

              <TabsContent value="signin">
                <form onSubmit={handleSignIn} className="space-y-4">
                  <Field id="signin-email" label="Email" icon={Mail}>
                    <Input id="signin-email" type="email" autoComplete="email"
                      value={email} onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@brand.com" className="pl-9 h-11" required maxLength={255} />
                  </Field>
                  <Field id="signin-pass" label="Password" icon={Lock}>
                    <Input id="signin-pass" type="password" autoComplete="current-password"
                      value={password} onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••" className="pl-9 h-11" required maxLength={72} />
                  </Field>
                  <Button type="submit" disabled={submitting}
                    className="w-full h-11 gradient-vibrant text-white vibrant-glow font-semibold rounded-full">
                    {submitting ? "Signing in…" : "Sign in"}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="signup">
                <form onSubmit={handleSignUp} className="space-y-4">
                  <Field id="signup-name" label="Your name" icon={UserIcon}>
                    <Input id="signup-name" type="text" autoComplete="name"
                      value={displayName} onChange={(e) => setDisplayName(e.target.value)}
                      placeholder="Alex Johnson" className="pl-9 h-11" required maxLength={80} />
                  </Field>
                  <Field id="signup-email" label="Email" icon={Mail}>
                    <Input id="signup-email" type="email" autoComplete="email"
                      value={email} onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@brand.com" className="pl-9 h-11" required maxLength={255} />
                  </Field>
                  <Field id="signup-pass" label="Password" icon={Lock}>
                    <Input id="signup-pass" type="password" autoComplete="new-password"
                      value={password} onChange={(e) => setPassword(e.target.value)}
                      placeholder="At least 8 characters" className="pl-9 h-11" required minLength={8} maxLength={72} />
                  </Field>
                  <Button type="submit" disabled={submitting}
                    className="w-full h-11 gradient-vibrant text-white vibrant-glow font-semibold rounded-full">
                    {submitting ? "Creating account…" : "Create account"}
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    New accounts are created as standard users. An admin can promote them later.
                  </p>
                </form>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
};

const Field = ({
  id, label, icon: Icon, children,
}: {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) => (
  <div className="space-y-1.5">
    <Label htmlFor={id} className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</Label>
    <div className="relative">
      <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary z-10" />
      {children}
    </div>
  </div>
);

export default Auth;
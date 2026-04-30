import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, LogOut, Inbox, FileText, RefreshCw, Trash2, Save, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "@/hooks/use-toast";
import type { Database } from "@/integrations/supabase/types";

type Submission = Database["public"]["Tables"]["audit_submissions"]["Row"];
type SiteContent = Database["public"]["Tables"]["site_content"]["Row"];
type SubmissionStatus = Database["public"]["Enums"]["submission_status"];

const STATUSES: SubmissionStatus[] = ["new", "contacted", "in_progress", "closed"];

const statusColor: Record<SubmissionStatus, string> = {
  new: "bg-primary/20 text-primary border-primary/30",
  contacted: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  in_progress: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  closed: "bg-muted text-muted-foreground border-white/10",
};

const Admin = () => {
  const navigate = useNavigate();
  const { user, isAdmin, loading, signOut } = useAuth();

  useEffect(() => {
    document.title = "Admin — TheHeroes Agency";
  }, []);

  useEffect(() => {
    if (loading) return;
    if (!user) {
      navigate("/auth", { replace: true });
    }
  }, [user, loading, navigate]);

  if (loading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center text-muted-foreground">
        Loading…
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center gap-4">
        <h1 className="text-2xl font-bold">Admin access required</h1>
        <p className="text-muted-foreground max-w-md">
          Your account is signed in but does not have admin rights. Ask an existing admin to promote your account.
        </p>
        <div className="flex gap-3">
          <Button asChild variant="outline"><Link to="/">Back to site</Link></Button>
          <Button onClick={signOut}>Sign out</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-white/10 bg-background/60 backdrop-blur sticky top-0 z-40">
        <div className="container flex items-center justify-between h-16 gap-3">
          <div className="flex items-center gap-4 min-w-0">
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition shrink-0">
              <ArrowLeft className="w-4 h-4" /> <span className="hidden sm:inline">Site</span>
            </Link>
            <h1 className="font-bold text-lg truncate">Admin Dashboard</h1>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-xs text-muted-foreground truncate max-w-[200px]">{user.email}</span>
            <Button onClick={signOut} variant="ghost" size="sm">
              <LogOut className="w-4 h-4 sm:mr-2" /> <span className="hidden sm:inline">Sign out</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-6 sm:py-10">
        <Tabs defaultValue="submissions">
          <TabsList className="mb-6">
            <TabsTrigger value="submissions"><Inbox className="w-4 h-4 mr-2" />Submissions</TabsTrigger>
            <TabsTrigger value="content"><FileText className="w-4 h-4 mr-2" />Site content</TabsTrigger>
          </TabsList>

          <TabsContent value="submissions">
            <SubmissionsPanel />
          </TabsContent>

          <TabsContent value="content">
            <SiteContentPanel />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

const SubmissionsPanel = () => {
  const [items, setItems] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("audit_submissions")
      .select("*")
      .order("created_at", { ascending: false });
    setLoading(false);
    if (error) {
      toast({ title: "Couldn't load submissions", description: error.message, variant: "destructive" });
      return;
    }
    setItems(data ?? []);
  };

  useEffect(() => {
    load();
    const channel = supabase
      .channel("audit_submissions_changes")
      .on("postgres_changes", { event: "*", schema: "public", table: "audit_submissions" }, () => load())
      .subscribe();
    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const updateStatus = async (id: string, status: SubmissionStatus) => {
    const { error } = await supabase.from("audit_submissions").update({ status }).eq("id", id);
    if (error) toast({ title: "Update failed", description: error.message, variant: "destructive" });
  };

  const updateNotes = async (id: string, admin_notes: string) => {
    const { error } = await supabase.from("audit_submissions").update({ admin_notes }).eq("id", id);
    if (error) toast({ title: "Update failed", description: error.message, variant: "destructive" });
    else toast({ title: "Notes saved" });
  };

  const remove = async (id: string) => {
    if (!confirm("Delete this submission permanently?")) return;
    const { error } = await supabase.from("audit_submissions").delete().eq("id", id);
    if (error) toast({ title: "Delete failed", description: error.message, variant: "destructive" });
  };

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: items.length };
    STATUSES.forEach((s) => (c[s] = items.filter((i) => i.status === s).length));
    return c;
  }, [items]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex flex-wrap gap-2 text-xs">
          <Badge variant="outline">All: {counts.all}</Badge>
          {STATUSES.map((s) => (
            <Badge key={s} variant="outline" className={statusColor[s]}>
              {s.replace("_", " ")}: {counts[s]}
            </Badge>
          ))}
        </div>
        <Button variant="outline" size="sm" onClick={load}>
          <RefreshCw className="w-4 h-4 mr-2" /> Refresh
        </Button>
      </div>

      {loading ? (
        <p className="text-muted-foreground text-sm">Loading submissions…</p>
      ) : items.length === 0 ? (
        <div className="border border-dashed border-white/10 rounded-2xl p-10 text-center text-muted-foreground">
          No submissions yet. They will appear here when someone fills out the audit form.
        </div>
      ) : (
        <div className="grid gap-4">
          {items.map((s) => (
            <SubmissionCard key={s.id} submission={s} onStatus={updateStatus} onNotes={updateNotes} onDelete={remove} />
          ))}
        </div>
      )}
    </div>
  );
};

const SubmissionCard = ({
  submission, onStatus, onNotes, onDelete,
}: {
  submission: Submission;
  onStatus: (id: string, s: SubmissionStatus) => void;
  onNotes: (id: string, n: string) => void;
  onDelete: (id: string) => void;
}) => {
  const [notes, setNotes] = useState(submission.admin_notes ?? "");
  return (
    <div className="bg-card/60 backdrop-blur border border-white/10 rounded-2xl p-4 sm:p-5 space-y-4">
      <div className="flex items-start justify-between gap-3 flex-wrap">
        <div className="min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-semibold truncate">{submission.name}</h3>
            <Badge variant="outline" className={statusColor[submission.status]}>
              {submission.status.replace("_", " ")}
            </Badge>
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            {new Date(submission.created_at).toLocaleString()}
          </p>
        </div>
        <Button variant="ghost" size="sm" onClick={() => onDelete(submission.id)}
          className="text-muted-foreground hover:text-destructive">
          <Trash2 className="w-4 h-4" />
        </Button>
      </div>

      <div className="grid sm:grid-cols-2 gap-3 text-sm">
        <Info label="Store URL">
          <a href={submission.store_url.startsWith("http") ? submission.store_url : `https://${submission.store_url}`}
             target="_blank" rel="noopener noreferrer"
             className="text-primary hover:underline break-all">{submission.store_url}</a>
        </Info>
        <Info label="Niche">{submission.niche}</Info>
        <Info label="Contact method">{submission.contact_method}</Info>
        <Info label="Contact value"><span className="break-all">{submission.contact_value}</span></Info>
      </div>

      <div className="space-y-2">
        <Label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Status</Label>
        <div className="flex flex-wrap gap-2">
          {STATUSES.map((s) => (
            <button
              key={s}
              onClick={() => onStatus(submission.id, s)}
              className={
                "px-3 py-1.5 rounded-full text-xs font-medium border transition " +
                (submission.status === s
                  ? statusColor[s]
                  : "border-white/10 text-muted-foreground hover:text-foreground hover:border-white/20")
              }
            >
              {s.replace("_", " ")}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <Label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Internal notes</Label>
        <Textarea value={notes} onChange={(e) => setNotes(e.target.value)} rows={3}
          placeholder="Add notes about this lead…" maxLength={2000} />
        <Button size="sm" onClick={() => onNotes(submission.id, notes)}>
          <Save className="w-4 h-4 mr-2" /> Save notes
        </Button>
      </div>
    </div>
  );
};

const Info = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div>
    <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</p>
    <div className="text-foreground mt-1">{children}</div>
  </div>
);

const SiteContentPanel = () => {
  const [items, setItems] = useState<SiteContent[]>([]);
  const [loading, setLoading] = useState(true);
  const [newKey, setNewKey] = useState("");

  const load = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("site_content")
      .select("*")
      .order("key", { ascending: true });
    setLoading(false);
    if (error) {
      toast({ title: "Couldn't load content", description: error.message, variant: "destructive" });
      return;
    }
    setItems(data ?? []);
  };

  useEffect(() => { load(); }, []);

  const createKey = async () => {
    const key = newKey.trim();
    if (!key) return;
    if (!/^[a-z0-9_.-]+$/i.test(key)) {
      toast({ title: "Invalid key", description: "Use letters, numbers, _, -, . only", variant: "destructive" });
      return;
    }
    const { error } = await supabase.from("site_content").insert({ key, value: "" });
    if (error) {
      toast({ title: "Couldn't create", description: error.message, variant: "destructive" });
      return;
    }
    setNewKey("");
    load();
  };

  const save = async (key: string, raw: string) => {
    let parsed: unknown = raw;
    const trimmed = raw.trim();
    if (trimmed.startsWith("{") || trimmed.startsWith("[") || trimmed === "true" || trimmed === "false" || /^-?\d/.test(trimmed)) {
      try { parsed = JSON.parse(trimmed); } catch { parsed = raw; }
    }
    const { error } = await supabase.from("site_content").update({ value: parsed as never }).eq("key", key);
    if (error) toast({ title: "Save failed", description: error.message, variant: "destructive" });
    else toast({ title: "Saved" });
  };

  const remove = async (key: string) => {
    if (!confirm(`Delete content "${key}"?`)) return;
    const { error } = await supabase.from("site_content").delete().eq("key", key);
    if (error) toast({ title: "Delete failed", description: error.message, variant: "destructive" });
    else load();
  };

  return (
    <div className="space-y-6">
      <div className="bg-card/60 backdrop-blur border border-white/10 rounded-2xl p-4 sm:p-5">
        <Label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">New content key</Label>
        <div className="flex gap-2 mt-2">
          <Input value={newKey} onChange={(e) => setNewKey(e.target.value)}
            placeholder="e.g. hero.headline or testimonials" maxLength={60} />
          <Button onClick={createKey}><Plus className="w-4 h-4 mr-2" />Add</Button>
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          Store any plain text or JSON. Use this to pull copy into the landing page later.
        </p>
      </div>

      {loading ? (
        <p className="text-muted-foreground text-sm">Loading content…</p>
      ) : items.length === 0 ? (
        <div className="border border-dashed border-white/10 rounded-2xl p-10 text-center text-muted-foreground">
          No editable content yet. Add a key above to get started.
        </div>
      ) : (
        <div className="grid gap-4">
          {items.map((c) => <ContentCard key={c.key} item={c} onSave={save} onDelete={remove} />)}
        </div>
      )}
    </div>
  );
};

const ContentCard = ({
  item, onSave, onDelete,
}: {
  item: SiteContent;
  onSave: (key: string, raw: string) => void;
  onDelete: (key: string) => void;
}) => {
  const initial = typeof item.value === "string" ? item.value : JSON.stringify(item.value, null, 2);
  const [val, setVal] = useState(initial);
  return (
    <div className="bg-card/60 backdrop-blur border border-white/10 rounded-2xl p-4 sm:p-5 space-y-3">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <code className="text-sm font-semibold">{item.key}</code>
        <span className="text-xs text-muted-foreground">
          Updated {new Date(item.updated_at).toLocaleString()}
        </span>
      </div>
      <Textarea value={val} onChange={(e) => setVal(e.target.value)} rows={6}
        className="font-mono text-sm" maxLength={20000} />
      <div className="flex gap-2">
        <Button size="sm" onClick={() => onSave(item.key, val)}><Save className="w-4 h-4 mr-2" />Save</Button>
        <Button size="sm" variant="ghost" onClick={() => onDelete(item.key)}
          className="text-muted-foreground hover:text-destructive">
          <Trash2 className="w-4 h-4 mr-2" />Delete
        </Button>
      </div>
    </div>
  );
};

export default Admin;
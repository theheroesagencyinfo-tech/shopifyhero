import { useState } from "react";
import { z } from "zod";
import { ArrowRight, Globe, Tag, MessageCircle, Mail, CalendarDays, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const NICHES = [
  "Fashion & Apparel",
  "Beauty & Skincare",
  "Health & Wellness",
  "Home & Decor",
  "Electronics & Gadgets",
  "Food & Beverage",
  "Jewelry & Accessories",
  "Pets",
  "Other",
];

const schema = z.object({
  storeUrl: z
    .string()
    .trim()
    .min(3, "Please enter your store URL")
    .max(255, "URL too long")
    .refine(
      (v) => /\.[a-z]{2,}/i.test(v),
      "Enter a valid URL (e.g. mystore.myshopify.com)"
    ),
  niche: z.string().trim().min(1, "Pick a niche").max(60),
  name: z.string().trim().min(1, "Your name").max(80),
  contactValue: z.string().trim().min(3, "Add your contact").max(120),
  contactMethod: z.enum(["whatsapp", "email", "call"]),
});

type ContactMethod = "whatsapp" | "email" | "call";

const WHATSAPP_BASE = "https://wa.me/13154541290";
const CALENDLY_URL = "https://calendly.com/theheroesagency-info/30min";
const EMAIL_TO = "info@theheroesagency.org";

export const AuditForm = () => {
  const [storeUrl, setStoreUrl] = useState("");
  const [niche, setNiche] = useState("");
  const [name, setName] = useState("");
  const [contactMethod, setContactMethod] = useState<ContactMethod>("whatsapp");
  const [contactValue, setContactValue] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const methods: { id: ContactMethod; label: string; icon: typeof MessageCircle; placeholder: string }[] = [
    { id: "whatsapp", label: "WhatsApp", icon: MessageCircle, placeholder: "+1 555 123 4567" },
    { id: "email", label: "Email", icon: Mail, placeholder: "you@brand.com" },
    { id: "call", label: "Book a call", icon: CalendarDays, placeholder: "Best timezone (e.g. EST)" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse({ storeUrl, niche, name, contactValue, contactMethod });
    if (!parsed.success) {
      toast({
        title: "Almost there",
        description: parsed.error.issues[0]?.message ?? "Please check the form",
        variant: "destructive",
      });
      return;
    }
    setSubmitting(true);

    const summary =
      `Hi! I'd like a free Shopify store audit.\n\n` +
      `• Store: ${storeUrl}\n` +
      `• Niche: ${niche}\n` +
      `• Name: ${name}\n` +
      `• Preferred contact: ${contactMethod} (${contactValue})`;

    if (contactMethod === "whatsapp") {
      window.open(`${WHATSAPP_BASE}?text=${encodeURIComponent(summary)}`, "_blank", "noopener,noreferrer");
    } else if (contactMethod === "email") {
      const subject = encodeURIComponent(`Free Shopify audit request — ${storeUrl}`);
      const body = encodeURIComponent(summary);
      window.location.href = `mailto:${EMAIL_TO}?subject=${subject}&body=${body}`;
    } else {
      // Pre-fill what we can to Calendly via query params
      const url = new URL(CALENDLY_URL);
      url.searchParams.set("name", name);
      if (contactValue.includes("@")) url.searchParams.set("email", contactValue);
      url.searchParams.set("a1", `${storeUrl} — ${niche}`);
      window.open(url.toString(), "_blank", "noopener,noreferrer");
    }

    toast({
      title: "Sending you over…",
      description: "Your details are pre-filled. Just hit send on the next step.",
    });
    setTimeout(() => setSubmitting(false), 600);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="text-left mt-8 space-y-5 bg-background/40 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-6 md:p-7 ring-gradient"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="storeUrl" className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Your Shopify store URL
          </Label>
          <div className="relative">
            <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
            <Input
              id="storeUrl"
              value={storeUrl}
              onChange={(e) => setStoreUrl(e.target.value)}
              placeholder="mystore.myshopify.com"
              className="pl-9 h-11 bg-card/60 border-white/10"
              maxLength={255}
              required
            />
          </div>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="niche" className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Your niche
          </Label>
          <div className="relative">
            <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[hsl(var(--violet))] z-10" />
            <select
              id="niche"
              value={niche}
              onChange={(e) => setNiche(e.target.value)}
              required
              className="w-full h-11 pl-9 pr-3 rounded-md bg-card/60 border border-white/10 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring appearance-none"
            >
              <option value="" className="bg-card">Select a niche…</option>
              {NICHES.map((n) => (
                <option key={n} value={n} className="bg-card">{n}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="name" className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
          Your name
        </Label>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Alex Johnson"
          className="h-11 bg-card/60 border-white/10"
          maxLength={80}
          required
        />
      </div>

      <div className="space-y-2">
        <Label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
          Best way to reach you
        </Label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {methods.map((m) => {
            const active = contactMethod === m.id;
            const Icon = m.icon;
            return (
              <button
                type="button"
                key={m.id}
                onClick={() => setContactMethod(m.id)}
                className={
                  "flex items-center justify-center gap-2 h-11 rounded-md text-sm font-medium border transition-all " +
                  (active
                    ? "gradient-vibrant text-white border-transparent vibrant-glow"
                    : "bg-card/60 border-white/10 text-muted-foreground hover:text-foreground hover:border-white/20")
                }
              >
                <Icon className="w-4 h-4" />
                {m.label}
              </button>
            );
          })}
        </div>
        <Input
          value={contactValue}
          onChange={(e) => setContactValue(e.target.value)}
          placeholder={methods.find((m) => m.id === contactMethod)?.placeholder}
          className="h-11 bg-card/60 border-white/10 mt-2"
          maxLength={120}
          required
          type={contactMethod === "email" ? "email" : "text"}
        />
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={submitting}
        className="w-full h-14 rounded-full gradient-vibrant text-white vibrant-glow font-semibold text-base"
      >
        Send My Free Audit Request
        <ArrowRight className="ml-2 w-5 h-5" />
      </Button>

      <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-xs text-muted-foreground">
        <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[hsl(var(--emerald))]" /> No credit card</span>
        <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[hsl(var(--emerald))]" /> Reply within 12h</span>
        <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[hsl(var(--emerald))]" /> 100% private</span>
      </div>
    </form>
  );
};

export default AuditForm;
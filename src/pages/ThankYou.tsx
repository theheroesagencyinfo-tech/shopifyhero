import { useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CheckCircle2, MessageCircle, Mail, CalendarDays, ArrowLeft, Clock, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fbqTrack } from "@/lib/fbpixel";

interface ThankYouState {
  storeUrl?: string;
  niche?: string;
  name?: string;
  contactMethod?: "whatsapp" | "email" | "call";
  contactValue?: string;
  eventId?: string;
}

const WHATSAPP_URL =
  "https://wa.me/13154541290?text=Hi!%20I%20just%20submitted%20the%20free%20Shopify%20audit%20form.";
const CALENDLY_URL = "https://calendly.com/theheroesagency-info/30min";
const EMAIL_URL = "mailto:info@theheroesagency.org";

const ThankYou = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = (location.state ?? {}) as ThankYouState;
  const fired = useRef(false);

  useEffect(() => {
    document.title = "Thank you — Audit request received";
  }, []);

  useEffect(() => {
    if (fired.current) return;
    fired.current = true;
    // Final confirmed Lead event. eventID dedupes against the form-submit Lead.
    fbqTrack(
      "Lead",
      {
        content_name: "Free Shopify Audit — Confirmed",
        content_category: state.niche ?? "unknown",
        contact_method: state.contactMethod ?? "unknown",
        status: "confirmed",
      },
      state.eventId ? { eventID: state.eventId } : undefined
    );
    fbqTrack("CompleteRegistration", {
      content_name: "Free Shopify Audit",
      status: true,
    });
  }, [state.eventId, state.niche, state.contactMethod]);

  const firstName = state.name?.split(" ")[0];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <header className="container py-5">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition">
          <ArrowLeft className="w-4 h-4" /> Back to home
        </Link>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 pb-16">
        <div className="w-full max-w-2xl text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full gradient-vibrant vibrant-glow mb-6">
            <CheckCircle2 className="w-10 h-10 text-white" />
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
            {firstName ? `Thanks, ${firstName}!` : "Your request is in."}
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground mt-4 max-w-xl mx-auto">
            We received your free Shopify store audit request{state.storeUrl ? <> for <span className="text-foreground font-medium break-all">{state.storeUrl}</span></> : null}.
            A real human from our team will reply within <span className="text-foreground font-medium">12 hours</span>.
          </p>

          <div className="grid sm:grid-cols-3 gap-3 mt-8">
            <Stat icon={Clock} title="12h reply" sub="From a real human" />
            <Stat icon={ShieldCheck} title="No sales call" sub="Unless you ask for one" />
            <Stat icon={CheckCircle2} title="100% private" sub="Your data is safe" />
          </div>

          <div className="bg-card/60 backdrop-blur border border-white/10 rounded-2xl p-5 sm:p-7 mt-8 text-left">
            <h2 className="text-lg font-semibold">Want to skip the wait?</h2>
            <p className="text-sm text-muted-foreground mt-1">
              Reach out directly and we'll prioritize your audit.
            </p>
            <div className="grid sm:grid-cols-3 gap-3 mt-5">
              <Button asChild className="h-12 rounded-full gradient-vibrant text-white vibrant-glow font-semibold">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline" className="h-12 rounded-full">
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                  <CalendarDays className="w-4 h-4 mr-2" /> Book a call
                </a>
              </Button>
              <Button asChild variant="outline" className="h-12 rounded-full">
                <a href={EMAIL_URL}>
                  <Mail className="w-4 h-4 mr-2" /> Email us
                </a>
              </Button>
            </div>
          </div>

          <p className="text-xs text-muted-foreground mt-6">
            No sales call unless you ask. We send the audit — you decide what to do next.
          </p>

          <div className="mt-10">
            <Button variant="ghost" onClick={() => navigate("/")} className="text-muted-foreground">
              Return to homepage
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

const Stat = ({
  icon: Icon, title, sub,
}: { icon: React.ComponentType<{ className?: string }>; title: string; sub: string }) => (
  <div className="bg-card/40 border border-white/10 rounded-xl p-4 text-left">
    <Icon className="w-5 h-5 text-primary" />
    <p className="text-sm font-semibold mt-2">{title}</p>
    <p className="text-xs text-muted-foreground">{sub}</p>
  </div>
);

export default ThankYou;
import { ArrowRight, Calendar, CheckCircle2, MessageCircle, Sparkles, TrendingUp, Zap, ShieldCheck, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BeforeAfter } from "@/components/BeforeAfter";
import heroBg from "@/assets/landing-hero.jpg";
import before1 from "@/assets/before-1.jpg";
import after1 from "@/assets/after-1.jpg";
import before2 from "@/assets/before-2.jpg";
import after2 from "@/assets/after-2.jpg";

const WHATSAPP_URL = "https://wa.me/15551234567?text=Hi!%20I'd%20like%20a%20free%20Shopify%20store%20audit.";
const CALENDLY_URL = "https://calendly.com/theheroes/30min";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <a href="#top" className="flex items-center gap-2 font-bold text-lg">
            <Sparkles className="w-5 h-5 text-primary" />
            <span>Heroes<span className="text-primary">.</span></span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#case-studies" className="hover:text-foreground transition">Case Studies</a>
            <a href="#offer" className="hover:text-foreground transition">Free Audit</a>
            <a href="#faq" className="hover:text-foreground transition">FAQ</a>
          </nav>
          <Button asChild size="sm" className="gradient-sky text-primary-foreground">
            <a href="#offer">Get Free Audit</a>
          </Button>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden">
          <img
            src={heroBg}
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
          <div className="absolute inset-0 grid-bg opacity-40" />

          <div className="container relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-8">
                <Sparkles className="w-3.5 h-3.5" />
                Shopify Conversion Specialists
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
                We turn underperforming Shopify stores into{" "}
                <span className="text-gradient">revenue machines</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                Most stores lose 70% of buyers at the homepage. We redesign your store
                to convert — typically lifting revenue <span className="text-foreground font-semibold">2–4×</span> within 60 days.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button asChild size="lg" className="gradient-sky text-primary-foreground sky-glow text-base h-14 px-8">
                  <a href="#offer">
                    Get My Free Store Audit
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-base h-14 px-8 border-border hover:bg-secondary">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 w-5 h-5" />
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>

              <div className="mt-10 flex items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  No credit card
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  Reply in 24h
                </div>
                <div className="hidden sm:flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  100% free
                </div>
              </div>
            </div>

            {/* Result strip */}
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border max-w-4xl mx-auto">
              {[
                { v: "+312%", l: "Avg. revenue lift" },
                { v: "2.4×", l: "Conversion rate" },
                { v: "60d", l: "Time to results" },
                { v: "50+", l: "Stores rebuilt" },
              ].map((s) => (
                <div key={s.l} className="bg-card p-6 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-gradient">{s.v}</div>
                  <div className="text-xs md:text-sm text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CASE STUDIES */}
        <section id="case-studies" className="py-24 md:py-32">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Case Studies</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Real stores. Real numbers.
              </h2>
              <p className="text-muted-foreground text-lg">
                Drag the slider to see the transformation.
              </p>
            </div>

            <div className="space-y-24">
              {/* Case 1 */}
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                <div>
                  <BeforeAfter
                    before={before1}
                    after={after1}
                    beforeAlt="Cluttered original Shopify homepage"
                    afterAlt="Redesigned premium Shopify homepage"
                  />
                </div>
                <div>
                  <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">Case Study 01 — Lifestyle DTC</p>
                  <h3 className="text-3xl md:text-4xl font-bold mb-5">
                    From cluttered storefront to <span className="text-gradient">$84k/month</span>
                  </h3>
                  <p className="text-muted-foreground text-lg mb-8">
                    We rebuilt the homepage, simplified navigation, and rewrote product pages
                    around a clear value proposition. Result: a 3.1× lift in conversion within 8 weeks.
                  </p>
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {[
                      { v: "+218%", l: "Revenue" },
                      { v: "3.1×", l: "Conversion" },
                      { v: "−42%", l: "Bounce rate" },
                    ].map((s) => (
                      <div key={s.l} className="glass rounded-lg p-4 text-center">
                        <div className="text-xl font-bold text-foreground">{s.v}</div>
                        <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
                      </div>
                    ))}
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {["Homepage redesign + hero rewrite", "Mobile-first product pages", "Checkout optimization (Shop Pay)"].map((t) => (
                      <li key={t} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Case 2 */}
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                <div className="lg:order-2">
                  <BeforeAfter
                    before={before2}
                    after={after2}
                    beforeAlt="Outdated fashion store homepage"
                    afterAlt="Premium editorial fashion store homepage"
                  />
                </div>
                <div className="lg:order-1">
                  <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">Case Study 02 — Fashion Brand</p>
                  <h3 className="text-3xl md:text-4xl font-bold mb-5">
                    Editorial rebrand → <span className="text-gradient">2.4× AOV</span>
                  </h3>
                  <p className="text-muted-foreground text-lg mb-8">
                    A dated theme was killing trust. We delivered an editorial-style redesign
                    with refined product storytelling — average order value jumped 142%.
                  </p>
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {[
                      { v: "+142%", l: "AOV" },
                      { v: "2.4×", l: "Repeat buyers" },
                      { v: "+89%", l: "Add-to-cart" },
                    ].map((s) => (
                      <div key={s.l} className="glass rounded-lg p-4 text-center">
                        <div className="text-xl font-bold text-foreground">{s.v}</div>
                        <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
                      </div>
                    ))}
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {["Editorial visual identity", "Bundle & upsell flows", "Email + SMS automation"].map((t) => (
                      <li key={t} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY */}
        <section className="py-24 border-y border-border bg-card/30">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                What you actually get
              </h2>
              <p className="text-muted-foreground text-lg">
                A 15-page audit + a free 1:1 strategy call. No fluff, no obligation.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { i: TrendingUp, t: "Conversion teardown", d: "Page-by-page breakdown of where you're losing buyers — with screenshots and fixes." },
                { i: Zap, t: "Speed & UX report", d: "Mobile speed score, Core Web Vitals, and the top 5 UX leaks costing you sales." },
                { i: ShieldCheck, t: "Personalized roadmap", d: "A prioritized 90-day action plan you can implement yourself or hand to your team." },
              ].map(({ i: Icon, t, d }) => (
                <div key={t} className="glass rounded-2xl p-7 hover-lift">
                  <div className="w-12 h-12 rounded-lg gradient-sky text-primary-foreground flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{t}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OFFER / CTA */}
        <section id="offer" className="py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-glow-radial" />
          <div className="container relative">
            <div className="max-w-3xl mx-auto glass rounded-3xl p-10 md:p-16 text-center sky-glow">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 text-primary text-sm font-semibold mb-6">
                <Star className="w-3.5 h-3.5 fill-current" />
                Limited — 5 audits per month
              </div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-5">
                Free Shopify Store Audit
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-xl mx-auto">
                Get a full conversion teardown + a free homepage redesign preview.
                Worth $750 — yours free.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button asChild size="lg" className="gradient-sky text-primary-foreground sky-glow text-base h-14 px-8">
                  <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                    <Calendar className="mr-2 w-5 h-5" />
                    Book a Call
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="text-base h-14 px-8 bg-[hsl(var(--whatsapp))] hover:bg-[hsl(var(--whatsapp))]/90 text-white"
                >
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 w-5 h-5" />
                    WhatsApp Us
                  </a>
                </Button>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-primary" /> 48h delivery</div>
                <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-primary" /> No obligations</div>
                <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-primary" /> 100% free</div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-24 border-t border-border">
          <div className="container max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Common questions</h2>
            <div className="space-y-4">
              {[
                { q: "Is the audit really free?", a: "Yes — 100% free, no credit card. We do 5 per month because each one takes 4–6 hours of real work." },
                { q: "What do I need to send you?", a: "Just your store URL. We do the rest." },
                { q: "Will you try to upsell me?", a: "We'll show you exactly what's broken. If you want help fixing it, we'll quote you. If not, you keep the audit. No pressure." },
                { q: "How fast do I get it?", a: "Within 48 hours of booking, including a recorded video walkthrough." },
              ].map((f) => (
                <details key={f.q} className="glass rounded-xl p-5 group">
                  <summary className="cursor-pointer font-semibold flex items-center justify-between list-none">
                    {f.q}
                    <span className="text-primary group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-border py-10">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>© {new Date().getFullYear()} Heroes Agency. Crafted for conversion.</span>
          </div>
          <div className="flex items-center gap-6">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">WhatsApp</a>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">Book a call</a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[hsl(var(--whatsapp))] text-white flex items-center justify-center shadow-lg hover:scale-110 transition"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
};

export default Index;

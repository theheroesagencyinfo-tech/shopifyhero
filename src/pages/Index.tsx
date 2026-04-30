import { ArrowRight, CheckCircle2, MessageCircle, ShieldCheck, Clock, Star, ExternalLink, AlertTriangle, XCircle, Target, Layers, Rocket, Quote, Lock, Award, Send, Search, FileCheck, Flame, Smartphone, Users, TrendingDown, HelpCircle, Globe, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BeforeAfter } from "@/components/BeforeAfter";
import { AuditForm } from "@/components/AuditForm";
import { useEffect } from "react";
import { fbqTrack } from "@/lib/fbpixel";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import heroBg from "@/assets/landing-hero.jpg";
import auditBefore1 from "@/assets/audit-before-1.jpg";
import auditAfter1 from "@/assets/audit-after-1.png";
import auditBefore2 from "@/assets/audit-before-2.jpg";
import auditAfter2 from "@/assets/audit-after-2.png";
import mouBarracPhoto from "@/assets/mou-barrac.png";
import testimonialMarcus from "@/assets/testimonial-marcus.jpg";
import testimonialAisha from "@/assets/testimonial-aisha.jpg";
import testimonialDaniel from "@/assets/testimonial-daniel.jpg";

const WHATSAPP_URL =
  "https://wa.me/13154541290?text=Hi!%20I'd%20like%20a%20free%20Shopify%20store%20audit.";
const CALENDLY_URL = "https://calendly.com/theheroesagency-info/30min";
const EMAIL_URL = "mailto:info@theheroesagency.org";
const PORTFOLIO_URL = "https://bit.ly/4w05iPa";

const Index = () => {
  const { user, isAdmin } = useAuth();
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest?.("a") as HTMLAnchorElement | null;
      if (!anchor) return;
      const href = anchor.getAttribute("href") || "";
      if (href.startsWith("https://wa.me/")) {
        fbqTrack("Contact", { method: "whatsapp" });
      } else if (href.startsWith("mailto:")) {
        fbqTrack("Contact", { method: "email" });
      } else if (href.includes("calendly.com")) {
        fbqTrack("Schedule", { method: "calendly" });
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/60 border-b border-white/[0.06]">
        <div className="container flex items-center justify-between h-16 gap-2">
          <a href="#top" className="flex items-center gap-2 font-bold text-base sm:text-lg tracking-tight min-w-0">
            <span className="w-7 h-7 rounded-lg gradient-sky sky-glow flex items-center justify-center shrink-0">
              <span className="w-2 h-2 rounded-sm bg-background" />
            </span>
            <span className="truncate">
              TheHeroes<span className="text-primary">.</span>Agency
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#problem" className="hover:text-foreground transition">Problem</a>
            <a href="#solution" className="hover:text-foreground transition">Solution</a>
            <a href="#proof" className="hover:text-foreground transition">Proof</a>
            <a href="#how" className="hover:text-foreground transition">How it works</a>
            <a href="#offer" className="hover:text-foreground transition">Free Audit</a>
          </nav>
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {user && isAdmin ? (
              <Link to="/admin" className="hidden sm:inline text-xs text-muted-foreground hover:text-foreground transition">
                Admin
              </Link>
            ) : (
              <Link to="/auth" className="hidden sm:inline text-xs text-muted-foreground hover:text-foreground transition">
                Sign in
              </Link>
            )}
            <Button asChild size="sm" className="gradient-sky text-primary-foreground sky-glow rounded-full px-3 sm:px-5 text-xs sm:text-sm">
              <a href="#offer">
                <span className="hidden sm:inline">Get Free Audit</span>
                <span className="sm:hidden">Free Audit</span>
              </a>
            </Button>
          </div>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden">
          <img
            src={heroBg}
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/85 to-background" />
          <div className="absolute inset-0 grid-bg opacity-60" />
          {/* Ambient orbs */}
          <div className="pointer-events-none absolute -top-20 -left-20 w-[480px] h-[480px] bg-orb animate-float-slow" />
          <div className="pointer-events-none absolute top-40 -right-32 w-[520px] h-[520px] bg-orb animate-float-slow" style={{ animationDelay: "-6s" }} />
          <div className="absolute inset-0 noise" />

          <div className="container relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-foreground/90 text-xs font-medium mb-8 ring-gradient">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Trusted by growing ecommerce brands
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-bold leading-[1.05] md:leading-[1.02] tracking-tight mb-7">
                Your Shopify store isn't broken —{" "}
                <span className="font-serif-display text-gradient">it's just not built to convert.</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-muted-foreground/90 max-w-2xl mx-auto mb-10 leading-relaxed">
                We design high-converting Shopify stores that turn visitors into{" "}
                <span className="text-foreground font-semibold">paying customers</span> — usually within 7 days.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center w-full sm:w-auto">
                <Button asChild size="lg" className="gradient-sky text-primary-foreground sky-glow text-base h-14 px-6 sm:px-8 rounded-full font-semibold w-full sm:w-auto">
                  <a href="#offer">
                    Get Free Store Audit
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-base h-14 px-6 sm:px-8 rounded-full border-white/15 bg-white/[0.02] hover:bg-white/[0.06] backdrop-blur-md w-full sm:w-auto">
                  <a href="#how">
                    See How It Works
                  </a>
                </Button>
              </div>
              <p className="mt-4 text-xs text-muted-foreground max-w-md mx-auto">
                No sales call unless you ask. We send the audit — you decide what to do next.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  No credit card
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  Reply in 12h
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  100% free
                </div>
              </div>
            </div>

            {/* Result strip */}
            <div className="mt-16 md:mt-24 relative max-w-5xl mx-auto">
              <div className="absolute -inset-px rounded-3xl gradient-sky opacity-30 blur-xl" />
              <div className="relative grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-3xl overflow-hidden ring-gradient premium-shadow">
              {[
                { v: "+312%", l: "Avg. revenue lift", n: "Across our last 12 rebuilds, 90 days post-launch." },
                { v: "2.4×", l: "Conversion rate", n: "Median lift vs. client's pre-rebuild baseline." },
                { v: "7d", l: "Time to results", n: "Typical first sales lift after going live." },
                { v: "50+", l: "Stores rebuilt", n: "Across DTC, beauty, wellness & apparel since 2016." },
              ].map((s) => (
                <div key={s.l} className="bg-card/80 backdrop-blur-md p-5 sm:p-7 text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient tracking-tight">{s.v}</div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-muted-foreground mt-1.5 uppercase tracking-wider">{s.l}</div>
                  <div className="text-[10px] sm:text-[11px] text-muted-foreground/70 mt-2 leading-snug px-1 normal-case tracking-normal">{s.n}</div>
                </div>
              ))}
              </div>
            </div>

            {/* Trusted by strip */}
            <div className="mt-20 text-center">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground/70 mb-6">
                Trusted by founders building on
              </p>
              <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-muted-foreground/60 text-sm font-semibold">
                <span className="hover:text-foreground transition">Shopify Plus</span>
                <span className="opacity-30">·</span>
                <span className="hover:text-foreground transition">Recharge</span>
                <span className="opacity-30">·</span>
                <span className="hover:text-foreground transition">Klaviyo</span>
                <span className="opacity-30">·</span>
                <span className="hover:text-foreground transition">Shop Pay</span>
                <span className="opacity-30">·</span>
                <span className="hover:text-foreground transition">Judge.me</span>
              </div>
            </div>
          </div>
        </section>

        {/* EMOTIONAL HOOK */}
        <section className="relative py-20 md:py-28 overflow-hidden border-y border-white/[0.06]">
          <div className="absolute inset-0 bg-gradient-to-b from-destructive/[0.06] via-background to-background" />
          <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 h-[420px] bg-orb opacity-40" />
          <div className="container relative">
            <div className="relative max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-destructive/10 border border-destructive/30 text-xs font-semibold mb-6 text-destructive uppercase tracking-[0.2em]">
                <AlertTriangle className="w-3.5 h-3.5" />
                The hard truth
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-6">
                You're Getting Traffic…{" "}
                <span className="font-serif-display text-gradient">But No Sales.</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground/95 leading-relaxed max-w-2xl mx-auto mb-8">
                Most Shopify stores don't fail because of bad products — they fail because of{" "}
                <span className="text-foreground font-semibold">poor design</span>,{" "}
                <span className="text-foreground font-semibold">weak trust</span>, and{" "}
                <span className="text-foreground font-semibold">no conversion strategy</span>.
              </p>
              <Button asChild size="lg" className="gradient-sky text-primary-foreground sky-glow text-base h-14 px-8 rounded-full font-semibold">
                <a href="#offer">
                  See What's Killing My Sales
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* PROBLEM */}
        <section id="problem" className="py-24 md:py-32 border-y border-white/[0.06] bg-card/20 relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
          <div className="container relative">
            <div className="max-w-2xl mx-auto text-center mb-14">
              <p className="text-primary text-xs font-semibold tracking-[0.25em] uppercase mb-4">— The Problem</p>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-5">
                Why most Shopify stores <span className="font-serif-display text-gradient">don't make sales</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                You're getting traffic… but no sales. Here's what's quietly killing your conversion rate:
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {[
                { i: XCircle, t: "Poor store design that kills trust", d: "Generic themes, weak branding, and cluttered layouts make buyers bounce within seconds." },
                { i: AlertTriangle, t: "Confusing product pages", d: "Walls of text, no benefit grid, no social proof — visitors leave without ever hitting add-to-cart." },
                { i: Target, t: "No conversion strategy", d: "You're guessing what works. No A/B tests, no funnel logic, no plan to turn clicks into revenue." },
                { i: Smartphone, t: "Slow, unoptimized mobile layout", d: "70% of your traffic is mobile. Slow load times and broken layouts cost you sales every single day." },
              ].map(({ i: Icon, t, d }) => (
                <div key={t} className="relative rounded-2xl p-7 glass hover-lift ring-gradient">
                  <div className="w-11 h-11 rounded-xl bg-destructive/15 text-destructive flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 tracking-tight">{t}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-foreground/90 mt-12 max-w-xl mx-auto text-lg">
              <span className="font-serif-display text-gradient text-xl">"You're getting traffic… but no sales."</span>
              <br />
              <span className="text-muted-foreground text-base">Sound familiar? You're not alone — and it's fixable.</span>
            </p>
          </div>
        </section>

        {/* SOLUTION */}
        <section id="solution" className="py-24 md:py-32 relative overflow-hidden">
          <div className="pointer-events-none absolute -top-20 right-0 w-[500px] h-[500px] bg-orb opacity-50" />
          <div className="container relative">
            <div className="max-w-2xl mx-auto text-center mb-14">
              <p className="text-primary text-xs font-semibold tracking-[0.25em] uppercase mb-4">— Our Solution</p>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-5">
                We fix what's stopping your store <span className="font-serif-display text-gradient">from selling</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                We don't just make it pretty. We rebuild your store around one goal: revenue per visitor.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {[
                { i: Target, t: "Conversion-focused design", d: "Every section earns its place. We design backwards from the checkout — not from a Dribbble shot." },
                { i: Layers, t: "Optimized product pages", d: "Benefit grids, social proof, urgency, FAQ — PDPs engineered to push add-to-cart rates above 8%." },
                { i: Smartphone, t: "Mobile-first experience", d: "Sub-2-second mobile load. Thumb-friendly UI. Shop Pay one-tap checkout. Built for where your buyers actually are." },
                { i: Rocket, t: "Strategic layout for higher sales", d: "A funnel-driven layout that guides visitors from curiosity to checkout — without friction or distraction." },
              ].map(({ i: Icon, t, d }) => (
                <div key={t} className="glass rounded-2xl p-8 hover-lift ring-gradient">
                  <div className="w-12 h-12 rounded-xl gradient-sky text-primary-foreground flex items-center justify-center mb-6 sky-glow">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 tracking-tight">{t}</h3>
                  <p className="text-muted-foreground leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button asChild size="lg" className="gradient-sky text-primary-foreground sky-glow text-base h-14 px-8 rounded-full font-semibold">
                <a href="#offer">
                  Get My Free Audit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <p className="mt-4 text-xs text-muted-foreground max-w-md mx-auto">
                No sales call unless you ask. We send the audit — you decide what to do next.
              </p>
            </div>
          </div>
        </section>

        {/* PROOF */}
        <section id="proof" className="py-24 md:py-32 relative border-y border-white/[0.06] bg-card/20">
          <div className="pointer-events-none absolute top-1/2 -left-40 w-[500px] h-[500px] bg-orb opacity-60" />
          <div className="container">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <p className="text-primary text-xs font-semibold tracking-[0.25em] uppercase mb-4">— Proof · Case Studies</p>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-5">
                Real stores. <span className="font-serif-display text-gradient">Real numbers.</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Drag the slider — see the exact moment a store goes from <span className="text-foreground font-semibold">"meh"</span> to <span className="text-foreground font-semibold">built to convert</span>.
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.25em] text-primary/80">Designed for sales, not just looks</p>
            </div>

            <div className="space-y-24">
              {/* Case 1 — Take Let Loose */}
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                <div className="relative">
                  <div className="absolute -inset-4 gradient-sky opacity-20 blur-3xl rounded-3xl" />
                  <div className="relative">
                  <BeforeAfter
                    before={auditBefore1}
                    after={auditAfter1}
                    beforeAlt="Take Let Loose homepage before audit — generic theme, weak positioning"
                    afterAlt="Take Let Loose Shopify homepage after redesign — bold subscription-first DTC"
                  />
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2 text-xs">
                    <span className="px-2.5 py-1 rounded-full bg-destructive/10 text-destructive border border-destructive/20 font-semibold">Before — Low Converting</span>
                    <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-semibold">After — Optimized for Sales</span>
                  </div>
                  <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-muted-foreground">
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" /> Improved product page structure</li>
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" /> Added trust elements</li>
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" /> Optimized mobile layout</li>
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" /> Subscription-first hero</li>
                  </ul>
                </div>
                <div>
                  <p className="text-primary text-xs font-semibold tracking-[0.25em] uppercase mb-4">
                    01 — Take Let Loose · Gut-Health DTC
                  </p>
                  <h3 className="text-3xl md:text-5xl font-bold mb-5 tracking-tight">
                    From flat launch to <span className="font-serif-display text-gradient">subscription-first growth</span>
                  </h3>
                  <p className="text-muted-foreground text-lg mb-6">
                    Our free audit flagged a weak hero, no subscription anchor, and friction at PDP.
                    We rebuilt around a bold subscription-first design with playful typography and
                    Recharge-powered repeat orders.
                  </p>
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {[
                      { v: "+214%", l: "Revenue / mo" },
                      { v: "2.8×", l: "Conversion rate" },
                      { v: "62%", l: "Subscription rate" },
                    ].map((s) => (
                      <div key={s.l} className="glass rounded-xl p-4 text-center ring-gradient">
                        <div className="text-2xl font-bold text-gradient">{s.v}</div>
                        <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{s.l}</div>
                      </div>
                    ))}
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                    {[
                      "Subscription-first homepage + sticky offer bar",
                      "Recharge integration with prepaid bundle upsells",
                      "PDP rebuild: benefit grid, social proof, FAQ accordion",
                    ].map((t) => (
                      <li key={t} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://takeletloose.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline font-medium"
                  >
                    Visit takeletloose.com <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Case 2 — Valeva */}
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                <div className="lg:order-2 relative">
                  <div className="absolute -inset-4 gradient-sky opacity-20 blur-3xl rounded-3xl" />
                  <div className="relative">
                  <BeforeAfter
                    before={auditBefore2}
                    after={auditAfter2}
                    beforeAlt="Valeva homepage before audit — dated layout, low trust"
                    afterAlt="Valeva Shopify homepage after redesign — cinematic founder-led haircare flagship"
                  />
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2 text-xs">
                    <span className="px-2.5 py-1 rounded-full bg-destructive/10 text-destructive border border-destructive/20 font-semibold">Before — Low Converting</span>
                    <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-semibold">After — Optimized for Sales</span>
                  </div>
                  <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-muted-foreground">
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" /> Founder-led storytelling</li>
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" /> Verified review carousel</li>
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" /> Mobile-first PDP rebuild</li>
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" /> Bundle + AOV upsells</li>
                  </ul>
                </div>
                <div className="lg:order-1">
                  <p className="text-primary text-xs font-semibold tracking-[0.25em] uppercase mb-4">
                    02 — Valeva · Hair & Scalp Wellness
                  </p>
                  <h3 className="text-3xl md:text-5xl font-bold mb-5 tracking-tight">
                    Cinematic rebuild → <span className="font-serif-display text-gradient">2.4× AOV</span>
                  </h3>
                  <p className="text-muted-foreground text-lg mb-6">
                    The audit identified low founder trust and a missing review system as the
                    biggest revenue leaks. We delivered a cinematic, founder-led flagship with a
                    high-trust review carousel and conversion-tuned product pages.
                  </p>
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {[
                      { v: "+142%", l: "AOV" },
                      { v: "+318%", l: "Add-to-cart" },
                      { v: "−47%", l: "Bounce rate" },
                    ].map((s) => (
                      <div key={s.l} className="glass rounded-xl p-4 text-center ring-gradient">
                        <div className="text-2xl font-bold text-gradient">{s.v}</div>
                        <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{s.l}</div>
                      </div>
                    ))}
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                    {[
                      "Founder-led storytelling above the fold",
                      "Verified review carousel + UGC integration",
                      "Conversion-tuned PDPs with bundle logic",
                    ].map((t) => (
                      <li key={t} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://valeva.shop/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline font-medium"
                  >
                    Visit valeva.shop <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Portfolio CTA */}
            <div className="mt-16 md:mt-20 text-center">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-base h-14 px-8 rounded-full border-white/15 bg-white/[0.03] hover:bg-white/[0.08] backdrop-blur-md font-semibold"
              >
                <a href={PORTFOLIO_URL} target="_blank" rel="noopener noreferrer">
                  View Full Portfolio
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <p className="text-xs text-muted-foreground mt-4">
                50+ Shopify stores rebuilt across DTC, beauty, wellness & apparel.
              </p>
            </div>
          </div>
        </section>

        {/* WHO THIS IS FOR */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          <div className="pointer-events-none absolute -top-20 left-1/3 w-[420px] h-[420px] bg-orb opacity-40" />
          <div className="container relative">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <p className="text-primary text-xs font-semibold tracking-[0.25em] uppercase mb-4">— Who it's for</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                This Is For You <span className="font-serif-display text-gradient">If…</span>
              </h2>
              <p className="text-muted-foreground text-lg">If any of these sound familiar, the audit will pay for itself the moment you read it.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { i: TrendingDown, t: "You're getting traffic but no sales", d: "Your ads are spending, sessions are climbing — and the cart stays empty." },
                { i: HelpCircle, t: "Your store looks good but doesn't convert", d: "It's pretty. It's modern. It still doesn't turn visitors into buyers." },
                { i: Search, t: "You're unsure what's actually wrong", d: "You've tweaked headlines, swapped images, lowered prices — nothing moves the needle." },
              ].map(({ i: Icon, t, d }) => (
                <div key={t} className="glass rounded-2xl p-7 hover-lift ring-gradient">
                  <div className="w-11 h-11 rounded-xl gradient-sky text-primary-foreground flex items-center justify-center mb-5 sky-glow">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 tracking-tight">{t}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-10 text-sm uppercase tracking-[0.2em]">
              <span className="text-foreground/90 font-semibold">Built to convert.</span> &nbsp;·&nbsp; Turn visitors into buyers.
            </p>
          </div>
        </section>

        {/* OFFER / CTA */}
        <section id="offer" className="py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-glow-radial" />
          <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 h-[600px] bg-orb opacity-70" />
          <div className="container relative">
            <div className="relative max-w-3xl mx-auto">
              <div className="absolute -inset-2 rounded-[2rem] gradient-sky opacity-30 blur-2xl" />
              <div className="relative glass-strong rounded-[1.5rem] md:rounded-[2rem] p-5 sm:p-8 md:p-16 text-center premium-shadow ring-gradient overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-px shimmer" />
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[hsl(var(--gold))]/10 border border-[hsl(var(--gold))]/30 text-sm font-semibold mb-6">
                  <Star className="w-3.5 h-3.5 fill-[hsl(var(--gold))] text-[hsl(var(--gold))]" />
                  <span className="text-gradient-gold">Limited — only 5 audits per week</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-5 leading-[1.05]">
                  Get a FREE <span className="font-serif-display text-gradient-vibrant">Shopify Store Audit</span>
                </h2>
                <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto mb-8">
                  A real human walks through your store on video and shows you exactly what's costing you sales.
                </p>
                <div className="text-left max-w-lg mx-auto mb-6">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">What You'll Get</p>
                  <ul className="space-y-3 text-foreground/90">
                    {[
                      { t: "Full store review", d: "Complete UX + design walkthrough — homepage, PDP, cart, checkout." },
                      { t: "Conversion issues breakdown", d: "Every leak, friction point and trust gap — ranked by revenue impact." },
                      { t: "Personalized improvement plan", d: "A prioritized action list you can hand to your dev today." },
                    ].map((it) => (
                      <li key={it.t} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                        <div>
                          <div className="font-semibold">{it.t}</div>
                          <div className="text-sm text-muted-foreground">{it.d}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 text-sm text-foreground/80 italic border-l-2 border-primary/50 pl-3">
                    No fluff. Just actionable fixes you can use immediately.
                  </p>
                </div>

              {/* Embedded lead form */}
              <div className="max-w-xl mx-auto">
                <AuditForm />
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-primary" /> 12h delivery</div>
                <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-primary" /> No obligations</div>
                <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-primary" /> 100% free</div>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[hsl(var(--whatsapp))] hover:underline font-medium"
                >
                  <MessageCircle className="w-4 h-4" /> Or message us directly
                </a>
              </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how" className="py-24 md:py-32 border-y border-white/[0.06] bg-card/20 relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
          <div className="container relative">
            <div className="max-w-2xl mx-auto text-center mb-14">
              <p className="text-primary text-xs font-semibold tracking-[0.25em] uppercase mb-4">— How it works</p>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-5">
                Three steps to a <span className="font-serif-display text-gradient">store that sells</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                No long onboarding. No 50-page forms. Just send your URL — we do the rest.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { i: Send, n: "01", t: "Submit your store", d: "Click below and send us your Shopify URL. Takes 30 seconds." },
                { i: Search, n: "02", t: "We review & analyze", d: "Our team audits your design, PDPs, mobile speed and funnel — by hand, not by bot." },
                { i: FileCheck, n: "03", t: "Get your audit + action plan", d: "Within 12 hours you receive a full video walkthrough plus a prioritized action plan." },
              ].map(({ i: Icon, n, t, d }) => (
                <div key={t} className="relative glass rounded-2xl p-8 hover-lift ring-gradient">
                  <div className="absolute top-5 right-6 text-5xl font-bold text-white/[0.04] tracking-tighter">{n}</div>
                  <div className="relative w-12 h-12 rounded-xl gradient-sky text-primary-foreground flex items-center justify-center mb-6 sky-glow">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="relative text-xl font-semibold mb-2 tracking-tight">{t}</h3>
                  <p className="relative text-muted-foreground leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button asChild size="lg" className="gradient-sky text-primary-foreground sky-glow text-base h-14 px-8 rounded-full font-semibold">
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                  Submit my store
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* TRUST / TESTIMONIALS */}
        <section className="py-24 md:py-32 relative">
          <div className="pointer-events-none absolute -top-20 right-0 w-[500px] h-[500px] bg-orb opacity-40" />
          <div className="container relative">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <p className="text-primary text-xs font-semibold tracking-[0.25em] uppercase mb-4">— Trusted by ecommerce founders</p>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                What our clients <span className="font-serif-display text-gradient">actually say</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                { q: "They rebuilt our PDP and we 2.6×'d our conversion rate in the first month. The audit alone was worth thousands.", n: "Marcus Thompson", brand: "Take Let Loose", url: "https://takeletloose.com/", role: "Founder of", photo: testimonialMarcus },
                { q: "Honest, fast, zero pushy upsell. They flagged 11 issues, fixed 8 in a week — Shopify revenue jumped from $42k to $118k/mo.", n: "Aïsha Laurent", brand: "Valeva", url: "https://valeva.shop/", role: "CEO of", photo: testimonialAisha },
                { q: "We'd worked with 3 'Shopify experts' before. They're the only ones who actually understood Liquid, Recharge and Klaviyo as one system.", n: "Daniel Rivera", brand: "Velaxen", url: "https://velaxen.shop/", role: "COO of", photo: testimonialDaniel },
              ].map((t) => (
                <div key={t.n} className="glass rounded-2xl p-7 ring-gradient flex flex-col">
                  <Quote className="w-7 h-7 text-primary/70 mb-4" />
                  <p className="text-foreground/90 leading-relaxed mb-6 text-[15px]">"{t.q}"</p>
                  <div className="mt-auto pt-4 border-t border-white/[0.06] flex items-center gap-3">
                    <img
                      src={t.photo}
                      alt={`${t.n}, ${t.role} ${t.brand}`}
                      width={48}
                      height={48}
                      loading="lazy"
                      className="w-12 h-12 rounded-full object-cover shrink-0 ring-2 ring-primary/30 sky-glow"
                    />
                    <div className="min-w-0">
                      <div className="flex items-center gap-1 text-[hsl(var(--gold))] mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-current" />
                        ))}
                      </div>
                      <div className="font-semibold text-sm truncate">{t.n}</div>
                      <div className="text-xs text-muted-foreground truncate">
                        {t.role}{" "}
                        <a
                          href={t.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline font-medium inline-flex items-center gap-1"
                        >
                          {t.brand}
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust badges */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {[
                { i: Award, t: "Shopify Experts", d: "Since 2016" },
                { i: ShieldCheck, t: "NDA on request", d: "Your data stays private" },
                { i: Lock, t: "Secure & GDPR", d: "Encrypted handoff" },
                { i: Clock, t: "12h response", d: "Real humans, real fast" },
              ].map(({ i: Icon, t, d }) => (
                <div key={t} className="glass rounded-xl p-4 flex items-center gap-3 ring-gradient">
                  <div className="w-10 h-10 rounded-lg gradient-sky text-primary-foreground flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-semibold truncate">{t}</div>
                    <div className="text-xs text-muted-foreground truncate">{d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT / FOUNDER */}
        <section className="py-24 md:py-32 relative overflow-hidden border-t border-white/[0.06]">
          <div className="pointer-events-none absolute -top-20 -left-20 w-[460px] h-[460px] bg-orb opacity-40" />
          <div className="container relative">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-[220px_1fr] gap-8 md:gap-12 items-center">
                <div className="relative mx-auto md:mx-0">
                  <div className="absolute -inset-3 gradient-sky opacity-30 blur-2xl rounded-full" />
                  <div className="relative w-44 h-44 md:w-52 md:h-52 rounded-full ring-2 ring-primary/40 bg-card sky-glow overflow-hidden">
                    <img
                      src={mouBarracPhoto}
                      alt="Mou Barrac, founder of TheHeroes Agency"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <p className="mt-3 text-center text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70">Mou Barrac · Founder</p>
                </div>
                <div>
                  <p className="text-primary text-xs font-semibold tracking-[0.25em] uppercase mb-3">— About us</p>
                  <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-5 leading-tight">
                    We're a small team that <span className="font-serif-display text-gradient">obsesses over conversion</span>.
                  </h2>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">
                    I'm Mou Barrac, founder of TheHeroes Agency. Over the last 6 years my team has rebuilt
                    <span className="text-foreground font-semibold"> 100+ Shopify stores</span> across DTC, beauty, wellness and apparel from scrappy first launches to 7-figure flagships.
                  </p>
                  <p className="text-sm text-foreground/80 mb-5 border-l-2 border-primary/50 pl-3">
                    Shopify Expert since 2016 · 50+ stores rebuilt · worked with brands in 12+ countries.
                  </p>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
                    We don't chase awards or design trends. We focus on one thing: <span className="text-foreground font-semibold">revenue per visitor</span>.
                    Every pixel, every word, every section has to earn its place — or it gets cut.
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="px-3 py-1.5 rounded-full glass ring-gradient flex items-center gap-1.5"><Globe className="w-3.5 h-3.5 text-primary" /> Worked with brands worldwide</span>
                    <span className="px-3 py-1.5 rounded-full glass ring-gradient flex items-center gap-1.5"><Heart className="w-3.5 h-3.5 text-primary" /> Founder-led, no juniors</span>
                    <span className="px-3 py-1.5 rounded-full glass ring-gradient flex items-center gap-1.5"><Award className="w-3.5 h-3.5 text-primary" /> Shopify Experts since 2016</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* URGENCY */}
        <section className="py-20 md:py-24 border-y border-white/[0.06] bg-card/30 relative overflow-hidden">
          <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 h-[400px] bg-orb opacity-50" />
          <div className="container relative">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-destructive/10 border border-destructive/30 text-sm font-semibold mb-6">
                <Flame className="w-4 h-4 text-destructive" />
                <span className="text-destructive">Mou personally reviews every audit</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-5">
                I personally review every store — <span className="font-serif-display text-gradient">that's the bottleneck</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                I'm Mou — and I sit through every single audit myself. That means I can only take on
                <span className="text-foreground font-semibold"> 5 stores per week</span>. If the slot counter shows
                availability, you're good. If not, the next opening is usually two weeks out.
              </p>
              <Button asChild size="lg" className="gradient-sky text-primary-foreground sky-glow text-base h-14 px-8 rounded-full font-semibold">
                <a href="#offer">
                  Claim my spot now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <p className="mt-4 text-xs text-muted-foreground max-w-md mx-auto">
                No sales call unless you ask. We send the audit — you decide what to do next.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-24 md:py-28 border-t border-white/[0.06]">
          <div className="container max-w-3xl">
            <div className="text-center mb-14">
              <p className="text-primary text-xs font-semibold tracking-[0.25em] uppercase mb-4">— FAQ</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                Common <span className="font-serif-display text-gradient">questions</span>
              </h2>
            </div>
            <div className="space-y-4">
              {[
                { q: "Is the audit really free?", a: "Yes — 100% free, no credit card. We do 5 per week because each one takes 4–6 hours of real work.", open: true },
                { q: "Will you try to upsell me?", a: "We'll show you exactly what's broken. If you want help fixing it, we'll quote you. If not, you keep the audit. No pressure.", open: true },
                { q: "What do I need to send you?", a: "Just your store URL. We do the rest.", open: false },
                { q: "How fast do I get it?", a: "Within 12 hours of booking, including a recorded video walkthrough.", open: false },
              ].map((f) => (
                <details key={f.q} open={f.open} className="glass rounded-2xl p-6 group ring-gradient">
                  <summary className="cursor-pointer font-semibold flex items-center justify-between list-none text-base">
                    {f.q}
                    <span className="text-primary group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                  </summary>
                  <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>

            {/* FINAL CTA */}
            <div className="mt-24 relative">
              <div className="absolute -inset-4 gradient-sky opacity-20 blur-3xl rounded-[2rem]" />
              <div className="relative glass-strong rounded-[1.5rem] md:rounded-[2rem] p-6 sm:p-10 md:p-14 text-center premium-shadow ring-gradient overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-px shimmer" />
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-destructive/10 border border-destructive/30 text-xs font-semibold mb-6 text-destructive uppercase tracking-[0.2em]">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  Last call
                </div>
                <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-5 leading-[1.05] max-w-3xl mx-auto">
                  Every Day Your Store Isn't Optimized…{" "}
                  <span className="font-serif-display text-gradient">You're Losing Sales.</span>
                </h3>
                <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                  Fix it now — before you waste more traffic, more ad spend, more momentum. The audit is free. The cost of waiting isn't.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="gradient-sky text-primary-foreground sky-glow text-base h-14 px-8 rounded-full font-semibold">
                  <a href="#offer">
                    Get Free Audit Now
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="text-base h-14 px-8 rounded-full bg-[hsl(var(--whatsapp))] hover:bg-[hsl(var(--whatsapp))]/90 text-white font-semibold"
                >
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 w-5 h-5" />
                    Chat on WhatsApp
                  </a>
                </Button>
                </div>
                <p className="mt-5 text-xs text-muted-foreground max-w-md mx-auto">
                  No sales call unless you ask. We send the audit — you decide what to do next.
                </p>
                <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-primary" /> 12h delivery</span>
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-primary" /> No credit card</span>
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-primary" /> Zero obligation</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FLOATING WHATSAPP CTA */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-50 inline-flex items-center gap-2 pl-3 pr-3 sm:pl-4 sm:pr-5 h-12 sm:h-14 rounded-full bg-[hsl(var(--whatsapp))] hover:bg-[hsl(var(--whatsapp))]/90 text-white font-semibold shadow-[0_10px_40px_-10px_hsl(var(--whatsapp)/0.7)] transition-transform hover:scale-105"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/70 opacity-70"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
        </span>
        <MessageCircle className="w-5 h-5" />
        <span className="hidden sm:inline text-sm">Chat on WhatsApp</span>
      </a>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.06] py-10">
          <div className="container flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground text-center md:text-left">
            <div className="flex items-center gap-3 flex-wrap justify-center">
              <span className="w-6 h-6 rounded-md gradient-sky flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-sm bg-background" />
              </span>
              <span>© {new Date().getFullYear()} TheHeroes Agency · theheroesagency.org</span>
            </div>
            <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
              <a href={EMAIL_URL} className="hover:text-foreground">info@theheroesagency.org</a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">WhatsApp</a>
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">Book a call</a>
            </div>
          </div>
      </footer>

    </div>
  );
};

export default Index;

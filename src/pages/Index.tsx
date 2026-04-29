import { ArrowRight, Calendar, CheckCircle2, MessageCircle, TrendingUp, Zap, ShieldCheck, Clock, Star, ExternalLink, AlertTriangle, XCircle, Target, Layers, Rocket, Quote, Lock, Award, Send, Search, FileCheck, Flame, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BeforeAfter } from "@/components/BeforeAfter";
import heroBg from "@/assets/landing-hero.jpg";
import auditBefore1 from "@/assets/audit-before-1.jpg";
import auditAfter1 from "@/assets/audit-after-1.png";
import auditBefore2 from "@/assets/audit-before-2.jpg";
import auditAfter2 from "@/assets/audit-after-2.png";

const WHATSAPP_URL =
  "https://wa.me/13154541290?text=Hi!%20I'd%20like%20a%20free%20Shopify%20store%20audit.";
const CALENDLY_URL = "https://calendly.com/theheroesagency-info/30min";
const EMAIL_URL = "mailto:info@theheroesagency.org";
const PORTFOLIO_URL = "https://bit.ly/4w05iPa";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/60 border-b border-white/[0.06]">
        <div className="container flex items-center justify-between h-16">
          <a href="#top" className="flex items-center gap-2 font-bold text-lg tracking-tight">
            <span className="w-7 h-7 rounded-lg gradient-sky sky-glow flex items-center justify-center">
              <span className="w-2 h-2 rounded-sm bg-background" />
            </span>
            <span>TheHeroes<span className="text-primary">.</span>Agency</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#problem" className="hover:text-foreground transition">Problem</a>
            <a href="#solution" className="hover:text-foreground transition">Solution</a>
            <a href="#proof" className="hover:text-foreground transition">Proof</a>
            <a href="#how" className="hover:text-foreground transition">How it works</a>
            <a href="#offer" className="hover:text-foreground transition">Free Audit</a>
          </nav>
          <Button asChild size="sm" className="gradient-sky text-primary-foreground sky-glow rounded-full px-5">
            <a href="#offer">Get Free Audit</a>
          </Button>
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
                Shopify Experts since 2016 · 120+ stores shipped
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-bold leading-[1.05] md:leading-[1.02] tracking-tight mb-7">
                We turn underperforming Shopify stores into{" "}
                <span className="font-serif-display text-gradient">revenue machines</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-muted-foreground/90 max-w-2xl mx-auto mb-10 leading-relaxed">
                Most stores lose 70% of buyers at the homepage. We redesign your store
                to convert — typically lifting revenue <span className="text-foreground font-semibold">2–4×</span> within 7 days.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center w-full sm:w-auto">
                <Button asChild size="lg" className="gradient-sky text-primary-foreground sky-glow text-base h-14 px-6 sm:px-8 rounded-full font-semibold w-full sm:w-auto">
                  <a href="#offer">
                    Get My Free Store Audit
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-base h-14 px-6 sm:px-8 rounded-full border-white/15 bg-white/[0.02] hover:bg-white/[0.06] backdrop-blur-md w-full sm:w-auto">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 w-5 h-5" />
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>

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
                { v: "+312%", l: "Avg. revenue lift" },
                { v: "2.4×", l: "Conversion rate" },
                { v: "7d", l: "Time to results" },
                { v: "50+", l: "Stores rebuilt" },
              ].map((s) => (
                <div key={s.l} className="bg-card/80 backdrop-blur-md p-5 sm:p-7 text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient tracking-tight">{s.v}</div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-muted-foreground mt-1.5 uppercase tracking-wider">{s.l}</div>
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

        {/* PROOF */}
        <section id="proof" className="py-24 md:py-32 relative">
          <div className="pointer-events-none absolute top-1/2 -left-40 w-[500px] h-[500px] bg-orb opacity-60" />
          <div className="container">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <p className="text-primary text-xs font-semibold tracking-[0.25em] uppercase mb-4">— Proof · Case Studies</p>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-5">
                Real stores. <span className="font-serif-display text-gradient">Real numbers.</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Drag the slider to see the before/after transformation on live Shopify stores.
              </p>
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

        {/* TESTIMONIALS / TRUST */}
        <section className="py-20 md:py-28 border-y border-white/[0.06] bg-card/20 relative">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <p className="text-primary text-xs font-semibold tracking-[0.25em] uppercase mb-4">— Founders we've helped</p>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                What our clients <span className="font-serif-display text-gradient">actually say</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  q: "They rebuilt our PDP and we 2.6×'d our conversion rate in the first month. Best money we never spent — the audit alone was worth thousands.",
                  n: "Marcus T.",
                  r: "Founder, DTC Wellness Brand",
                },
                {
                  q: "Honest, fast, and zero pushy upsell. They flagged 11 issues on our store, fixed 8 in a week, and our Shopify revenue jumped from $42k to $118k/mo.",
                  n: "Aïsha L.",
                  r: "CEO, Haircare Brand (8-figure)",
                },
                {
                  q: "We'd worked with 3 'Shopify experts' before TheHeroes. They're the only ones who actually understood Liquid, Recharge, and Klaviyo as one system.",
                  n: "Daniel R.",
                  r: "COO, Subscription Coffee",
                },
              ].map((t) => (
                <div key={t.n} className="glass rounded-2xl p-7 ring-gradient flex flex-col">
                  <Quote className="w-7 h-7 text-primary/70 mb-4" />
                  <p className="text-foreground/90 leading-relaxed mb-6 text-[15px]">"{t.q}"</p>
                  <div className="mt-auto pt-4 border-t border-white/[0.06]">
                    <div className="flex items-center gap-1 text-[hsl(var(--gold))] mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <div className="font-semibold text-sm">{t.n}</div>
                    <div className="text-xs text-muted-foreground">{t.r}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust bar */}
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

        {/* PROBLEM */}
        <section id="problem" className="py-24 md:py-32 border-y border-white/[0.06] bg-card/20 relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
          <div className="container relative">
            <div className="max-w-2xl mx-auto text-center mb-14">
              <p className="text-primary text-xs font-semibold tracking-[0.25em] uppercase mb-4">— The Problem</p>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-5">
                Why most Shopify stores <span className="font-serif-display text-gradient">quietly fail</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                You're driving traffic. You're spending on ads. But the sales just aren't landing.
                Here's what's actually killing your conversion rate:
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                { i: XCircle, t: "Generic theme, zero identity", d: "Your store looks like 10,000 others. Buyers can't tell why they should trust you over a competitor." },
                { i: AlertTriangle, t: "Weak hero & unclear offer", d: "Visitors don't understand what you sell or why they should care — within 3 seconds, they bounce." },
                { i: Clock, t: "Slow mobile load times", d: "70% of your traffic is mobile. Every extra second of load time costs you ~7% of conversions." },
                { i: TrendingUp, t: "No real social proof", d: "No reviews, no UGC, no founder story. Buyers have no reason to trust you with their card." },
                { i: ShieldCheck, t: "PDPs that leak buyers", d: "Walls of text, no benefit grid, no FAQ, no urgency. Add-to-cart rates stay below 3%." },
                { i: Zap, t: "Checkout friction", d: "Forced account creation, no Shop Pay, surprise shipping costs — 68% of carts get abandoned." },
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
            <p className="text-center text-muted-foreground mt-12 max-w-xl mx-auto">
              The good news? Every one of these is fixable — usually within <span className="text-foreground font-semibold">7 days</span>.
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
                What we do <span className="font-serif-display text-gradient">differently</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                We don't just "make it pretty." We rebuild your store around one goal: revenue per visitor.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {[
                { i: Target, t: "Conversion-first design", d: "Every section earns its place. We design backwards from the checkout — not from a Dribbble shot." },
                { i: Layers, t: "Built for Shopify, not on it", d: "Custom Liquid, Recharge subscriptions, Klaviyo flows, Shop Pay — your stack works as one system." },
                { i: Rocket, t: "Speed-obsessed engineering", d: "Sub-2-second mobile load. Lazy images, optimized Liquid, zero bloat apps. Core Web Vitals: green." },
                { i: ShieldCheck, t: "Data-driven, not opinion-driven", d: "We A/B test hero, PDP, and checkout. Decisions come from your data — not from our taste." },
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
          </div>
        </section>

        {/* WHAT YOU GET */}
        <section className="py-24 md:py-28 border-y border-white/[0.06] bg-card/20">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center mb-14">
              <p className="text-primary text-xs font-semibold tracking-[0.25em] uppercase mb-4">— Deliverables</p>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-5">
                What you <span className="font-serif-display text-gradient">actually get</span>
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
                <div key={t} className="glass rounded-2xl p-8 hover-lift ring-gradient">
                  <div className="w-12 h-12 rounded-xl gradient-sky text-primary-foreground flex items-center justify-center mb-6 sky-glow">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 tracking-tight">{t}</h3>
                  <p className="text-muted-foreground leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OFFER / CTA */}
        <section id="offer" className="py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-glow-radial" />
          <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 h-[600px] bg-orb opacity-70" />
          <div className="container relative">
            <div className="relative max-w-3xl mx-auto">
              <div className="absolute -inset-2 rounded-[2rem] gradient-sky opacity-30 blur-2xl" />
              <div className="relative glass-strong rounded-[2rem] p-10 md:p-16 text-center premium-shadow ring-gradient overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-px shimmer" />
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[hsl(var(--gold))]/10 border border-[hsl(var(--gold))]/30 text-sm font-semibold mb-6">
                  <Star className="w-3.5 h-3.5 fill-[hsl(var(--gold))] text-[hsl(var(--gold))]" />
                  <span className="text-gradient-gold">Limited — 5 audits per month</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-5 leading-[1.05]">
                  Free Shopify <span className="font-serif-display text-gradient">Store Audit</span>
                </h2>
                <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-xl mx-auto leading-relaxed">
                  Get a full conversion teardown + a free homepage redesign preview.
                  <span className="text-foreground font-medium"> Worth $750</span> — yours free.
                </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button asChild size="lg" className="gradient-sky text-primary-foreground sky-glow text-base h-14 px-8 rounded-full font-semibold">
                  <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                    <Calendar className="mr-2 w-5 h-5" />
                    Book a Call
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="text-base h-14 px-8 rounded-full bg-[hsl(var(--whatsapp))] hover:bg-[hsl(var(--whatsapp))]/90 text-white font-semibold"
                >
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 w-5 h-5" />
                    WhatsApp Us
                  </a>
                </Button>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-primary" /> 12h delivery</div>
                <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-primary" /> No obligations</div>
                <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-primary" /> 100% free</div>
              </div>
              </div>
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
                { q: "Is the audit really free?", a: "Yes — 100% free, no credit card. We do 5 per month because each one takes 4–6 hours of real work." },
                { q: "What do I need to send you?", a: "Just your store URL. We do the rest." },
                { q: "Will you try to upsell me?", a: "We'll show you exactly what's broken. If you want help fixing it, we'll quote you. If not, you keep the audit. No pressure." },
                { q: "How fast do I get it?", a: "Within 12 hours of booking, including a recorded video walkthrough." },
              ].map((f) => (
                <details key={f.q} className="glass rounded-2xl p-6 group ring-gradient">
                  <summary className="cursor-pointer font-semibold flex items-center justify-between list-none text-base">
                    {f.q}
                    <span className="text-primary group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                  </summary>
                  <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>

            {/* FINAL CTA */}
            <div className="mt-24 text-center">
              <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-5">
                Ready to see what your store <span className="font-serif-display text-gradient">could do?</span>
              </h3>
              <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                Claim your free Shopify audit today. 12-hour delivery. Zero obligation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="gradient-sky text-primary-foreground sky-glow text-base h-14 px-8 rounded-full font-semibold">
                  <a href="#offer">
                    Get My Free Audit
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
                    WhatsApp Us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.06] py-10">
          <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-md gradient-sky flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-sm bg-background" />
              </span>
              <span>© {new Date().getFullYear()} TheHeroes Agency · theheroesagency.org</span>
            </div>
            <div className="flex items-center gap-6">
              <a href={EMAIL_URL} className="hover:text-foreground">info@theheroesagency.org</a>
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
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[hsl(var(--whatsapp))] text-white flex items-center justify-center shadow-2xl shadow-[hsl(var(--whatsapp))]/40 hover:scale-110 transition ring-4 ring-[hsl(var(--whatsapp))]/20"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
};

export default Index;

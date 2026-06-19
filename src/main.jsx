import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import {
  AppWindow,
  ArrowRight,
  Check,
  ChevronRight,
  Database,
  Globe2,
  MapPinned,
  Megaphone,
  Menu,
  MessageSquareText,
  Send,
  Smartphone,
  Workflow,
  X
} from "lucide-react";
import pdsLogo from "./assets/pahk-development-studios-logo-cropped.png";
import plattrLogo from "./assets/plattr-logo.png";
import readProofLogo from "./assets/readproof-logo.png";
import readProofConceptToProduct from "./assets/readproof-concept-to-product.jpg";
import "./styles.css";

const companyName = "Pahk Development Studios";

const navLinks = [
  ["Services", "services"],
  ["Growth", "growth"],
  ["Planner", "calculator"],
  ["Work", "work"],
  ["Process", "process"],
  ["Pricing", "pricing"],
  ["About", "about"],
  ["Contact", "contact"]
];

const services = [
  {
    title: "Mobile App Development",
    text: "Build the mobile experience your business needs, or turn a new app idea into a real product with accounts, payments, and launch-ready polish.",
    icon: Smartphone
  },
  {
    title: "Web App Development",
    text: "Customer portals, booking flows, dashboards, internal tools, and custom systems built around how the business actually works.",
    icon: AppWindow
  },
  {
    title: "Business Websites",
    text: "Premium websites with clearer offers, stronger credibility, lead capture, and the systems needed to turn visitors into customers.",
    icon: Globe2
  },
  {
    title: "MVP & Product Builds",
    text: "For people with an idea: we define the first version, design the screens, build the product, and prepare it for real users.",
    icon: Database
  },
  {
    title: "AI Assistants & Automation",
    text: "Practical website assistants and follow-up workflows that answer questions, capture leads, and keep customer conversations moving.",
    icon: MessageSquareText
  },
  {
    title: "Local Growth Systems",
    text: "Local SEO structure, Google Business optimization, landing pages, and ad-ready customer journeys built to generate action.",
    icon: Megaphone
  }
];

const growthSystems = [
  {
    title: "AI Website Assistant",
    text: "Turn your website into a smart customer touchpoint. Add an assistant that answers questions, guides visitors, collects leads, and helps customers take action.",
    outcome: "Answers, lead capture, and faster customer action.",
    icon: MessageSquareText
  },
  {
    title: "Automation & Follow-Up Systems",
    text: "Stop losing leads after they fill out a form. Build automated follow-ups, quote workflows, appointment reminders, and review request systems that keep the business moving.",
    outcome: "Faster response without manual chasing.",
    icon: Workflow
  },
  {
    title: "Local Growth System",
    text: "Build the complete online foundation: modern website, Google Business optimization, local SEO structure, lead-focused pages, and ad-ready sections designed to convert.",
    outcome: "A stronger local presence built to bring in customers.",
    icon: MapPinned
  }
];

const calculatorPlans = {
  website: {
    name: "Business Website",
    price: 2500,
    conversionRate: 0.025,
    includes: "Responsive website, core pages, lead capture, launch setup"
  },
  app: {
    name: "App MVP",
    price: 7500,
    conversionRate: 0.04,
    includes: "Product scope, interface design, core app build, launch support"
  }
};

const calculatorFeatures = [
  { id: "seo", name: "SEO Foundation", description: "Local pages, search structure, and technical SEO basics.", price: 750, trafficLift: 0.18, conversionLift: 0 },
  { id: "lead", name: "Lead Capture & CRM", description: "Quote forms, booking paths, and a clearer lead handoff.", price: 650, trafficLift: 0, conversionLift: 0.12 },
  { id: "automation", name: "Automation & Follow-Up", description: "Lead replies, quote workflows, reminders, and review requests.", price: 1200, trafficLift: 0, conversionLift: 0.16 },
  { id: "assistant", name: "AI Website Assistant", description: "Visitor guidance, common questions, lead qualification, and action prompts.", price: 2000, trafficLift: 0, conversionLift: 0.1 },
  { id: "ads", name: "Ads Landing & Tracking", description: "Campaign-ready landing page, conversion tracking, and ad destination setup.", price: 1100, trafficLift: 0.28, conversionLift: 0.08 },
  { id: "marketing", name: "Growth Marketing Setup", description: "Offer positioning, launch messaging, and a practical customer-acquisition plan.", price: 1500, trafficLift: 0.12, conversionLift: 0.1 },
  { id: "local", name: "Local Growth Setup", description: "Google Business profile, local landing pages, reviews, and local SEO structure.", price: 1250, trafficLift: 0.2, conversionLift: 0.06 }
];

const money = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

const projects = [
  {
    name: "Plattr",
    type: "Consumer App",
    text: "A food decision app that helps people choose where to eat with less friction and better taste-fit.",
    tags: ["Mobile", "Consumer", "Food"],
    logo: plattrLogo,
    logoAlt: "Plattr logo",
    logoClass: "scale-[1.16]",
    client: "Kenneth B.",
    story: "Kenneth wanted to make choosing where to eat feel simpler and more personal. PDS helped shape that idea into a focused mobile experience built around less scrolling and better taste-fit."
  },
  {
    name: "ReadProof",
    type: "Accountability App",
    text: "An AI reading accountability app that verifies reading progress and turns consistency into visible proof.",
    tags: ["App", "Verification", "Progress"],
    logo: readProofLogo,
    logoAlt: "ReadProof logo",
    client: "Ryan M.",
    story: "Ryan wanted readers to stay accountable and show real progress. PDS helped turn that into a product direction for capture, verification, streaks, and a polished iOS-ready experience."
  },
  {
    name: "Custom Business Apps",
    type: "Workflow Systems",
    text: "Apps, portals, dashboards, and automation tools built around the way real businesses actually operate.",
    tags: ["SaaS", "Ops", "Automation"]
  },
  {
    name: "High-Converting Websites",
    type: "Website Systems",
    text: "Premium websites and funnels built to explain the offer clearly, capture leads, and make the business feel serious.",
    tags: ["Website", "Funnel", "Conversion"]
  }
];

const process = [
  ["01", "Bring the Need", "You come with an app idea, a business problem, or a website that no longer reflects where the business is going."],
  ["02", "Shape the Product", "We turn it into a clear scope, screen plan, user flow, feature list, and launch direction."],
  ["03", "Build the Version", "We design and develop the app, website, dashboard, or MVP with focused communication."],
  ["04", "Launch & Handoff", "You leave with a working product, launch assets, and a clear path for what to improve next."]
];

const pricing = [
  {
    name: "Starter Website",
    price: "Starting at",
    detail: "For small businesses that need a serious website, clear offer, and simple way for customers to reach them.",
    features: ["Premium responsive website", "Offer and page structure", "Contact or lead form", "Launch-ready performance", "Basic SEO structure"]
  },
  {
    name: "Idea to App Build",
    price: "Custom Quote",
    detail: "For people or businesses with an app idea who need strategy, design, development, and launch support.",
    featured: true,
    features: ["Idea shaping and feature scope", "UI/UX design", "App or web app development", "Backend and integrations", "Testing and deployment", "Launch support"]
  },
  {
    name: "Full Product Partnership",
    price: "Custom Quote",
    detail: "For businesses that want an ongoing partner to build, improve, and grow apps, websites, and internal tools.",
    features: ["Product roadmap", "Design system", "Software development", "Website and funnel support", "Iteration and optimization", "Priority studio time"]
  }
];

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Wordmark({ compact = false }) {
  return (
    <button onClick={() => scrollToId("home")} className="group flex items-center text-left" aria-label={`${companyName} home`}>
      <img
        src={pdsLogo}
        alt={companyName}
        className={compact ? "h-9 w-auto object-contain opacity-95" : "h-8 w-auto max-w-[10.5rem] object-contain opacity-95 transition group-hover:opacity-100 sm:h-10 sm:max-w-[14rem] lg:h-11 lg:max-w-[16rem]"}
      />
    </button>
  );
}

function Button({ children, variant = "primary", onClick, className = "", type = "button", disabled = false }) {
  const variantClass =
    variant === "primary"
      ? "border-white bg-white text-black hover:border-sky-300 hover:bg-sky-200"
      : "border-white/14 bg-white/[0.03] text-white hover:border-white/35 hover:bg-white/[0.08]";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border px-5 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-45 disabled:hover:translate-y-0 ${variantClass} ${className}`}
    >
      {children}
    </button>
  );
}

function SectionHeader({ eyebrow, title, text, align = "center" }) {
  const alignment = align === "left" ? "max-w-3xl" : "mx-auto max-w-3xl text-center";

  return (
    <Reveal className={alignment}>
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.34em] text-sky-300">{eyebrow}</p>
      <h2 className="text-3xl font-semibold leading-tight text-white sm:text-5xl">{title}</h2>
      {text && <p className="mt-5 text-base leading-8 text-neutral-400 sm:text-lg">{text}</p>}
    </Reveal>
  );
}

function Navbar({ onStartProject }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (id) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition duration-300 ${scrolled ? "border-white/10 bg-black/72 backdrop-blur-2xl" : "border-transparent bg-black/20 backdrop-blur-sm"}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Wordmark />

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map(([label, id]) => (
            <button key={id} onClick={() => goTo(id)} className="rounded-lg px-3 py-2 text-sm font-medium text-neutral-400 transition hover:bg-white/[0.06] hover:text-white">
              {label}
            </button>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button onClick={onStartProject}>
            Start a Project <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-lg border border-white/12 bg-white/[0.04] text-white lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mx-5 mb-4 rounded-lg border border-white/12 bg-neutral-950 p-2 shadow-2xl lg:hidden">
          {navLinks.map(([label, id]) => (
            <button key={id} onClick={() => goTo(id)} className="block w-full rounded-md px-4 py-3 text-left text-sm font-medium text-neutral-300 hover:bg-white/[0.06] hover:text-white">
              {label}
            </button>
          ))}
          <Button onClick={onStartProject} className="mt-2 w-full">
            Start a Project <ArrowRight className="h-4 w-4" />
          </Button>
        </motion.div>
      )}
    </header>
  );
}

function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 bg-black">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:96px_96px] opacity-30 [mask-image:linear-gradient(to_bottom,black,transparent_78%)]" />
      <div className="absolute left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-sky-400/[0.08] blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[34rem] w-[34rem] rounded-full bg-violet-400/[0.055] blur-3xl" />
    </div>
  );
}

function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-lg border border-white/10 bg-neutral-950 shadow-[0_40px_120px_rgba(0,0,0,0.35)]"
    >
      <img
        src={readProofConceptToProduct}
        alt="ReadProof concept sketches transformed into a polished mobile app"
        className="block aspect-[1.78] w-full object-cover transition duration-700 group-hover:scale-[1.02]"
      />
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between border-t border-white/10 bg-black/70 px-4 py-3 backdrop-blur-md sm:px-5">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-200">ReadProof / Concept to product</p>
        <p className="hidden text-xs text-neutral-400 sm:block">Strategy, UX, iOS development, launch</p>
      </div>
    </motion.div>
  );
}

function Hero({ onStartProject }) {
  return (
    <section id="home" className="relative overflow-hidden px-5 pb-[4.5rem] pt-32 lg:min-h-[820px] lg:px-8 lg:pb-[4.5rem] lg:pt-[8.5rem]">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }} className="mb-6 text-xs font-semibold uppercase tracking-[0.38em] text-sky-300">
            Pahk Development Studios / PDS
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.82, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl text-5xl font-semibold leading-[0.95] text-white sm:text-6xl lg:text-6xl xl:text-7xl"
          >
            From business need or app idea to a product people can use.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.72, delay: 0.24 }} className="mt-7 max-w-2xl text-lg leading-8 text-neutral-350 sm:text-xl">
            Pahk Development Studios builds websites, apps, AI assistants, automation systems, and local growth tools for businesses, while helping new founders turn an app idea into something real.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.72, delay: 0.36 }} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button onClick={onStartProject} className="sm:min-w-44">
              Start a Project <ArrowRight className="h-5 w-5" />
            </Button>
            <Button variant="secondary" onClick={() => scrollToId("work")} className="sm:min-w-40">
              View Work <ChevronRight className="h-5 w-5" />
            </Button>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.72, delay: 0.48 }} className="mt-12 grid max-w-2xl grid-cols-3 gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10">
            {[
              ["01", "For businesses"],
              ["02", "For app ideas"],
              ["03", "Built to launch"]
            ].map(([number, label]) => (
              <div key={label} className="bg-black/72 p-4">
                <p className="text-xs font-semibold text-sky-300">{number}</p>
                <p className="mt-2 text-sm font-medium text-neutral-200">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Services"
          title="Websites, apps, automations, and the systems behind growth"
          text="Whether you need a stronger website, a customer app, a portal for your team, an AI assistant, or automated follow-up, PDS handles the strategy, design, build, and launch."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, text, icon: Icon }, index) => (
            <Reveal key={title} delay={index * 0.05}>
              <article className="group h-full rounded-lg border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-300/40 hover:bg-white/[0.06] hover:shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
                <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-black text-sky-200">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="mt-4 leading-7 text-neutral-400">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function GrowthSystems({ onStartProject }) {
  return (
    <section id="growth" className="relative overflow-hidden border-y border-white/10 bg-white/[0.018] px-5 py-24 lg:px-8 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(56,189,248,0.13),transparent_28%),radial-gradient(circle_at_84%_78%,rgba(167,139,250,0.1),transparent_28%)]" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader eyebrow="Growth Systems" title="More Than a Website" text="PDS builds digital systems that help businesses capture leads, automate follow-ups, and grow online, not just look good." />
        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {growthSystems.map(({ title, text, outcome, icon: Icon }, index) => (
            <Reveal key={title} delay={index * 0.07}>
              <article className="group flex h-full flex-col rounded-lg border border-white/12 bg-black/35 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24)] transition duration-300 hover:-translate-y-1 hover:border-sky-300/45 hover:bg-white/[0.06] sm:p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/12 bg-white/[0.06] text-sky-200 transition group-hover:border-sky-300/40 group-hover:bg-sky-300/10">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-8 text-2xl font-semibold text-white">{title}</h3>
                <p className="mt-4 leading-7 text-neutral-400">{text}</p>
                <div className="mt-auto border-t border-white/10 pt-5">
                  <p className="text-sm font-medium text-sky-200">{outcome}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.18} className="mt-10 flex justify-center">
          <Button onClick={onStartProject} className="min-w-56">Build My Growth System <ArrowRight className="h-5 w-5" /></Button>
        </Reveal>
      </div>
    </section>
  );
}

function GrowthCalculator({ onStartProject }) {
  const [basePlan, setBasePlan] = useState("website");
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [monthlyVisitors, setMonthlyVisitors] = useState(1000);
  const [customerValue, setCustomerValue] = useState(500);
  const plan = calculatorPlans[basePlan];
  const selected = calculatorFeatures.filter((feature) => selectedFeatures.includes(feature.id));
  const addOnCost = selected.reduce((total, feature) => total + feature.price, 0);
  const trafficLift = selected.reduce((total, feature) => total + feature.trafficLift, 0);
  const conversionLift = selected.reduce((total, feature) => total + feature.conversionLift, 0);
  const baselineLeads = Math.max(1, Math.round(monthlyVisitors * plan.conversionRate));
  const projectedVisitors = Math.round(monthlyVisitors * (1 + trafficLift));
  const projectedLeads = Math.max(1, Math.round(projectedVisitors * plan.conversionRate * (1 + conversionLift)));
  const addedLeads = Math.max(0, projectedLeads - baselineLeads);
  const projectedRevenue = projectedLeads * customerValue;

  const toggleFeature = (id) => {
    setSelectedFeatures((current) => current.includes(id) ? current.filter((feature) => feature !== id) : [...current, id]);
  };

  return (
    <section id="calculator" className="px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Growth Planner" title="Build the system your business actually needs" text="Start with a website or app, add the systems that support growth, and see a planning-level investment and impact model before we scope the final build." />
        <div className="mt-14 grid gap-5 lg:grid-cols-[1.18fr_0.82fr]">
          <div className="rounded-lg border border-white/10 bg-white/[0.035] p-5 sm:p-7">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-sky-300">01 / Base build</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">Choose your foundation.</h3>
              </div>
              <p className="text-sm text-neutral-500">One-time project estimate</p>
            </div>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {Object.entries(calculatorPlans).map(([id, option]) => {
                const selectedPlan = basePlan === id;
                return (
                  <button key={id} type="button" onClick={() => setBasePlan(id)} className={`rounded-lg border p-5 text-left transition ${selectedPlan ? "border-sky-300 bg-sky-300/[0.1]" : "border-white/10 bg-black/25 hover:border-white/30"}`}>
                    <p className="text-xl font-semibold text-white">{option.name}</p>
                    <p className="mt-2 text-2xl font-semibold text-sky-200">{money.format(option.price)}</p>
                    <p className="mt-3 text-sm leading-6 text-neutral-400">{option.includes}</p>
                  </button>
                );
              })}
            </div>

            <div className="mt-10 border-t border-white/10 pt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-sky-300">02 / Add growth systems</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">Select what should work alongside it.</h3>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {calculatorFeatures.map((feature) => {
                  const active = selectedFeatures.includes(feature.id);
                  return (
                    <label key={feature.id} className={`flex cursor-pointer gap-3 rounded-lg border p-4 transition ${active ? "border-sky-300/60 bg-sky-300/[0.09]" : "border-white/10 bg-black/20 hover:border-white/30"}`}>
                      <input type="checkbox" checked={active} onChange={() => toggleFeature(feature.id)} className="mt-1 h-4 w-4 accent-sky-300" />
                      <span className="min-w-0 flex-1">
                        <span className="flex items-start justify-between gap-3"><span className="font-semibold text-white">{feature.name}</span><span className="shrink-0 text-sm font-semibold text-sky-200">+{money.format(feature.price)}</span></span>
                        <span className="mt-2 block text-sm leading-6 text-neutral-400">{feature.description}</span>
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>

            <div className="mt-10 border-t border-white/10 pt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-sky-300">03 / Planning inputs</p>
              <div className="mt-5 grid gap-6 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-semibold text-white">Monthly website visitors</span>
                  <div className="mt-3 flex items-center gap-3"><input type="range" min="100" max="10000" step="100" value={monthlyVisitors} onChange={(event) => setMonthlyVisitors(Number(event.target.value))} className="h-2 flex-1 accent-sky-300" /><input type="number" min="100" step="100" value={monthlyVisitors} onChange={(event) => setMonthlyVisitors(Math.max(100, Number(event.target.value) || 100))} className="field w-28 py-2 text-sm" aria-label="Monthly website visitors" /></div>
                </label>
                <label className="block">
                  <span className="text-sm font-semibold text-white">Average customer value</span>
                  <div className="mt-3 flex items-center gap-3"><input type="range" min="50" max="5000" step="50" value={customerValue} onChange={(event) => setCustomerValue(Number(event.target.value))} className="h-2 flex-1 accent-sky-300" /><input type="number" min="50" step="50" value={customerValue} onChange={(event) => setCustomerValue(Math.max(50, Number(event.target.value) || 50))} className="field w-28 py-2 text-sm" aria-label="Average customer value" /></div>
                </label>
              </div>
            </div>
          </div>

          <aside className="h-fit rounded-lg border border-sky-300/30 bg-sky-300/[0.07] p-5 shadow-[0_30px_90px_rgba(14,165,233,0.09)] sm:sticky sm:top-28 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-200">Your growth system</p>
            <h3 className="mt-4 text-3xl font-semibold text-white">{plan.name}</h3>
            <div className="mt-7 border-y border-white/10 py-6">
              <p className="text-sm text-neutral-400">Estimated project investment</p>
              <p className="mt-2 text-4xl font-semibold text-white">{money.format(plan.price + addOnCost)}</p>
              <p className="mt-3 text-sm leading-6 text-neutral-400">{money.format(plan.price)} base build {addOnCost > 0 ? `+ ${money.format(addOnCost)} selected systems` : "with no add-ons selected"}.</p>
            </div>
            <div className="mt-7 grid grid-cols-2 gap-3">
              <div className="rounded-md border border-white/10 bg-black/25 p-4"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">Baseline leads</p><p className="mt-2 text-2xl font-semibold text-white">{baselineLeads}/mo</p></div>
              <div className="rounded-md border border-sky-300/25 bg-sky-300/[0.08] p-4"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">Projected leads</p><p className="mt-2 text-2xl font-semibold text-white">{projectedLeads}/mo</p></div>
            </div>
            <div className="mt-4 rounded-md border border-white/10 bg-black/25 p-4">
              <p className="text-sm font-semibold text-white">Planning impact</p>
              <p className="mt-2 text-sm leading-6 text-neutral-400">Selected systems model approximately <span className="font-semibold text-sky-200">+{addedLeads} leads per month</span> and <span className="font-semibold text-sky-200">{money.format(projectedRevenue)} in monthly lead value</span> using your inputs.</p>
            </div>
            <Button onClick={onStartProject} className="mt-7 w-full">Build This System <ArrowRight className="h-4 w-4" /></Button>
            <p className="mt-5 text-xs leading-5 text-neutral-500">Planning projection only, not a performance guarantee. Final pricing depends on scope, integrations, content, ad spend, and third-party software.</p>
          </aside>
        </div>
      </div>
    </section>
  );
}

function FeaturedProjects() {
  return (
    <section id="work" className="px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <SectionHeader align="left" eyebrow="Featured Projects" title="Products built around a real problem" text="From the first spark of an idea to a useful, launch-ready experience, the work has a clear purpose behind it." />
          <Reveal delay={0.08}>
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10">
              {["Mobile Apps", "App Ideas", "Customer Tools", "Launch Ready"].map((item) => (
                <div key={item} className="bg-black/72 p-5 text-sm font-semibold uppercase tracking-[0.22em] text-neutral-300">
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {projects.slice(0, 2).map((project, index) => (
            <Reveal key={project.name} delay={index * 0.06}>
              <article className="group relative flex min-h-[34rem] flex-col overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06]">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/50 to-transparent opacity-0 transition group-hover:opacity-100" />
                {project.logo && (
                  <div className="mb-8 flex h-36 items-center justify-center overflow-hidden rounded-md border border-white/10 bg-white/[0.04] p-3">
                    <img src={project.logo} alt={project.logoAlt} className={`h-full w-full object-contain ${project.logoClass ?? ""}`} />
                  </div>
                )}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-300">{project.type}</p>
                    <h3 className="mt-4 text-3xl font-semibold text-white">{project.name}</h3>
                  </div>
                </div>
                <p className="mt-6 max-w-xl leading-8 text-neutral-400">{project.text}</p>
                <div className="mt-6 border-t border-white/10 pt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-300">Client story / {project.client}</p>
                  <p className="mt-3 text-sm leading-6 text-neutral-300">{project.story}</p>
                </div>
                <div className="mt-auto flex flex-wrap gap-2 pt-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-md border border-white/10 bg-black/40 px-3 py-1 text-xs font-medium text-neutral-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}

function WebsiteDemo({ option, onStartProject }) {
  const [page, setPage] = useState("Home");
  const accentClass = option.accent === "sky" ? "bg-sky-300 text-black" : "bg-violet-300 text-black";
  const activeClass = option.accent === "sky" ? "text-sky-200" : "text-violet-200";

  return (
    <div className="rounded-md border border-white/10 bg-black/45 p-3 sm:p-4">
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex gap-1.5"><span className="h-2 w-2 rounded-full bg-red-400/80" /><span className="h-2 w-2 rounded-full bg-yellow-300/80" /><span className="h-2 w-2 rounded-full bg-emerald-300/80" /></div>
        <span className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-neutral-500">Interactive preview</span>
      </div>
      <div className={`mt-4 min-h-[19rem] rounded-sm border border-white/10 p-5 ${option.accent === "sky" ? "bg-sky-300/[0.09]" : "bg-violet-300/[0.09]"}`}>
        <div className="flex items-center justify-between gap-3">
          <span className="text-xs font-bold tracking-[0.16em] text-white">{option.brand}</span>
          <div className="flex gap-3">
            {["Home", "Services", "Contact"].map((item) => (
              <button key={item} type="button" onClick={() => setPage(item)} className={`text-[0.62rem] font-semibold transition ${page === item ? activeClass : "text-neutral-500 hover:text-white"}`}>{item}</button>
            ))}
          </div>
        </div>
        {page === "Home" && (
          <div className="mt-10 max-w-sm">
            <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${activeClass}`}>Built for your next step</p>
            <h4 className="mt-3 text-2xl font-semibold leading-tight text-white">{option.previewTitle}</h4>
            <p className="mt-3 text-sm leading-6 text-neutral-300">{option.previewText}</p>
            <button type="button" onClick={onStartProject} className={`mt-6 rounded-md px-4 py-2 text-xs font-bold ${accentClass}`}>{option.cta}</button>
          </div>
        )}
        {page === "Services" && (
          <div className="mt-8 grid grid-cols-2 gap-3">
            {option.previewServices.map((service) => <div key={service} className="rounded-sm border border-white/10 bg-white/[0.06] p-3 text-xs font-medium text-neutral-200">{service}</div>)}
          </div>
        )}
        {page === "Contact" && (
          <div className="mt-8 max-w-sm rounded-sm border border-white/10 bg-black/25 p-4">
            <p className="text-sm font-semibold text-white">Start a conversation.</p>
            <div className="mt-4 space-y-2"><div className="h-8 rounded-sm bg-white/[0.08]" /><div className="h-8 rounded-sm bg-white/[0.08]" /><div className="h-12 rounded-sm bg-white/[0.08]" /></div>
            <button type="button" onClick={onStartProject} className={`mt-4 rounded-md px-4 py-2 text-xs font-bold ${accentClass}`}>Request a Quote</button>
          </div>
        )}
      </div>
    </div>
  );
}

function WebsiteShowcase({ onStartProject }) {
  const websiteOptions = [
    {
      eyebrow: "Service Business Website",
      title: "Make your business easy to trust.",
      text: "A clean, focused website for businesses that need to explain their offer, show proof, and turn visitors into real inquiries.",
      features: ["Clear service and offer pages", "Lead capture or booking flow", "Mobile-first responsive design", "Basic SEO and launch setup"],
      accent: "sky",
      brand: "NORTHLINE CO.",
      previewTitle: "A clearer website for a growing business.",
      previewText: "Explain what you do, show customers why you are the right choice, and make the next step simple.",
      previewServices: ["Primary Service", "Customer Proof", "Simple Booking", "Contact Flow"],
      cta: "Book a Consultation"
    },
    {
      eyebrow: "Product or Launch Website",
      title: "Give the new idea a place to land.",
      text: "A high-impact launch site for a new app, product, or service that makes the concept feel real before the full product is live.",
      features: ["Product positioning and page flow", "Waitlist or early-access form", "Conversion-focused landing page", "Analytics-ready launch setup"],
      accent: "violet",
      brand: "FIELDNOTE APP",
      previewTitle: "Make the product idea feel real before launch.",
      previewText: "Give early users a clear reason to care and an easy way to join the launch.",
      previewServices: ["Product Story", "Feature Preview", "Early Access", "Launch Updates"],
      cta: "Join the Waitlist"
    }
  ];

  return (
    <section id="websites" className="border-y border-white/10 bg-white/[0.018] px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Websites" title="A website that does more than sit online" text="For existing businesses and new products, PDS builds the page customers need to understand the value and take the next step." />
        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {websiteOptions.map((option, index) => (
            <Reveal key={option.title} delay={index * 0.08}>
              <article className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] p-5 sm:p-7">
                <WebsiteDemo option={option} onStartProject={onStartProject} />
                <p className="mt-7 text-xs font-semibold uppercase tracking-[0.28em] text-sky-300">{option.eyebrow}</p>
                <h3 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">{option.title}</h3>
                <p className="mt-4 leading-7 text-neutral-400">{option.text}</p>
                <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                  {option.features.map((feature) => <li key={feature} className="flex gap-2 text-sm text-neutral-300"><Check className="h-5 w-5 shrink-0 text-sky-300" />{feature}</li>)}
                </ul>
                <Button onClick={onStartProject} variant="secondary" className="mt-8">Plan Your Website <ArrowRight className="h-4 w-4" /></Button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <SectionHeader align="left" eyebrow="Process" title="From business need or rough idea to working product" text="You do not need a technical plan before reaching out. Bring the problem, opportunity, or early concept, and we turn it into a clear, buildable product." />
          <div className="grid gap-3">
            {process.map(([number, title, text], index) => (
              <Reveal key={title} delay={index * 0.06}>
                <article className="grid gap-5 rounded-lg border border-white/10 bg-white/[0.03] p-5 transition hover:border-white/25 sm:grid-cols-[5rem_1fr] sm:p-6">
                  <div className="text-3xl font-semibold text-sky-300">{number}</div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{title}</h3>
                    <p className="mt-3 leading-7 text-neutral-400">{text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing({ onStartProject }) {
  return (
    <section id="pricing" className="px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Pricing" title="Start with the idea. Scope the build clearly." text="Every project is shaped around what you are trying to launch. We define the real scope first, then quote the build before work begins." />
        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {pricing.map((tier, index) => (
            <Reveal key={tier.name} delay={index * 0.06}>
              <article className={`relative flex h-full flex-col rounded-lg border p-6 transition duration-300 hover:-translate-y-1 sm:p-7 ${tier.featured ? "border-sky-300/45 bg-sky-300/[0.08] shadow-[0_28px_90px_rgba(56,189,248,0.12)]" : "border-white/10 bg-white/[0.035]"}`}>
                {tier.featured && <p className="mb-5 w-fit rounded-md bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] text-black">Core Build</p>}
                <h3 className="text-2xl font-semibold text-white">{tier.name}</h3>
                <p className="mt-5 text-4xl font-semibold text-white">{tier.price}</p>
                <p className="mt-4 leading-7 text-neutral-400">{tier.detail}</p>
                <Button onClick={onStartProject} variant={tier.featured ? "primary" : "secondary"} className="mt-8 w-full">
                  Request Scope
                </Button>
                <div className="my-7 h-px bg-white/10" />
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm leading-6 text-neutral-300">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-sky-300" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <SectionHeader
          align="left"
          eyebrow="About"
          title="A studio for businesses ready to build better, and people ready to build their first app"
          text="PDS works with business owners who need stronger websites, customer apps, AI assistants, automations, or local growth systems, plus founders and creators with an app idea ready to become a real product."
        />
        <Reveal delay={0.12}>
          <div className="relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] p-6 sm:p-8">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-sky-300">Studio Standard</p>
            <h3 className="mt-5 text-3xl font-semibold leading-tight text-white">You bring the problem. We turn it into the product.</h3>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                ["Clear", "The idea becomes a real scope."],
                ["Polished", "The product looks and feels credible."],
                ["Useful", "It solves a real business or user problem."],
                ["Shippable", "It gets into customers' hands."]
              ].map(([title, text]) => (
                <div key={title} className="rounded-lg border border-white/10 bg-black/30 p-4">
                  <p className="font-semibold text-white">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-neutral-400">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <SectionHeader align="left" eyebrow="Contact" title="Tell us what your business needs, or the app you want to create." text="Send the rough version. It can be a website that needs an upgrade, a customer app, a portal for your team, or a product idea that only exists in your head right now." />
        <Reveal delay={0.12}>
          <form className="grid gap-4 rounded-lg border border-white/10 bg-white/[0.035] p-5 sm:grid-cols-2 sm:p-7" onSubmit={(event) => event.preventDefault()}>
            <input className="field" placeholder="Name" aria-label="Name" />
            <input className="field" placeholder="Email" type="email" aria-label="Email" />
            <select className="field" aria-label="Project Type" defaultValue="">
              <option value="" disabled>
                Project Type
              </option>
              <option>I have an app idea</option>
              <option>Mobile App</option>
              <option>Customer Portal / Web App</option>
              <option>Business Website</option>
              <option>Internal Business Tool</option>
              <option>MVP / SaaS Product</option>
              <option>Not sure yet</option>
            </select>
            <select className="field" aria-label="Budget Range" defaultValue="">
              <option value="" disabled>
                Budget Range
              </option>
              <option>Under $2,500</option>
              <option>$2,500 - $7,500</option>
              <option>$7,500 - $20,000</option>
              <option>$20,000+</option>
              <option>Still defining scope</option>
            </select>
            <textarea className="field min-h-40 resize-none sm:col-span-2" placeholder="Message" aria-label="Message" />
            <Button className="w-full sm:col-span-2">
              Send Project Request <Send className="h-5 w-5" />
            </Button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-10 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_auto_auto_auto]">
        <div>
          <Wordmark compact />
          <p className="mt-5 max-w-md text-sm leading-6 text-neutral-500">
            Pahk Development Studios builds websites, apps, AI assistants, automations, and local growth systems for businesses.
          </p>
          <p className="mt-5 text-sm text-neutral-600">© 2026 Pahk Development Studios. PDS.</p>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold text-white">Studio</p>
          <div className="grid gap-2 text-sm text-neutral-500">
            {["Apps", "Web Apps", "Websites", "Contact"].map((item) => (
              <button key={item} onClick={() => scrollToId(item === "Contact" ? "contact" : "services")} className="text-left transition hover:text-white">
                {item}
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold text-white">PDS</p>
          <div className="grid gap-2 text-sm text-neutral-500">
            <span>Pahk Development Studios</span>
            <span>Idea to Product</span>
            <span>Apps and Websites</span>
          </div>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold text-white">Social</p>
          <div className="grid gap-2 text-sm text-neutral-500">
            <span>Instagram</span>
            <span>LinkedIn</span>
            <span>X / Twitter</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

const intakeSteps = [
  {
    title: "What are you looking to build?",
    text: "Choose the closest fit. You can clarify the details in the next step.",
    field: "projectType",
    options: ["Turn my website into an app", "Create a new mobile app", "Build a web app or client portal", "Launch an MVP or SaaS product", "Create or improve my business website", "Not sure yet"]
  },
  {
    title: "What should the product help you do?",
    text: "Pick the main outcome you want to create.",
    field: "goal",
    options: ["Get more customers", "Make a manual process easier", "Launch a new business idea", "Give customers an online experience", "Build an internal tool"]
  },
  {
    title: "Where are you starting from?",
    text: "This tells us whether we should begin with product discovery or improve something that already exists.",
    field: "startingPoint",
    options: ["I only have the idea", "I have notes or wireframes", "I have a brand and business already", "I have an existing product to improve", "I am replacing an old website or tool"]
  },
  {
    title: "What should the first version of the app do?",
    text: "Choose the main experience to build first. We will refine the exact features when we scope the product.",
    field: "coreNeed",
    options: ["User accounts and personal profiles", "Bookings, orders, or scheduling", "Payments or subscriptions", "Progress tracking, content, or learning", "Community, chat, or sharing", "An internal dashboard for my team"]
  },
  {
    title: "When do you want to launch?",
    text: "Choose the timing that best matches your situation.",
    field: "timeline",
    options: ["As soon as possible", "Within 1-2 months", "Within 3-6 months", "I am planning ahead", "Not sure yet"]
  }
];

const intakePlans = [
  {
    name: "Website Launch",
    price: "Starting at",
    detail: "For an established business that needs a serious online presence.",
    features: ["Premium responsive website", "Offer and page structure", "Lead or contact form", "Basic SEO structure"]
  },
  {
    name: "MVP Build",
    price: "Custom Quote",
    detail: "For a new app, portal, or SaaS idea that needs a focused first version.",
    featured: true,
    features: ["Idea and feature scope", "Product UI/UX", "Web or mobile app build", "Backend and key integrations", "Launch support"]
  },
  {
    name: "Product Partnership",
    price: "Custom Quote",
    detail: "For a business that needs an ongoing product and development partner.",
    features: ["Product roadmap", "Design and development", "Website and funnel support", "Ongoing improvements"]
  }
];

function getRecommendedPlan(answers) {
  if (answers.projectType === "Create or improve my business website") return intakePlans[0];
  if (answers.startingPoint === "I have an existing product to improve") return intakePlans[2];
  return intakePlans[1];
}

function getRecommendationReason(answers) {
  if (answers.projectType === "Turn my website into an app") return "You already have a digital foundation. A focused MVP build can turn that customer experience into a useful app.";
  if (answers.projectType === "Create a new mobile app") return "A focused MVP gives you the clearest path from a new app idea to something real people can use.";
  if (answers.projectType === "Create or improve my business website") return "A website launch is the strongest first move for a clearer offer, stronger credibility, and a direct customer path.";
  if (answers.startingPoint === "I have an existing product to improve") return "You have something to build on. A product partnership gives you a clearer roadmap and room to improve it properly.";
  return "Based on what you shared, this is the most practical first version to scope and launch.";
}

function ProjectOnboarding({ open, onClose }) {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [answers, setAnswers] = useState({ projectType: "", goal: "", startingPoint: "", coreNeed: "", timeline: "", name: "", email: "", details: "" });
  const totalSteps = intakeSteps.length + 2;
  const current = intakeSteps[step];
  const isQuestionStep = step < intakeSteps.length;
  const isRecommendationStep = step === intakeSteps.length;
  const isContactStep = step === intakeSteps.length + 1;
  const recommendedPlan = getRecommendedPlan(answers);

  if (!open) return null;

  const closeAndReset = () => {
    setStep(0);
    setSubmitted(false);
    setAnswers({ projectType: "", goal: "", startingPoint: "", coreNeed: "", timeline: "", name: "", email: "", details: "" });
    onClose();
  };

  const next = () => {
    if (isQuestionStep && answers[current.field]) setStep((value) => value + 1);
    if (isRecommendationStep) setStep((value) => value + 1);
  };

  const submit = (event) => {
    event.preventDefault();
    if (answers.name.trim() && answers.email.trim()) setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-end bg-black/80 p-3 backdrop-blur-sm sm:items-center sm:justify-center sm:p-6" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && closeAndReset()}>
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-intake-title"
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-4xl overflow-hidden rounded-lg border border-white/12 bg-neutral-950 shadow-2xl"
      >
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-7">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-300">Project intake</p>
            <p className="mt-1 text-sm text-neutral-500">A few questions before we scope your quote.</p>
          </div>
          <button type="button" onClick={closeAndReset} aria-label="Close project intake" className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-neutral-400 transition hover:border-white/30 hover:text-white">
            <X className="h-5 w-5" />
          </button>
        </div>

        {submitted ? (
          <div className="px-5 py-14 text-center sm:px-10">
            <span className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-sky-300/30 bg-sky-300/10 text-sky-200">
              <Check className="h-7 w-7" />
            </span>
            <h2 id="project-intake-title" className="mt-6 text-3xl font-semibold text-white">Quote request ready.</h2>
            <p className="mx-auto mt-4 max-w-md leading-7 text-neutral-400">Thanks, {answers.name}. Your {recommendedPlan.name.toLowerCase()} quote request is ready for review.</p>
            <Button onClick={closeAndReset} className="mt-8">Close</Button>
          </div>
        ) : (
          <form onSubmit={submit}>
            <div className="px-5 pt-6 sm:px-7 sm:pt-8">
              <div className="mb-8 flex items-center justify-between gap-5">
                <p className="text-sm font-medium text-neutral-300">Step {step + 1} of {totalSteps}</p>
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10" aria-label={`Progress: step ${step + 1} of ${totalSteps}`}>
                  <div className="h-full rounded-full bg-sky-300 transition-all duration-300" style={{ width: `${((step + 1) / totalSteps) * 100}%` }} />
                </div>
              </div>

              {isQuestionStep ? (
                <div>
                  <h2 id="project-intake-title" className="text-2xl font-semibold text-white sm:text-3xl">{current.title}</h2>
                  <p className="mt-3 leading-7 text-neutral-400">{current.text}</p>
                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    {current.options.map((option) => {
                      const selected = answers[current.field] === option;
                      return (
                        <button
                          key={option}
                          type="button"
                          onClick={() => setAnswers((value) => ({ ...value, [current.field]: option }))}
                          className={`min-h-16 rounded-lg border px-4 py-3 text-left text-sm font-medium transition ${selected ? "border-sky-300 bg-sky-300/10 text-white" : "border-white/10 bg-white/[0.03] text-neutral-300 hover:border-white/30 hover:bg-white/[0.06]"}`}
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ) : isRecommendationStep ? (
                <div>
                  <h2 id="project-intake-title" className="text-2xl font-semibold text-white sm:text-3xl">Your recommended starting point.</h2>
                  <p className="mt-3 leading-7 text-neutral-400">We matched the direction to what you want to build, where you are starting, and the experience you need.</p>
                  <div className="mt-7 rounded-lg border border-sky-300/40 bg-sky-300/[0.08] p-5 sm:p-7">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-200">Best fit for your project</p>
                    <div className="mt-4 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                      <div>
                        <h3 className="text-3xl font-semibold text-white">{recommendedPlan.name}</h3>
                        <p className="mt-3 max-w-xl leading-7 text-neutral-300">{getRecommendationReason(answers)}</p>
                      </div>
                      <p className="shrink-0 text-2xl font-semibold text-sky-200">{recommendedPlan.price}</p>
                    </div>
                    <div className="my-6 h-px bg-white/10" />
                    <p className="text-sm font-semibold text-white">What you get in the first build</p>
                    <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                      {recommendedPlan.features.map((feature) => (
                        <li key={feature} className="flex gap-3 text-sm leading-6 text-neutral-300"><Check className="mt-0.5 h-5 w-5 shrink-0 text-sky-300" />{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <div>
                  <h2 id="project-intake-title" className="text-2xl font-semibold text-white sm:text-3xl">Where should we send your quote?</h2>
                  <p className="mt-3 leading-7 text-neutral-400">Add your details and any context that will help us prepare for the conversation.</p>
                  <div className="mt-7 grid gap-4 sm:grid-cols-2">
                    <input required className="field" value={answers.name} onChange={(event) => setAnswers((value) => ({ ...value, name: event.target.value }))} placeholder="Name" aria-label="Name" />
                    <input required className="field" type="email" value={answers.email} onChange={(event) => setAnswers((value) => ({ ...value, email: event.target.value }))} placeholder="Email" aria-label="Email" />
                    <textarea className="field min-h-32 resize-none sm:col-span-2" value={answers.details} onChange={(event) => setAnswers((value) => ({ ...value, details: event.target.value }))} placeholder="Tell us a little more about the idea (optional)" aria-label="Project details" />
                  </div>
                </div>
              )}
            </div>

            <div className="mt-10 flex items-center justify-between border-t border-white/10 px-5 py-4 sm:px-7">
              <button type="button" onClick={() => setStep((value) => Math.max(0, value - 1))} disabled={step === 0} className="min-h-11 px-2 text-sm font-semibold text-neutral-400 transition hover:text-white disabled:cursor-not-allowed disabled:opacity-0">
                Back
              </button>
              {isContactStep ? (
                <Button className="min-w-40">Request Quote <ArrowRight className="h-4 w-4" /></Button>
              ) : (
                <Button type="button" onClick={next} className="min-w-32" disabled={isQuestionStep ? !answers[current.field] : false}>Continue <ArrowRight className="h-4 w-4" /></Button>
              )}
            </div>
          </form>
        )}
      </motion.div>
    </div>
  );
}

function App() {
  const [intakeOpen, setIntakeOpen] = useState(false);

  return (
    <main className="min-h-screen bg-black text-white">
      <Background />
      <Navbar onStartProject={() => setIntakeOpen(true)} />
      <Hero onStartProject={() => setIntakeOpen(true)} />
      <Services />
      <GrowthSystems onStartProject={() => setIntakeOpen(true)} />
      <GrowthCalculator onStartProject={() => setIntakeOpen(true)} />
      <FeaturedProjects />
      <WebsiteShowcase onStartProject={() => setIntakeOpen(true)} />
      <Process />
      <Pricing onStartProject={() => setIntakeOpen(true)} />
      <About />
      <Contact />
      <Footer />
      <ProjectOnboarding open={intakeOpen} onClose={() => setIntakeOpen(false)} />
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);

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
  Megaphone,
  Menu,
  PenTool,
  Send,
  Smartphone,
  X
} from "lucide-react";
import pdsLogo from "./assets/pahk-development-studios-logo-cropped.png";
import plattrLogo from "./assets/plattr-logo.png";
import readProofLogo from "./assets/readproof-logo.png";
import "./styles.css";

const companyName = "Pahk Development Studios";

const navLinks = [
  ["Services", "services"],
  ["Work", "work"],
  ["Process", "process"],
  ["Pricing", "pricing"],
  ["About", "about"],
  ["Contact", "contact"]
];

const services = [
  {
    title: "Mobile App Development",
    text: "Turn a rough app idea into a real mobile product with onboarding, accounts, payments, notifications, and launch-ready polish.",
    icon: Smartphone
  },
  {
    title: "Web App Development",
    text: "Customer portals, booking flows, dashboards, internal tools, and custom systems built around how the business actually works.",
    icon: AppWindow
  },
  {
    title: "Business Websites",
    text: "Premium websites and landing pages for small businesses that need to look serious, explain the offer, and capture leads.",
    icon: Globe2
  },
  {
    title: "MVP & Product Builds",
    text: "For people with an idea: we define the first version, design the screens, build the product, and prepare it for real users.",
    icon: Database
  },
  {
    title: "Product Planning & UI Design",
    text: "Simple identity, app screens, website layouts, and product interfaces that make the idea feel credible from day one.",
    icon: PenTool
  },
  {
    title: "Launch Support",
    text: "Launch pages, funnels, positioning, and practical rollout plans so the finished product has a clear path to customers.",
    icon: Megaphone
  }
];

const projects = [
  {
    name: "Plattr",
    type: "Consumer App",
    text: "A food decision app that helps people choose where to eat with less friction and better taste-fit.",
    tags: ["Mobile", "Consumer", "Food"],
    logo: plattrLogo,
    logoAlt: "Plattr logo",
    logoClass: "scale-[1.16]"
  },
  {
    name: "ReadProof",
    type: "Accountability App",
    text: "An AI reading accountability app that verifies reading progress and turns consistency into visible proof.",
    tags: ["App", "Verification", "Progress"],
    logo: readProofLogo,
    logoAlt: "ReadProof logo"
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
  ["01", "Bring the Idea", "You come with the rough version: an app idea, business problem, website need, or product concept."],
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

function Button({ children, variant = "primary", onClick, className = "" }) {
  const variantClass =
    variant === "primary"
      ? "border-white bg-white text-black hover:border-sky-300 hover:bg-sky-200"
      : "border-white/14 bg-white/[0.03] text-white hover:border-white/35 hover:bg-white/[0.08]";

  return (
    <button
      onClick={onClick}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border px-5 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 ${variantClass} ${className}`}
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

function Navbar() {
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
          <Button onClick={() => goTo("contact")}>
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
          <Button onClick={() => goTo("contact")} className="mt-2 w-full">
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
  const [comparison, setComparison] = useState(52);

  const updateComparison = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const next = ((event.clientX - bounds.left) / bounds.width) * 100;
    setComparison(Math.min(100, Math.max(0, next)));
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.025] p-4 shadow-[0_40px_120px_rgba(0,0,0,0.35)] sm:p-5"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_20%,rgba(125,211,252,0.12),transparent_30%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.055),transparent_34%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:42px_42px] opacity-35" />

      <div className="relative z-10">
        <div className="mb-5 flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-300">From concept to product</p>
          <p className="text-xs font-medium text-neutral-500">Move the divider</p>
        </div>
        <div
          className="relative aspect-[0.94] overflow-hidden rounded-md border border-white/10 bg-neutral-950 shadow-[0_28px_80px_rgba(0,0,0,0.35)] sm:aspect-[1.1]"
          onPointerMove={updateComparison}
        >
          <div className="absolute inset-0 bg-neutral-900 p-5 sm:p-7">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-500">Before</span>
              <span className="text-xs text-neutral-600">Rough concept</span>
            </div>
            <div className="mt-8 grid gap-4">
              <div className="h-4 w-3/4 rounded-sm bg-white/15" />
              <div className="h-3 w-full rounded-sm bg-white/8" />
              <div className="h-3 w-4/5 rounded-sm bg-white/8" />
              <div className="mt-3 grid grid-cols-2 gap-3">
                {["Profile", "Bookings", "Payments", "Messages"].map((item) => (
                  <div key={item} className="h-24 rounded-md border border-dashed border-white/15 bg-white/[0.02] p-3 text-xs text-neutral-600">
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-2 h-12 rounded-md border border-dashed border-white/15 bg-white/[0.02]" />
            </div>
          </div>

          <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - comparison}% 0 0)` }}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_12%,rgba(56,189,248,0.26),transparent_36%),#0b1220] p-5 sm:p-7">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-300">After</span>
                <span className="rounded-full bg-sky-300/15 px-2 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-sky-100">Ready to launch</span>
              </div>
              <div className="mt-7 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-medium text-sky-200">Welcome back</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">Your business, in one place.</h3>
                </div>
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-sky-300 text-black"><Smartphone className="h-5 w-5" /></span>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  ["24", "New leads"],
                  ["08", "Bookings today"]
                ].map(([number, label]) => (
                  <div key={label} className="rounded-md border border-white/10 bg-white/[0.07] p-4 backdrop-blur-sm">
                    <p className="text-2xl font-semibold text-white">{number}</p>
                    <p className="mt-1 text-xs text-neutral-400">{label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-md border border-sky-300/25 bg-sky-300/[0.08] p-4">
                <p className="text-sm font-semibold text-white">Everything is connected.</p>
                <p className="mt-2 text-xs leading-5 text-sky-100/70">Clear screens, customer flow, and a product people can actually use.</p>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 z-20 w-px bg-white" style={{ left: `${comparison}%` }}>
            <span className="absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black text-xs font-bold text-white shadow-xl">||</span>
          </div>
          <input
            aria-label="Compare rough concept and polished product"
            className="comparison-range absolute inset-0 z-30 h-full w-full cursor-ew-resize opacity-0"
            type="range"
            min="0"
            max="100"
            value={comparison}
            onChange={(event) => setComparison(Number(event.target.value))}
          />
        </div>
      </div>
    </motion.div>
  );
}

function Hero() {
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
            Bring an idea. Leave with a real app, website, or digital product.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.72, delay: 0.24 }} className="mt-7 max-w-2xl text-lg leading-8 text-neutral-350 sm:text-xl">
            Pahk Development Studios helps small businesses, creators, and everyday people turn rough ideas into polished apps, websites, MVPs, and launch-ready digital products.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.72, delay: 0.36 }} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button onClick={() => scrollToId("contact")} className="sm:min-w-44">
              Start a Project <ArrowRight className="h-5 w-5" />
            </Button>
            <Button variant="secondary" onClick={() => scrollToId("work")} className="sm:min-w-40">
              View Work <ChevronRight className="h-5 w-5" />
            </Button>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.72, delay: 0.48 }} className="mt-12 grid max-w-2xl grid-cols-3 gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10">
            {[
              ["01", "Developer-led"],
              ["02", "Idea-to-product"],
              ["03", "Launch-ready"]
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
          title="For app ideas, small businesses, and products that need to exist"
          text="PDS helps you move from loose concept to real product: strategy, screens, code, website, funnel, launch, and handoff."
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

function FeaturedProjects() {
  return (
    <section id="work" className="px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <SectionHeader align="left" eyebrow="Featured Projects" title="Products built around a real problem" text="From the first spark of an idea to a useful, launch-ready experience, the work has a clear purpose behind it." />
          <Reveal delay={0.08}>
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10">
              {["Mobile Apps", "Web Apps", "Websites", "SaaS"].map((item) => (
                <div key={item} className="bg-black/72 p-5 text-sm font-semibold uppercase tracking-[0.22em] text-neutral-300">
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.name} delay={index * 0.06}>
              <article className="group relative min-h-[30rem] overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06]">
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
                <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2">
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

function Process() {
  return (
    <section id="process" className="px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <SectionHeader align="left" eyebrow="Process" title="From rough idea to working product" text="You do not need a technical plan before reaching out. The process is built to turn an early idea into a clear, buildable product." />
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

function Pricing() {
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
                <Button onClick={() => scrollToId("contact")} variant={tier.featured ? "primary" : "secondary"} className="mt-8 w-full">
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
          title="A studio for people who know what they want, but not how to build it yet"
          text="PDS exists for small businesses, founders, and people with app ideas who need someone to shape the product, design it, build it, and get it ready for real users."
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
        <SectionHeader align="left" eyebrow="Contact" title="Tell us the idea. We will help turn it into a build." text="Send the rough version. It can be a business app, customer portal, website, internal tool, or product idea that only exists in your head right now." />
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
            Pahk Development Studios turns app ideas, business problems, and website needs into polished digital products.
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

function App() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Background />
      <Navbar />
      <Hero />
      <Services />
      <FeaturedProjects />
      <Process />
      <Pricing />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);

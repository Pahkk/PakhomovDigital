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
import readProofConceptToProduct from "./assets/readproof-concept-to-product.jpg";
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
    text: "Premium websites for established businesses that need a clearer offer, stronger credibility, and a direct way to capture leads.",
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

const clientStories = [
  {
    name: "Kenneth B.",
    product: "Plattr",
    story: "Kenneth wanted to make the everyday question of where to eat feel simpler and more personal. PDS helped shape that idea into Plattr: a focused food-decision app built around less scrolling, better taste-fit, and a clear mobile experience.",
    logo: plattrLogo,
    logoAlt: "Plattr logo"
  },
  {
    name: "Ryan M.",
    product: "ReadProof",
    story: "Ryan wanted a better way for readers to stay accountable and show real progress. PDS helped turn that into ReadProof: a product direction that combines reading capture, verification, streaks, and a polished iOS-ready experience.",
    logo: readProofLogo,
    logoAlt: "ReadProof logo"
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
            Pahk Development Studios helps established businesses create better websites, apps, portals, and internal tools, and helps new founders turn an app idea into something real.
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
          title="For businesses ready to grow and app ideas ready to build"
          text="Whether you need a stronger website, a customer app, a portal for your team, or someone to build a new product from scratch, PDS handles the strategy, design, build, and launch."
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

        <div className="mt-16 border-t border-white/10 pt-12">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-sky-300">Testimonials</p>
              <h3 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">What clients came to PDS to build.</h3>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {clientStories.map((client, index) => (
              <Reveal key={client.product} delay={index * 0.08}>
                <article className="h-full rounded-lg border border-white/10 bg-white/[0.62] p-6 sm:p-7">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-md border border-white/10 bg-white p-1.5">
                      <img src={client.logo} alt={client.logoAlt} className="h-full w-full object-contain" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{client.name}</p>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.22em] text-sky-300">{client.product}</p>
                    </div>
                  </div>
                  <p className="mt-7 text-lg leading-8 text-neutral-400">{client.story}</p>
                </article>
              </Reveal>
            ))}
          </div>
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
          text="PDS works with business owners who need a stronger website, customer app, or internal tool, plus founders and creators who have an app idea and need a team to turn it into a real product."
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
            Pahk Development Studios helps businesses build better websites and apps, and turns new app ideas into polished digital products.
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
      <FeaturedProjects />
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

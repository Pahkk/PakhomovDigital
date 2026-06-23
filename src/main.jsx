import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import { ArrowRight, Check, Menu, Send, X } from "lucide-react";
import plattrLogo from "./assets/plattr-logo.png";
import readProofLogo from "./assets/readproof-logo.png";
import "./styles.css";

const navLinks = [
  ["Services", "services"],
  ["System", "system"],
  ["Work", "work"],
  ["Packages", "packages"],
  ["Contact", "contact"]
];

const services = [
  ["Websites & Landing Pages", "Modern websites built to convert visitors into calls, bookings, signups, and leads."],
  ["Apps & Digital Products", "Custom mobile apps, SaaS tools, dashboards, and business systems designed around real workflows."],
  ["Ads & Growth Systems", "Ad creatives, paid campaigns, tracking, and landing pages built to bring customers to your business."]
];

const packages = [
  {
    name: "Starter Website",
    audience: "Small businesses that need a clean online presence.",
    price: "Starting at",
    cta: "Get a Website",
    items: ["1–5 page website", "Mobile responsive design", "Contact form", "Basic SEO setup", "Google Business profile help", "Simple brand cleanup"]
  },
  {
    name: "Growth Funnel",
    audience: "Businesses that want leads, bookings, or sales.",
    price: "Starting at",
    cta: "Build My Funnel",
    featured: true,
    items: ["Landing page or website", "Lead form or booking flow", "Ad creative direction", "Meta or Google ad setup", "Tracking setup", "Monthly optimization option"]
  },
  {
    name: "Custom App / SaaS",
    audience: "Businesses, startups, and creators with a bigger idea.",
    price: "Custom Quote",
    cta: "Start an App",
    items: ["iOS or web app", "User accounts", "Backend/database setup", "Payments if needed", "Admin dashboard", "Launch page", "Optional ad campaign"]
  }
];

const monthlyServices = ["Paid Ad Management", "Website Maintenance", "Creative Testing", "Funnel Optimization"];
const industries = ["Gyms", "Barbershops", "Med spas", "Restaurants", "Food trucks", "Contractors", "Landscapers", "Car detailers", "Real estate agents", "Personal trainers", "Local service businesses", "Creators"];
const projects = [
  { name: "Plattr", category: "Consumer app", text: "A food decision app designed to help people choose where to eat, drink, or go with friends.", logo: plattrLogo },
  { name: "ReadProof", category: "Accountability app", text: "A reading accountability app that helps users track reading progress and prove they actually read.", logo: readProofLogo },
  { name: "Business Growth Systems", category: "Websites + ads", text: "Custom websites, lead funnels, and ad systems built for businesses that want more customers." }
];
const process = [
  ["01", "Discover", "Understand the business, offer, audience, and goal."],
  ["02", "Build", "Create the website, app, landing page, or digital system."],
  ["03", "Launch", "Set up tracking, calls-to-action, and the customer flow."],
  ["04", "Grow", "Run ads, test creative, improve the funnel, and optimize results."]
];

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Reveal({ children, className = "", delay = 0 }) {
  return <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>{children}</motion.div>;
}

function Wordmark() {
  return <button type="button" onClick={() => scrollToId("home")} className="wordmark" aria-label="Pahk Development Studios home"><span>PDS</span><i /> <small>PAHK DEVELOPMENT STUDIOS</small></button>;
}

function Button({ children, onClick, secondary = false, className = "", type = "button" }) {
  return <button type={type} onClick={onClick} className={`button ${secondary ? "button-secondary" : ""} ${className}`}>{children}</button>;
}

function SectionHeading({ eyebrow, title, text, left = false }) {
  return <Reveal className={left ? "max-w-2xl" : "mx-auto max-w-3xl text-center"}><p className="eyebrow">{eyebrow}</p><h2 className="section-title">{title}</h2>{text ? <p className="section-text">{text}</p> : null}</Reveal>;
}

function Navbar({ onStart }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const go = (id) => { setOpen(false); scrollToId(id); };
  return <header className={`nav ${scrolled ? "nav-scrolled" : ""}`}><nav><Wordmark /><div className="nav-links">{navLinks.map(([label, id]) => <button key={id} onClick={() => go(id)}>{label}</button>)}</div><Button onClick={onStart} className="nav-cta">Start a Project <ArrowRight size={16} /></Button><button className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? "Close navigation" : "Open navigation"}>{open ? <X size={20} /> : <Menu size={20} />}</button></nav>{open ? <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="mobile-menu">{navLinks.map(([label, id]) => <button key={id} onClick={() => go(id)}>{label}</button>)}<Button onClick={() => { setOpen(false); onStart(); }}>Start a Project <ArrowRight size={16} /></Button></motion.div> : null}</header>;
}

function HeroSystemPreview() {
  return <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }} className="hero-system-preview" aria-label="PDS takes an idea and turns it into a polished product ready for its next step"><div className="preview-top"><span>FROM IDEA TO PRODUCT</span><b>PDS</b></div><div className="preview-stage"><div className="preview-site"><div className="preview-site-nav"><i /><i /><i /></div><p>THE IDEA</p><strong>A better way to do business.</strong><span>Rough notes → clear plan</span></div><div className="preview-arrow"><ArrowRight size={18} /></div><div className="preview-ads"><p>THE PRODUCT</p><strong>Built to take<br />the next step.</strong><span>Website · app · launch</span></div></div><div className="preview-results"><div><span>01 / DISCOVER</span><strong>Idea</strong></div><div><span>02 / BUILD</span><strong>Product</strong></div><div><span>03 / GROW</span><strong>Next step</strong></div></div></motion.div>;
}

function Hero({ onStart }) {
  return <section id="home" className="hero"><div className="hero-grid" /><div className="hero-inner"><div className="hero-copy"><motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="eyebrow">PAHK DEVELOPMENT STUDIOS / PDS</motion.p><motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08, duration: 0.75 }}>Apps, websites, and ads built to grow modern businesses.</motion.h1><motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18, duration: 0.7 }} className="hero-text">Pahk Development Studios builds high-quality digital products, landing pages, and ad systems that help businesses turn attention into real customers.</motion.p><motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28, duration: 0.7 }} className="hero-actions"><Button onClick={onStart}>Start a Project <ArrowRight size={17} /></Button><Button secondary onClick={() => scrollToId("services")}>See Services</Button></motion.div><motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="main-message">We build the system. Then we bring it customers.</motion.p><motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="trust-line">Websites. Mobile apps. Lead funnels. Paid ads. Launch strategy.</motion.p></div><HeroSystemPreview /></div></section>;
}

function Services() {
  return <section id="services" className="section"><div className="container"><SectionHeading eyebrow="Core offer" title="Build the product. Drive the growth." /><div className="service-grid">{services.map(([title, text], index) => <Reveal key={title} delay={index * 0.07}><article className="service-card"><span className="card-index">0{index + 1}</span><h3>{title}</h3><p>{text}</p><span className="card-line" /></article></Reveal>)}</div></div></section>;
}

function GrowthSystem() {
  const steps = ["Idea", "Website/App", "Landing Page", "Ads", "Leads", "Customers"];
  return <section id="system" className="section system-section"><div className="container"><div className="system-layout"><SectionHeading left eyebrow="The business model" title="More than a website. A complete growth system." text="Most businesses do not just need a website. They need a working system that attracts attention, captures leads, and turns traffic into customers." /><Reveal delay={0.12}><p className="system-copy">PDS combines product development with marketing execution. That means we can build the website, app, or funnel — then create the ads that bring people to it.</p><div className="flow">{steps.map((step, index) => <React.Fragment key={step}><div className="flow-step"><span>0{index + 1}</span>{step}</div>{index < steps.length - 1 ? <ArrowRight className="flow-arrow" size={16} /> : null}</React.Fragment>)}</div></Reveal></div></div></section>;
}

function Packages({ onStart }) {
  return <section id="packages" className="section"><div className="container"><SectionHeading eyebrow="Packages" title="A clear place to start." text="Every project is scoped around the business and the result it needs to create." /><div className="package-grid">{packages.map((pkg, index) => <Reveal key={pkg.name} delay={index * 0.06}><article className={`package-card ${pkg.featured ? "package-featured" : ""}`}>{pkg.featured ? <span className="package-badge">MOST POPULAR</span> : null}<p className="eyebrow">{pkg.price}</p><h3>{pkg.name}</h3><p className="package-audience">{pkg.audience}</p><Button secondary={!pkg.featured} onClick={onStart} className="package-button">{pkg.cta} <ArrowRight size={16} /></Button><ul>{pkg.items.map((item) => <li key={item}><Check size={16} />{item}</li>)}</ul></article></Reveal>)}</div></div></section>;
}

function MonthlyServices() {
  return <section className="section monthly-section"><div className="container"><SectionHeading eyebrow="After launch" title="Monthly growth and support." text="After launch, PDS can continue improving your site, ads, landing pages, and customer flow so the system keeps getting better." /><div className="monthly-grid">{monthlyServices.map((service, index) => <Reveal key={service} delay={index * 0.05}><article><span>0{index + 1}</span><h3>{service}</h3></article></Reveal>)}</div></div></section>;
}

function Industries() {
  return <section className="section industries-section"><div className="container"><SectionHeading eyebrow="Who we build for" title="Built for businesses that need more customers." /><Reveal delay={0.1}><div className="industry-grid">{industries.map((industry) => <span key={industry}>{industry}</span>)}</div></Reveal></div></section>;
}

function Work() {
  return <section id="work" className="section"><div className="container"><SectionHeading eyebrow="Selected work" title="Products, systems, and ideas brought to life." /><div className="project-grid">{projects.map((project, index) => <Reveal key={project.name} delay={index * 0.06}><article className="project-card"><div className="project-top"><span>{project.category}</span><b>0{index + 1}</b></div>{project.logo ? <div className="project-logo"><img src={project.logo} alt={`${project.name} logo`} /></div> : <div className="project-mark">PDS<span>/</span></div>}<h3>{project.name}</h3><p>{project.text}</p></article></Reveal>)}</div></div></section>;
}

function Process() {
  return <section id="process" className="section process-section"><div className="container"><div className="process-layout"><SectionHeading left eyebrow="Process" title="How PDS works" text="A focused build process with a clear link between what we make and the result it should create." /><div className="process-list">{process.map(([number, title, text], index) => <Reveal key={number} delay={index * 0.06}><article><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article></Reveal>)}</div></div></div></section>;
}

function About() {
  return <section id="about" className="section about-section"><div className="container"><Reveal className="about-panel"><p className="eyebrow">About PDS</p><h2>PDS builds what the business needs to grow.</h2><p>Pahk Development Studios is a modern development studio focused on building digital products that are useful, polished, and built for growth. PDS combines software development, design, and marketing execution so businesses do not just get a website — they get a system that can bring in customers.</p></Reveal></div></section>;
}

function Contact() {
  return <section id="contact" className="section contact-section"><div className="container contact-layout"><SectionHeading left eyebrow="Start a project" title="Tell us what you want to build." text="Bring the business goal, the product idea, or the customer problem. We will find the clearest first move." /><Reveal delay={0.1}><form className="contact-form" onSubmit={(event) => event.preventDefault()}><input className="field" placeholder="Name" aria-label="Name" required /><input className="field" type="email" placeholder="Email" aria-label="Email" required /><input className="field" placeholder="Business Name" aria-label="Business Name" /><select className="field" defaultValue="" aria-label="Project Type"><option value="" disabled>Project Type</option><option>Website</option><option>Mobile App</option><option>Landing Page</option><option>Ads</option><option>Full Growth System</option><option>Not Sure Yet</option></select><select className="field full" defaultValue="" aria-label="Budget Range"><option value="" disabled>Budget Range</option><option>Under $2,500</option><option>$2,500 – $7,500</option><option>$7,500 – $20,000</option><option>$20,000+</option><option>Still defining scope</option></select><textarea className="field full" placeholder="Message" aria-label="Message" /><Button type="submit" className="full">Send Project Request <Send size={16} /></Button></form></Reveal></div></section>;
}

function Footer() {
  return <footer><div className="container footer-inner"><div><Wordmark /><p>Apps, websites, ads, and growth systems for modern businesses.</p><small>© 2026 Pahk Development Studios. PDS.</small></div><div className="footer-links"><button onClick={() => scrollToId("services")}>Apps</button><button onClick={() => scrollToId("services")}>Websites</button><button onClick={() => scrollToId("services")}>Ads</button><button onClick={() => scrollToId("contact")}>Contact</button></div><div className="socials"><span>Instagram</span><span>LinkedIn</span><span>X</span></div></div></footer>;
}

function App() {
  const start = () => scrollToId("contact");
  return <main><Navbar onStart={start} /><Hero onStart={start} /><Services /><GrowthSystem /><Packages onStart={start} /><MonthlyServices /><Industries /><Work /><Process /><About /><Contact /><Footer /></main>;
}

createRoot(document.getElementById("root")).render(<App />);

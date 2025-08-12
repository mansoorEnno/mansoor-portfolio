import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, ArrowRight, Moon, Sun, Code2, Cpu, Cloud, Database, Sparkles, Download, Globe2, Blocks, BotMessageSquare, GitBranch, Rocket, Shield, Terminal, BookOpen } from "lucide-react";

/**
 * Mansoor — 2025 Portfolio (single-file React component)
 *
 * How to customize quickly:
 * - Edit the `profile`, `projects`, `experience`, and `links` objects.
 * - Replace placeholder images/links with your own.
 * - The theme toggle persists in localStorage.
 */

const profile = {
  name: "Mansoor",
  title: "Software Engineer",
  punchline:
    "I build high‑impact apps with AI, TypeScript, and cloud‑native stacks.",
  location: "Pakistan · Open to remote",
  summary:
    "Full‑stack dev focused on DX, performance, and shipping fast without breaking things. Recently into AI agents, RAG, and edge runtimes.",
  keywords: [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "Prisma",
    "Python",
    "AI/ML",
    "LangChain",
    "OpenAI",
    "Supabase",
    "Docker",
    "k8s",
  ],
};

const links = {
  email: "mailto:mansoor@example.com",
  github: "https://github.com/your‑github",
  linkedin: "https://linkedin.com/in/your‑linkedin",
  x: "https://x.com/your‑handle",
  resume: "/Mansoor_Resume.pdf", // drop your file at public path
};

const projects = [
  {
    title: "Agentic CRM Copilot",
    blurb:
      "Multi‑agent assistant that updates deals, drafts emails, and summarizes calls. RAG + tools + function calling.",
    tags: ["AI Agents", "TypeScript", "Next.js", "OpenAI", "Postgres"],
    links: {
      live: "#",
      code: "#",
    },
  },
  {
    title: "Docs RAG Search",
    blurb:
      "Company‑wide semantic search with chunking, embeddings, and feedback loops. <200ms average latency at p95.",
    tags: ["RAG", "Python", "FastAPI", "Qdrant", "OpenAI"],
    links: { live: "#", code: "#" },
  },
  {
    title: "Edge Realtime Whiteboard",
    blurb:
      "CRDT‑powered collaboration running on edge functions. Offline‑first with conflict‑free merges.",
    tags: ["Edge", "CRDT", "WebRTC", "Vite"],
    links: { live: "#", code: "#" },
  },
  {
    title: "WASM Image Toolkit",
    blurb:
      "WASM pipeline for on‑device image transforms. 10x smaller and faster than server round trips.",
    tags: ["WASM", "Rust", "Wasm‑bindgen"],
    links: { live: "#", code: "#" },
  },
  {
    title: "Serverless Finance API",
    blurb:
      "Pay‑as‑you‑go API with rate limiting, observability, and IaC. Zero cold‑start on the hot path.",
    tags: ["Serverless", "AWS", "CDK", "Observability"],
    links: { live: "#", code: "#" },
  },
  {
    title: "Design System Starter",
    blurb:
      "Accessible component library with tokens, dark mode, and docs. Published as a versioned package.",
    tags: ["Design System", "Storybook", "CI/CD"],
    links: { live: "#", code: "#" },
  },
];

const experience = [
  {
    role: "Software Engineer (Freelance)",
    at: "Various clients",
    date: "2024 — 2025",
    points: [
      "Built AI features: chat with docs, email drafting, smart search.",
      "Shipped full‑stack apps (Next.js, Prisma, Postgres) with CI/CD.",
      "Cut infra cost ~35% via serverless and query tuning.",
    ],
  },
  {
    role: "B.S. Computer Science",
    at: "Virtual University of Pakistan",
    date: "2021 — 2025",
    points: [
      "Graduated with projects in web dev and AI.",
      "Led a small team for capstone, delivered on time.",
    ],
  },
];

const badges = [
  { icon: <Rocket size={16} />, label: "Shipped 10+ projects" },
  { icon: <Shield size={16} />, label: "OWASP‑aware" },
  { icon: <Terminal size={16} />, label: "CLI enjoyer" },
  { icon: <BookOpen size={16} />, label: "Always learning" },
];

const tech = [
  { icon: <Code2 />, label: "TypeScript" },
  { icon: <Cpu />, label: "Node.js" },
  { icon: <Cloud />, label: "AWS" },
  { icon: <Database />, label: "PostgreSQL" },
  { icon: <Sparkles />, label: "AI/LLMs" },
  { icon: <Blocks />, label: "WASM" },
];

const LinkBtn = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-medium border hover:shadow-md transition"
  >
    {children}
  </a>
);

const Section = ({ id, title, children, subtitle }) => (
  <section id={id} className="py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-4">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>
          {subtitle && (
            <p className="text-sm md:text-base text-muted-foreground mt-1">{subtitle}</p>
          )}
        </div>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
      {children}
    </div>
  </section>
);

export default function Portfolio() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("mansoor-theme");
    if (saved) setDark(saved === "dark");
  }, []);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("mansoor-theme", dark ? "dark" : "light");
  }, [dark]);

  const spring = useMemo(() => ({ type: "spring", stiffness: 140, damping: 18 }), []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <a href="#home" className="font-bold tracking-tight text-lg">{profile.name}</a>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a className="hover:opacity-80" href="#projects">Projects</a>
            <a className="hover:opacity-80" href="#experience">Experience</a>
            <a className="hover:opacity-80" href="#tech">Tech</a>
            <a className="hover:opacity-80" href="#contact">Contact</a>
            <a className="hover:opacity-80" href={links.resume}>Resume</a>
          </div>
          <button
            aria-label="Toggle theme"
            onClick={() => setDark((v) => !v)}
            className="inline-flex items-center justify-center rounded-full border size-9 hover:shadow transition"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-[1.3fr_.7fr] gap-10 items-center">
          <div>
            <motion.h1
              layout
              transition={spring}
              className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight"
            >
              {profile.title}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500">
                {profile.name}
              </span>
            </motion.h1>
            <p className="mt-4 text-base md:text-lg text-muted-foreground">{profile.punchline}</p>
            <p className="mt-2 text-sm text-muted-foreground">{profile.location}</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-medium bg-foreground text-background hover:opacity-90">
                Contact <ArrowRight size={16} />
              </a>
              <LinkBtn href={links.resume}><Download size={16} /> Download CV</LinkBtn>
              <LinkBtn href={links.github}><Github size={16} /> GitHub</LinkBtn>
              <LinkBtn href={links.linkedin}><Linkedin size={16} /> LinkedIn</LinkBtn>
            </div>

            {/* quick badges */}
            <div className="mt-8 flex flex-wrap gap-2">
              {badges.map((b, i) => (
                <span key={i} className="inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs text-muted-foreground">
                  {b.icon} {b.label}
                </span>
              ))}
            </div>
          </div>

          {/* Tech grid */}
          <div className="grid grid-cols-3 gap-4">
            {tech.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex flex-col items-center justify-center rounded-2xl border p-6 hover:shadow-md"
              >
                <div className="mb-2">{t.icon}</div>
                <div className="text-sm text-center text-muted-foreground">{t.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <Section id="projects" title="Projects" subtitle="Things I built recently that I’m proud of">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={i}
              whileHover={{ y: -4 }}
              className="rounded-2xl border p-5 flex flex-col gap-4 hover:shadow-lg transition bg-card"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-semibold text-lg leading-tight flex-1">{p.title}</h3>
                <Sparkles className="opacity-60" size={18} />
              </div>
              <p className="text-sm text-muted-foreground flex-1">{p.blurb}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t, idx) => (
                  <span key={idx} className="rounded-full bg-muted text-muted-foreground px-2.5 py-1 text-xs">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between pt-2">
                <a href={p.links.live} className="inline-flex items-center gap-2 text-sm hover:underline">
                  <Globe2 size={16} /> Live
                </a>
                <a href={p.links.code} className="inline-flex items-center gap-2 text-sm hover:underline">
                  <Github size={16} /> Code
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" title="Experience" subtitle="What I’ve done and where I learned the most">
        <div className="space-y-6">
          {experience.map((e, i) => (
            <div key={i} className="relative pl-6">
              <div className="absolute left-1 top-1 size-2 rounded-full bg-foreground" />
              <div className="rounded-2xl border p-5 bg-card">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="font-semibold">{e.role} · {e.at}</div>
                  <div className="text-xs text-muted-foreground">{e.date}</div>
                </div>
                <ul className="mt-3 list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  {e.points.map((pt, idx) => (
                    <li key={idx}>{pt}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Tech / Skills */}
      <Section id="tech" title="Skills & Tools" subtitle="Stuff I use daily or reach for often">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border p-5 bg-card">
            <h4 className="font-semibold">Core stack</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {profile.keywords.map((k, i) => (
                <span key={i} className="rounded-full bg-muted text-muted-foreground px-2.5 py-1 text-xs">{k}</span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border p-5 bg-card">
            <h4 className="font-semibold">What I’m exploring</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Agents", "RAG evals", "Observability", "Edge runtime", "WASM", "DX tooling"].map((k, i) => (
                <span key={i} className="rounded-full bg-muted text-muted-foreground px-2.5 py-1 text-xs">{k}</span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact" subtitle="Tell me about your idea and let’s ship it">
        <div className="grid md:grid-cols-2 gap-6">
          <form action={links.email} className="rounded-2xl border p-5 bg-card space-y-3">
            <input required name="subject" placeholder="Subject" className="w-full rounded-xl border px-3 py-2 bg-background" />
            <textarea required name="body" placeholder="Your message" rows={6} className="w-full rounded-xl border px-3 py-2 bg-background" />
            <button className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-medium bg-foreground text-background">
              <Mail size={16} /> Send email
            </button>
          </form>
          <div className="rounded-2xl border p-5 bg-card">
            <h4 className="font-semibold">Elsewhere</h4>
            <div className="mt-3 flex flex-col gap-2 text-sm">
              <a className="inline-flex items-center gap-2 hover:underline" href={links.github}><Github size={16} /> {links.github}</a>
              <a className="inline-flex items-center gap-2 hover:underline" href={links.linkedin}><Linkedin size={16} /> {links.linkedin}</a>
              <a className="inline-flex items-center gap-2 hover:underline" href={links.x}><ExternalLink size={16} /> {links.x}</a>
            </div>
          </div>
        </div>
      </Section>

      <footer className="py-10 border-t">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} {profile.name}. Built with React, Tailwind, and vibes.</p>
          <div className="flex items-center gap-3">
            <a href={links.github} className="inline-flex items-center justify-center rounded-full border size-9"><Github size={16} /></a>
            <a href={links.linkedin} className="inline-flex items-center justify-center rounded-full border size-9"><Linkedin size={16} /></a>
            <a href={links.email} className="inline-flex items-center justify-center rounded-full border size-9"><Mail size={16} /></a>
          </div>
        </div>
      </footer>

      {/* Minimal CSS variables to support light/dark tokens */}
      <style>{`
        :root{
          --background: 255 255 255;
          --foreground: 17 24 39;
          --muted: 243 244 246;
          --muted-foreground: 107 114 128;
          --card: 255 255 255;
          --border: 229 231 235;
        }
        .dark{
          --background: 3 6 16;
          --foreground: 241 245 249;
          --muted: 15 23 42;
          --muted-foreground: 148 163 184;
          --card: 9 13 24;
          --border: 34 43 69;
        }
        .bg-background{ background-color: rgb(var(--background)); }
        .text-foreground{ color: rgb(var(--foreground)); }
        .bg-card{ background-color: rgb(var(--card)); }
        .bg-muted{ background-color: rgb(var(--muted)); }
        .text-muted-foreground{ color: rgb(var(--muted-foreground)); }
        .border{ border-color: rgb(var(--border)); border-width: 1px; }
        .border-b{ border-bottom: 1px solid rgb(var(--border)); }
        .border-t{ border-top: 1px solid rgb(var(--border)); }
        .via-border{ --tw-gradient-from: transparent; --tw-gradient-to: transparent; --tw-gradient-stops: var(--tw-gradient-from), rgb(var(--border)), var(--tw-gradient-to); }
        .shadow{ box-shadow: 0 1px 2px rgba(0,0,0,.04); }
        .hover\\:shadow-md:hover{ box-shadow: 0 8px 24px rgba(0,0,0,.08); }
        .hover\\:shadow-lg:hover{ box-shadow: 0 12px 30px rgba(0,0,0,.12); }
      `}</style>
    </div>
  );
}

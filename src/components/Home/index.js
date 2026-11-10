import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import ThemeContext from "../../context/ThemeContext";
import TiltCard from "../common/TiltCard";
import { ScrollReveal, MagneticWrap, ParallaxBand, CountUp } from "../common/Animations";
import {
  Download, ArrowRight, Layers, Sparkles, ExternalLink,
  Code2, Database, Award, Mail, Cpu
} from "lucide-react";

const frontendSkills = [
  { id: 8, name: "React JS",    icon: "https://res.cloudinary.com/dlhgbo0ji/image/upload/v1759421181/structure_t65oay.png",  level: "Advanced" },
  { id: 9, name: "Next.js",     icon: "https://res.cloudinary.com/dlhgbo0ji/image/upload/v1765001783/Next.js_cayujl.png",    level: "Production" },
  { id: 7, name: "JavaScript",  icon: "https://res.cloudinary.com/dlhgbo0ji/image/upload/v1759421078/java-script_zvo1mk.png", level: "ES6+" },
  { id: 1, name: "HTML5",       icon: "https://res.cloudinary.com/dlhgbo0ji/image/upload/v1759419781/html_vspn92.png",       level: "Semantic" },
  { id: 2, name: "CSS3",        icon: "https://res.cloudinary.com/dlhgbo0ji/image/upload/v1759420694/css-3_mc6rw3.png",      level: "Modern" },
  { id: 3, name: "BootStrap",   icon: "https://res.cloudinary.com/dlhgbo0ji/image/upload/v1759420764/bootstrap_og8cfc.png",  level: "Responsive" },
];
const backendSkills = [
  { id: 10, name: "Node JS",   icon: "https://res.cloudinary.com/dlhgbo0ji/image/upload/v1759421211/programing_ingxu5.png", level: "APIs" },
  { id: 4,  name: "Python",    icon: "https://res.cloudinary.com/dlhgbo0ji/image/upload/v1759420863/python_svkilp.png",     level: "Algorithms" },
  { id: 11, name: "MongoDB",   icon: "https://res.cloudinary.com/dlhgbo0ji/image/upload/v1765001789/MongoDB_zvuuyr.png",    level: "NoSQL" },
  { id: 5,  name: "SQLite",    icon: "https://res.cloudinary.com/dlhgbo0ji/image/upload/v1759420929/database_ymjm0r.png",   level: "Relational" },
  { id: 6,  name: "Git",       icon: "https://res.cloudinary.com/dlhgbo0ji/image/upload/v1759420991/git_k9eky0.png",       level: "DevOps" },
];

const projects = [
  {
    id: 1, num: "01", accent: "STREAMING PLATFORM",
    title: "Nxt Watch",
    sub: "YouTube-Scale Video Application",
    img: "https://res.cloudinary.com/dlhgbo0ji/image/upload/v1767687714/Screenshot_2026-01-06_135001_chjgnl.png",
    desc: "Full-featured video platform with JWT auth, light/dark themes, trending/gaming/saved video feeds, protected routing, and state-persisted watch lists.",
    tags: ["React JS", "JWT Auth", "REST APIs", "Routing"],
    link: "https://nxt-watch-sxm2-muhammed-asiyas-projects.vercel.app/",
  },
  {
    id: 2, num: "02", accent: "AI-DRIVEN LEARNING",
    title: "MathMind AI",
    sub: "Adaptive Intelligence Math Engine",
    img: "https://res.cloudinary.com/dlhgbo0ji/image/upload/v1791439621/Screenshot_2026-10-08_113529_jxf63s.png",
    desc: "AI-powered personalized math platform with dynamic problem generation, real-time performance analytics, and adaptive difficulty scaling.",
    tags: ["React JS", "AI", "Express", "MongoDB"],
    link: "https://mathmind-ai-client.vercel.app/",
  },
  {
    id: 3, num: "03", accent: "FOOD DELIVERY COMMERCE",
    title: "Tasty Kitchens",
    sub: "Swiggy/Zomato-Scale Food Platform",
    img: "https://res.cloudinary.com/dlhgbo0ji/image/upload/v1767686807/Screenshot_2026-01-06_131206_yq5qb4.png",
    desc: "End-to-end food ordering service with restaurant discovery, dynamic cart state management, React Slick carousels, and payment flow.",
    tags: ["React JS", "React Slick", "Cart State", "Auth"],
    link: "https://asiyas-tastey-kitchens.vercel.app/",
  },
];

const certs = [
  { id:1, name:"React JS",          date:"25 SEP 2025", type:"Frontend Core",      link:"https://certificates.ccbp.in/intensive/react-js?id=SLUDQCATTR" },
  { id:2, name:"Node JS",           date:"20 JUN 2025", type:"Backend Runtime",    link:"https://certificates.ccbp.in/intensive/node-js?id=JEEWWQXTRD" },
  { id:3, name:"JavaScript Essentials", date:"10 MAY 2025", type:"Language", link:"https://certificates.ccbp.in/intensive/javascript-essentials?id=XCRERSSCVD" },
];

const contacts = [
  { id:0, icon:"https://res.cloudinary.com/dlhgbo0ji/image/upload/v1760451296/email_2_mcj1ea.png",   label:"EMAIL",    value:"asiyasmuhammed18@gmail.com", badge:"Direct",       link:"mailto:asiyasmuhammed18@gmail.com" },
  { id:1, icon:"https://res.cloudinary.com/dlhgbo0ji/image/upload/v1760451308/phone_z07cwz.png",    label:"PHONE",    value:"+91 9048999825",             badge:"Immediate",    link:"tel:+919048999825" },
  { id:2, icon:"https://res.cloudinary.com/dlhgbo0ji/image/upload/v1760451321/location_txsyfj.png", label:"LOCATION", value:"Malappuram, Kerala",         badge:"Open Relocate",link:"https://www.google.com/maps?q=Moorkkanad,+Kerala" },
  { id:3, icon:"https://res.cloudinary.com/dlhgbo0ji/image/upload/v1760451284/linkedin_1_gplvga.png",label:"LINKEDIN", value:"Muhammed Asiyas",            badge:"Network",      link:"https://linkedin.com/in/muhammed-asiyas" },
];

const Home = () => (
  <ThemeContext.Consumer>
    {({ isDark }) => {
      const gd = isDark;

      return (
        <div className="w-full flex flex-col min-h-screen">
          <Header />

          {/* ══════════════════════════════════════════════════════════════
              § HERO — Split-screen asymmetric depth stage
              ═════════════════════════════════════════════════════════════ */}
          <section className="relative min-h-screen flex items-center overflow-hidden pt-8 pb-24 sm:pt-12 sm:pb-32">
            {/* Volumetric ambient light wells */}
            <ParallaxBand speed={0.08} className="absolute inset-0 pointer-events-none">
              <div className="absolute top-[10%] left-[5%]  w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-[130px]" />
              <div className="absolute top-[35%] right-[0%] w-[450px] h-[450px] bg-orange-700/10 rounded-full blur-[120px]" />
              <div className="absolute bottom-0  left-[40%] w-[400px] h-[300px] bg-amber-500/8  rounded-full blur-[90px]" />
            </ParallaxBand>

            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

                {/* LEFT: Editorial display copy */}
                <div className="lg:col-span-7 flex flex-col items-start">
                  <ScrollReveal delay={0} direction="up">
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full text-xs font-black tracking-[0.15em] uppercase mb-8 border backdrop-blur-xl bg-amber-500/10 border-amber-500/35 text-amber-500">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-80" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
                      </span>
                      <span className="font-mono text-[10px] text-amber-400">[ STATUS: OPEN ]</span>
                      <span className="hidden sm:block">·</span>
                      <span className="hidden sm:block">Full Stack Engineering Roles</span>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal delay={80} direction="up" distance={50}>
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black font-display tracking-tight leading-[1.06]">
                      I Build<br />
                      <span className="text-gradient-kopiko">Fluid, Fast</span><br />
                      Web Systems.
                    </h1>
                  </ScrollReveal>

                  <ScrollReveal delay={160} direction="up">
                    <p className={`mt-7 text-base sm:text-lg lg:text-xl leading-relaxed max-w-lg ${gd ? "text-[#cfb9a7]" : "text-[#54301a]"}`}>
                      Hi — I'm <strong className={gd ? "text-white font-bold" : "text-[#241209] font-bold"}>Muhammed Asiyas</strong>, a Full Stack Developer who turns ambitious product ideas into polished, production-grade web applications.
                    </p>
                  </ScrollReveal>

                  {/* Liquid count-up stats — horizontal rail */}
                  <ScrollReveal delay={240} direction="up" className="w-full mt-8">
                    <div className={`flex items-stretch gap-0 divide-x rounded-2xl border overflow-hidden w-full max-w-md ${gd ? "divide-amber-900/40 border-amber-900/40 bg-[#180e0a]/70" : "divide-amber-200 border-amber-200 bg-white"}`}>
                      {[
                        { label: "Projects Built",   to: 24,  suffix: "+" },
                        { label: "Coding Hours",     to: 600, suffix: "+" },
                        { label: "Certifications",   to: 10,  suffix: "+" },
                      ].map((stat, i) => (
                        <div key={i} className="flex-1 py-5 px-4 text-center">
                          <p className="text-2xl sm:text-3xl font-black font-display text-gradient-caramel leading-none">
                            <CountUp to={stat.to} suffix={stat.suffix} />
                          </p>
                          <p className={`text-[10px] font-bold uppercase tracking-widest mt-1.5 ${gd ? "text-[#b09683]" : "text-[#6c432b]"}`}>
                            {stat.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </ScrollReveal>

                  {/* CTA buttons */}
                  <ScrollReveal delay={320} direction="up" className="mt-9 flex flex-wrap items-center gap-4">
                    <MagneticWrap>
                      <a
                        href="https://drive.google.com/file/d/1R8do1hM4lvaqRcMfgw3arRUNnxCsoLeV/view"
                        target="_blank" rel="noreferrer"
                        className="water-sheen-btn inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl text-base font-bold text-white bg-kopiko-gradient shadow-xl shadow-amber-900/40 hover:scale-105 active:scale-95 transition-all duration-200"
                      >
                        <Download size={19} className="stroke-[2.5]" /> DOWNLOAD CV
                      </a>
                    </MagneticWrap>
                    <MagneticWrap>
                      <Link to="/projects"
                        className={`water-sheen-btn inline-flex items-center gap-2 px-7 py-4 rounded-2xl text-base font-bold border transition-all hover:scale-105 active:scale-95 ${gd ? "bg-[#1c0f0a]/90 border-amber-900/50 text-[#fffaf5] hover:bg-amber-950/70" : "bg-white border-amber-200 text-[#2b150c] hover:bg-amber-50 shadow-sm"}`}
                      >
                        Selected Works <ArrowRight size={18} />
                      </Link>
                    </MagneticWrap>
                  </ScrollReveal>
                </div>

                {/* RIGHT: 4D floating profile stage */}
                <div className="lg:col-span-5 flex justify-center">
                  <ScrollReveal delay={100} direction="right" distance={60} className="w-full max-w-xs sm:max-w-sm">
                    <div className="relative group">
                      {/* Amber ember halo */}
                      <ParallaxBand speed={-0.06} className="absolute -inset-6 pointer-events-none">
                        <div className="w-full h-full bg-gradient-to-tr from-amber-600 via-orange-600 to-amber-900 rounded-[44px] blur-3xl opacity-45 group-hover:opacity-70 transition-opacity duration-700" />
                      </ParallaxBand>

                      <TiltCard maxTilt={16} scale={1.02} className={`relative rounded-[32px] p-4 border backdrop-blur-2xl ${gd ? "bg-[#180e0a]/90 border-amber-900/60 shadow-2xl shadow-black/80" : "bg-white/95 border-amber-900/20 shadow-2xl shadow-amber-900/15"}`}>
                        <div className="overflow-hidden rounded-2xl relative aspect-[4/5] bg-[#120805]">
                          <img
                            className="w-full h-full object-cover object-top filter contrast-[1.04] transition-transform duration-700 group-hover:scale-108"
                            src="https://res.cloudinary.com/dlhgbo0ji/image/upload/v1794288250/Professional_Office_Headshot_hrjjpa.png"
                            alt="Muhammed Asiyas"
                            onError={e => { e.target.src="https://res.cloudinary.com/dlhgbo0ji/image/upload/v1761236287/IMG_5855.asiyas_p2zbjj.png"; }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                        </div>

                        {/* Floating depth badge */}
                        

                        <div className="mt-4 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-center">
                          <p className={`text-lg sm:text-xl font-bold leading-tight ${gd ? "text-white" : "text-[#241209]"}`}>
                            Muhammed Asiyas
                          </p>
                          <p className="mt-1 text-sm sm:text-base font-semibold leading-snug text-amber-500">
                            Full Stack Architect
                          </p>
                        </div>
                      </TiltCard>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════════
              § 01 — TECHNICAL DOMAINS (Bento + Parallax depth)
              ═════════════════════════════════════════════════════════════ */}
          <section id="skills" className={`py-32 border-t relative overflow-hidden ${gd ? "bg-[#120805]/80 border-amber-900/30" : "bg-[#f7efe3]/80 border-amber-900/10"}`}>
            <ParallaxBand speed={0.1} className="absolute top-[-10%] right-[-5%] pointer-events-none opacity-70">
              <div className="w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[120px]" />
            </ParallaxBand>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              {/* Torn-edge section header */}
              <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-6 mb-20">
                <ScrollReveal direction="left">
                  <div className="inline-flex items-center gap-2 text-[11px] font-mono font-black uppercase tracking-[0.2em] text-amber-500 mb-3">
                    <Code2 size={14} /> [ 01 / CAPABILITIES ]
                  </div>
                  <h2 className="text-4xl sm:text-6xl font-black font-display leading-tight tracking-tight">
                    TECHNICAL<br />DOMAINS
                  </h2>
                </ScrollReveal>
                <ScrollReveal direction="right" delay={100}>
                  <p className={`max-w-sm text-sm sm:text-base leading-relaxed ${gd ? "text-[#b09683]" : "text-[#6c432b]"}`}>
                    Engineering across reactive client interfaces, server-side runtimes, distributed databases, and production DevOps workflows.
                  </p>
                </ScrollReveal>
              </div>

              {/* Bento Architecture */}
              <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
                {/* Wide left pod: Frontend */}
                <ScrollReveal className="xl:col-span-7" direction="left" delay={0}>
                  <TiltCard maxTilt={7} className={`p-8 sm:p-10 rounded-[36px] border h-full flex flex-col ${gd ? "bg-[#180e0a]/85 border-amber-900/40 shadow-2xl" : "bg-white/95 border-amber-900/15 shadow-xl shadow-amber-900/5"}`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-mono font-black uppercase tracking-[0.18em] text-amber-500 flex items-center gap-1.5"><Layers size={14}/> DOMAIN A</span>
                      <span className={`text-[10px] px-2.5 py-1 rounded-full font-bold ${gd ? "bg-amber-900/40 text-amber-400" : "bg-amber-100 text-amber-700"}`}>Frontend Architecture</span>
                    </div>
                    <h3 className={`text-2xl font-bold font-display mb-2 ${gd ? "text-white" : "text-[#241209]"}`}>Client-Side Engineering</h3>
                    <p className={`text-sm leading-relaxed mb-8 ${gd ? "text-[#cfb9a7]" : "text-[#5c3722]"}`}>
                      SPAs with deep component trees, reactive state architectures, and smooth micro-interactions.
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-auto">
                      {frontendSkills.map((s, idx) => (
                        <ScrollReveal key={s.id} delay={idx * 60} direction="scale">
                          <div className={`p-3.5 rounded-2xl border flex items-center gap-3 group hover:-translate-y-1.5 transition-all duration-300 ${gd ? "bg-[#22120b]/80 border-amber-900/35 hover:border-amber-500/50" : "bg-amber-50/70 border-amber-100 hover:border-amber-400/50 hover:bg-white"}`}>
                            <img src={s.icon} alt={s.name} className="w-8 h-8 object-contain flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                            <div className="min-w-0">
                              <p className={`text-xs font-bold truncate ${gd ? "text-white" : "text-[#241209]"}`}>{s.name}</p>
                              <p className="text-[9px] font-mono text-amber-500 truncate">{s.level}</p>
                            </div>
                          </div>
                        </ScrollReveal>
                      ))}
                    </div>
                  </TiltCard>
                </ScrollReveal>

                {/* Narrow right column: 2 stacked pods */}
                <div className="xl:col-span-5 flex flex-col gap-6">
                  <ScrollReveal direction="right" delay={80}>
                    <TiltCard maxTilt={7} className={`p-7 sm:p-8 rounded-[32px] border ${gd ? "bg-[#180e0a]/85 border-amber-900/40 shadow-xl" : "bg-white/95 border-amber-900/15 shadow-xl shadow-amber-900/5"}`}>
                      <div className="flex items-center gap-2 text-[11px] font-mono font-black uppercase tracking-[0.18em] text-orange-500 mb-2">
                        <Database size={14}/> DOMAIN B — Backend & Storage
                      </div>
                      <h3 className={`text-xl font-bold font-display mb-4 ${gd ? "text-white" : "text-[#241209]"}`}>Server Runtimes & Databases</h3>
                      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-2 gap-2.5">
                        {backendSkills.map((s, idx) => (
                          <ScrollReveal key={s.id} delay={idx * 50} direction="scale">
                            <div className={`p-3 rounded-xl border flex items-center gap-2.5 group hover:-translate-y-1 transition-all duration-300 ${gd ? "bg-[#22120b]/80 border-amber-900/35 hover:border-orange-500/40" : "bg-orange-50/60 border-orange-100 hover:border-orange-400/40 hover:bg-white"}`}>
                              <img src={s.icon} alt={s.name} className="w-7 h-7 object-contain flex-shrink-0 group-hover:scale-110 transition-transform" />
                              <div className="min-w-0">
                                <p className={`text-xs font-bold truncate ${gd ? "text-white" : "text-[#241209]"}`}>{s.name}</p>
                                <p className="text-[9px] font-mono text-orange-500 truncate">{s.level}</p>
                              </div>
                            </div>
                          </ScrollReveal>
                        ))}
                      </div>
                    </TiltCard>
                  </ScrollReveal>

                  {/* Micro-pod: System Expertise */}
                  <ScrollReveal direction="right" delay={160}>
                    <TiltCard maxTilt={8} className={`p-6 rounded-[28px] border ${gd ? "bg-[#1f110b]/90 border-amber-900/45 shadow-lg" : "bg-amber-50/90 border-amber-900/15"}`}>
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <Cpu size={28} className="text-amber-500 flex-shrink-0" />
                          <div>
                            <p className={`text-sm font-bold ${gd ? "text-white" : "text-[#241209]"}`}>Systems & DevOps</p>
                            <p className="text-[10px] font-mono text-amber-500">Git · CI/CD Staging · REST Design</p>
                          </div>
                        </div>
                        <span className="shrink-0 px-3 py-1 rounded-full text-[10px] font-black bg-amber-500/15 text-amber-500 border border-amber-500/30">
                          Production
                        </span>
                      </div>
                    </TiltCard>
                  </ScrollReveal>
                </div>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════════
              § 02 — PROJECTS (Alternating editorial magazine layout)
              ═════════════════════════════════════════════════════════════ */}
          <section id="projects" className={`py-32 border-t relative overflow-hidden ${gd ? "border-amber-900/30" : "border-amber-900/10"}`}>
            <ParallaxBand speed={0.07} className="absolute bottom-[-5%] left-[-5%] pointer-events-none opacity-60">
              <div className="w-[500px] h-[400px] bg-orange-700/10 rounded-full blur-[110px]" />
            </ParallaxBand>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
                <ScrollReveal direction="left">
                  <div className="text-[11px] font-mono font-black uppercase tracking-[0.2em] text-amber-500 flex items-center gap-1.5 mb-3">
                    <Sparkles size={14}/> [ 02 / CASE STUDIES ]
                  </div>
                  <h2 className="text-4xl sm:text-6xl font-black font-display leading-tight tracking-tight">
                    PROJECT<br />WORKS
                  </h2>
                </ScrollReveal>
                <ScrollReveal direction="right" delay={100}>
                  <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-bold text-amber-500 hover:text-amber-400 group">
                    Full Archive <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
                  </Link>
                </ScrollReveal>
              </div>

              {/* Alternating showcase rows */}
              {projects.map((p, i) => {
                const isEven = i % 2 === 0;
                return (
                  <ScrollReveal key={p.id} delay={i * 60} direction={isEven ? "left" : "right"} className="mb-16 last:mb-0">
                    <TiltCard maxTilt={5} className={`p-6 sm:p-10 rounded-[36px] border backdrop-blur-xl ${gd ? "bg-[#180e0a]/85 border-amber-900/40 shadow-2xl shadow-black/60" : "bg-white/95 border-amber-900/15 shadow-2xl shadow-amber-900/10"}`}>
                      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center`}>
                        {/* Image — alternates side */}
                        <div className={`${isEven ? "lg:col-span-7 order-1" : "lg:col-span-7 order-1 lg:order-2"} overflow-hidden rounded-2xl border border-amber-900/25 group relative aspect-video bg-[#120805]`}>
                          <img src={p.img} alt={p.title} className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                            <a href={p.link} target="_blank" rel="noreferrer"
                              className="water-sheen-btn inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-kopiko-gradient shadow-lg shadow-amber-900/50">
                              Open Live App <ExternalLink size={13}/>
                            </a>
                          </div>
                        </div>

                        {/* Content — opposite side */}
                        <div className={`${isEven ? "lg:col-span-5 order-2" : "lg:col-span-5 order-2 lg:order-1"} flex flex-col items-start`}>
                          <span className="text-[10px] font-mono font-black uppercase tracking-[0.2em] text-amber-500 mb-1">
                            CASE {p.num} · {p.accent}
                          </span>
                          <h3 className={`text-2xl sm:text-3xl font-extrabold font-display mb-2 ${gd ? "text-white" : "text-[#241209]"}`}>{p.title}</h3>
                          <p className={`text-xs sm:text-sm font-semibold mb-4 ${gd ? "text-amber-500/80" : "text-amber-700"}`}>{p.sub}</p>
                          <p className={`text-sm leading-relaxed mb-6 ${gd ? "text-[#cfb9a7]" : "text-[#5c3722]"}`}>{p.desc}</p>
                          <div className="flex flex-wrap gap-2 mb-8">
                            {p.tags.map((t, ti) => (
                              <span key={ti} className={`px-3 py-1 rounded-xl text-[11px] font-bold border ${gd ? "bg-amber-500/12 text-amber-400 border-amber-500/30" : "bg-amber-50 text-amber-800 border-amber-200"}`}>{t}</span>
                            ))}
                          </div>
                          <MagneticWrap>
                            <a href={p.link} target="_blank" rel="noreferrer"
                              className="water-sheen-btn inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-bold text-white bg-kopiko-gradient shadow-lg shadow-amber-900/30 hover:scale-105 transition-all">
                              Launch Project <ExternalLink size={16}/>
                            </a>
                          </MagneticWrap>
                        </div>
                      </div>
                    </TiltCard>
                  </ScrollReveal>
                );
              })}

              <ScrollReveal delay={120} direction="up" className="mt-14 text-center">
                <Link to="/projects"
                  className="water-sheen-btn inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-bold text-white bg-kopiko-gradient shadow-lg shadow-amber-900/30 hover:scale-105 transition-all">
                  Explore Full Engineering Archive <ArrowRight size={16}/>
                </Link>
              </ScrollReveal>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════════
              § 03 — CERTIFICATIONS (Trophy mosaic stagger)
              ═════════════════════════════════════════════════════════════ */}
          <section className={`py-32 border-t relative overflow-hidden ${gd ? "bg-[#120805]/80 border-amber-900/30" : "bg-[#f7efe3]/80 border-amber-900/10"}`}>
            <ParallaxBand speed={0.09} className="absolute top-[-8%] right-[-5%] pointer-events-none opacity-50">
              <div className="w-[450px] h-[450px] bg-amber-600/12 rounded-full blur-[110px]" />
            </ParallaxBand>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                <ScrollReveal direction="left">
                  <div className="text-[11px] font-mono font-black uppercase tracking-[0.2em] text-amber-500 flex items-center gap-1.5 mb-3">
                    <Award size={14}/> [ 03 / ACCREDITATIONS ]
                  </div>
                  <h2 className="text-4xl sm:text-6xl font-black font-display leading-tight tracking-tight">
                    INDUSTRY<br />CREDENTIALS
                  </h2>
                </ScrollReveal>
                <ScrollReveal direction="right" delay={100}>
                  <Link to="/certificates" className="inline-flex items-center gap-2 text-sm font-bold text-amber-500 hover:text-amber-400 group">
                    All 10+ Official Certs <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform"/>
                  </Link>
                </ScrollReveal>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {certs.map((c, i) => (
                  <ScrollReveal key={c.id} delay={i * 100} direction="up">
                    <TiltCard maxTilt={10} className={`p-7 rounded-[28px] border flex flex-col justify-between h-full ${gd ? "bg-[#180e0a]/85 border-amber-900/40 shadow-xl" : "bg-white/95 border-amber-900/15 shadow-xl shadow-amber-900/5"}`}>
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-[9px] font-mono font-black uppercase tracking-[0.18em] px-2.5 py-1 rounded-full bg-amber-500/15 text-amber-500">{c.type}</span>
                          <span className={`text-xs font-semibold ${gd ? "text-[#b09683]" : "text-[#6c432b]"}`}>{c.date}</span>
                        </div>
                        <h3 className={`text-xl font-bold font-display mb-6 ${gd ? "text-white" : "text-[#241209]"}`}>{c.name}</h3>
                      </div>
                      <a href={c.link} target="_blank" rel="noreferrer"
                        className="water-sheen-btn inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl text-xs font-bold text-amber-500 border border-amber-500/35 hover:bg-kopiko-gradient hover:text-white hover:border-transparent transition-all">
                        Verify Credential <ExternalLink size={13}/>
                      </a>
                    </TiltCard>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════════
              § 04 — CONTACT (Transmission hub grid)
              ═════════════════════════════════════════════════════════════ */}
          <section id="contacts" className={`py-32 border-t relative overflow-hidden ${gd ? "border-amber-900/30" : "border-amber-900/10"}`}>
            <ParallaxBand speed={0.06} className="absolute bottom-[-5%] right-[-5%] pointer-events-none opacity-60">
              <div className="w-[500px] h-[400px] bg-amber-600/10 rounded-full blur-[120px]" />
            </ParallaxBand>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <ScrollReveal direction="up" className="max-w-xl mb-16">
                <div className="text-[11px] font-mono font-black uppercase tracking-[0.2em] text-amber-500 flex items-center gap-1.5 mb-3">
                  <Mail size={14}/> [ 04 / TRANSMISSION STATION ]
                </div>
                <h2 className="text-4xl sm:text-6xl font-black font-display leading-tight tracking-tight mb-4">
                  LET'S BUILD<br />SOMETHING.
                </h2>
                <p className={`text-sm sm:text-base leading-relaxed ${gd ? "text-[#b09683]" : "text-[#6c432b]"}`}>
                  Open for full-time roles, contract projects, and technical collaborations. I respond quickly.
                </p>
              </ScrollReveal>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {contacts.map((c, i) => (
                  <ScrollReveal key={c.id} delay={i * 80} direction="up">
                    <TiltCard maxTilt={10} className="h-full">
                      <a href={c.link} target="_blank" rel="noreferrer"
                        className={`flex flex-col items-center text-center p-7 rounded-[28px] border h-full transition-all duration-300 group hover:-translate-y-1.5 hover:shadow-2xl ${gd ? "bg-[#180e0a]/85 border-amber-900/40 hover:border-amber-500/50 hover:shadow-amber-950/50" : "bg-white/95 border-amber-900/15 hover:border-amber-500/40 hover:shadow-amber-900/10"}`}>
                        <div className="w-16 h-16 rounded-2xl flex items-center justify-center p-3.5 mb-4 bg-gradient-to-br from-amber-600/15 to-orange-600/15 border border-amber-500/25 group-hover:border-amber-500/50 transition-colors">
                          <img src={c.icon} alt={c.label} className="w-full h-full object-contain" />
                        </div>
                        <span className="text-[9px] font-mono font-black uppercase tracking-[0.2em] text-amber-500 mb-1">{c.badge}</span>
                        <h4 className={`text-base font-bold mb-1.5 ${gd ? "text-white" : "text-[#241209]"}`}>{c.label}</h4>
                        <p className={`text-xs break-all mb-5 ${gd ? "text-[#cfb9a7]" : "text-[#5c3722]"}`}>{c.value}</p>
                        <span className="mt-auto text-xs font-bold text-amber-500 flex items-center gap-1 group-hover:gap-2 transition-all">
                          Open <ExternalLink size={11}/>
                        </span>
                      </a>
                    </TiltCard>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal delay={200} direction="up" className="mt-14 text-center">
                <MagneticWrap>
                  <Link to="/contacts"
                    className="water-sheen-btn inline-flex items-center gap-2.5 px-9 py-4.5 rounded-2xl text-base font-bold text-white bg-kopiko-gradient shadow-xl shadow-amber-900/40 hover:scale-105 active:scale-95 transition-all">
                    Open Message Console <ArrowRight size={18}/>
                  </Link>
                </MagneticWrap>
              </ScrollReveal>
            </div>
          </section>

          {/* Footer */}
          <footer className={`py-10 border-t ${gd ? "bg-[#0b0402] border-amber-900/30 text-[#917561]" : "bg-[#f4ebe0] border-amber-900/10 text-[#6d4e38]"}`}>
            <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
              <span className="font-mono font-bold text-amber-500/80">MUHAMMED ASIYAS · FULL STACK</span>
              <span>© {new Date().getFullYear()} Muhammed Asiyas — 4D Water Drop Physics & Kopiko Gradients</span>
            </div>
          </footer>
        </div>
      );
    }}
  </ThemeContext.Consumer>
);

export default Home;

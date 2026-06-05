import Image from 'next/image';
import { ArrowUpRight, BadgeCheck, Bug, CheckCircle2, Database, Download, ExternalLink, Mail, MapPin, Phone, ShieldCheck, TestTube2, Zap } from 'lucide-react';
import Header from '@/components/Header';
import SectionHeading from '@/components/SectionHeading';
import ContactForm from '@/components/ContactForm';
 
const stats = [
  { value: '2+', label: 'Years QA Experience' },
  { value: '800+', label: 'Test Cases Maintained' },
  { value: '150+', label: 'REST APIs Validated' },
  { value: '40%', label: 'Release Stability Improved' },
];
 
const skills = [
  'Manual Testing', 'Functional Testing', 'Regression Testing', 'Integration Testing', 'System Testing', 'Smoke Testing', 'Sanity Testing', 'UI Testing', 'UAT', 'End-to-End Testing', 'Cross-Browser Testing', 'Risk-Based Testing', 'Playwright', 'Selenium', 'JMeter', 'Postman', 'Swagger', 'Jira', 'Zephyr', 'TestRail', 'BrowserStack', 'Chrome DevTools', 'Prisma Studio', 'GitHub Actions', 'SQL', 'MySQL', 'MongoDB', 'JavaScript', 'Python', 'Java'
];
 
const experience = [
  {
    company: 'Pak Dev Studio',
    role: 'QA Engineer',
    period: 'Jan 2026 – Present',
    metric: '150+ APIs',
    points: [
      'Validate 150+ REST APIs across 12+ user roles using Postman and Swagger.',
      'Develop Playwright regression scripts to reduce manual QA effort across critical workflows.',
      'Verify backend data accuracy across 38 database tables using Prisma Studio.',
      'Triage critical defects per release cycle and validate fixes before production release.',
    ],
  },
  {
    company: 'Decimal Solution',
    role: 'Junior QA Engineer',
    period: 'May 2025 – Dec 2025',
    metric: '400+ cases',
    points: [
      'Designed and maintained 400+ test cases across 6 ERP modules.',
      'Tracked critical defects in Jira and supported a 95% defect closure rate within sprints.',
      'Performed functional, UI, integration, smoke, and end-to-end testing for release stability.',
      'Validated backend endpoints, payloads, error handling, and SQL database records.',
    ],
  },
  {
    company: 'E-Digital Pakistan',
    role: 'QA Engineer',
    period: 'Jul 2024 – Mar 2025',
    metric: '40+ bugs',
    points: [
      'Designed and executed 80+ test cases for web and mobile applications.',
      'Tested Android applications across multiple OS versions for functional and UI reliability.',
      'Validated REST APIs with Postman and logged bugs in payment and onboarding flows.',
    ],
  },
];
 
const featuredProjects = [
  {
    title: 'DAR/DALC — AI-Powered Enterprise Platform (6-Module System)',
    label: 'Dar Dashboard',
    year: '2026',
    type: 'Enterprise Dashboard QA',
    description: 'Owned end-to-end QA across 6 role-based portals: Tele Marketer, Sales Representative (AI Website Generator), Pro Applicant, Auditor, Service Provider, and Back Office — covering 12+ user roles, 150+ APIs, and 38 database tables.',
    highlights: ['Multi-role workflow', 'RBAC testing', 'AI website generation', '346K+ customer records'],
    image: '/projects/Dar_Dashboard.png',
    imageClass: 'object-cover object-top',
    accessLabel: 'Private',
  },
  {
    title: 'Dubai Business Experience',
    label: 'Dubai Business Enterprise',
    year: '2026',
    type: 'Business Website QA',
    description: 'Reviewed a Dubai business consultancy website experience with focus on landing-page quality, navigation, responsiveness, and overall UI polish for a stronger user journey.',
    highlights: ['Landing page QA', 'Responsive testing', 'Navigation review', 'UI consistency'],
    image: '/projects/dubai-business-enterprise.png',
    imageClass: 'object-cover object-top',
    link: 'https://dubaibize.com/',
  },
  {
    title: 'Establisher — Global Business Consulting',
    label: 'Establisher',
    year: '2026',
    type: 'Corporate Website QA',
    description: 'Tested 10+ website sections/pages for navigation, UI consistency, responsiveness, and content accuracy. Validated 6 core service pages and key flows to support a polished release.',
    highlights: ['10+ sections tested', '6 service pages', 'Responsive testing', 'Content validation'],
    image: '/projects/establisher.png',
    imageClass: 'object-cover object-top',
    link: 'https://establisherai.com/en/',
  },
  {
    title: 'Cell it — AI-Powered Marketplace App',
    label: 'Cell it',
    year: '2025',
    type: 'Mobile App QA',
    description: 'QA contribution for an AI-powered buy and sell marketplace app, with focus on onboarding experience, UI quality, usability, and flow validation across mobile screens.',
    highlights: ['Mobile UI testing', 'User flow validation', 'Onboarding screens', 'Marketplace app'],
    image: '/projects/cell-it.jpg',
    imageClass: 'object-contain object-center',
    imageWrapClass: 'bg-slate-950',
    playStoreLink: 'https://play.google.com/store/apps/details?id=com.cellit.cellit&pli=1',
    appStoreLink: 'https://apps.apple.com/pk/app/cell-it-buy-sell-marketplace/id6502634772',
  },
];
//  hmd koni de
const moreProjects = [
  {
    title: 'Gamer PC — ERP System',
    year: '2025',
    type: 'ERP QA',
    image: '/projects/GamerPc-image.png',
    imageClass: 'object-cover object-top',
    description: 'Covered inventory, sales, customer, and order management modules with 500+ test cases and backend database validation.',
    highlights: ['500+ test cases', 'Endpoint validation', 'Data sync defects', 'Agile releases'],
    accessLabel: 'Private',
  },
  {
    title: 'Trakviva Fit — Fitness & Wellness App',
    year: '2026',
    type: 'Mobile QA',
    image: '/projects/TrakvivaFit.png',
    imageClass: 'object-cover object-top',
    description: 'Validated 8+ core features including personalized meal planning, food photo scan, fasting support, activity and exercise tracking, water goal monitoring, custom meal creation, and streak system across iOS before public release.',
    highlights: ['AI-powered features', 'Xcode Simulator', 'User flow validation', 'App Store live'],
    appStoreLink: 'https://apps.apple.com/us/app/trakviva-fit/id6764317036',
  },
  {
    title: 'Harmonia — Luxury Concierge & Property Platform',
    year: '2026',
    type: 'Web Platform QA',
    image: '/projects/Harmonia.png',
    imageClass: 'object-cover object-top',
    description: 'Tested a bilingual (English/French) luxury concierge and short-term rental management platform for Marrakech. Validated 6 core pages including Owners, Travelers, Investment, Partners, About, and Contact across desktop and mobile.',
    highlights: ['Bilingual testing EN/FR', 'Booking flow validation', 'Responsive testing', 'Multi-currency UI'],
    link: 'https://harmonia-client-baseer-ahmeds-projects-38eb4ee9.vercel.app/en/proprietaires',
  },
];
 
const achievements = [
  'Improved release stability by 40% through comprehensive regression and functional testing.',
  'Reduced manual QA effort by 20% by implementing Playwright automation.',
  'Identified 40+ critical defects in pre-production, preventing production incidents.',
  'Ensured stability of a multi-role enterprise platform covering 12+ user roles, 150+ APIs, and 38 database tables.',
];
 
function Card({ children, className = '' }) {
  return <div className={`glass premium-card rounded-[30px] p-6 ${className}`}>{children}</div>;
}
 
export default function Home() {
  return (
    <main id="home" className="min-h-screen overflow-hidden">
      <Header />
 
      {/* ── HERO ── */}
      <section className="relative section-pad pb-20 pt-36 md:pb-28 md:pt-44">
        <div className="absolute left-1/2 top-24 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-cyan-300/10 blur-[100px]" />
        <div className="container grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200/20 bg-cyan-200/10 px-4 py-2 text-sm font-semibold text-cyan-100 shadow-[0_0_40px_rgba(103,232,249,0.12)]">
              <ShieldCheck size={16} /> ISTQB-Certified Software QA Engineer
            </div>
            <h1 className="mt-7 max-w-5xl text-5xl font-semibold leading-[1.02] tracking-[-0.065em] text-gradient md:text-7xl lg:text-[84px]">
              Premium QA for products that cannot afford release risk.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              I am Hamad Ur Rehman, a Software QA Engineer based in Islamabad with experience in manual testing, automation, API validation, database testing, and enterprise workflow quality assurance.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#projects" className="btn-primary">
                View Projects <ArrowUpRight size={17} />
              </a>
              <a href="/Hamad-Ur-Rehman-QA-Resume.pdf" download className="btn-secondary">
                Download Resume <Download size={17} />
              </a>
              <a href="#contact" className="btn-secondary">
                Contact Me <Mail size={17} />
              </a>
            </div>
            <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
              {['Manual QA', 'Automation QA', 'API + DB Testing'].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm font-semibold text-slate-200">
                  {item}
                </div>
              ))}
            </div>
          </div>
 
          <div className="relative">
            <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-violet-300/20 blur-3xl" />
            <Card className="overflow-hidden p-0">
              <div className="relative border-b border-white/10 bg-white/[0.035] p-6">
                <div className="absolute right-6 top-6 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-semibold text-emerald-100">
                  Available
                </div>
                <div className="grid size-28 place-items-center rounded-[32px] border border-cyan-200/20 bg-cyan-200/10 text-4xl font-black text-white shadow-2xl shadow-cyan-950/40">
                  QA
                </div>
                <h2 className="mt-7 text-3xl font-semibold tracking-tight text-white">Hamad Ur Rehman</h2>
                <p className="mt-2 text-slate-400">Software Quality Assurance Engineer</p>
              </div>
              <div className="grid gap-4 p-6 text-sm text-slate-300">
                <p className="flex items-center gap-3"><MapPin size={18} className="text-cyan-200" /> Islamabad, Pakistan</p>
                <p className="flex items-center gap-3"><Phone size={18} className="text-cyan-200" /> +92 331 8419013</p>
                <p className="flex items-center gap-3"><Mail size={18} className="text-cyan-200" /> rehmanbangash946@gmail.com</p>
              </div>
              <div className="grid grid-cols-2 border-t border-white/10">
                <div className="p-6">
                  <p className="text-3xl font-bold text-white">12+</p>
                  <p className="mt-1 text-sm text-slate-400">User roles tested</p>
                </div>
                <div className="border-l border-white/10 p-6">
                  <p className="text-3xl font-bold text-white">38</p>
                  <p className="mt-1 text-sm text-slate-400">DB tables verified</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
 
      {/* ── STATS ── */}
      <section className="section-pad pb-16">
        <div className="container grid gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.label} className="text-center">
              <div className="text-4xl font-black tracking-tight text-white">{stat.value}</div>
              <div className="mt-2 text-sm text-slate-400">{stat.label}</div>
            </Card>
          ))}
        </div>
      </section>
 
      {/* ── ABOUT ── */}
      <section id="about" className="section-pad py-20">
        <div className="container">
          <SectionHeading
            eyebrow="About"
            title="Quality-focused engineer for web, ERP, AI, and mobile products"
            description="My work combines structured test planning, defect lifecycle management, automation, API testing, and database validation to protect product stability before release."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              { icon: TestTube2, title: 'Test Strategy', text: 'Test planning, test case design, risk-based coverage, regression suites, and release verification.' },
              { icon: Zap, title: 'Automation', text: 'Playwright and Selenium automation for critical workflows and faster retest cycles.' },
              { icon: Database, title: 'API & Data QA', text: 'REST API validation with Postman and Swagger, plus SQL and Prisma Studio data verification.' },
            ].map((item) => (
              <Card key={item.title}>
                <div className="grid size-14 place-items-center rounded-2xl border border-cyan-200/20 bg-cyan-200/10">
                  <item.icon className="text-cyan-200" size={28} />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-400">{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
 
      {/* ── EXPERIENCE ── */}
      <section id="experience" className="section-pad py-20">
        <div className="container">
          <SectionHeading
            eyebrow="Experience"
            title="Professional QA experience"
            description="Hands-on testing experience across enterprise platforms, ERP systems, web applications, mobile applications, payment flows, and backend APIs."
          />
          <div className="relative space-y-5">
            {experience.map((job) => (
              <Card key={job.company} className="grid gap-6 md:grid-cols-[0.32fr_1fr_0.18fr]">
                <div>
                  <p className="text-sm font-semibold text-cyan-200">{job.period}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">{job.company}</h3>
                  <p className="mt-1 text-slate-400">{job.role}</p>
                </div>
                <ul className="grid gap-3">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-3 text-slate-300">
                      <CheckCircle2 className="mt-1 shrink-0 text-cyan-200" size={17} />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="flex items-start justify-start md:justify-end">
                  <span className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-bold text-white">{job.metric}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
 
      {/* ── PROJECTS ── */}
      <section id="projects" className="section-pad py-20">
        <div className="container">
          <SectionHeading
            eyebrow="Projects"
            title="Featured QA projects with screenshots"
            description="A polished project showcase using the screenshots for DAR/DALC, Dubai Business Enterprise, Establisher, and Cell it, plus CV-based projects."
          />
 
          {/* Featured projects grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <Card key={project.title} className="flex flex-col overflow-hidden p-3">
                <div className={`relative aspect-[16/10] overflow-hidden rounded-[24px] border border-white/10 ${project.imageWrapClass || 'bg-white/[0.03]'}`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={project.imageClass}
                  />
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
                  <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                    <span className="rounded-full border border-white/10 bg-black/55 px-3 py-1 text-[11px] font-semibold tracking-wide text-white backdrop-blur-xl">
                      {project.label}
                    </span>
                  </div>
                </div>
                <div className="px-3 pb-3 pt-5">
                  <div className="flex items-center justify-between gap-4">
                    <span className="rounded-full border border-cyan-200/20 bg-cyan-200/10 px-3 py-1 text-xs font-semibold text-cyan-100">{project.type}</span>
                    <span className="text-sm text-slate-500">{project.year}</span>
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-4 leading-7 text-slate-400">{project.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.highlights.map((tag) => (
                      <span key={tag} className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300">{tag}</span>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-4">
                    {project.playStoreLink && (
                      <a href={project.playStoreLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200">
                        View on Play Store <ExternalLink size={15} />
                      </a>
                    )}
                    {project.appStoreLink && (
                      <a href={project.appStoreLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200">
                        View on App Store <ExternalLink size={15} />
                      </a>
                    )}
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200">
                        Visit Website <ExternalLink size={15} />
                      </a>
                    )}
                    {!project.link && !project.playStoreLink && !project.appStoreLink && project.accessLabel && (
                      <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-300">
                        {project.accessLabel}
                      </span>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
          {/* End featured projects grid */}
 
          {/* More projects grid — now supports images */}
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {moreProjects.map((project) => (
              <Card key={project.title} className="flex flex-col overflow-hidden p-3">
 
                {/* Show image if available, otherwise render a minimal text-only header */}
                {project.image ? (
                  <div className={`relative aspect-[16/10] overflow-hidden rounded-[24px] border border-white/10 ${project.imageWrapClass || 'bg-white/[0.03]'}`}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className={project.imageClass || 'object-cover object-top'}
                    />
                    <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
                  </div>
                ) : (
                  <div className="flex h-16 items-center rounded-[24px] border border-white/10 bg-white/[0.03] px-5">
                    <span className="text-sm font-semibold text-slate-400">{project.type}</span>
                  </div>
                )}
 
                <div className="flex flex-1 flex-col px-3 pb-3 pt-5">
                  <div className="flex items-center justify-between gap-4">
                    <span className="rounded-full border border-cyan-200/20 bg-cyan-200/10 px-3 py-1 text-xs font-semibold text-cyan-100">{project.type}</span>
                    <span className="text-sm text-slate-500">{project.year}</span>
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-4 flex-1 leading-7 text-slate-400">{project.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.highlights.map((tag) => (
                      <span key={tag} className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300">{tag}</span>
                    ))}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-4">
                    {project.appStoreLink && (
                      <a href={project.appStoreLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200">
                        View on App Store <ExternalLink size={15} />
                      </a>
                    )}
                    {project.playStoreLink && (
                      <a href={project.playStoreLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200">
                        View on Play Store <ExternalLink size={15} />
                      </a>
                    )}
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200">
                        Visit Website <ExternalLink size={15} />
                      </a>
                    )}
                    {!project.appStoreLink && !project.playStoreLink && !project.link && project.accessLabel && (
                      <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-300">
                        {project.accessLabel}
                      </span>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
          {/* End more projects grid */}
 
        </div>
      </section>
 
      {/* ── SKILLS ── */}
      <section id="skills" className="section-pad py-20">
        <div className="container">
          <SectionHeading
            eyebrow="Skills"
            title="Technical QA toolkit"
            description="A practical stack for test design, automation, API validation, defect tracking, database checks, and release assurance."
          />
          <Card>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span key={skill} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-200/30 hover:bg-cyan-200/10 hover:text-white">
                  {skill}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </section>
 
      {/* ── CERTIFICATIONS & ACHIEVEMENTS ── */}
      <section className="section-pad py-20">
        <div className="container grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <Card>
            <BadgeCheck className="text-cyan-200" size={34} />
            <h2 className="mt-6 text-3xl font-semibold text-white">Certifications & Education</h2>
            <div className="mt-6 space-y-5 text-slate-300">
              <p><strong className="text-white">BS Computer Science</strong><br />University of Peshawar — CGPA 3.5/4.0</p>
              <p><strong className="text-white">ISTQB Foundation Level</strong><br />Board Infinity, Coursera</p>
              <p><strong className="text-white">Introduction to Software Testing</strong><br />University of Minnesota, Coursera</p>
              <p><strong className="text-white">Project Management</strong><br />Google, Coursera</p>
            </div>
          </Card>
          <Card>
            <Bug className="text-cyan-200" size={34} />
            <h2 className="mt-6 text-3xl font-semibold text-white">Key achievements</h2>
            <ul className="mt-6 grid gap-4">
              {achievements.map((item) => (
                <li key={item} className="flex gap-3 text-slate-300">
                  <CheckCircle2 className="mt-1 shrink-0 text-cyan-200" size={17} />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>
 
      {/* ── CONTACT ── */}
      <section id="contact" className="section-pad py-20">
        <div className="container grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Contact"
              title="Let's discuss your QA needs"
              description="Use the contact form for QA roles, manual testing, automation, API testing, database validation, or release verification work."
            />
            <Card className="space-y-4">
              <p className="flex items-center gap-3 text-slate-300"><Mail size={18} className="text-cyan-200" /> rehmanbangash946@gmail.com</p>
              <p className="flex items-center gap-3 text-slate-300"><Phone size={18} className="text-cyan-200" /> +92 331 8419013</p>
              <p className="flex items-center gap-3 text-slate-300"><MapPin size={18} className="text-cyan-200" /> Islamabad, Pakistan</p>
              <a href="/Hamad-Ur-Rehman-QA-V1.pdf" download className="btn-primary mt-5 w-full justify-center">
                Download Resume <Download size={17} />
              </a>
            </Card>
          </div>
          <ContactForm />
        </div>
      </section>
 
      {/* ── FOOTER ── */}
      <footer className="border-t border-white/10 section-pad py-8">
        <div className="container flex justify-center">
          <p className="text-center text-sm text-slate-500">
            © 2026 Hamad Ur Rehman. All rights reserved.
          </p>
        </div>
      </footer>
 
    </main>
  );
}
 
import Link from 'next/link';
import { Download, Link2Icon } from 'lucide-react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact Us', href: '#contact' },
];

export default function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4">
      <div className="container flex h-[72px] items-center justify-between rounded-[26px] border border-white/10 bg-[#070914]/75 px-4 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl md:px-5">
        <Link href="#home" className="group flex items-center gap-3">
          <span className="relative grid size-11 place-items-center overflow-hidden rounded-2xl border border-cyan-200/20 bg-cyan-200/10 text-sm font-black text-cyan-100 shadow-lg shadow-cyan-950/30">
            <span className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.28),transparent_40%)]" />
            <span className="relative">HR</span>
          </span>
          <span className="hidden sm:block">
            <span className="block text-sm font-semibold tracking-wide text-white">Hamad Ur Rehman</span>
            <span className="block text-xs text-slate-400">SQA Engineer</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.035] p-1 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-full px-4 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link className = "rounded-full bg-white px-5 py-2.5 text-sm font-bold text-slate-950 shadow-[0_12px_40px_rgba(255,255,255,0.12)] transition hover:bg-cyan-100 "  href={"https://www.linkedin.com/in/hamadurrehman946/"}>
        <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  className="w-6 h-6 text-[#0A66C2]"
  fill="currentColor"
>
  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.48 1s2.5 1.12 2.5 2.5zM0 8h5v16H0V8zm8 0h4.79v2.19h.07c.67-1.27 2.3-2.6 4.74-2.6 5.07 0 6 3.34 6 7.68V24h-5v-7.1c0-1.69-.03-3.87-2.36-3.87-2.37 0-2.73 1.85-2.73 3.75V24H8V8z"/>
</svg>
          </Link>
          <Link href="/Hamad-Ur-Rehman-QA-V1.pdf" download className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-white transition hover:border-cyan-200/40 hover:bg-cyan-200/10 md:inline-flex">
       
            <Download size={16} /> Resume
          </Link>
          <Link href="#contact" className="rounded-full bg-white px-5 py-2.5 text-sm font-bold text-slate-950 shadow-[0_12px_40px_rgba(255,255,255,0.12)] transition hover:bg-cyan-100">
            Hire Me
          </Link>
        </div>
      </div>
    </header>
    // Sana ullah is very good girl
  );
}

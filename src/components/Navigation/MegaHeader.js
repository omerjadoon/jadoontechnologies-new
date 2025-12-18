"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Image from "next/image"
import profileImg from "@/public/jadoon technologies logo.png"
import {
  Rocket, Globe, Smartphone, Code2, Palette, Cpu, Brain, Sparkles, Blocks, Cloud,
  ShoppingBag, Plane, Radio, Landmark, Heart,
  FileText, BookOpen, Video, Users,
  Info, Star, UserCheck, Leaf, HeartHandshake, Briefcase, Mail, Phone, MapPin,
  ChevronRight
} from "lucide-react";

/**
 * Mobile-ready Mega Header with stable, animated dropdowns
 * - Dropdowns stay open while hovering over trigger or menu
 * - Smooth animations and transitions
 * - Dark/Light theme toggle
 */

function cx() {
  return Array.from(arguments).filter(Boolean).join(" ");
}
const MoonIcon = (p) => (
  <svg viewBox="0 0 24 24" width="16" height="16" {...p}>
    <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
  </svg>
);
const SunIcon = (p) => (
  <svg viewBox="0 0 24 24" width="16" height="16" {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </svg>
);

// Theme hook
export function useThemeSwitch() {
  const [mode, setMode] = useState(() => {
    if (typeof window === "undefined") return "light";
    const stored = window.localStorage.getItem("theme");
    if (stored === "dark" || stored === "light") return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });
  useEffect(() => {
    const root = document.documentElement;
    if (mode === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    window.localStorage.setItem("theme", mode);
  }, [mode]);
  return [mode, (m) => setMode(m)];
}

// --- Data ------------------------------------------------------------------
const NAV = {
  Services: [
    { title: "Digital Transformation", href: "/services/digital-transformation", icon: Rocket, desc: "Reimagine your business for the digital age" },
    { title: "Web Development", href: "/services/web-development", icon: Globe, desc: "Scalable, high-performance web solutions" },
    { title: "Mobile App Development", href: "/services/mobile-app-development", icon: Smartphone, desc: "Native and cross-platform mobile apps" },
    { title: "Custom Software", href: "/services/custom-software", icon: Code2, desc: "Tailored software to fit your unique needs" },
    { title: "UI/UX Design", href: "/services/ui-ux", icon: Palette, desc: "User-centric design that delights" },
    { title: "Emerging Tech", href: "/services/emerging-tech", icon: Cpu, desc: "Stay ahead with cutting-edge technologies" },
    { title: "AI & Data Analytics", href: "/services/ai-data", icon: Brain, desc: "Turn data into actionable insights" },
    { title: "Generative AI", href: "/services/generative-ai", icon: Sparkles, desc: "Automate and innovate with GenAI" },
    { title: "Blockchain & Web3", href: "/services/blockchain-web3", icon: Blocks, desc: "Decentralized solutions for the future" },
    { title: "Cloud Solutions", href: "/services/data-cloud", icon: Cloud, desc: "Secure and scalable cloud infrastructure" },
  ],
  Industries: [
    { title: "Ecommerce", href: "/industries/ecommerce", icon: ShoppingBag, desc: "Online retail solutions" },
    { title: "Travel & Hospitality", href: "/industries/travel-hospitality", icon: Plane, desc: "Booking and management systems" },
    { title: "TMT", href: "/industries/tmt", icon: Radio, desc: "Tech, Media, and Telecom" },
    { title: "Banking & Finance", href: "/industries/bfs", icon: Landmark, desc: "Fintech and secure banking" },
    { title: "Healthcare", href: "/industries/healthcare", icon: Heart, desc: "Digital health and patient care" },
  ],
  Insights: [
    { title: "Case Studies", href: "/insights/case-studies", icon: FileText, desc: "Real-world success stories" },
    { title: "Blog", href: "/insights/blog", icon: BookOpen, desc: "Latest trends and tech insights" },
    { title: "Videos", href: "/insights/videos", icon: Video, desc: "Tech talks and demos" },
    { title: "Workplace Culture", href: "/insights/workplace-culture", icon: Users, desc: "Life at Jadoon Technologies" },
  ],
  About: [
    { title: "Who We Are", href: "/about/who-we-are", icon: Info, desc: "Our story and mission" },
    { title: "Leadership", href: "/about/leadership", icon: UserCheck, desc: "Meet the team leading the way" },
    { title: "Sustainability", href: "/about/sustainability", icon: Leaf, desc: "Commitment to a greener future" },
    { title: "CSR", href: "/about/csr", icon: HeartHandshake, desc: "Corporate Social Responsibility" },
    { title: "Careers", href: "/about/careers", icon: Briefcase, desc: "Join our growing team" },
    { title: "Contact Us", href: "/contact", icon: Mail, desc: "Get in touch with us" },
  ],
};

const REGIONS = [
  { title: "🌐 Global", href: "/region/global" },
  { title: "🇺🇸 North America", href: "/region/na" },
  { title: "🇪🇺 Europe", href: "/region/europe-uk" },
];

// --- Improved Hover Management ---------------------------------------------
function useStableHover() {
  const [open, setOpen] = useState(null);
  const closeTimer = useRef(null);
  const openTimer = useRef(null);

  const openMenu = (key) => {
    // Clear any pending close
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }

    // Clear any pending open
    if (openTimer.current) {
      clearTimeout(openTimer.current);
      openTimer.current = null;
    }

    // Add slight delay to prevent rapid opening when moving cursor across items
    openTimer.current = setTimeout(() => {
      setOpen(key);
      openTimer.current = null;
    }, 100);
  };

  const scheduleClose = () => {
    // Clear any pending open
    if (openTimer.current) {
      clearTimeout(openTimer.current);
      openTimer.current = null;
    }

    // Only schedule close if not already scheduled
    if (closeTimer.current) return;

    closeTimer.current = setTimeout(() => {
      setOpen(null);
      closeTimer.current = null;
    }, 200);
  };

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  useEffect(() => {
    return () => {
      if (closeTimer.current) {
        clearTimeout(closeTimer.current);
      }
      if (openTimer.current) {
        clearTimeout(openTimer.current);
      }
    };
  }, []);

  return { open, openMenu, scheduleClose, cancelClose };
}

// --- Component -------------------------------------------------------------
export default function MegaHeader() {
  const { open, openMenu, scheduleClose, cancelClose } = useStableHover();
  const keys = Object.keys(NAV);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mode, setMode] = useThemeSwitch();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top info bar */}
      <div
        className={cx(
          "hidden text-xs md:block transition-all duration-300 ease-out overflow-hidden",
          "bg-blue-900/95 dark:bg-neutral-900 border-b border-white/10 dark:border-neutral-800",
          scrolled ? "max-h-0 opacity-0 py-0" : "max-h-14 py-2.5"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
          <div className="flex items-center gap-6 text-white/90 dark:text-neutral-400">
            <a
              href="mailto:info@jadoontechnologies.com"
              className="flex items-center gap-2 hover:text-white transition-colors group"
            >
              <Mail className="h-3.5 w-3.5 text-blue-400 group-hover:scale-110 transition-transform" />
              <span className="font-medium">info@jadoontechnologies.com</span>
            </a>

            <div className="h-3 w-px bg-white/20 dark:bg-neutral-700" />

            <div className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-blue-400" />
              <span className="font-medium">USA • Pakistan • Germany</span>
            </div>
          </div>

          <div className="flex items-center gap-6 text-white/90 dark:text-neutral-400">
            <a
              href="tel:+923359119460"
              className="flex items-center gap-2 hover:text-white transition-colors group"
            >
              <Phone className="h-3.5 w-3.5 text-blue-400 group-hover:scale-110 transition-transform" />
              <span className="font-semibold tracking-wide">+92 335 9119460</span>
            </a>
          </div>
        </div>
      </div>

      {/* Sticky NAV */}
      <header
        className={cx(
          "sticky top-0 z-[60] w-full border-b transition-all duration-300",
          "bg-white dark:bg-neutral-900/100 backdrop-blur-xl",
          scrolled
            ? "border-neutral-200/80 dark:border-neutral-800/80 shadow-[0_6px_20px_-10px_rgba(0,0,0,0.35)]"
            : "border-transparent shadow-lg"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-6 lg:px-8 py-2.5">
          {/* Mobile hamburger */}
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 text-neutral-800 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-300 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800 md:hidden transition-colors"
            aria-label="Open menu"
            onClick={() => setMobileOpen((s) => !s)}
          >
            <span className="sr-only">Menu</span>
            <div className={cx("space-y-1.5 transition-transform", mobileOpen ? "scale-95" : "scale-100")}>
              <span className="block h-0.5 w-5 bg-current"></span>
              <span className="block h-0.5 w-5 bg-current"></span>
              <span className="block h-0.5 w-5 bg-current"></span>
            </div>
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image src={profileImg} alt="CodeBucks logo" className="w-36 h-auto rounded-full" sizes="20vw" priority />

          </Link>

          {/* Desktop nav */}
          <nav className="ml-2 hidden items-center md:flex">
            <ul className="flex items-center gap-1">
              {keys.map((key) => (
                <li
                  key={key}
                  className="relative"
                  onMouseEnter={() => {
                    cancelClose();
                    openMenu(key);
                  }}
                  onMouseLeave={scheduleClose}
                >
                  <button
                    className={cx(
                      "rounded-full px-4 py-2 text-base font-medium transition-all duration-200",
                      "text-neutral-800 dark:text-neutral-200",
                      "hover:bg-neutral-100 dark:hover:bg-neutral-800",
                      "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40",
                      "flex items-center gap-1",
                      open === key && "bg-neutral-100 dark:bg-neutral-800"
                    )}
                    aria-expanded={open === key}
                  >
                    <span className="transition-transform group-hover:translate-y-[-1px]">
                      {key}
                    </span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      className={cx(
                        "transition-transform duration-200",
                        open === key && "rotate-180"
                      )}
                    >
                      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <MenuCard
                    visible={open === key}
                    onMouseEnter={cancelClose}
                    onMouseLeave={scheduleClose}
                  >
                    <MenuGrid title={key} items={NAV[key]} />
                  </MenuCard>
                </li>
              ))}
            </ul>
          </nav>

          <div className="ml-auto" />

          {/* CTA before Regions */}
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold bg-blue-600 text-white shadow-sm hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40"
          >
            Contact us
          </Link>
          {/* Regions */}
          <div
            className="relative hidden md:block"
            onMouseEnter={() => {
              cancelClose();
              openMenu("Regions");
            }}
            onMouseLeave={scheduleClose}
          >
            <button
              className={cx(
                "rounded-full px-4 py-2 text-base font-medium transition-all duration-200",
                "text-neutral-800 dark:text-neutral-200",
                "hover:bg-neutral-100 dark:hover:bg-neutral-800",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40",
                "flex items-center gap-1",
                open === "Regions" && "bg-neutral-100 dark:bg-neutral-800"
              )}
              aria-expanded={open === "Regions"}
            >
              Regions
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                className={cx(
                  "transition-transform duration-200",
                  open === "Regions" && "rotate-180"
                )}
              >
                <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <MenuCard
              visible={open === "Regions"}
              onMouseEnter={cancelClose}
              onMouseLeave={scheduleClose}
            >
              <ul className="grid gap-1">
                {REGIONS.map((r) => (
                  <li key={r.title}>
                    <Link
                      href={r.href}
                      className="block rounded-lg px-3 py-2 text-sm font-medium text-neutral-800 hover:bg-neutral-100 dark:text-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                    >
                      {r.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </MenuCard>
          </div>

          {/* Theme toggle */}
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={cx(
              "w-8 h-8 ml-1 flex items-center justify-center rounded-full p-1 border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/40",
              mode === "light"
                ? "bg-neutral-900 text-white border-neutral-900 hover:scale-110"
                : "bg-white text-neutral-900 border-neutral-300 dark:bg-neutral-800 dark:text-neutral-100 dark:border-neutral-700 hover:scale-110"
            )}
            aria-label="theme-switcher"
          >
            {mode === "light" ? <MoonIcon className="fill-current" /> : <SunIcon className="fill-current" />}
          </button>
        </div>

        {/* Mobile sheet */}
        <div
          className={cx(
            "fixed inset-0 z-50 transform bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md p-4 transition-transform duration-300 ease-out md:hidden",
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          )}
          aria-hidden={!mobileOpen}
          role="dialog"
          aria-modal="true"
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between">
            <span className="text-xs font-semibold text-neutral-900 dark:text-white">Jadoon Technologies</span>
            <div className="flex items-center gap-2">
              <details className="[&_summary::-webkit-details-marker]:hidden">
                <summary className="cursor-pointer rounded-full px-3 py-1 text-sm font-medium text-neutral-800 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800 transition-colors">
                  Regions
                </summary>
                <ul className="mt-2 rounded-xl border border-neutral-200 bg-white p-2 shadow-sm dark:border-neutral-700 dark:bg-neutral-900">
                  {REGIONS.map((r) => (
                    <li key={r.title}>
                      <Link
                        href={r.href}
                        className="block rounded-lg px-3 py-2 text-sm text-neutral-800 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800 transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {r.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
              <button
                onClick={() => setMobileOpen(false)}
                className="inline-flex h-9 items-center justify-center rounded-lg border border-neutral-200 px-3 text-sm text-neutral-700 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-300 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800 transition-colors"
              >
                Close
              </button>
            </div>
          </div>

          <div className="mx-auto mt-4 max-w-7xl divide-y divide-neutral-200 bg-white p-4 dark:bg-black ">
            {Object.entries(NAV).map(([group, items]) => (
              <details key={group} className="py-2 open:py-3 transition-all">
                <summary className="flex cursor-pointer items-center justify-between py-2 text-base font-semibold text-neutral-900 dark:text-neutral-100">
                  {group}
                  <span className="text-neutral-500 dark:text-neutral-400">▾</span>
                </summary>
                <ul className="grid gap-1 pl-2">
                  {items.map((item) => (
                    <li key={item.title}>
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="block rounded-lg px-3 py-2 text-sm text-neutral-800 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800 transition-colors"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        </div>
      </header>
    </>
  );
}

// --- Building blocks -------------------------------------------------------
function MenuCard({ children, visible, onMouseEnter, onMouseLeave }) {
  return (
    <div
      role="dialog"
      aria-hidden={!visible}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={cx(
        "absolute left-0 top-full z-40 w-[720px] max-w-[90vw] pt-3 transition-all duration-300 ease-out",
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-2 pointer-events-none"
      )}
    >
      <div className="grid rounded-2xl border border-neutral-200 bg-white/95 p-6 shadow-2xl backdrop-blur-md dark:border-neutral-700 dark:bg-neutral-900/95 transform-gpu">
        {children}
      </div>
    </div>
  );
}

function MenuGrid({ title, items }) {
  const isServices = title === "Services";
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {isServices && (
        <article className="col-span-1 hidden overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-700 md:block group hover:border-neutral-300 dark:hover:border-neutral-600 transition-colors">
          <div className="h-40 w-full relative">
            <img
              src="/data-standard.jpg"
              alt="Data Standards"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="space-y-2 p-4">
            <h3 className="text-lg font-semibold leading-tight text-neutral-900 dark:text-neutral-100">
              Why data standards matter & why they're important
            </h3>
            <Link href="/insights/data-standards" className="inline-flex items-center font-medium text-blue-600 hover:underline dark:text-blue-400 transition-colors">
              Learn more <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </article>
      )}

      <ul className={cx(isServices ? "md:col-span-2" : "md:col-span-3", "grid grid-cols-1 gap-2 md:grid-cols-2")}>
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.title}>
              <Link
                href={item.href}
                className="group flex items-start gap-3 rounded-xl p-3 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors duration-200"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors">
                  {Icon && <Icon className="h-5 w-5" />}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </span>
                  {item.desc && (
                    <span className="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-1">
                      {item.desc}
                    </span>
                  )}
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
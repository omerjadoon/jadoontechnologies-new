"use client";

import Link from "next/link";
import { ChartBarIcon, Facebook, Github, Linkedin, MessageCircle, Twitter } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-black text-slate-300">
      <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        {/* Top grid */}
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand / short pitch */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 overflow-hidden">
                <img src="/favicon-32x32.png" alt="Jadoon Technologies Logo" className="h-6 w-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold tracking-tight text-white">
                  Jadoon Technologies
                </span>
                <span className="text-xs text-slate-400">
                  Web • Mobile • AI Lab
                </span>
              </div>
            </Link>
            <p className="mt-4 max-w-md text-sm text-slate-400">
              We design, build, and scale next-generation digital products for
              teams who want to move fast without breaking things.
            </p>
            <div className="mt-5 flex gap-3">
              <SocialIcon
                href="https://api.whatsapp.com/message/7RZ2LQVPZ4OVK1"
                label="Whatsapp"
                icon={<MessageCircle className="h-4 w-4" />}
              />
              <SocialIcon
                href="https://www.linkedin.com/company/jadoontechnologies"
                label="LinkedIn"
                icon={<Linkedin className="h-4 w-4" />}
              />
              <SocialIcon
                href="https://www.facebook.com/jadoontechnologies"
                label="Facebook"
                icon={<Facebook className="h-4 w-4" />}
              />
            </div>
          </div>

          {/* Navigation columns */}
          <div>
            <FooterHeading>Company</FooterHeading>
            <ul className="mt-3 space-y-2 text-sm">
              <FooterLink href="#about">About</FooterLink>
              <FooterLink href="#work">Our work</FooterLink>
              <FooterLink href="#process">Process</FooterLink>
              <FooterLink href="#insights">Insights</FooterLink>
            </ul>
          </div>

          <div>
            <FooterHeading>Locations</FooterHeading>
            <ul className="mt-3 space-y-4 text-sm">
              <li className="flex flex-col gap-1">
                <span className="font-medium text-slate-200 flex items-center gap-2">
                  <span>🇺🇸</span> USA (Headquarter)
                </span>
                <span className="text-slate-400 pl-7">102 Gold Ave SW, Albuquerque, NM 87102</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="font-medium text-slate-200 flex items-center gap-2">
                  <span>🇩🇪</span> Germany (Regional Office)
                </span>
                <span className="text-slate-400 pl-7">Nuremberg, Germany</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="font-medium text-slate-200 flex items-center gap-2">
                  <span>🇵🇰</span> Pakistan (R & D Office)
                </span>
                <span className="text-slate-400 pl-7">Abbottabad, Pakistan</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-slate-800 pt-6">
          <div className="flex flex-col gap-4 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-medium text-slate-400">Let&apos;s talk.</p>
              <div className="mt-1 flex flex-wrap items-center gap-3">
                <a
                  href="mailto:info@jadoontechnologies.com"
                  className="hover:text-slate-200"
                >
                  info@jadoontechnologies.com
                </a>
                <span className="hidden h-1 w-1 rounded-full bg-slate-600 sm:inline-block" />
                <a href="tel:+923359119460" className="hover:text-slate-200">
                  +92 335 9119460
                </a>
              </div>
              <p className="mt-2">
                Operating remotely • Serving clients across EU, UK & US
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <p>© {year} Jadoon Technologies. All rights reserved.</p>
              <span className="hidden h-1 w-1 rounded-full bg-slate-600 sm:inline-block" />
              <Link href="/privacy" className="hover:text-slate-200">
                Privacy
              </Link>
              <span className="hidden h-1 w-1 rounded-full bg-slate-600 sm:inline-block" />
              <Link href="/terms" className="hover:text-slate-200">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* Small helpers */

function FooterHeading({ children }) {
  return (
    <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
      {children}
    </h3>
  );
}

function FooterLink({ href, children }) {
  return (
    <li>
      <Link
        href={href}
        className="transition hover:text-slate-100 hover:underline hover:underline-offset-4"
      >
        {children}
      </Link>
    </li>
  );
}

function SocialIcon({ href, label, icon }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-[#2563eb]/80 hover:bg-[#2563eb]/10 hover:text-white"
    >
      {icon}
    </a>
  );
}

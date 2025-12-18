"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import * as THREE from "three";
import ParticlesWave from "../ParticleWave/ParticlesWave";

/**
 * HeroHeader.jsx (Mobile-Optimized) + Three.js Particles Wave
 */
export default function HeroHeader({
  headline = "We Build Next-Generation Digital Products That Shape the Future",
  subhead =
  "From mobile apps to intelligent AI platforms, we design, engineer, and scale products that help businesses win in the digital age.",
}) {
  // Customize with your real logo paths
  const brandLogos = [
    { src: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/04/attachment_52023985-e1492476881884.jpg", alt: "Company 1" },
    { src: "https://static.wixstatic.com/media/72c0b2_0f9bc04e4f1c4a63bc59a9d29bcd298e~mv2.jpg", alt: "Company 2" },
    { src: "https://d1yjjnpx0p53s8.cloudfront.net/g1.png", alt: "Company 3" },
    { src: "https://static.wixstatic.com/media/72c0b2_50f4ae8cb3234425bf53d05a303da38f~mv2.jpg", alt: "Company 4" },
    { src: "https://static.wixstatic.com/media/72c0b2_8c80bd13f06643388cec45d934c410cb~mv2.jpg", alt: "Company 5" },
  ];

  return (
    <>
      <div
        className="w-full relative isolate h-[92vh] min-h-[560px] overflow-hidden rounded-none"
        style={{
          background: "linear-gradient(180deg, #0B1F3B 0%, #0E2A47 45%, #111827 100%)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Three.js particles wave (sits above video, below overlays/content) */}
        <ParticlesWave />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-slate-980"
          aria-hidden="true"
        />

        {/* Hero content */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-10 sm:pt-16 md:pt-24">
          <div className="max-w">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur">
              <span className="inline-block h-2 w-2 rounded-full bg-[#2563eb]" />
              Web • Mobile • AI Solutions
            </p>
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
              {headline}
            </h1>
            <p className="mt-4 max-w-xl text-base text-white/80 sm:text-lg">
              {subhead}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="#contact"
                className="rounded-2xl bg-white/95 px-5 py-3 text-sm font-semibold text-gray-900 shadow hover:bg-white"
              >
                Start a project
              </Link>
              <Link
                href="#work"
                className="rounded-2xl border border-white/30 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
              >
                See our work
              </Link>
            </div>

            {/* Creds / stats */}
            <dl className="mt-10 grid max-w-xl grid-cols-2 gap-6 text-white/80 sm:grid-cols-3">
              <Stat label="Lightning-fast delivery" value="Agile" />
              <Stat label="AI-first engineering" value="Flexible" />
              <Stat label="Enterprise-grade quality" value="Secure" />
            </dl>

            {/* Brand trust slider */}
            <section className="mt-10 max-w-3xl">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/50">
                As trusted by startups & enterprises worldwide
              </p>
              <div className="mt-4 relative overflow-hidden">
                <div className="flex gap-10 whitespace-nowrap logos-marquee">
                  {brandLogos.concat(brandLogos).map((logo, index) => (
                    <div
                      key={index}
                      className="inline-flex items-center justify-center opacity-80 hover:opacity-100 transition"
                    >
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="h-6 sm:h-7 md:h-8 w-auto object-contain"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Bottom edge fade for smooth scroll */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/70 to-transparent" />
      </div>

      {/* Local styles for the marquee animation */}
      <style jsx>{`
        .logos-marquee {
          animation: logos-marquee 28s linear infinite;
        }

        @keyframes logos-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </>
  );
}

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="text-sm font-medium text-white/90 transition hover:text-white"
    >
      {children}
    </Link>
  );
}

function MobileLink({ href, children, onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="rounded-lg px-3 py-2 text-base font-medium text-white/90 hover:bg-white/10"
    >
      {children}
    </Link>
  );
}

function Stat({ label, value }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-wider text-white/60">
        {label}
      </dt>
      <dd className="mt-1 text-lg font-semibold text-white">{value}</dd>
    </div>
  );
}

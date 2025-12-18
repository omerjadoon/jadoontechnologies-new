"use client";

import { ArrowRight, Code2, Smartphone, Brain } from 'lucide-react';
import Link from 'next/link';

const AboutCoverSection = () => {
  return (
    <section className='relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 dark:from-blue-900 dark:via-blue-950 dark:to-neutral-950'>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />

      <div className='relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32'>
        <div className='flex flex-col items-center text-center'>
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-lg border border-white/20">
            <span className="inline-block h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            Building the Future of Digital Innovation
          </div>

          {/* Main Heading */}
          <h1 className='font-bold text-5xl xs:text-6xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight'>
            About{' '}
            <span className='relative inline-block'>
              <span className='relative z-10'>Jadoon</span>
              <span className='absolute bottom-2 left-0 right-0 h-4 bg-white/20 -rotate-1'></span>
            </span>{' '}
            Technologies
          </h1>

          {/* Subheading */}
          <p className='font-medium text-xl md:text-2xl text-blue-100 max-w-3xl mb-8 leading-relaxed'>
            We transform ambitious ideas into powerful digital solutions. From cutting-edge mobile apps to intelligent AI platforms, we engineer the future of technology.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <Link
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-base font-semibold text-blue-600 shadow-xl hover:bg-blue-50 transition-all hover:scale-105"
            >
              Start Your Project
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 rounded-2xl border-2 border-white/30 px-8 py-4 text-base font-semibold text-white backdrop-blur-lg hover:bg-white/10 transition-all"
            >
              View Our Work
            </Link>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-lg border border-white/20">
              <Code2 className="h-4 w-4" />
              Web Development
            </div>
            <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-lg border border-white/20">
              <Smartphone className="h-4 w-4" />
              Mobile Apps
            </div>
            <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-lg border border-white/20">
              <Brain className="h-4 w-4" />
              AI Solutions
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent" />
    </section>
  );
};

export default AboutCoverSection;
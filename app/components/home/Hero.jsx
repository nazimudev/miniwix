import Image from 'next/image';
import React from 'react'

const Hero = () => {
  return (
    <section className="bg-[#040d27] text-white">
      <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8">
        {/* Left */}
        <div>
          <span className="mb-5 inline-flex px-4 py-2 text-sm font-bold text-(--color-hero-tag)">
            Software • SaaS • Innovation • AI • Developer Products
          </span>

          <h1 className="max-w-3xl text-5xl font-bold text-(--color-hero-text) tracking-tight sm:text-6xl lg:text-7xl">
            Build faster with
            <span className="text-[#FF4D4D]"> products made </span>
            for developers.
          </h1>

          <p className="mt-6 max-w-xl text-xs leading-7 text-(--color-hero-tag) sm:text-lg">
            miniwix builds practical software and digital products, including
            SaaS tools, developer templates, starter kits, and reusable
            solutions. We help developers turn their ideas into real, functional
            products—faster and more efficiently.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-lg bg-(--color-hero-btn) px-6 py-3 text-sm font-semibold text-[#0B0D0F] transition hover:bg-[#FF4D4D] hover:text-white">
              {`Let's Talk ↗`}
            </button>

            <button className="rounded-lg border border-(--color-border) px-6 py-3 text-sm font-semibold text-(--color-hero-btn) transition hover:border-gray-300 hover:bg-white/10">
              View Projects
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="relative">
          <div className="relative">
            {/* Image */}
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              width={800}
              height={800}
              priority
              className="hero-float h-auto w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero
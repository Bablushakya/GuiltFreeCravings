import { Link } from 'react-router-dom';

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#8b542f] to-[#744324] px-6 py-20 text-white sm:py-24 lg:px-8 lg:py-28">
      {/* Decorative Elements */}
      <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto max-w-4xl text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-3">
          <span className="h-px w-10 bg-white/30" />
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/90">
            Ready to Indulge?
          </span>
          <span className="h-px w-10 bg-white/30" />
        </div>

        {/* Heading */}
        <h2 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
          Your Cravings Deserve
          <span className="block font-serif font-normal italic">Something Better</span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/90 sm:text-xl">
          Discover treats that bring together delicious taste, quality ingredients, and the warmth of homemade goodness.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/#products"
            className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-base font-semibold text-primary shadow-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
          >
            Explore Our Products
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 transition-transform duration-200 group-hover:translate-x-1">
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 20 20">
                <path
                  d="M4 10h11M11 6l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Link>

          <Link
            to="/#about"
            className="group inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:border-white/50 hover:bg-white/10"
          >
            Learn Our Story
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 border-t border-white/10 pt-8 text-sm text-white/70">
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>No Refined Sugar</span>
          </div>

          <div className="hidden h-1 w-1 rounded-full bg-white/30 sm:block" />

          <div className="flex items-center gap-2">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>No Preservatives</span>
          </div>

          <div className="hidden h-1 w-1 rounded-full bg-white/30 sm:block" />

          <div className="flex items-center gap-2">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>Homemade Goodness</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;

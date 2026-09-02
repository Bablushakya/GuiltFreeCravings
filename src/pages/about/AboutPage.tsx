import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <main className="min-h-screen bg-[#fffaf5]">
      
      {/* =======================================================
          HERO SECTION
      ======================================================= */}
      
      <section className="relative overflow-hidden bg-gradient-to-br from-[#fff9f3] to-[#fff3e8] px-6 py-20 sm:py-28 lg:px-8">
        
        <div className="mx-auto max-w-7xl">
          
          <div className="text-center">
            
            <span className="inline-block rounded-full bg-[#f3e4d3] px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#8b542f]">
              Our Story
            </span>
            
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              About GuiltFree Cravings
            </h1>
            
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
              Making healthy snacking delicious, accessible, and guilt-free for everyone who believes that taste and wellness can coexist beautifully.
            </p>
            
          </div>
          
        </div>
        
      </section>

      {/* =======================================================
          OUR STORY
      ======================================================= */}
      
      <section className="px-6 py-16 sm:py-24 lg:px-8">
        
        <div className="mx-auto max-w-7xl">
          
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            
            {/* Left: Story Content */}
            
            <div className="flex flex-col justify-center">
              
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#8b542f]">
                The Beginning
              </span>
              
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                From Kitchen Experiments to Your Table
              </h2>
              
              <div className="mt-8 space-y-6 text-base leading-7 text-slate-600 sm:text-lg">
                
                <p>
                  GuiltFree Cravings was born from a simple belief: <span className="font-semibold text-slate-900">you shouldn't have to choose between taste and health.</span> What started as weekend kitchen experiments quickly became a passion project to create snacks that satisfied cravings without compromising on nutrition.
                </p>
                
                <p>
                  We noticed a gap in the market — most "healthy" snacks either tasted like cardboard or were loaded with hidden sugars and artificial ingredients. We knew there had to be a better way.
                </p>
                
                <p>
                  After countless recipe iterations, ingredient sourcing adventures, and feedback from friends and family, we perfected our first products: guilt-free treats that tasted indulgent but were made with wholesome, natural ingredients.
                </p>
                
                <p className="font-semibold text-slate-900">
                  Today, GuiltFree Cravings is more than just a snack brand — it's a movement toward mindful indulgence.
                </p>
                
              </div>
              
            </div>
            
            {/* Right: Image */}
            
            <div className="relative">
              
              <div className="overflow-hidden rounded-3xl bg-[#f5eadf] shadow-2xl">
                
                <img
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&auto=format&fit=crop"
                  alt="Healthy ingredients and cooking"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                
              </div>
              
              {/* Decorative Element */}
              
              <div className="absolute -bottom-6 -right-6 -z-10 h-72 w-72 rounded-3xl bg-[#fff3e8]" />
              
            </div>
            
          </div>
          
        </div>
        
      </section>

      {/* =======================================================
          OUR VALUES
      ======================================================= */}
      
      <section className="bg-white px-6 py-16 sm:py-24 lg:px-8">
        
        <div className="mx-auto max-w-7xl">
          
          <div className="text-center">
            
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#8b542f]">
              What We Stand For
            </span>
            
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Our Core Values
            </h2>
            
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Every decision we make is guided by these principles.
            </p>
            
          </div>
          
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            
            {/* Value 1: Quality */}
            
            <div className="rounded-3xl border border-[#eadfd3] bg-[#fffaf5] p-8 shadow-sm transition hover:shadow-lg">
              
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#8b542f] text-2xl text-white">
                ✨
              </div>
              
              <h3 className="mt-6 text-xl font-bold text-slate-900">
                Quality First
              </h3>
              
              <p className="mt-4 text-base leading-7 text-slate-600">
                We source only the finest ingredients and never compromise on quality. Every product is made with care and attention to detail.
              </p>
              
            </div>
            
            {/* Value 2: Transparency */}
            
            <div className="rounded-3xl border border-[#eadfd3] bg-[#fffaf5] p-8 shadow-sm transition hover:shadow-lg">
              
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#8b542f] text-2xl text-white">
                🔍
              </div>
              
              <h3 className="mt-6 text-xl font-bold text-slate-900">
                Transparency
              </h3>
              
              <p className="mt-4 text-base leading-7 text-slate-600">
                We believe you have the right to know exactly what's in your food. Clear labels, honest ingredients, no hidden surprises.
              </p>
              
            </div>
            
            {/* Value 3: Sustainability */}
            
            <div className="rounded-3xl border border-[#eadfd3] bg-[#fffaf5] p-8 shadow-sm transition hover:shadow-lg">
              
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#8b542f] text-2xl text-white">
                🌱
              </div>
              
              <h3 className="mt-6 text-xl font-bold text-slate-900">
                Sustainability
              </h3>
              
              <p className="mt-4 text-base leading-7 text-slate-600">
                We're committed to reducing our environmental footprint through eco-friendly packaging and responsible sourcing practices.
              </p>
              
            </div>
            
            {/* Value 4: Taste */}
            
            <div className="rounded-3xl border border-[#eadfd3] bg-[#fffaf5] p-8 shadow-sm transition hover:shadow-lg">
              
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#8b542f] text-2xl text-white">
                😋
              </div>
              
              <h3 className="mt-6 text-xl font-bold text-slate-900">
                Uncompromised Taste
              </h3>
              
              <p className="mt-4 text-base leading-7 text-slate-600">
                Healthy doesn't mean boring. We create products that are so delicious, you'll forget they're good for you.
              </p>
              
            </div>
            
            {/* Value 5: Community */}
            
            <div className="rounded-3xl border border-[#eadfd3] bg-[#fffaf5] p-8 shadow-sm transition hover:shadow-lg">
              
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#8b542f] text-2xl text-white">
                🤝
              </div>
              
              <h3 className="mt-6 text-xl font-bold text-slate-900">
                Community First
              </h3>
              
              <p className="mt-4 text-base leading-7 text-slate-600">
                Our customers are our family. We listen, we learn, and we grow together on this journey to better snacking.
              </p>
              
            </div>
            
            {/* Value 6: Innovation */}
            
            <div className="rounded-3xl border border-[#eadfd3] bg-[#fffaf5] p-8 shadow-sm transition hover:shadow-lg">
              
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#8b542f] text-2xl text-white">
                💡
              </div>
              
              <h3 className="mt-6 text-xl font-bold text-slate-900">
                Innovation
              </h3>
              
              <p className="mt-4 text-base leading-7 text-slate-600">
                We're always experimenting with new flavors, ingredients, and formats to bring you exciting, healthy snacking options.
              </p>
              
            </div>
            
          </div>
          
        </div>
        
      </section>

      {/* =======================================================
          OUR MISSION
      ======================================================= */}
      
      <section className="px-6 py-16 sm:py-24 lg:px-8">
        
        <div className="mx-auto max-w-7xl">
          
          <div className="rounded-3xl bg-gradient-to-br from-[#8b542f] to-[#6f4226] px-8 py-16 text-center shadow-2xl sm:px-16 sm:py-20">
            
            <span className="inline-block rounded-full bg-white/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white">
              Our Mission
            </span>
            
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Making Healthy Snacking <br className="hidden sm:block" />
              a Delightful Experience
            </h2>
            
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90 sm:text-xl">
              We're on a mission to prove that nutritious snacks can be just as satisfying as your favorite indulgences. Every product we create is crafted with love, tested rigorously, and designed to bring joy to your everyday moments.
            </p>
            
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              
              <Link
                to="/products"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#8b542f] shadow-lg transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#8b542f]"
              >
                Explore Our Products
              </Link>
              
              <Link
                to="/why-choose"
                className="inline-flex items-center justify-center rounded-full border-2 border-white px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#8b542f]"
              >
                Why Choose Us
              </Link>
              
            </div>
            
          </div>
          
        </div>
        
      </section>

      {/* =======================================================
          TEAM SECTION (OPTIONAL)
      ======================================================= */}
      
      <section className="bg-white px-6 py-16 sm:py-24 lg:px-8">
        
        <div className="mx-auto max-w-7xl">
          
          <div className="text-center">
            
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#8b542f]">
              The People Behind It
            </span>
            
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Crafted with Passion
            </h2>
            
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              A small team with big dreams, working every day to bring you the best guilt-free snacking experience.
            </p>
            
          </div>
          
          <div className="mt-16 rounded-3xl border border-[#eadfd3] bg-[#fffaf5] p-8 text-center shadow-sm sm:p-12">
            
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#8b542f] text-4xl text-white">
              ❤️
            </div>
            
            <h3 className="mt-6 text-2xl font-bold text-slate-900">
              Made with Love, Every Single Day
            </h3>
            
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
              From our kitchen to yours, every product is a labor of love. We taste-test, refine, and perfect each recipe until it meets our high standards — and yours.
            </p>
            
          </div>
          
        </div>
        
      </section>

      {/* =======================================================
          CTA SECTION
      ======================================================= */}
      
      <section className="px-6 py-16 sm:py-20 lg:px-8">
        
        <div className="mx-auto max-w-7xl">
          
          <div className="rounded-3xl border border-[#eadfd3] bg-white px-8 py-12 text-center shadow-sm sm:px-12 sm:py-16">
            
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Join the GuiltFree Movement
            </h2>
            
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Start your journey to healthier, happier snacking today.
            </p>
            
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              
              <Link
                to="/products"
                className="inline-flex items-center justify-center rounded-full bg-[#8b542f] px-8 py-4 text-sm font-semibold text-white shadow-lg transition hover:bg-[#744324] focus:outline-none focus:ring-2 focus:ring-[#8b542f] focus:ring-offset-2"
              >
                Shop Now
              </Link>
              
              <Link
                to="/our-promise"
                className="inline-flex items-center justify-center rounded-full border-2 border-[#8b542f] px-8 py-4 text-sm font-semibold text-[#8b542f] transition hover:bg-[#fffaf5] focus:outline-none focus:ring-2 focus:ring-[#8b542f] focus:ring-offset-2"
              >
                Read Our Promise
              </Link>
              
            </div>
            
          </div>
          
        </div>
        
      </section>
      
    </main>
  );
}

export default AboutPage;

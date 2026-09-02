import { Link } from "react-router-dom";

function OurPromisePage() {
  return (
    <main className="min-h-screen bg-[#fffaf5]">
      
      {/* =======================================================
          HERO SECTION
      ======================================================= */}
      
      <section className="relative overflow-hidden bg-gradient-to-br from-[#fff9f3] to-[#fff3e8] px-6 py-20 sm:py-28 lg:px-8">
        
        <div className="mx-auto max-w-7xl">
          
          <div className="text-center">
            
            <span className="inline-block rounded-full bg-[#f3e4d3] px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#8b542f]">
              Our Commitment
            </span>
            
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Our Promise to You
            </h1>
            
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
              A commitment to quality, transparency, and your wellness — in every product we create.
            </p>
            
          </div>
          
        </div>
        
      </section>

      {/* =======================================================
          CORE PROMISE
      ======================================================= */}
      
      <section className="px-6 py-16 sm:py-24 lg:px-8">
        
        <div className="mx-auto max-w-4xl">
          
          <div className="rounded-3xl border-2 border-[#8b542f] bg-white p-8 shadow-xl sm:p-12">
            
            <div className="text-center">
              
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#8b542f] text-4xl text-white shadow-lg">
                🤝
              </div>
              
              <h2 className="mt-8 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                The GuiltFree Promise
              </h2>
              
              <p className="mt-6 text-lg leading-8 text-slate-600 sm:text-xl">
                When you choose GuiltFree Cravings, you're not just buying a snack — you're investing in a healthier, happier lifestyle. Here's our solemn promise to you.
              </p>
              
            </div>
            
          </div>
          
        </div>
        
      </section>

      {/* =======================================================
          PROMISE PILLARS
      ======================================================= */}
      
      <section className="bg-white px-6 py-16 sm:py-24 lg:px-8">
        
        <div className="mx-auto max-w-7xl">
          
          <div className="grid gap-12 lg:gap-16">
            
            {/* Promise 1: Quality */}
            
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              
              <div className="flex flex-col justify-center">
                
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#8b542f] text-3xl text-white shadow-lg">
                  ✨
                </div>
                
                <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Quality Without Compromise
                </h2>
                
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  We promise to <span className="font-semibold text-slate-900">never compromise on quality</span>, no matter what. Every ingredient is carefully selected, every recipe meticulously tested, and every batch made with unwavering attention to detail.
                </p>
                
                <div className="mt-8 space-y-4">
                  
                  <div className="flex items-start gap-3">
                    
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#8b542f] text-xs font-bold text-white">
                      1
                    </div>
                    
                    <div>
                      
                      <p className="font-semibold text-slate-900">
                        Premium Ingredients Only
                      </p>
                      
                      <p className="mt-1 text-sm text-slate-600">
                        We source the finest natural ingredients from trusted suppliers.
                      </p>
                      
                    </div>
                    
                  </div>
                  
                  <div className="flex items-start gap-3">
                    
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#8b542f] text-xs font-bold text-white">
                      2
                    </div>
                    
                    <div>
                      
                      <p className="font-semibold text-slate-900">
                        Rigorous Testing
                      </p>
                      
                      <p className="mt-1 text-sm text-slate-600">
                        Every product undergoes multiple rounds of quality checks.
                      </p>
                      
                    </div>
                    
                  </div>
                  
                  <div className="flex items-start gap-3">
                    
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#8b542f] text-xs font-bold text-white">
                      3
                    </div>
                    
                    <div>
                      
                      <p className="font-semibold text-slate-900">
                        Consistency Guaranteed
                      </p>
                      
                      <p className="mt-1 text-sm text-slate-600">
                        Same great taste and nutrition in every single pack.
                      </p>
                      
                    </div>
                    
                  </div>
                  
                </div>
                
              </div>
              
              <div>
                
                <div className="overflow-hidden rounded-3xl bg-[#f5eadf] shadow-xl">
                  
                  <img
                    src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&auto=format&fit=crop"
                    alt="Quality ingredients"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  
                </div>
                
              </div>
              
            </div>

            {/* Promise 2: Transparency */}
            
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              
              <div className="order-2 lg:order-1">
                
                <div className="overflow-hidden rounded-3xl bg-[#f5eadf] shadow-xl">
                  
                  <img
                    src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&auto=format&fit=crop"
                    alt="Transparent labeling"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  
                </div>
                
              </div>
              
              <div className="order-1 flex flex-col justify-center lg:order-2">
                
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#8b542f] text-3xl text-white shadow-lg">
                  🔍
                </div>
                
                <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Complete Transparency
                </h2>
                
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  We promise to <span className="font-semibold text-slate-900">be completely honest</span> about what goes into our products. No hidden ingredients, no misleading labels — just clear, straightforward information.
                </p>
                
                <div className="mt-8 space-y-4">
                  
                  <div className="flex items-start gap-3">
                    
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#8b542f] text-xs font-bold text-white">
                      1
                    </div>
                    
                    <div>
                      
                      <p className="font-semibold text-slate-900">
                        Clear Ingredient Lists
                      </p>
                      
                      <p className="mt-1 text-sm text-slate-600">
                        Every ingredient listed in plain language you understand.
                      </p>
                      
                    </div>
                    
                  </div>
                  
                  <div className="flex items-start gap-3">
                    
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#8b542f] text-xs font-bold text-white">
                      2
                    </div>
                    
                    <div>
                      
                      <p className="font-semibold text-slate-900">
                        Honest Nutrition Facts
                      </p>
                      
                      <p className="mt-1 text-sm text-slate-600">
                        Accurate nutritional information on every package.
                      </p>
                      
                    </div>
                    
                  </div>
                  
                  <div className="flex items-start gap-3">
                    
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#8b542f] text-xs font-bold text-white">
                      3
                    </div>
                    
                    <div>
                      
                      <p className="font-semibold text-slate-900">
                        Open Communication
                      </p>
                      
                      <p className="mt-1 text-sm text-slate-600">
                        Questions? We're always here to answer them honestly.
                      </p>
                      
                    </div>
                    
                  </div>
                  
                </div>
                
              </div>
              
            </div>

            {/* Promise 3: Health */}
            
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              
              <div className="flex flex-col justify-center">
                
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#8b542f] text-3xl text-white shadow-lg">
                  💚
                </div>
                
                <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Your Health First
                </h2>
                
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  We promise to <span className="font-semibold text-slate-900">prioritize your wellness</span> in everything we create. Every product is designed with your health goals in mind, without sacrificing the joy of eating.
                </p>
                
                <div className="mt-8 space-y-4">
                  
                  <div className="flex items-start gap-3">
                    
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#8b542f] text-xs font-bold text-white">
                      1
                    </div>
                    
                    <div>
                      
                      <p className="font-semibold text-slate-900">
                        No Artificial Additives
                      </p>
                      
                      <p className="mt-1 text-sm text-slate-600">
                        Zero artificial colors, flavors, or preservatives.
                      </p>
                      
                    </div>
                    
                  </div>
                  
                  <div className="flex items-start gap-3">
                    
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#8b542f] text-xs font-bold text-white">
                      2
                    </div>
                    
                    <div>
                      
                      <p className="font-semibold text-slate-900">
                        Nutrient-Dense Snacks
                      </p>
                      
                      <p className="mt-1 text-sm text-slate-600">
                        Real nutrition that fuels your body and mind.
                      </p>
                      
                    </div>
                    
                  </div>
                  
                  <div className="flex items-start gap-3">
                    
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#8b542f] text-xs font-bold text-white">
                      3
                    </div>
                    
                    <div>
                      
                      <p className="font-semibold text-slate-900">
                        Balanced & Wholesome
                      </p>
                      
                      <p className="mt-1 text-sm text-slate-600">
                        The perfect balance of taste, nutrition, and satisfaction.
                      </p>
                      
                    </div>
                    
                  </div>
                  
                </div>
                
              </div>
              
              <div>
                
                <div className="overflow-hidden rounded-3xl bg-[#f5eadf] shadow-xl">
                  
                  <img
                    src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop"
                    alt="Healthy lifestyle"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  
                </div>
                
              </div>
              
            </div>

            {/* Promise 4: Taste */}
            
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              
              <div className="order-2 lg:order-1">
                
                <div className="overflow-hidden rounded-3xl bg-[#f5eadf] shadow-xl">
                  
                  <img
                    src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&auto=format&fit=crop"
                    alt="Delicious snacks"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  
                </div>
                
              </div>
              
              <div className="order-1 flex flex-col justify-center lg:order-2">
                
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#8b542f] text-3xl text-white shadow-lg">
                  🎉
                </div>
                
                <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Irresistible Taste
                </h2>
                
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  We promise to <span className="font-semibold text-slate-900">never sacrifice taste</span> for health. Our snacks are crafted to delight your taste buds while nourishing your body.
                </p>
                
                <div className="mt-8 space-y-4">
                  
                  <div className="flex items-start gap-3">
                    
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#8b542f] text-xs font-bold text-white">
                      1
                    </div>
                    
                    <div>
                      
                      <p className="font-semibold text-slate-900">
                        Flavor-First Approach
                      </p>
                      
                      <p className="mt-1 text-sm text-slate-600">
                        We start with amazing taste, then optimize for health.
                      </p>
                      
                    </div>
                    
                  </div>
                  
                  <div className="flex items-start gap-3">
                    
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#8b542f] text-xs font-bold text-white">
                      2
                    </div>
                    
                    <div>
                      
                      <p className="font-semibold text-slate-900">
                        Extensive Testing
                      </p>
                      
                      <p className="mt-1 text-sm text-slate-600">
                        Every recipe tested until it's absolutely perfect.
                      </p>
                      
                    </div>
                    
                  </div>
                  
                  <div className="flex items-start gap-3">
                    
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#8b542f] text-xs font-bold text-white">
                      3
                    </div>
                    
                    <div>
                      
                      <p className="font-semibold text-slate-900">
                        Satisfaction Guaranteed
                      </p>
                      
                      <p className="mt-1 text-sm text-slate-600">
                        If you don't love it, we'll make it right.
                      </p>
                      
                    </div>
                    
                  </div>
                  
                </div>
                
              </div>
              
            </div>
            
          </div>
          
        </div>
        
      </section>

      {/* =======================================================
          ADDITIONAL COMMITMENTS
      ======================================================= */}
      
      <section className="px-6 py-16 sm:py-24 lg:px-8">
        
        <div className="mx-auto max-w-7xl">
          
          <div className="text-center">
            
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              We Also Promise...
            </h2>
            
          </div>
          
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            
            {/* Promise: Customer Service */}
            
            <div className="rounded-2xl border border-[#eadfd3] bg-white p-6 shadow-sm">
              
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#fff3e8] text-xl text-[#8b542f]">
                💬
              </div>
              
              <h3 className="mt-4 text-lg font-bold text-slate-900">
                Responsive Support
              </h3>
              
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Quick, helpful customer service whenever you need us.
              </p>
              
            </div>
            
            {/* Promise: Sustainability */}
            
            <div className="rounded-2xl border border-[#eadfd3] bg-white p-6 shadow-sm">
              
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#fff3e8] text-xl text-[#8b542f]">
                ♻️
              </div>
              
              <h3 className="mt-4 text-lg font-bold text-slate-900">
                Eco-Friendly Packaging
              </h3>
              
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Sustainable materials that care for our planet.
              </p>
              
            </div>
            
            {/* Promise: Fair Pricing */}
            
            <div className="rounded-2xl border border-[#eadfd3] bg-white p-6 shadow-sm">
              
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#fff3e8] text-xl text-[#8b542f]">
                💰
              </div>
              
              <h3 className="mt-4 text-lg font-bold text-slate-900">
                Fair Pricing
              </h3>
              
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Premium quality at prices that make sense.
              </p>
              
            </div>
            
            {/* Promise: Innovation */}
            
            <div className="rounded-2xl border border-[#eadfd3] bg-white p-6 shadow-sm">
              
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#fff3e8] text-xl text-[#8b542f]">
                🚀
              </div>
              
              <h3 className="mt-4 text-lg font-bold text-slate-900">
                Continuous Innovation
              </h3>
              
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Always working on exciting new flavors and products.
              </p>
              
            </div>
            
            {/* Promise: Community */}
            
            <div className="rounded-2xl border border-[#eadfd3] bg-white p-6 shadow-sm">
              
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#fff3e8] text-xl text-[#8b542f]">
                👥
              </div>
              
              <h3 className="mt-4 text-lg font-bold text-slate-900">
                Community Building
              </h3>
              
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Creating a community of mindful snackers together.
              </p>
              
            </div>
            
            {/* Promise: Listening */}
            
            <div className="rounded-2xl border border-[#eadfd3] bg-white p-6 shadow-sm">
              
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#fff3e8] text-xl text-[#8b542f]">
                👂
              </div>
              
              <h3 className="mt-4 text-lg font-bold text-slate-900">
                Listening & Learning
              </h3>
              
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Your feedback shapes everything we do.
              </p>
              
            </div>
            
          </div>
          
        </div>
        
      </section>

      {/* =======================================================
          SIGNATURE
      ======================================================= */}
      
      <section className="bg-white px-6 py-16 sm:py-24 lg:px-8">
        
        <div className="mx-auto max-w-4xl">
          
          <div className="rounded-3xl border-2 border-[#8b542f] bg-[#fffaf5] p-8 text-center shadow-xl sm:p-12">
            
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              This is Our Solemn Promise
            </h2>
            
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              We take these commitments seriously because you deserve nothing less. When you choose GuiltFree Cravings, you're choosing a partner in your wellness journey — one that will never let you down.
            </p>
            
            <div className="mt-8">
              
              <div className="text-2xl font-bold text-[#8b542f]">
                — The GuiltFree Cravings Team
              </div>
              
            </div>
            
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
              Experience Our Promise Today
            </h2>
            
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Try GuiltFree Cravings and taste the difference our commitment makes.
            </p>
            
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              
              <Link
                to="/products"
                className="inline-flex items-center justify-center rounded-full bg-[#8b542f] px-8 py-4 text-sm font-semibold text-white shadow-lg transition hover:bg-[#744324] focus:outline-none focus:ring-2 focus:ring-[#8b542f] focus:ring-offset-2"
              >
                Shop Now
              </Link>
              
              <Link
                to="/why-choose"
                className="inline-flex items-center justify-center rounded-full border-2 border-[#8b542f] px-8 py-4 text-sm font-semibold text-[#8b542f] transition hover:bg-[#fffaf5] focus:outline-none focus:ring-2 focus:ring-[#8b542f] focus:ring-offset-2"
              >
                Why Choose Us
              </Link>
              
            </div>
            
          </div>
          
        </div>
        
      </section>
      
    </main>
  );
}

export default OurPromisePage;

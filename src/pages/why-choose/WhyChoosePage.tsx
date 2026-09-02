import { Link } from "react-router-dom";

function WhyChoosePage() {
  return (
    <main className="min-h-screen bg-[#fffaf5]">
      
      {/* =======================================================
          HERO SECTION
      ======================================================= */}
      
      <section className="relative overflow-hidden bg-gradient-to-br from-[#fff9f3] to-[#fff3e8] px-6 py-20 sm:py-28 lg:px-8">
        
        <div className="mx-auto max-w-7xl">
          
          <div className="text-center">
            
            <span className="inline-block rounded-full bg-[#f3e4d3] px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#8b542f]">
              Why GuiltFree Cravings
            </span>
            
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Why Choose Us?
            </h1>
            
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
              Discover what makes GuiltFree Cravings the perfect choice for your healthy snacking journey.
            </p>
            
          </div>
          
        </div>
        
      </section>

      {/* =======================================================
          MAIN REASONS
      ======================================================= */}
      
      <section className="px-6 py-16 sm:py-24 lg:px-8">
        
        <div className="mx-auto max-w-7xl">
          
          <div className="grid gap-12 lg:gap-16">
            
            {/* Reason 1: Thoughtfully Made */}
            
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              
              <div className="order-2 lg:order-1">
                
                <div className="overflow-hidden rounded-3xl bg-[#f5eadf] shadow-xl">
                  
                  <img
                    src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&auto=format&fit=crop"
                    alt="Quality ingredients"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  
                </div>
                
              </div>
              
              <div className="order-1 flex flex-col justify-center lg:order-2">
                
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#8b542f] text-3xl text-white shadow-lg">
                  ✨
                </div>
                
                <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Thoughtfully Made
                </h2>
                
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  <span className="font-semibold text-slate-900">Quality ingredients.</span> Every product is crafted with premium, hand-selected ingredients that meet our strict quality standards.
                </p>
                
                <div className="mt-8 space-y-4">
                  
                  <div className="flex items-start gap-3">
                    
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm text-green-700">
                      ✓
                    </div>
                    
                    <p className="text-base text-slate-600">
                      No artificial preservatives or flavors
                    </p>
                    
                  </div>
                  
                  <div className="flex items-start gap-3">
                    
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm text-green-700">
                      ✓
                    </div>
                    
                    <p className="text-base text-slate-600">
                      Sourced from trusted, verified suppliers
                    </p>
                    
                  </div>
                  
                  <div className="flex items-start gap-3">
                    
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm text-green-700">
                      ✓
                    </div>
                    
                    <p className="text-base text-slate-600">
                      Small-batch production for maximum freshness
                    </p>
                    
                  </div>
                  
                </div>
                
              </div>
              
            </div>

            {/* Reason 2: Homemade Goodness */}
            
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              
              <div className="flex flex-col justify-center">
                
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#8b542f] text-3xl text-white shadow-lg">
                  🏠
                </div>
                
                <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Homemade Goodness
                </h2>
                
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  <span className="font-semibold text-slate-900">Made with care.</span> Each product is prepared using traditional methods and recipes perfected through years of experimentation.
                </p>
                
                <div className="mt-8 space-y-4">
                  
                  <div className="flex items-start gap-3">
                    
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm text-green-700">
                      ✓
                    </div>
                    
                    <p className="text-base text-slate-600">
                      Kitchen-tested recipes, scaled with love
                    </p>
                    
                  </div>
                  
                  <div className="flex items-start gap-3">
                    
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm text-green-700">
                      ✓
                    </div>
                    
                    <p className="text-base text-slate-600">
                      No factory-made shortcuts or compromises
                    </p>
                    
                  </div>
                  
                  <div className="flex items-start gap-3">
                    
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm text-green-700">
                      ✓
                    </div>
                    
                    <p className="text-base text-slate-600">
                      Made in small batches for optimal quality
                    </p>
                    
                  </div>
                  
                </div>
                
              </div>
              
              <div>
                
                <div className="overflow-hidden rounded-3xl bg-[#f5eadf] shadow-xl">
                  
                  <img
                    src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&auto=format&fit=crop"
                    alt="Homemade preparation"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  
                </div>
                
              </div>
              
            </div>

            {/* Reason 3: Made for You */}
            
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              
              <div className="order-2 lg:order-1">
                
                <div className="overflow-hidden rounded-3xl bg-[#f5eadf] shadow-xl">
                  
                  <img
                    src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&auto=format&fit=crop"
                    alt="Fresh and delicious"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  
                </div>
                
              </div>
              
              <div className="order-1 flex flex-col justify-center lg:order-2">
                
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#8b542f] text-3xl text-white shadow-lg">
                  ❤️
                </div>
                
                <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Made for You
                </h2>
                
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  <span className="font-semibold text-slate-900">Fresh & delicious.</span> We create snacks that fit your lifestyle — whether you're health-conscious, busy, or just love good food.
                </p>
                
                <div className="mt-8 space-y-4">
                  
                  <div className="flex items-start gap-3">
                    
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm text-green-700">
                      ✓
                    </div>
                    
                    <p className="text-base text-slate-600">
                      Perfect for on-the-go snacking
                    </p>
                    
                  </div>
                  
                  <div className="flex items-start gap-3">
                    
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm text-green-700">
                      ✓
                    </div>
                    
                    <p className="text-base text-slate-600">
                      Balanced nutrition meets irresistible taste
                    </p>
                    
                  </div>
                  
                  <div className="flex items-start gap-3">
                    
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm text-green-700">
                      ✓
                    </div>
                    
                    <p className="text-base text-slate-600">
                      Options for every dietary preference
                    </p>
                    
                  </div>
                  
                </div>
                
              </div>
              
            </div>
            
          </div>
          
        </div>
        
      </section>

      {/* =======================================================
          KEY BENEFITS
      ======================================================= */}
      
      <section className="bg-white px-6 py-16 sm:py-24 lg:px-8">
        
        <div className="mx-auto max-w-7xl">
          
          <div className="text-center">
            
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#8b542f]">
              Key Benefits
            </span>
            
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              What Sets Us Apart
            </h2>
            
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              More than just great taste — we deliver value in every bite.
            </p>
            
          </div>
          
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            
            {/* Benefit 1 */}
            
            <div className="rounded-3xl border border-[#eadfd3] bg-[#fffaf5] p-6 text-center shadow-sm">
              
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#8b542f] text-xl text-white">
                🌾
              </div>
              
              <h3 className="mt-4 text-lg font-bold text-slate-900">
                Natural Ingredients
              </h3>
              
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Only wholesome, real ingredients you can recognize and pronounce.
              </p>
              
            </div>
            
            {/* Benefit 2 */}
            
            <div className="rounded-3xl border border-[#eadfd3] bg-[#fffaf5] p-6 text-center shadow-sm">
              
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#8b542f] text-xl text-white">
                🚫
              </div>
              
              <h3 className="mt-4 text-lg font-bold text-slate-900">
                No Guilt, All Joy
              </h3>
              
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Zero refined sugars, no trans fats, no artificial additives.
              </p>
              
            </div>
            
            {/* Benefit 3 */}
            
            <div className="rounded-3xl border border-[#eadfd3] bg-[#fffaf5] p-6 text-center shadow-sm">
              
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#8b542f] text-xl text-white">
                💪
              </div>
              
              <h3 className="mt-4 text-lg font-bold text-slate-900">
                Nutrient-Rich
              </h3>
              
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Packed with proteins, healthy fats, and essential nutrients.
              </p>
              
            </div>
            
            {/* Benefit 4 */}
            
            <div className="rounded-3xl border border-[#eadfd3] bg-[#fffaf5] p-6 text-center shadow-sm">
              
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#8b542f] text-xl text-white">
                😋
              </div>
              
              <h3 className="mt-4 text-lg font-bold text-slate-900">
                Taste That Wins
              </h3>
              
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Flavors so good, you'll forget they're healthy snacks.
              </p>
              
            </div>
            
          </div>
          
        </div>
        
      </section>

      {/* =======================================================
          COMPARISON SECTION
      ======================================================= */}
      
      <section className="px-6 py-16 sm:py-24 lg:px-8">
        
        <div className="mx-auto max-w-5xl">
          
          <div className="text-center">
            
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#8b542f]">
              The Difference
            </span>
            
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              GuiltFree Cravings vs Others
            </h2>
            
          </div>
          
          <div className="mt-12 overflow-hidden rounded-3xl border border-[#eadfd3] bg-white shadow-lg">
            
            <div className="overflow-x-auto">
              
              <table className="w-full min-w-[600px]">
                
                <thead className="bg-[#fffaf5]">
                  
                  <tr>
                    
                    <th className="px-6 py-4 text-left text-sm font-bold text-slate-900">
                      Feature
                    </th>
                    
                    <th className="px-6 py-4 text-center text-sm font-bold text-[#8b542f]">
                      GuiltFree Cravings
                    </th>
                    
                    <th className="px-6 py-4 text-center text-sm font-bold text-slate-500">
                      Others
                    </th>
                    
                  </tr>
                  
                </thead>
                
                <tbody className="divide-y divide-[#eadfd3]">
                  
                  <tr>
                    
                    <td className="px-6 py-4 text-sm text-slate-700">
                      Natural Ingredients
                    </td>
                    
                    <td className="px-6 py-4 text-center text-green-600">
                      <span className="text-xl">✓</span>
                    </td>
                    
                    <td className="px-6 py-4 text-center text-red-500">
                      <span className="text-xl">✗</span>
                    </td>
                    
                  </tr>
                  
                  <tr className="bg-[#fffaf5]">
                    
                    <td className="px-6 py-4 text-sm text-slate-700">
                      No Artificial Preservatives
                    </td>
                    
                    <td className="px-6 py-4 text-center text-green-600">
                      <span className="text-xl">✓</span>
                    </td>
                    
                    <td className="px-6 py-4 text-center text-red-500">
                      <span className="text-xl">✗</span>
                    </td>
                    
                  </tr>
                  
                  <tr>
                    
                    <td className="px-6 py-4 text-sm text-slate-700">
                      Small-Batch Made
                    </td>
                    
                    <td className="px-6 py-4 text-center text-green-600">
                      <span className="text-xl">✓</span>
                    </td>
                    
                    <td className="px-6 py-4 text-center text-red-500">
                      <span className="text-xl">✗</span>
                    </td>
                    
                  </tr>
                  
                  <tr className="bg-[#fffaf5]">
                    
                    <td className="px-6 py-4 text-sm text-slate-700">
                      Transparent Labeling
                    </td>
                    
                    <td className="px-6 py-4 text-center text-green-600">
                      <span className="text-xl">✓</span>
                    </td>
                    
                    <td className="px-6 py-4 text-center text-amber-500">
                      <span className="text-xl">~</span>
                    </td>
                    
                  </tr>
                  
                  <tr>
                    
                    <td className="px-6 py-4 text-sm text-slate-700">
                      Taste Priority
                    </td>
                    
                    <td className="px-6 py-4 text-center text-green-600">
                      <span className="text-xl">✓</span>
                    </td>
                    
                    <td className="px-6 py-4 text-center text-amber-500">
                      <span className="text-xl">~</span>
                    </td>
                    
                  </tr>
                  
                </tbody>
                
              </table>
              
            </div>
            
          </div>
          
        </div>
        
      </section>

      {/* =======================================================
          TESTIMONIAL
      ======================================================= */}
      
      <section className="bg-white px-6 py-16 sm:py-24 lg:px-8">
        
        <div className="mx-auto max-w-4xl">
          
          <div className="rounded-3xl bg-gradient-to-br from-[#8b542f] to-[#6f4226] px-8 py-12 text-center shadow-2xl sm:px-12 sm:py-16">
            
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/20 text-3xl">
              ⭐
            </div>
            
            <blockquote className="mt-8">
              
              <p className="text-xl font-medium leading-8 text-white sm:text-2xl">
                "I never thought healthy snacks could taste this good! GuiltFree Cravings has completely changed my snacking habits."
              </p>
              
              <footer className="mt-6">
                
                <p className="text-base font-semibold text-white">
                  — Happy Customer
                </p>
                
                <p className="text-sm text-white/80">
                  Verified Buyer
                </p>
                
              </footer>
              
            </blockquote>
            
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
              Ready to Experience the Difference?
            </h2>
            
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Join thousands of happy customers who've made the switch to guilt-free snacking.
            </p>
            
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              
              <Link
                to="/products"
                className="inline-flex items-center justify-center rounded-full bg-[#8b542f] px-8 py-4 text-sm font-semibold text-white shadow-lg transition hover:bg-[#744324] focus:outline-none focus:ring-2 focus:ring-[#8b542f] focus:ring-offset-2"
              >
                Explore Products
              </Link>
              
              <Link
                to="/about"
                className="inline-flex items-center justify-center rounded-full border-2 border-[#8b542f] px-8 py-4 text-sm font-semibold text-[#8b542f] transition hover:bg-[#fffaf5] focus:outline-none focus:ring-2 focus:ring-[#8b542f] focus:ring-offset-2"
              >
                Learn More About Us
              </Link>
              
            </div>
            
          </div>
          
        </div>
        
      </section>
      
    </main>
  );
}

export default WhyChoosePage;

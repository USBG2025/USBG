import Link from 'next/link';
import { Sparkles, Heart, Zap, Palette, Camera, Coffee, Lightbulb, Rocket, Star } from 'lucide-react';

export default function LaunchCraftStudioLanding() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Playful Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-orange-500 to-pink-500 text-white py-20">
        {/* Floating decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse delay-150"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            {/* Fun badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6 border border-white/30">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Where Business Plans Get Beautiful</span>
              <Sparkles className="w-4 h-4" />
            </div>

            <h1 className="text-6xl md:text-7xl font-black mb-6 tracking-tight">
              LaunchCraft
              <span className="block text-5xl md:text-6xl mt-2 font-light italic">Studio</span>
            </h1>
            
            <p className="text-3xl md:text-4xl font-bold mb-6 text-yellow-100">
              Make Investors Feel Your Vision ✨
            </p>
            
            <p className="text-xl mb-4 max-w-2xl mx-auto leading-relaxed">
              Your business plan shouldn't look like a boring textbook.
            </p>
            <p className="text-2xl font-semibold mb-10 max-w-2xl mx-auto">
              It should look like <span className="underline decoration-wavy decoration-yellow-300">YOU</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link 
                href="/form"
                className="group inline-flex items-center justify-center gap-2 bg-white text-primary px-10 py-5 rounded-2xl text-xl font-bold hover:scale-105 transition-all shadow-2xl hover:shadow-primary/50"
              >
                <Rocket className="w-6 h-6 group-hover:translate-y-[-4px] transition-transform" />
                Let's Build Something Amazing
              </Link>
              <Link 
                href="#gallery"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-2xl text-xl font-bold hover:bg-white/20 transition-all border-2 border-white/30"
              >
                <Camera className="w-6 h-6" />
                See Our Work
              </Link>
            </div>

            {/* Fun stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-black mb-1">500+</div>
                <div className="text-sm opacity-90">Happy Founders</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black mb-1">100%</div>
                <div className="text-sm opacity-90">Custom Designed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black mb-1">24-48h</div>
                <div className="text-sm opacity-90">Turnaround</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Big Difference */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full font-bold mb-4">
              Here's the truth
            </div>
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              Most Business Plans Are <span className="line-through text-gray-400">Boring</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Yours won't be. We turn business plans into visual stories that investors 
              actually <span className="italic font-bold text-primary">want</span> to read.
            </p>
          </div>

          {/* Before/After style comparison */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-100 rounded-3xl p-8 relative">
              <div className="absolute -top-4 left-8 bg-gray-500 text-white px-4 py-2 rounded-full font-bold text-sm">
                😴 Typical Plan
              </div>
              <div className="space-y-4 opacity-60">
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                <div className="h-4 bg-gray-300 rounded w-full"></div>
                <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                <div className="h-4 bg-gray-300 rounded w-full"></div>
                <div className="h-32 bg-gray-300 rounded"></div>
                <div className="h-4 bg-gray-300 rounded w-2/3"></div>
              </div>
              <p className="mt-6 text-sm text-gray-500 text-center font-medium">
                Wall of text. No personality. Falls flat.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 via-pink-50 to-yellow-50 rounded-3xl p-8 relative border-4 border-primary">
              <div className="absolute -top-4 left-8 bg-primary text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                🎨 LaunchCraft Plan
              </div>
              <div className="space-y-4">
                <div className="h-6 bg-gradient-to-r from-primary to-pink-500 rounded w-3/4"></div>
                <div className="flex gap-2">
                  <div className="h-20 w-20 bg-primary/20 rounded-lg"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-3 bg-primary/30 rounded"></div>
                    <div className="h-3 bg-primary/20 rounded"></div>
                  </div>
                </div>
                <div className="h-32 bg-gradient-to-br from-primary/20 to-pink-500/20 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-12 h-12 text-primary" />
                </div>
                <div className="flex gap-2">
                  <div className="h-4 w-4 bg-primary rounded-full"></div>
                  <div className="h-4 flex-1 bg-primary/30 rounded"></div>
                </div>
              </div>
              <p className="mt-6 text-sm text-primary text-center font-bold">
                Visual. Branded. Unforgettable. ✨
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Process - Fun Timeline */}
      <section id="process" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-4">
              From Idea to <span className="text-primary">Masterpiece</span>
            </h2>
            <p className="text-xl text-gray-600">
              Our 4-step creative journey
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-pink-500 to-yellow-500 hidden md:block"></div>

            {/* Step 1 */}
            <div className="relative mb-16 md:mb-24">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2 md:text-right">
                  <div className="inline-block bg-primary text-white px-4 py-2 rounded-full font-bold mb-4">
                    Step 1
                  </div>
                  <h3 className="text-3xl font-black text-gray-900 mb-3">
                    Discovery Session
                    <Coffee className="inline-block w-8 h-8 ml-2 text-primary" />
                  </h3>
                  <p className="text-lg text-gray-600">
                    We grab coffee (virtual or real!) and get to know your brand's personality, 
                    vibe, and why you're so dang excited about this business.
                  </p>
                </div>
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-xl z-10 flex-shrink-0">
                  <Coffee className="w-10 h-10 text-white" />
                </div>
                <div className="md:w-1/2"></div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative mb-16 md:mb-24">
              <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="md:w-1/2 md:text-left">
                  <div className="inline-block bg-pink-500 text-white px-4 py-2 rounded-full font-bold mb-4">
                    Step 2
                  </div>
                  <h3 className="text-3xl font-black text-gray-900 mb-3">
                    Design Magic
                    <Palette className="inline-block w-8 h-8 ml-2 text-pink-500" />
                  </h3>
                  <p className="text-lg text-gray-600">
                    Our designers create a custom visual identity for your plan. Colors, fonts, 
                    graphics, layouts - everything tailored to YOUR brand.
                  </p>
                </div>
                <div className="w-20 h-20 bg-pink-500 rounded-full flex items-center justify-center shadow-xl z-10 flex-shrink-0">
                  <Palette className="w-10 h-10 text-white" />
                </div>
                <div className="md:w-1/2"></div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative mb-16 md:mb-24">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2 md:text-right">
                  <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full font-bold mb-4">
                    Step 3
                  </div>
                  <h3 className="text-3xl font-black text-gray-900 mb-3">
                    Market Research
                    <Zap className="inline-block w-8 h-8 ml-2 text-orange-500" />
                  </h3>
                  <p className="text-lg text-gray-600">
                    We dig into your market, competitors, and customers. Real data, 
                    presented in ways that actually make sense (and look good).
                  </p>
                </div>
                <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center shadow-xl z-10 flex-shrink-0">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <div className="md:w-1/2"></div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="md:w-1/2 md:text-left">
                  <div className="inline-block bg-yellow-500 text-white px-4 py-2 rounded-full font-bold mb-4">
                    Step 4
                  </div>
                  <h3 className="text-3xl font-black text-gray-900 mb-3">
                    Story Time
                    <Lightbulb className="inline-block w-8 h-8 ml-2 text-yellow-500" />
                  </h3>
                  <p className="text-lg text-gray-600">
                    We weave everything together into a compelling narrative that tells YOUR story 
                    in a way that makes investors lean in and say "tell me more."
                  </p>
                </div>
                <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center shadow-xl z-10 flex-shrink-0">
                  <Lightbulb className="w-10 h-10 text-white" />
                </div>
                <div className="md:w-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Special - Fun Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-4">
              Not Your Average Business Plan
            </h2>
            <p className="text-xl text-gray-600">
              Here's what makes us different (and better 😉)
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Palette,
                color: 'from-pink-400 to-pink-600',
                title: 'Custom Branding',
                desc: 'Your colors, your fonts, your vibe. Every plan is designed from scratch.',
                emoji: '🎨'
              },
              {
                icon: Heart,
                color: 'from-red-400 to-red-600',
                title: 'Made With Love',
                desc: 'We treat your business like it\'s our own. Because we care that much.',
                emoji: '❤️'
              },
              {
                icon: Zap,
                color: 'from-yellow-400 to-yellow-600',
                title: 'Lightning Fast',
                desc: '24-48 hour turnaround. Because your dreams can\'t wait.',
                emoji: '⚡'
              },
              {
                icon: Star,
                color: 'from-purple-400 to-purple-600',
                title: 'Investor Approved',
                desc: 'Beautiful AND professional. Your plan will pass the vibe check.',
                emoji: '⭐'
              },
              {
                icon: Sparkles,
                color: 'from-blue-400 to-blue-600',
                title: 'Visually Stunning',
                desc: 'Charts, graphs, and infographics that don\'t put people to sleep.',
                emoji: '✨'
              },
              {
                icon: Rocket,
                color: 'from-orange-400 to-orange-600',
                title: 'Launch Ready',
                desc: 'Everything you need to hit the ground running. Go time!',
                emoji: '🚀'
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-primary hover:scale-105"
              >
                <div className={`absolute top-4 right-4 text-4xl opacity-20 group-hover:opacity-100 transition-opacity`}>
                  {item.emoji}
                </div>
                <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Work With - Fun Bubbles */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-pink-50/30 to-yellow-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-black text-gray-900 mb-4">
            Who We Vibe With
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Creative founders, dreamers, and rebels building cool sh*t
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: 'Cafés ☕', color: 'bg-gradient-to-r from-amber-400 to-orange-500' },
              { name: 'Boutiques 👗', color: 'bg-gradient-to-r from-pink-400 to-rose-500' },
              { name: 'Beauty 💄', color: 'bg-gradient-to-r from-purple-400 to-pink-500' },
              { name: 'Fitness 💪', color: 'bg-gradient-to-r from-green-400 to-emerald-500' },
              { name: 'Lifestyle ✨', color: 'bg-gradient-to-r from-yellow-400 to-orange-500' },
              { name: 'Creators 🎬', color: 'bg-gradient-to-r from-blue-400 to-indigo-500' },
              { name: 'Local Legends 🏆', color: 'bg-gradient-to-r from-red-400 to-pink-500' },
            ].map((industry, index) => (
              <div
                key={index}
                className={`${industry.color} text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:scale-110 hover:shadow-xl transition-all cursor-pointer`}
              >
                {industry.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Super Fun */}
      <section className="py-24 bg-gradient-to-br from-primary via-pink-500 to-orange-500 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-white rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-white/30">
            <Star className="w-5 h-5" />
            <span className="font-bold">Ready to Stand Out?</span>
            <Star className="w-5 h-5" />
          </div>

          <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            Your Business Deserves a Plan That Turns Heads
          </h2>
          
          <p className="text-2xl mb-10 font-light">
            Let's create something unforgettable together.
          </p>

          <Link 
            href="/form"
            className="group inline-flex items-center gap-3 bg-white text-primary px-12 py-6 rounded-2xl text-2xl font-black hover:scale-105 transition-all shadow-2xl hover:shadow-white/50"
          >
            <Rocket className="w-8 h-8 group-hover:translate-y-[-8px] group-hover:rotate-12 transition-all" />
            Let's Make Magic
            <Sparkles className="w-8 h-8 group-hover:scale-125 transition-transform" />
          </Link>

          <p className="mt-8 text-lg opacity-90">
            ✨ No boring plans allowed ✨
          </p>
        </div>
      </section>
    </div>
  );
}

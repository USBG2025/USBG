import Link from 'next/link';
import { ArrowRight, BarChart3, Users, CheckCircle2, FileText, Calculator, Clock } from 'lucide-react';

export default function EZBusinessPlansLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Premium Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#667eea] via-[#5568d3] to-[#4a5bc4] text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                EZ Business Plans
              </h1>
              
              <p className="text-xl md:text-2xl mb-4 text-purple-100 font-light">
                Plans That Prove Your Business Works
              </p>
              
              <p className="text-lg mb-8 text-purple-50 leading-relaxed">
                Don't just tell investors you'll grow—show them. We turn your inputs into a professional, 
                data-backed business plan in as little as 24 hours.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link 
                  href="/form"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#667eea] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-all shadow-xl"
                >
                  Start My Plan
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="relative">
                {/* Mock dashboard/data visualization */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-sm font-medium">Market Analysis</div>
                    <div className="text-xs text-purple-200">Real-Time Data</div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Market Size</span>
                      <span className="font-bold">$2.4B</span>
                    </div>
                    <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-green-400 to-emerald-500 w-3/4"></div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Growth Rate</span>
                      <span className="font-bold text-green-400">+23.5%</span>
                    </div>
                    <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-400 to-indigo-500 w-2/3"></div>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-white/20">
                    <div className="flex items-center gap-2 text-xs text-purple-200">
                      <BarChart3 className="w-4 h-4" />
                      Data-backed insights for your business
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data-Driven Banner */}
      <section className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">24-48hr</div>
              <div className="text-sm text-gray-400">Delivery Time</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-sm text-gray-400">Professional Quality</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">7 Days</div>
              <div className="text-sm text-gray-400">Free Revisions</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">Expert</div>
              <div className="text-sm text-gray-400">Human Review</div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#667eea]/10 text-[#667eea] px-4 py-2 rounded-full font-semibold mb-4 text-sm">
              HOW WE DO IT
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              From Idea to Inbox in 3 Steps
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A streamlined process that gets you from concept to completed plan quickly.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Step 1 */}
            <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-[#667eea] to-[#5568d3] rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                01
              </div>
              <div className="mb-4">
                <FileText className="w-12 h-12 text-[#667eea] mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">The Smart Form</h3>
                <p className="text-gray-600 leading-relaxed">
                  Answer a short, targeted set of questions to give us the basics of your business.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-[#667eea] to-[#5568d3] rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                02
              </div>
              <div className="mb-4">
                <Users className="w-12 h-12 text-[#667eea] mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Expert Review</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our team reviews your data immediately. If we see gaps or need clarification, 
                  a specialist will reach out to you directly.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-[#667eea] to-[#5568d3] rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                03
              </div>
              <div className="mb-4">
                <Clock className="w-12 h-12 text-[#667eea] mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Fast Delivery</h3>
                <p className="text-gray-600 leading-relaxed">
                  Receive your fully finalized plan via email in 24–48 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="space-y-12">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Numbers You Can Trust
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    We organize your financial projections so they are clear, realistic, and ready 
                    for review by any partner or investor.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Accuracy Meets Speed
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    We combine a streamlined intake process with human expertise to deliver 
                    professional documents faster than a traditional consultancy.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white p-12 rounded-2xl border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What You Get</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-[#667eea]/10 rounded-lg flex items-center justify-center">
                      <FileText className="w-6 h-6 text-[#667eea]" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">The Strategy Document</h4>
                    <p className="text-gray-600">A fully written, professional business plan (Word & PDF).</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-[#667eea]/10 rounded-lg flex items-center justify-center">
                      <Calculator className="w-6 h-6 text-[#667eea]" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">The Financial Model</h4>
                    <p className="text-gray-600">Transparent, editable documents so you can adjust numbers as you grow.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-[#667eea]/10 rounded-lg flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-[#667eea]" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">7-Day Refinement Window</h4>
                    <p className="text-gray-600">Need to tweak a projection? We include one round of rapid edits free of charge.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#667eea] to-[#4a5bc4] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Create Your Growth Strategy?
          </h2>
          <p className="text-xl mb-10 text-purple-100">
            Get a professional, data-backed business plan delivered in 24-48 hours.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/form"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#667eea] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-all shadow-xl"
            >
              Create My Growth Strategy
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

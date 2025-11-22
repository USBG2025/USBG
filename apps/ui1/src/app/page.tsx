import Link from 'next/link';
import { ArrowRight, BarChart3, Globe, Shield, TrendingUp, Users, Award, BookOpen, Target, CheckCircle2, Building2, Briefcase } from 'lucide-react';

export default function BlueprintFoundryLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Premium Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#667eea] via-[#5568d3] to-[#4a5bc4] text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 text-sm font-medium border border-white/20">
                <Award className="w-4 h-4" />
                Trusted by 500+ Businesses
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Blueprint Foundry
              </h1>
              
              <p className="text-xl md:text-2xl mb-4 text-purple-100 font-light">
                Where Data Becomes Strategy
              </p>
              
              <p className="text-lg mb-8 text-purple-50 leading-relaxed">
                Evidence-based business planning for organizations that demand precision, 
                credibility, and results. Built for banks. Designed for investors. 
                Engineered for success.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link 
                  href="/form"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#667eea] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-all shadow-xl"
                >
                  Request a Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  href="#methodology"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/20 transition-all border border-white/30"
                >
                  Our Methodology
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="flex items-center gap-8 pt-6 border-t border-white/20">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  <span className="text-sm">SBA Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5" />
                  <span className="text-sm">Bank Approved</span>
                </div>
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
                      Data sourced from IBISWorld, Statista, NAICS
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
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-sm text-gray-400">Plans Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">$250M+</div>
              <div className="text-sm text-gray-400">Capital Raised</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">92%</div>
              <div className="text-sm text-gray-400">Funding Success</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-sm text-gray-400">Industries</div>
            </div>
          </div>
        </div>
      </section>

      {/* The Blueprint Method */}
      <section id="methodology" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#667eea]/10 text-[#667eea] px-4 py-2 rounded-full font-semibold mb-4 text-sm">
              OUR METHODOLOGY
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              The Blueprint Method™
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to business planning that combines rigorous analysis 
              with strategic positioning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Phase 1 */}
            <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-[#667eea] to-[#5568d3] rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                01
              </div>
              <div className="mb-4">
                <Globe className="w-12 h-12 text-[#667eea] mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Market Intelligence</h3>
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive analysis of market demand, competitive landscape, pricing dynamics, 
                  regulatory environment, and emerging trends. Powered by institutional-grade 
                  data sources.
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <CheckCircle2 className="w-4 h-4 text-[#667eea]" />
                  IBISWorld • Statista • NAICS
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-[#667eea] to-[#5568d3] rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                02
              </div>
              <div className="mb-4">
                <BarChart3 className="w-12 h-12 text-[#667eea] mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Financial Architecture</h3>
                <p className="text-gray-600 leading-relaxed">
                  Sophisticated financial modeling including revenue projections, cost structures, 
                  break-even analysis, and capital requirements. Tailored to your market and 
                  business model.
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <CheckCircle2 className="w-4 h-4 text-[#667eea]" />
                  3-Year Projections • Scenario Analysis
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-[#667eea] to-[#5568d3] rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                03
              </div>
              <div className="mb-4">
                <Users className="w-12 h-12 text-[#667eea] mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Operational Strategy</h3>
                <p className="text-gray-600 leading-relaxed">
                  Detailed operational planning covering organizational structure, staffing 
                  requirements, workflow optimization, capacity planning, and supplier ecosystem 
                  development.
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <CheckCircle2 className="w-4 h-4 text-[#667eea]" />
                  Scalability Framework • KPI Dashboard
                </div>
              </div>
            </div>

            {/* Phase 4 */}
            <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-[#667eea] to-[#5568d3] rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                04
              </div>
              <div className="mb-4">
                <Target className="w-12 h-12 text-[#667eea] mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Funding Positioning</h3>
                <p className="text-gray-600 leading-relaxed">
                  Strategic alignment of your business plan to meet the specific criteria and 
                  expectations of lenders, investors, and strategic partners. SBA-compliant 
                  formatting included.
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <CheckCircle2 className="w-4 h-4 text-[#667eea]" />
                  SBA-Ready • Investor Presentation
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Blueprint Foundry */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Leading Organizations Choose Blueprint Foundry
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Institutional-Grade Research',
                    desc: 'Access to premium data sources including IBISWorld, Statista, and proprietary market intelligence.'
                  },
                  {
                    title: 'Conservative Financial Modeling',
                    desc: 'Realistic, defendable projections that satisfy even the most scrutinizing lenders and investors.'
                  },
                  {
                    title: 'Regulatory Compliance',
                    desc: 'SBA-compliant formatting and documentation standards accepted by major financial institutions.'
                  },
                  {
                    title: 'Strategic Risk Assessment',
                    desc: 'Comprehensive risk identification and mitigation strategies that demonstrate responsible planning.'
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-[#667eea]/10 rounded-lg flex items-center justify-center">
                        <CheckCircle2 className="w-6 h-6 text-[#667eea]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white p-12 rounded-2xl border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Comprehensive Deliverables</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Executive Summary',
                  'Market Analysis',
                  'Competitive Intelligence',
                  'Financial Projections',
                  'Operations Plan',
                  'Marketing Strategy',
                  'Risk Assessment',
                  'Funding Requirements',
                  'Milestone Roadmap',
                  'Exit Strategy',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-[#667eea] rounded-full"></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-600 italic">
                  Typical deliverable: 25-40 pages of institutional-quality documentation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600">
              Specialized expertise across diverse sectors
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Briefcase, name: 'Professional Services' },
              { icon: Building2, name: 'Commercial Real Estate' },
              { icon: TrendingUp, name: 'Technology & SaaS' },
              { icon: Users, name: 'Healthcare & Wellness' },
              { icon: Globe, name: 'Hospitality & Food' },
              { icon: BookOpen, name: 'Education & Training' },
              { icon: Award, name: 'Manufacturing' },
              { icon: Shield, name: 'Financial Services' },
            ].map((industry, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#667eea] hover:shadow-lg transition-all text-center">
                <industry.icon className="w-8 h-8 text-[#667eea] mx-auto mb-3" />
                <p className="text-sm font-semibold text-gray-900">{industry.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#667eea] to-[#4a5bc4] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Build Your Strategic Foundation?
          </h2>
          <p className="text-xl mb-10 text-purple-100">
            Partner with Blueprint Foundry to develop a business plan that commands respect 
            and opens doors.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/form"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#667eea] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-all shadow-xl"
            >
              Schedule Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="mt-12 pt-12 border-t border-white/20">
            <p className="text-sm text-purple-200">
              Trusted by businesses securing financing from major banks and institutional investors
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

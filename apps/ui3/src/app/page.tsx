import Link from 'next/link';
import { ArrowRight, Shield, Calculator, TrendingUp, FileCheck, Users, CheckCircle } from 'lucide-react';

export default function GrowthPathAdvisorsLanding() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              GrowthPath Advisors
            </h1>
            <p className="text-2xl md:text-3xl font-light mb-4">
              Where Practical Advice Meets CPA-Level Precision
            </p>
            <p className="text-xl mb-10 max-w-2xl mx-auto">
              A Clear, CPA-Endorsed Business Plan for Real Business Owners
            </p>
            <p className="text-lg mb-10 max-w-3xl mx-auto opacity-95">
              Starting or growing a business is easier when you have a plan built by professionals 
              who understand the numbers behind your success. Our CPA-backed Business Plans combine 
              plain-English guidance with accurate financial modeling — giving you clarity, confidence, 
              and lender-ready documentation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/form"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all shadow-lg"
              >
                Get Your CPA-Backed Plan
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why CPA-Backed */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why CPA-Backed Planning Matters
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Numbers matter — especially when money, investors, and long-term decisions are at stake. 
              GrowthPath Advisors is led by CPAs who specialize in small-business financials, projections, 
              and startup planning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Financial statements built on accepted accounting standards',
              'Accurate cost estimates using industry benchmarks',
              'Realistic revenue projections — not inflated guesses',
              'Clarity on cash flow, margins, and breakeven',
              'A plan lenders and investors trust',
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 bg-blue-50 p-6 rounded-xl border border-blue-100">
                <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-gray-700 font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How We Help Small Businesses
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Clear Financial Picture */}
            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-primary">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Calculator className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Clear Financial Picture</h3>
              </div>
              <p className="text-gray-700">
                We explain your startup costs, monthly expenses, taxes, payroll, and cash flow in plain 
                English — with calculations done by licensed professionals.
              </p>
            </div>

            {/* Tax-Aware Planning */}
            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-primary">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <FileCheck className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Tax-Aware Planning</h3>
              </div>
              <p className="text-gray-700">
                Your plan includes tax considerations, deductions, and compliance steps that new owners 
                often overlook.
              </p>
            </div>

            {/* Local Market Analysis */}
            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-primary">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Local Market Analysis</h3>
              </div>
              <p className="text-gray-700">
                We assess local demand, competitors, and pricing to ensure your financial assumptions 
                align with your actual environment.
              </p>
            </div>

            {/* One-Year Roadmap */}
            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-primary">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">One-Year Roadmap</h3>
              </div>
              <p className="text-gray-700">
                From opening day to month 12, we outline clear priorities so you always know what to focus on.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What's Inside Your CPA-Backed Business Plan
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              A lender-ready document containing:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Professionally prepared financial projections (CPA-reviewed)',
              'Startup + operating cost analysis',
              'Cash flow forecasting',
              'Break-even calculations',
              'Profit margin expectations',
              'Local competitor insights',
              'Customer + demand overview',
              'Pricing recommendations',
              'Financial risks + mitigation strategies',
              'Step-by-step first-year roadmap',
              'Simple tax considerations',
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg border border-blue-100">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg font-semibold text-gray-900">
              This is the level of detail lenders, banks, and partners expect.
            </p>
          </div>
        </div>
      </section>

      {/* Designed For */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Designed for Everyday Business Owners
            </h2>
            <p className="text-xl text-gray-600 mb-8">Perfect for:</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              'Food & beverage',
              'Retail and boutique shops',
              'Trades and contractors',
              'Home-based businesses',
              'Beauty + wellness',
              'Health practitioners',
              'Online ventures',
              'Independent professionals',
            ].map((industry) => (
              <div key={industry} className="bg-white p-4 rounded-lg shadow-sm text-center font-medium text-gray-700 border-l-4 border-primary">
                {industry}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 italic">
              We explain everything in language you actually understand while maintaining 
              CPA-level accuracy behind the scenes.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Factors */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Small Business Owners Trust Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Built by CPAs', icon: Shield },
              { title: 'No jargon or confusing terminology', icon: CheckCircle },
              { title: 'Realistic, conservative financials', icon: Calculator },
              { title: 'Clear breakdowns of costs + revenue', icon: TrendingUp },
              { title: 'Friendly, accessible support', icon: Users },
              { title: 'Straightforward process', icon: FileCheck },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4 bg-blue-50 p-6 rounded-xl border border-blue-100">
                <item.icon className="w-8 h-8 text-primary flex-shrink-0" />
                <p className="font-semibold text-gray-900">{item.title}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-xl font-semibold text-gray-900">
              You don't need an accounting degree — that's our job.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Get a Business Plan backed by real financial expertise and written for real people.
          </h2>
          <Link 
            href="/form"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all shadow-lg"
          >
            Start Your CPA-Backed Plan
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

import Link from 'next/link';
import { ArrowRight, FileText, Sparkles, Clock, CheckCircle, Eye, Target } from 'lucide-react';

export default function BusinessPlanBoutiqueLanding() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Business Plan Boutique
            </h1>
            <p className="text-2xl md:text-3xl font-light mb-4">
              Look As Professional As You Are
            </p>
            <p className="text-xl mb-10 max-w-3xl mx-auto opacity-95">
              First impressions matter. We create clean, organized business plans that make it easy 
              for investors to say "yes" to your vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/form"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all shadow-lg"
              >
                Build My Boutique Plan
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            <div className="space-y-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Stand Out in the Stack
              </h2>
              <p className="text-lg text-gray-700">
                Most business plans are boring and hard to read. Yours will be sharp, organized, 
                and highlight exactly why your idea is a winner.
              </p>
            </div>

            <div className="space-y-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Refined for Clarity
              </h2>
              <p className="text-lg text-gray-700">
                We refine your information to ensure the flow and structure make sense to an outsider.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              The Turnaround
            </h2>
            <p className="text-xl text-gray-600">
              From concept to delivery in three focused steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-primary">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Step 1</h3>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Share Your Vision</h4>
              <p className="text-gray-700">
                Submit your concept through our streamlined secure portal.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-primary">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Step 2</h3>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">The Polish</h4>
              <p className="text-gray-700">
                Our team builds your financial model and narrative. We will email you if we have 
                any specific follow-up questions to ensure accuracy.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-primary">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Step 3</h3>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Delivery</h4>
              <p className="text-gray-700">
                Your complete, investor-ready document arrives in your inbox within 72 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What's In The Box
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Everything you need to present with confidence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-primary">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">The Design Assets</h3>
              <p className="text-gray-700">
                High-resolution PDFs for presentation and editable source files for future updates.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-primary">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">The Financials</h3>
              <p className="text-gray-700">
                Clear, easy-to-read models.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-primary">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">The Final Polish</h3>
              <p className="text-gray-700">
                We include a revision round to fine-tune the language and ensure it captures 
                your voice perfectly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Make Your Best Impression?
          </h2>
          <p className="text-xl mb-8 opacity-95">
            Get a clean, organized business plan that makes investors excited to say yes.
          </p>
          <Link 
            href="/form"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all shadow-lg"
          >
            Start My Boutique Plan
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

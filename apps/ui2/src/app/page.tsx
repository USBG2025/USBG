import Link from 'next/link';
import { ArrowRight, FileText, CheckCircle2, Users, Clock, Shield, Award } from 'lucide-react';

export default function SignatureBusinessPlansLanding() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Professional Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-orange-500 to-pink-500 text-white py-20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight">
              Signature Business Plans
            </h1>
            
            <p className="text-3xl md:text-4xl font-bold mb-6 text-slate-100">
              Be Ready for the Big Questions
            </p>
            
            <p className="text-xl mb-10 max-w-3xl mx-auto leading-relaxed text-slate-200">
              When you ask for funding, you need to sound ready. We build professional, detailed plans 
              that help you explain exactly how you will succeed.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link 
                href="/form"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary px-10 py-5 rounded-lg text-xl font-semibold hover:bg-slate-50 transition-all shadow-xl"
              >
                Start My Professional Plan
                <ArrowRight className="w-6 h-6" />
              </Link>
            </div>

            {/* Professional stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-4xl font-bold mb-1">100%</div>
                <div className="text-sm opacity-90">Your Own</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-1">100%</div>
                <div className="text-sm opacity-90">Expert Reviewed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-1">3 Days</div>
                <div className="text-sm opacity-90">Delivery Time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            <div className="space-y-6">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Tell a Stronger Story
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Investors invest in people. We help you articulate your background, your market, 
                and your goals in a way that demands respect.
              </p>
            </div>

            <div className="space-y-6">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Verified Quality
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Your plan isn't just generated; it is reviewed. We ensure your narrative aligns 
                with your numbers before we send it back to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              A Process Built for Clarity
            </h2>
            <p className="text-xl text-gray-600">
              Three focused steps to deliver your professional strategy document
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-pink-500 to-orange-500 hidden md:block"></div>

            {/* Step 1 */}
            <div className="relative mb-16 md:mb-24">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2 md:text-right">
                  <div className="inline-block bg-primary text-white px-4 py-2 rounded-lg font-semibold mb-4">
                    Step 1
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">
                    Initial Intake
                  </h3>
                  <p className="text-lg text-gray-600">
                    Complete a focused questionnaire designed to capture your unique vision and goals.
                  </p>
                </div>
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-xl z-10 flex-shrink-0">
                  <FileText className="w-10 h-10 text-white" />
                </div>
                <div className="md:w-1/2"></div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative mb-16 md:mb-24">
              <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="md:w-1/2 md:text-left">
                  <div className="inline-block bg-pink-500 text-white px-4 py-2 rounded-lg font-semibold mb-4">
                    Step 2
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">
                    Consultant Check
                  </h3>
                  <p className="text-lg text-gray-600">
                    A dedicated plan writer reviews your file. If we need more detail to strengthen 
                    your case, we will contact you personally to discuss.
                  </p>
                </div>
                <div className="w-20 h-20 bg-pink-500 rounded-full flex items-center justify-center shadow-xl z-10 flex-shrink-0">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <div className="md:w-1/2"></div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2 md:text-right">
                  <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold mb-4">
                    Step 3
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">
                    Presentation Ready
                  </h3>
                  <p className="text-lg text-gray-600">
                    We deliver your polished, professional strategy document within 3 business days.
                  </p>
                </div>
                <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center shadow-xl z-10 flex-shrink-0">
                  <Clock className="w-10 h-10 text-white" />
                </div>
                <div className="md:w-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Your Professional Asset Package
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to present with confidence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-200 hover:border-primary hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Full Ownership</h3>
              <p className="text-gray-600 leading-relaxed">
                You own 100% of the intellectual property.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-200 hover:border-primary hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Editable Source Files</h3>
              <p className="text-gray-600 leading-relaxed">
                We provide the unlocked files so you are never "locked out" of your own plan.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-200 hover:border-primary hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Accuracy Guarantee</h3>
              <p className="text-gray-600 leading-relaxed">
                If our team missed a specific detail from your initial notes, we will correct it 
                immediately at no cost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-primary via-pink-500 to-orange-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Ready to Present Your Vision Professionally
          </h2>
          
          <p className="text-2xl mb-10 font-light">
            Let our expert team help you articulate your path to success.
          </p>

          <Link 
            href="/form"
            className="inline-flex items-center gap-3 bg-white text-primary px-12 py-6 rounded-lg text-2xl font-semibold hover:bg-slate-50 transition-all shadow-2xl"
          >
            Begin My Process
            <ArrowRight className="w-8 h-8" />
          </Link>

          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-lg opacity-90">
              Professional plans reviewed by experienced consultants
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

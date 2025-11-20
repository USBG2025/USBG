'use client';

import { useMultiStepForm, MultiStepFormData } from '@monorepo/forms';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import StepIndicator from './StepIndicator';
import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';

export default function MultiStepForm() {
  const { form, currentStep, totalSteps, nextStep, prevStep, isFirstStep, isLastStep } =
    useMultiStepForm(3);

  const onSubmit = async (data: MultiStepFormData) => {
    if (isLastStep) {
      console.log('Form submitted:', data);
      alert('Form submitted successfully! Check console for data.');
    } else {
      await nextStep();
    }
  };

  return (
    <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl p-8 border-t-4 border-primary">
      <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Step Content */}
        <div className="min-h-[400px]">
          {currentStep === 1 && <Step1 form={form} />}
          {currentStep === 2 && <Step2 form={form} />}
          {currentStep === 3 && <Step3 form={form} />}
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between pt-6 border-t-2 border-gray-100">
          <button
            type="button"
            onClick={prevStep}
            disabled={isFirstStep}
            className={`
              flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold
              transition-all duration-200
              ${
                isFirstStep
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-white border-2 border-gray-300 text-gray-700 hover:border-primary hover:text-primary'
              }
            `}
          >
            <ChevronLeft className="w-5 h-5" />
            Previous Step
          </button>

          <button
            type="submit"
            className="
              flex items-center gap-2 px-8 py-2.5 rounded-lg font-semibold
              bg-primary text-white hover:bg-primary-dark
              transition-all duration-200 shadow-md hover:shadow-lg
              min-w-[140px] justify-center
            "
          >
            {isLastStep ? 'Submit' : 'Next Step'}
            {!isLastStep && <ChevronRight className="w-5 h-5" />}
          </button>
        </div>
      </form>

      {/* Debug Info - Remove in production */}
      {process.env.NODE_ENV === 'development' && (
        <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <p className="text-xs font-semibold text-gray-600 mb-2">Debug Info:</p>
          <pre className="text-xs text-gray-800 overflow-auto">
            {JSON.stringify(form.watch(), null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}

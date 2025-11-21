'use client';
import { useState } from 'react';
import { useMultiStepForm, MultiStepFormData, getSchemaForPage } from '@monorepo/forms';
import { Button } from '@monorepo/ui';
import StepIndicator from './StepIndicator';
import Step from './steps/Step';
import { ArrowLeft } from 'lucide-react';
import { z } from 'zod'

export default function MultiStepForm() {
  const { form, goToStep, currentStep, totalSteps, nextStep, prevStep, isFirstStep, isLastStep } =
    useMultiStepForm(9);

const [isSaving, setIsSaving] = useState(false);

const onSubmit = async (data: MultiStepFormData) => {
  try {
    setIsSaving(true);

    if (isLastStep) {
      // Validate final page
      const currentSchema = getSchemaForPage(currentStep);
      await currentSchema.parseAsync(data);

      // Submit all data to API
      const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

      const response = await fetch(`${API_URL}/api/business-plans`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to submit form');
      }

      const result = await response.json();
      console.log('Form submitted successfully:', result);
      alert('Form submitted successfully!');
      
      form.reset();
      goToStep(1)
    } else {
      // Just move to next step, no API call
      await nextStep();
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      error.errors.forEach((err) => {
        form.setError(err.path[0] as any, {
          message: err.message,
        });
      });
    } else {
      console.error('Submission error:', error);
      alert(error instanceof Error ? error.message : 'Failed to submit. Please try again.');
    }
  } finally {
    setIsSaving(false);
  }
};

  const getButtonText = () => {
    if (currentStep === totalSteps - 1)
      return 'Review';
    else if (isLastStep)
      return 'Submit'
    else
      return 'Next'
  }

  return (
    <div className="w-full max-w-7xl h-[90vh] bg-white rounded-2xl shadow-xl p-8 overflow-y-auto">
      <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="min-h-[400px]">
          <Step form={form} currentStep={currentStep} isLastStep={isLastStep} totalSteps={totalSteps} />
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between pt-6 border-t">
          <div>
            {!isFirstStep && (
              <Button
                type="button"
                onClick={prevStep}
                variant="outline"
                className="flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </Button>
            )}
          </div>

          <Button type="submit" className="ml-auto min-w-[120px]" disabled={isSaving}>
            {getButtonText()}
          </Button>
        </div>
      </form>

      {/* Debug Info - Remove in production */}
      {process.env.NODE_ENV === 'development' && (
        <div className="mt-8 p-4 bg-gray-100 rounded-lg">
          <p className="text-xs text-gray-600 mb-2">Debug Info:</p>
          <pre className="text-xs text-gray-800 overflow-auto">
            {JSON.stringify(form.watch(), null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}

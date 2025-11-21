'use client';

import { Check } from 'lucide-react';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const steps = [
  { id: 1, label: 'Step 1' },
  { id: 2, label: 'Step 2' },
  { id: 3, label: 'Step 3' },
  { id: 4, label: 'Step 4' },
  { id: 5, label: 'Step 5' },
  { id: 6, label: 'Step 6' },
  { id: 7, label: 'Step 7' },
  { id: 8, label: 'Step 8' },
  { id: 9, label: 'Step 9' },
];

export default function StepIndicator({ currentStep, totalSteps }: StepIndicatorProps) {
  return (
    <div className="mb-8 bg-gray-50 -mx-8 -mt-8 px-8 py-6 rounded-t-2xl border-b-2 border-gray-200">
      <div className="flex items-center justify-between relative">
        {/* Progress Line */}
        <div className="absolute top-5 left-0 right-0 h-0.5 bg-gray-300 -z-10" />
        <div
          className="absolute top-5 left-0 h-0.5 bg-primary transition-all duration-500 -z-10"
          style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
        />

        {steps.slice(0, totalSteps).map((step) => (
          <div key={step.id} className="flex flex-col items-center relative">
            {/* Step Circle */}
            <div
              className={`
                w-10 h-10 rounded-full flex items-center justify-center font-semibold
                transition-all duration-300 border-2 bg-white
                ${
                  step.id < currentStep
                    ? 'border-primary bg-primary text-white'
                    : step.id === currentStep
                      ? 'border-primary text-primary'
                      : 'border-gray-300 text-gray-400'
                }
              `}
            >
              {step.id < currentStep ? <Check className="w-5 h-5" /> : <span>{step.id}</span>}
            </div>
            {/* Step Label */}
            <span
              className={`
                mt-2 text-xs font-medium text-center whitespace-nowrap
                ${step.id === currentStep ? 'text-primary' : 'text-gray-600'}
              `}
            >
              {step.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

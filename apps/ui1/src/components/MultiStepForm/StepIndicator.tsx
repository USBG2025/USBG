'use client';

import { Check } from 'lucide-react';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const steps = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, {id: 9}];

export default function StepIndicator({ currentStep, totalSteps }: StepIndicatorProps) {
  return (
    <div className="mb-8">
      <div
        className="flex items-center justify-between mx-auto"
        style={{ maxWidth: 'min-content' }}
      >
        {steps.slice(0, totalSteps).map((step, index) => (
          <div key={step.id} className="flex items-center">
            <div className="flex flex-col items-center">
              <div
                className={`
                  w-10 h-10 rounded-full flex items-center justify-center font-semibold
                  transition-all duration-300
                  ${step.id < currentStep
                    ? 'bg-primary text-white'
                    : step.id === currentStep
                      ? 'bg-primary text-white ring-4 ring-primary ring-opacity-30'
                      : 'bg-gray-200 text-gray-500'
                  }
                `}
              >
                {step.id < currentStep ? <Check className="w-5 h-5" /> : <span>{step.id}</span>}
              </div>
            </div>
            {index < totalSteps - 1 && (
              <div
                className={`
                  w-16 h-1 mx-2 transition-all duration-300
                  ${step.id < currentStep ? 'bg-primary' : 'bg-gray-200'}
                `}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

'use client';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const steps = [
  { id: 1, label: 'Service' },
  { id: 2, label: 'Contact' },
  { id: 3, label: 'Content' },
];

export default function StepIndicator({ currentStep, totalSteps }: StepIndicatorProps) {
  return (
    <div className="mb-8 bg-white border-b border-gray-200">
      <div className="flex items-center">
        {steps.slice(0, totalSteps).map((step) => (
          <div
            key={step.id}
            className={`
              relative flex items-center justify-center h-16
              transition-all duration-300
              ${step.id === 1 ? 'pl-8' : ''}
              ${
                step.id === currentStep
                  ? 'bg-primary text-white z-10'
                  : step.id < currentStep
                  ? 'bg-gray-300 text-gray-700'
                  : 'bg-gray-100 text-gray-500'
              }
            `}
            style={{
              width: `${100 / totalSteps}%`,
              clipPath:
                step.id === totalSteps
                  ? 'polygon(10% 0%, 100% 0%, 100% 100%, 10% 100%, 0% 50%)'
                  : 'polygon(10% 0%, 100% 0%, 90% 50%, 100% 100%, 10% 100%, 0% 50%)',
            }}
          >
            <div className="flex items-center gap-3 font-semibold">
              <span className="text-2xl">{step.id}</span>
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-wider opacity-80">STEP</span>
                <span className="text-sm">{step.label}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

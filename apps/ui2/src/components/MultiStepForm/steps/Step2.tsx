'use client';

import { UseFormReturn } from 'react-hook-form';
import { MultiStepFormData } from '@monorepo/forms';
import { Input } from '@monorepo/ui';
import { Info } from 'lucide-react';

interface Step2Props {
  form: UseFormReturn<MultiStepFormData>;
}

export default function Step2({ form }: Step2Props) {
  const { register, formState: { errors } } = form;

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Contact Details
        </h2>
        <p className="text-gray-600 text-sm">
          Please provide your contact information
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="relative">
          <Input
            label="Full Name"
            placeholder="John Doe"
            error={errors.name?.message}
            {...register('name')}
          />
          <div className="absolute right-0 top-0 mt-6 mr-3">
            <Info className="w-4 h-4 text-primary cursor-help" title="Enter your full name" />
          </div>
        </div>

        <div className="relative">
          <Input
            label="Phone Number"
            placeholder="+1 (555) 123-4567"
            error={errors.phone?.message}
            {...register('phone')}
          />
          <div className="absolute right-0 top-0 mt-6 mr-3">
            <Info className="w-4 h-4 text-primary cursor-help" title="Enter your contact phone number" />
          </div>
        </div>

        <div className="col-span-2 relative">
          <Input
            label="Website URL (Optional)"
            placeholder="https://example.com"
            error={errors.website?.message}
            {...register('website')}
          />
          <div className="absolute right-0 top-0 mt-6 mr-3">
            <Info className="w-4 h-4 text-primary cursor-help" title="Enter your website URL if applicable" />
          </div>
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start gap-3">
        <Info className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
        <div className="text-sm text-amber-800">
          <p className="font-medium mb-1">Privacy Notice:</p>
          <p className="text-amber-700">
            Your contact information will be used solely for communication purposes regarding your service request.
          </p>
        </div>
      </div>
    </div>
  );
}

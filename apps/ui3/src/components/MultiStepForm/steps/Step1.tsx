'use client';

import { UseFormReturn } from 'react-hook-form';
import { MultiStepFormData } from '@monorepo/forms';
import { Input } from '@monorepo/ui';
import { ChevronRight } from 'lucide-react';

interface Step1Props {
  form: UseFormReturn<MultiStepFormData>;
}

export default function Step1({ form }: Step1Props) {
  const { register, formState: { errors } } = form;

  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
        <span className="hover:text-primary cursor-pointer">Form</span>
        <ChevronRight className="w-4 h-4" />
        <span className="text-primary font-semibold">Service Selection</span>
      </div>

      {/* Content */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white text-xl font-bold">
            1
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Service Selection</h2>
            <p className="text-gray-600 text-sm mt-1">
              Please specify the type of service you require
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <Input
            label="Service Type"
            placeholder="Enter service type (e.g., design, massage, other)"
            error={errors.serviceType?.message}
            {...register('serviceType')}
          />

          <div className="bg-blue-50 border-l-4 border-primary p-4 rounded">
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Note:</span> Common service types include design, massage, or other specialized services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

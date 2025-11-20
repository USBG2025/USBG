'use client';

import { UseFormReturn } from 'react-hook-form';
import { MultiStepFormData } from '@monorepo/forms';
import { Input } from '@monorepo/ui';
import { Info } from 'lucide-react';

interface Step1Props {
  form: UseFormReturn<MultiStepFormData>;
}

export default function Step1({ form }: Step1Props) {
  const { register, formState: { errors } } = form;

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Service Selection
        </h2>
        <p className="text-gray-600 text-sm">
          Please specify the type of service you require
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div className="relative">
          <Input
            label="Service Type"
            placeholder="Enter service type (e.g., design, massage, other)"
            error={errors.serviceType?.message}
            {...register('serviceType')}
          />
          <div className="absolute right-0 top-0 mt-6 mr-3">
            <Info className="w-4 h-4 text-primary cursor-help" title="Enter the type of service you need" />
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-3">
          <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
          <div className="text-sm text-blue-800">
            <p className="font-medium mb-1">Service Type Options:</p>
            <p className="text-blue-700">
              Common options include: <span className="font-mono">design</span>, <span className="font-mono">massage</span>, or <span className="font-mono">other</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

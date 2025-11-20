'use client';

import { UseFormReturn } from 'react-hook-form';
import { MultiStepFormData } from '@monorepo/forms';
import { Input } from '@monorepo/ui';
import { Info } from 'lucide-react';

interface Step3Props {
  form: UseFormReturn<MultiStepFormData>;
}

export default function Step3({ form }: Step3Props) {
  const { register, formState: { errors } } = form;

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Content Availability
        </h2>
        <p className="text-gray-600 text-sm">
          Let us know about your content readiness
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div className="relative">
          <Input
            label="Do you have written content available?"
            placeholder="Enter 'yes' or 'no'"
            error={errors.hasWrittenContent?.message}
            {...register('hasWrittenContent')}
          />
          <div className="absolute right-0 top-0 mt-6 mr-3">
            <Info className="w-4 h-4 text-primary cursor-help" title="Indicate if you have content ready" />
          </div>
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Additional Notes (Optional)
          </label>
          <textarea
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-y"
            rows={4}
            placeholder="Provide any additional information about your content or requirements..."
            {...register('additionalNotes')}
          />
          <div className="absolute right-0 top-0 mt-6 mr-3">
            <Info className="w-4 h-4 text-primary cursor-help" title="Add any relevant details" />
          </div>
        </div>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
        <Info className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
        <div className="text-sm text-green-800">
          <p className="font-medium mb-1">Content Options:</p>
          <p className="text-green-700">
            Answer with <span className="font-mono font-semibold">yes</span> if you have content ready, or <span className="font-mono font-semibold">no</span> if you need content creation services.
          </p>
        </div>
      </div>
    </div>
  );
}

'use client';

import { UseFormReturn } from 'react-hook-form';
import { MultiStepFormData } from '@monorepo/forms';
import { Input } from '@monorepo/ui';
import { ChevronRight, FileText } from 'lucide-react';

interface Step3Props {
  form: UseFormReturn<MultiStepFormData>;
}

export default function Step3({ form }: Step3Props) {
  const { register, formState: { errors } } = form;

  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
        <span className="hover:text-primary cursor-pointer">Form</span>
        <ChevronRight className="w-4 h-4" />
        <span className="text-primary font-semibold">Content Availability</span>
      </div>

      {/* Content */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white text-xl font-bold">
            3
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Content Availability</h2>
            <p className="text-gray-600 text-sm mt-1">
              Let us know about your content requirements
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="relative">
            <div className="absolute left-3 top-9 text-gray-400">
              <FileText className="w-5 h-5" />
            </div>
            <Input
              label="Do you have written content available?"
              placeholder="Enter 'yes' or 'no'"
              className="pl-10"
              error={errors.hasWrittenContent?.message}
              {...register('hasWrittenContent')}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Additional Notes (Optional)
            </label>
            <textarea
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-y"
              rows={5}
              placeholder="Provide any additional information about your content or requirements..."
              {...register('additionalNotes')}
            />
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5">
                i
              </div>
              <div className="text-sm text-gray-700">
                <p className="font-semibold mb-1">Content Guidelines:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Answer with "yes" if you have content ready</li>
                  <li>Answer with "no" if you need content creation services</li>
                  <li>Use the notes field for any special requirements</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

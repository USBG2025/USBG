'use client';

import { UseFormReturn } from 'react-hook-form';
import { MultiStepFormData } from '@monorepo/forms';
import { Input } from '@monorepo/ui';
import { ChevronRight, User, Phone, Globe } from 'lucide-react';

interface Step2Props {
  form: UseFormReturn<MultiStepFormData>;
}

export default function Step2({ form }: Step2Props) {
  const { register, formState: { errors } } = form;

  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
        <span className="hover:text-primary cursor-pointer">Form</span>
        <ChevronRight className="w-4 h-4" />
        <span className="text-primary font-semibold">Contact Details</span>
      </div>

      {/* Tab-like Header */}
      <div className="flex border-b border-gray-200">
        <div className="px-6 py-3 border-b-2 border-primary text-primary font-semibold">
          Contact Information
        </div>
        <div className="px-6 py-3 text-gray-500">
          Additional Details
        </div>
      </div>

      {/* Content */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white text-xl font-bold">
            2
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Contact Details</h2>
            <p className="text-gray-600 text-sm mt-1">
              Please provide your contact information for follow-up
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="relative">
            <div className="absolute left-3 top-9 text-gray-400">
              <User className="w-5 h-5" />
            </div>
            <Input
              label="Full Name"
              placeholder="John Doe"
              className="pl-10"
              error={errors.name?.message}
              {...register('name')}
            />
          </div>

          <div className="relative">
            <div className="absolute left-3 top-9 text-gray-400">
              <Phone className="w-5 h-5" />
            </div>
            <Input
              label="Phone Number"
              placeholder="+1 (555) 123-4567"
              className="pl-10"
              error={errors.phone?.message}
              {...register('phone')}
            />
          </div>

          <div className="col-span-2 relative">
            <div className="absolute left-3 top-9 text-gray-400">
              <Globe className="w-5 h-5" />
            </div>
            <Input
              label="Website URL (Optional)"
              placeholder="https://example.com"
              className="pl-10"
              error={errors.website?.message}
              {...register('website')}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

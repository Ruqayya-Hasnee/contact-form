'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import axios from 'axios';

type FormFields = {
  name: string;
  email: string;
  message: string;
};

type Submission = FormFields & { id: number };

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [submissions, setSubmissions] = useState<Submission[]>([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormFields>();

  const onSubmit = async (data: FormFields) => {
    setLoading(true);

    try {
      const res = await axios.post<Submission>(process.env.NEXT_PUBLIC_API_URL!, data);
      setSubmissions((prev): Submission[] => [...prev, res.data]);
      toast.success('Form submitted successfully!');
      reset();
    } catch {
      toast.error('Something went wrong. Please try again.');
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12">
      <div className="max-w-2xl mx-auto flex flex-col gap-8">

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Contact Us
          </h1>

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4" noValidate>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                {...register('name', { required: 'Name is required.' })}
                className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
              {errors.name && (
                <span className="text-xs text-red-500">{errors.name.message}</span>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                {...register('email', {
                  required: 'Email is required.',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Please enter a valid email address.',
                  },
                })}
                className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
              {errors.email && (
                <span className="text-xs text-red-500">{errors.email.message}</span>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Your message..."
                rows={4}
                {...register('message', { required: 'Message is required.' })}
                className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
              />
              {errors.message && (
                <span className="text-xs text-red-500">{errors.message.message}</span>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-semibold py-2.5 rounded-lg transition-colors"
            >
              {loading ? 'Submitting...' : 'Submit'}
            </button>

          </form>
        </div>

        {/* Submissions Table */}
        {submissions.length > 0 && (
          <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Submitted Entries
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="pb-3 pr-4 font-medium text-gray-500">Name</th>
                    <th className="pb-3 pr-4 font-medium text-gray-500">Email</th>
                    <th className="pb-3 font-medium text-gray-500">Message</th>
                  </tr>
                </thead>
                <tbody>
                  {submissions.map((entry) => (
                    <tr key={entry.id} className="border-b border-gray-100 last:border-0">
                      <td className="py-3 pr-4 text-gray-800">{entry.name}</td>
                      <td className="py-3 pr-4 text-gray-800">{entry.email}</td>
                      <td className="py-3 text-gray-800">{entry.message}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

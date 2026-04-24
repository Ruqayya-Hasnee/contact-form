'use client';

import { useRouter } from 'next/navigation';

export default function Users() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12">
      <div className="max-w-4xl mx-auto">

        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-800">User List</h1>
          <button
            onClick={() => router.back()}
            className="text-sm text-blue-600 hover:underline"
          >
            ← Back to Form
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8">
          <p className="text-center text-gray-400 text-sm">No submissions yet.</p>
        </div>

      </div>
    </div>
  );
}

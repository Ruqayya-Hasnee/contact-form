'use client';

import { useRouter } from 'next/navigation';
import { Typography } from 'antd';
import SubmissionsTable from '../components/SubmissionsTable';
import { useSubmissionsStore } from '../store/submissionsStore';

const { Title } = Typography;

export default function Users() {
  const router = useRouter();
  const { submissions } = useSubmissionsStore();

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-12">
      <div className="max-w-4xl mx-auto flex flex-col gap-6">

        <div className="flex items-center justify-between">
          <Title level={3} style={{ margin: 0 }}>User List</Title>
          <button
            onClick={() => router.back()}
            className="text-sm text-blue-600 hover:underline"
          >
            ← Back to Form
          </button>
        </div>

        <SubmissionsTable submissions={submissions} />

      </div>
    </div>
  );
}

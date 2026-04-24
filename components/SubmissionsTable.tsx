'use client';

import { Table, Card } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import type { Submission } from '@/store/store.interface';
import { useSubmissionsStore } from '@/store/submissionsStore';

const columns: ColumnsType<Submission> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: 200,
    align: 'center',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    width: 250,
    align: 'center',
  },
  {
    title: 'Message',
    dataIndex: 'message',
    key: 'message',
    width: 250,
    align: 'center',
    ellipsis: { showTitle: true },
  },
];

export default function SubmissionsTable() {
  const { submissions } = useSubmissionsStore();

  return (
    <Card>
      <Table
        columns={columns}
        dataSource={submissions}
        pagination={false}
        tableLayout="fixed"
        scroll={{ x: 500 }}
      />
    </Card>
  );
}

'use client';

import { Submission } from '@/store/submissionsStore';
import { Table, Card } from 'antd';
import type { ColumnsType } from 'antd/es/table';

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
    width: 250,
    key: 'message',
    align: 'center',
    ellipsis: { showTitle: true },
  },
];

type Props = {
  submissions: Submission[];
};

export default function SubmissionsTable({ submissions }: Props) {
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

'use client';

import { Table, Card } from 'antd';
import type { ColumnsType } from 'antd/es/table';

type Submission = {
  key: string;
  name: string;
  email: string;
  message: string;
};

const columns: ColumnsType<Submission> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Message',
    dataIndex: 'message',
    key: 'message',
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
        scroll={{ x: true }}
      />
    </Card>
  );
}

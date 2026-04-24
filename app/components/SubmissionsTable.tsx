'use client';

import { Table, Card } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import type { Submission } from '../store/submissionsStore';

const columns: ColumnsType<Submission> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: 150,
    align: 'center',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    width: 200,
    align: 'center',
  },
  {
    title: 'Message',
    dataIndex: 'message',
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

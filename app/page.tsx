'use client';

import { useState } from 'react';
import { Form, Input, Button, Table, Typography, Card } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { toast } from 'sonner';
import axios from 'axios';

const { Title } = Typography;

type FormFields = {
  name: string;
  email: string;
  message: string;
};

type Submission = FormFields & { key: string };

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

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [form] = Form.useForm<FormFields>();

  const onFinish = async (values: FormFields) => {
    console.log('Form values:', values);
    setLoading(true);

    try {
      await axios.post(process.env.NEXT_PUBLIC_API_URL!, values);
      setSubmissions((prev) => [...prev, { ...values, key: crypto.randomUUID() }]);
      toast.success('Form submitted successfully!');
      form.resetFields();
    } catch {
      toast.error('Something went wrong. Please try again.');
    }

    setLoading(false);
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f5f5f5', padding: '48px 16px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '100%', maxWidth: 896, display: 'flex', flexDirection: 'column', gap: 32 }}>

        <Card style={{ width: '100%', maxWidth: 448, margin: '0 auto' }} styles={{ body: { padding: '32px' } }}>
          <Title level={2} style={{ textAlign: 'center', marginBottom: 24 }}>
            Contact Us
          </Title>

          <Form form={form} layout="vertical" onFinish={onFinish}>
            <Form.Item
              name="name"
              label="Name"
              rules={[{ required: true, message: 'Name is required.' }]}
            >
              <Input placeholder="Your name" size="large" />
            </Form.Item>

            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, message: 'Email is required.' },
                { type: 'email', message: 'Please enter a valid email address.' },
              ]}
            >
              <Input placeholder="you@example.com" size="large" />
            </Form.Item>

            <Form.Item
              name="message"
              label="Message"
              rules={[{ required: true, message: 'Message is required.' }]}
            >
              <Input.TextArea placeholder="Your message..." rows={4} />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" loading={loading} block size="large">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>

        {submissions.length > 0 && (
          <Card>
            <Table
              columns={columns}
              dataSource={submissions}
              pagination={false}
              scroll={{ x: true }}
            />
          </Card>
        )}

      </div>
    </div>
  );
}

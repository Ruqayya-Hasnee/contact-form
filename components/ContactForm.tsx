'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Form, Input, Button, Card, Typography } from 'antd';
import { toast } from 'sonner';
import axios from 'axios';
import { useSubmissionsStore } from '../store/submissionsStore';

const { Title } = Typography;

type FormFields = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm<FormFields>();
  const router = useRouter();

  const { submissions, addSubmission } = useSubmissionsStore();

  const onFinish = async (values: FormFields) => {
    console.log('Form values:', values);
    setLoading(true);

    try {
      await axios.post(process.env.NEXT_PUBLIC_API_URL!, values);
      addSubmission(values.name, values.email, values.message);
      toast.success('Form submitted successfully!');
      form.resetFields();
    } catch {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md" styles={{ body: { padding: '32px' } }}>
      <Title level={2} className="text-center! mb-6!">
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

      <Button
        block
        size="large"
        disabled={submissions.length === 0}
        onClick={() => router.push('/users')}
      >
        View User List
      </Button>
    </Card>
  );
}

'use client';

import { useRouter } from 'next/navigation';
import { Form, Input, Button, Card, Typography, message } from 'antd';
import { useMutation } from '@tanstack/react-query';
import { useSubmissionsStore } from '@/store/submissionsStore';
import type { FormFields } from '@/store/store.interface';
import { submitContactForm } from '@/services/form.service';


const { Title } = Typography;

export default function ContactForm() {
  const [form] = Form.useForm<FormFields>();
  const router = useRouter();

  const { submissions, addSubmission } = useSubmissionsStore();

  const { mutate, isPending } = useMutation({
    mutationFn: submitContactForm,
    onSuccess: (_, values) => {
      console.log('Form values:', values);
      addSubmission(values.name, values.email, values.message);
      message.success('Form submitted successfully!');
      form.resetFields();
    },
    onError: () => {
      message.error('Something went wrong. Please try again.');
    },
  });

  const onFinish = (values: FormFields) => {
    mutate(values);
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
          <Button type="primary" htmlType="submit" loading={isPending} block size="large">
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

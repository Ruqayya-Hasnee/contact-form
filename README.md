# Contact Form

A contact form built with Next.js, React Hook Form, and Tailwind CSS that submits data to a dummy API and displays submissions in a table.

## Features

- Contact form with Name, Email, and Message fields
- Form validation using React Hook Form with inline error messages
- Loading state during submission
- Toast notifications for success and error feedback
- Form reset after successful submission
- Submissions table — displays all submitted entries
- Long messages truncated with full text on hover
- Responsive design

## Tech Stack

- [Next.js](https://nextjs.org/) — App Router
- [React Hook Form](https://react-hook-form.com/) — Form validation
- [Axios](https://axios-http.com/) — HTTP requests
- [Sonner](https://sonner.emilkowal.ski/) — Toast notifications
- [Tailwind CSS](https://tailwindcss.com/) — Styling

## Getting Started

1. Clone the repository and install dependencies:

```bash
npm install
```

2. Create a `.env.local` file based on `.env.example`:

```bash
cp .env.example .env.local
```

3. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## API

Form data is submitted via POST request to [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts) as a dummy API.

```json
{
  "name": "John",
  "email": "john@example.com",
  "message": "Hello!"
}
```

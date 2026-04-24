import type { Metadata } from "next";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: "Contact Form",
  description: "A simple contact form",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AntdRegistry>
          {children}
          <Toaster position="top-center" richColors />
        </AntdRegistry>
      </body>
    </html>
  );
}

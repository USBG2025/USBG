import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'UI1 - Multi-Step Form',
  description: 'Multi-step form implementation with shared logic',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

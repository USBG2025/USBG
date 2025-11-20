import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'UI2 - Industrial Form',
  description: 'Industrial-styled multi-step form',
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

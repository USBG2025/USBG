import type { Metadata } from 'next';
import Header from '../components/Layout/Header'
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
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}

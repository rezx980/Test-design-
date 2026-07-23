// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'iLoveExcel — حوّل ملفات Excel إلى رسوم بيانية',
  description: 'ارفع ملف Excel أو CSV وحوّله إلى رسوم بيانية تفاعلية بسهولة',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

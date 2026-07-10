import { Inter } from 'next/font/google';
import './globals.css';
import SiteLayout from './components/SiteLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'JS Electronics | On-Site Tech and Appliance Support',
  description:
    'JS Electronics offers consultation-based on-site technology, appliance, and smart home support for homes and businesses.',
  keywords: ['tech support', 'appliance repair', 'smart home support', 'on-site services'],
  alternates: {
    canonical: 'https://jselectronics.com',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0b5c91',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}

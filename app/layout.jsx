import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import SiteLayout from './components/SiteLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'SmartEprint Services | On-Site Printer Support',
  description:
    'SmartEprint Services offers consultation-based on-site printer, computer and smart home support for homes and businesses.',
  keywords: ['printer support', 'smart home support', 'on-site services'],
  alternates: {
    canonical: 'https://smarteprintservices.com',
  },
  icons: {
    icon: '/svg-icon.png',
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
        <Script
          id="cookieyes"
          strategy="beforeInteractive"
          src="https://cdn-cookieyes.com/client_data/c10dbbbd8867014a9030d7802875f74c/script.js"
        />
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}

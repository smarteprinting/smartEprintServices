import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import SiteLayout from './components/SiteLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'SmartEprint Services | Premium Printing & Scanning Solutions',
  description:
    'SmartEprint Services offers printers, scanners, and trusted equipment solutions for homes, businesses, and organizations across the United States.',
  keywords: ['printing solutions', 'scanner store', 'printer shopping', 'smart print services'],
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
        {process.env.NODE_ENV === 'production' && (
          <Script
            id="cookieyes"
            strategy="beforeInteractive"
            src="https://cdn-cookieyes.com/client_data/c10dbbbd8867014a9030d7802875f74c/script.js"
          />
        )}

        <Script
          id="jivo-chat"
          src="https://code.jivosite.com/widget/d7JjftxKYx"
          strategy="afterInteractive"
        />
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}


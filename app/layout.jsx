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
        <Script id="bing-uet" strategy="afterInteractive">
          {`(function(w, d, t, u, o) {w[u] = w[u] || [], o.ts = (new Date).getTime();var n = d.createElement(t);n.src = "https://bat.bing.net/bat.js?ti=" + o.ti + ("uetq" != u ? "&q=" + u : ""),n.async = 1, n.onload = n.onreadystatechange = function() {var s = this.readyState;s && "loaded" !== s && "complete" !== s ||(o.q = w[u], w[u] = new UET(o), w[u].push("pageLoad"),n.onload = n.onreadystatechange = null)};var i = d.getElementsByTagName(t)[0];i.parentNode.insertBefore(n, i);})(window, document, "script", "uetq", {ti: "187265607",enableAutoSpaTracking: true});`}
        </Script>

        <Script id="bing-uet-push" strategy="afterInteractive">
          {`window.uetq = window.uetq || [];
          window.uetq.push('set', { 'pid': { 
             'em': 'support@smarteprintservices.com', 
             'ph': '+18777652289', 
          } });`}
        </Script>
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}

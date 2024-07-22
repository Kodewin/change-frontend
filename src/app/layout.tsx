import '@/css/satoshi.css';
import '@/css/style.css';
import 'flatpickr/dist/flatpickr.min.css';
import 'jsvectormap/dist/css/jsvectormap.css';
import { Metadata } from 'next';
import Script from 'next/script';
import React from 'react';

export const metadata: Metadata = {
  title: 'Webkoa',
  description: 'Stay Ahead with Automated Website Monitoring and Snapshot Capture.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,150,0,0'
        />
      </head>
      <body suppressHydrationWarning={true}>
        {children}
        <Script src='https://kit.fontawesome.com/c75f557ffd.js' crossOrigin='anonymous'></Script>
      </body>
    </html>
  );
}

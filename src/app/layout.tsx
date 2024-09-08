import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";
import { dark } from '@clerk/themes';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "The Record",
  description: "This is The Record",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>

      <html lang="en">
        <body className={`${inter.className}  antialiased`}>
          <main>
            {children}
          </main>
        </body>
      </html>

    </ClerkProvider>
  );
}

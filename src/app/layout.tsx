import './globals.css';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NavBar from "./components/NavBar";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'IELTS Live Batch',
  description: 'Join the best IELTS batch today!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <NavBar/>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

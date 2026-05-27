import type { Metadata } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import './globals.css';

const heading = Fraunces({ subsets: ['latin'], variable: '--font-heading' });
const body = Inter({ subsets: ['latin'], variable: '--font-body' });

export const metadata: Metadata = {
  title: 'Tinyvation | CRM, Automation & Workflow Systems for Small Teams',
  description:
    'Tinyvation helps small teams, nonprofits, startups, and service businesses fix bottlenecks, clean up CRM systems, automate workflows, and improve reporting through small, high-leverage systems improvements.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${heading.variable} ${body.variable} font-body`}>{children}</body></html>;
}

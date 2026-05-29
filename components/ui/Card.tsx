import { ReactNode } from 'react';

export default function Card({ children, className='' }: { children: ReactNode; className?: string }) {
  return <article className={`rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-0.5 hover:border-teal/50 ${className}`}>{children}</article>;
}

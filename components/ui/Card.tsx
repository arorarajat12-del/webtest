import { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className = '' }: CardProps) {
  return (
    <article
      className={`group rounded-[1.75rem] border border-border bg-card p-6 transition duration-300 hover:-translate-y-1 hover:border-[color:var(--teal)] hover:shadow-[0_24px_70px_rgba(22,59,52,0.08)] ${className}`}
    >
      {children}
    </article>
  );
}

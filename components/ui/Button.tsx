import { ReactNode } from 'react';

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'light';
  className?: string;
  ariaLabel?: string;
};

const variants = {
  primary:
    'border-evergreen bg-evergreen text-cream hover:-translate-y-0.5 hover:bg-[#102d28] hover:shadow-[0_18px_42px_rgba(22,59,52,0.18)]',
  secondary:
    'border-amber bg-amber text-ink hover:-translate-y-0.5 hover:bg-[#e7aa36] hover:shadow-[0_18px_42px_rgba(242,184,75,0.22)]',
  outline: 'border-border bg-card text-evergreen hover:-translate-y-0.5 hover:border-evergreen hover:bg-softgreen',
  light: 'border-cream bg-cream text-evergreen hover:-translate-y-0.5 hover:bg-card'
};

export default function Button({ href, children, variant = 'primary', className = '', ariaLabel }: ButtonProps) {
  return (
    <a
      aria-label={ariaLabel}
      href={href}
      className={`inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold tracking-[-0.01em] transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}

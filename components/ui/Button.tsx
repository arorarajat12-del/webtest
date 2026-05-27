import Link from 'next/link';
import { ReactNode } from 'react';

type ButtonProps = { href: string; children: ReactNode; variant?: 'primary'|'secondary'|'ghost'; ariaLabel?: string };
export default function Button({ href, children, variant='primary', ariaLabel }: ButtonProps) {
  const styles = {
    primary: 'bg-evergreen text-cream hover:bg-[#112e29]',
    secondary: 'bg-amber text-ink hover:bg-[#e2a93e]',
    ghost: 'border border-border text-evergreen hover:border-evergreen/50 bg-card'
  }[variant];
  return <Link aria-label={ariaLabel} href={href} className={`inline-flex items-center rounded-full px-6 py-3 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 ${styles}`}>{children}</Link>;
}

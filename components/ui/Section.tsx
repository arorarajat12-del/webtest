import { ReactNode } from 'react';

export default function Section({ id, children, className='' }: { id?: string; children: ReactNode; className?: string }) {
  return <section id={id} className={`py-16 md:py-24 lg:py-28 ${className}`}>{children}</section>;
}

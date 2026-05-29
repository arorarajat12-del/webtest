import { ReactNode } from 'react';

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: 'cream' | 'soft' | 'dark';
};

const tones = {
  cream: '',
  soft: 'bg-softgreen',
  dark: 'bg-evergreen text-cream'
};

export default function Section({ id, children, className = '', tone = 'cream' }: SectionProps) {
  return (
    <section id={id} className={`section-shell ${tones[tone]} ${className}`}>
      {children}
    </section>
  );
}

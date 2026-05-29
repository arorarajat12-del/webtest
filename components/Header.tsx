import { navLinks } from '@/lib/site-data';
import Button from './ui/Button';
import NodeIcon from './ui/NodeIcon';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-cream/88 backdrop-blur-xl">
      <div className="container-shell flex items-center justify-between py-4">
        <a href="#top" className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber">
          <NodeIcon className="scale-90" label="Tinyvation connected node mark" />
          <span className="font-heading text-[1.65rem] font-semibold leading-none tracking-[-0.06em] text-evergreen">
            Tinyvation.
          </span>
        </a>

        <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-ink/75 transition hover:text-evergreen">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a className="hidden text-sm font-semibold text-evergreen transition hover:text-ink md:inline" href="mailto:hello@tinyvation.com">
            hello@tinyvation.com
          </a>
          <Button href="#contact" className="px-4 py-2.5 md:px-5">
            Book a call
          </Button>
        </div>
      </div>
    </header>
  );
}

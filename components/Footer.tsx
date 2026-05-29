import { navLinks, services } from '@/lib/site-data';
import Button from './ui/Button';
import NodeIcon from './ui/NodeIcon';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-cream py-12">
      <div className="container-shell grid gap-10 md:grid-cols-[1.1fr_0.9fr_0.9fr]">
        <div>
          <div className="flex items-center gap-2">
            <NodeIcon label="Tinyvation connected node mark" />
            <p className="font-heading text-3xl text-evergreen">Tinyvation.</p>
          </div>
          <p className="mt-4 max-w-sm text-muted">Tiny fixes that help work flow.</p>
          <p className="mt-8 text-sm text-muted">Built for small teams that need cleaner systems, not more chaos.</p>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-evergreen">Services</p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {services.map((service) => (
              <li key={service.name}>
                <a href="#services" className="transition hover:text-evergreen">
                  {service.name.replace(' Sprint', '').replace(' & Reporting', '')}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-evergreen">Pages</p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition hover:text-evergreen">
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" className="transition hover:text-evergreen">Contact</a>
            </li>
          </ul>
          <div className="mt-6">
            <Button href="#contact">Book a call</Button>
          </div>
        </div>
      </div>
    </footer>
  );
}

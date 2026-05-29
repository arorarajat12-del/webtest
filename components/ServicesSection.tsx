import { services } from '@/lib/site-data';
import Button from './ui/Button';
import Card from './ui/Card';
import Section from './ui/Section';

export default function ServicesSection() {
  return (
    <Section id="services" className="pt-0">
      <div className="container-shell">
        <div className="rounded-[2.5rem] border border-border bg-evergreen p-6 text-cream md:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <p className="eyebrow text-cream/72">Core services</p>
              <h2 className="mt-5 text-[clamp(2.4rem,5vw,4.6rem)] leading-[0.96] text-cream">
                Focused systems support for work that keeps getting stuck.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-cream/76">
              Start with a small audit, a focused cleanup, a workflow build, or ongoing systems support. Every
              engagement is designed to make the next operational move obvious.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.name} className="border-cream/12 bg-cream/[0.055] text-cream hover:border-amber/70 hover:bg-cream/[0.08]">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber">{service.eyebrow}</p>
                <h3 className="mt-4 text-2xl leading-tight text-cream">{service.name}</h3>
                <p className="mt-4 text-sm leading-6 text-cream/74">{service.description}</p>
                <p className="mt-5 border-t border-cream/12 pt-4 text-sm leading-6 text-cream/82">
                  <strong className="text-cream">Best for:</strong> {service.bestFor}
                </p>
                <a className="mt-5 inline-flex text-sm font-bold text-amber transition hover:text-cream" href="#contact">
                  Learn more →
                </a>
              </Card>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-4 rounded-[1.75rem] border border-cream/12 bg-cream/[0.06] p-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-heading text-3xl text-cream">Not sure where to start?</p>
              <p className="mt-2 text-cream/72">Bring the messy workflow. The audit finds the first useful move.</p>
            </div>
            <Button href="#contact" variant="secondary">
              Request an Audit
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

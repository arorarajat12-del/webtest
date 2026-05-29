import { methodSteps } from '@/lib/site-data';
import Section from './ui/Section';

export default function ProcessSection() {
  return (
    <Section id="method">
      <div className="container-shell">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="eyebrow">Method</p>
            <h2 className="mt-5 text-[clamp(2.4rem,5vw,4.7rem)] leading-[0.96]">A small process for better systems.</h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-ink/78">
            The work starts by understanding how things actually move today — then fixing the part that creates the
            most operational lift.
          </p>
        </div>

        <div className="relative mt-14 grid gap-5 lg:grid-cols-4">
          <span className="absolute left-0 top-8 hidden h-px w-full bg-teal/40 lg:block" />
          {methodSteps.map((step) => (
            <article key={step.step} className="relative rounded-[1.75rem] border border-border bg-card p-6">
              <span className="flex h-16 w-16 items-center justify-center rounded-full border border-teal/30 bg-cream font-heading text-2xl text-evergreen">
                {step.step}
              </span>
              <h3 className="mt-8 text-2xl text-evergreen">{step.title}</h3>
              <p className="mt-4 text-sm leading-6 text-muted">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}

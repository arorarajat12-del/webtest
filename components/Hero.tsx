import { heroSignals } from '@/lib/site-data';
import Button from './ui/Button';
import WorkflowDiagram from './WorkflowDiagram';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-16 md:pb-28 md:pt-24">
      <div className="absolute left-1/2 top-0 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-amber/10 blur-3xl" />
      <div className="container-shell relative grid items-center gap-12 lg:grid-cols-[1.03fr_0.97fr]">
        <div className="reveal">
          <p className="eyebrow">Small systems studio for teams with messy workflows</p>
          <h1 className="mt-6 max-w-4xl text-[clamp(3.2rem,8vw,6.9rem)] leading-[0.9]">
            Turn operational drag into work that flows.
          </h1>
          <p className="mt-7 max-w-2xl text-[1.18rem] leading-8 text-ink/82 md:text-[1.32rem]">
            Tinyvation finds the one bottleneck creating the most noise, then cleans up the CRM, workflow,
            automation, or reporting layer that gets your team moving again.
          </p>
          <p className="mt-4 max-w-xl text-base leading-7 text-muted">
            Founder-led systems support for small teams, nonprofits, startups, service businesses, HubSpot users,
            and program-based organizations.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#contact" className="text-base">
              Book a Tiny Ops Audit
            </Button>
            <Button href="#services" variant="outline" className="text-base">
              View services
            </Button>
          </div>

          <div className="mt-9 grid gap-3 border-y border-border py-5 md:grid-cols-3">
            {heroSignals.map((signal) => (
              <div key={signal.value} className="flex gap-3">
                <span className="font-heading text-2xl text-amber">{signal.value}</span>
                <span className="max-w-32 text-sm font-semibold leading-5 text-evergreen">{signal.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal [animation-delay:140ms]">
          <WorkflowDiagram />
        </div>
      </div>
    </section>
  );
}

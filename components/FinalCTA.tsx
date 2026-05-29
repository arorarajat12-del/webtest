import { auditFields } from '@/lib/site-data';
import Button from './ui/Button';
import Section from './ui/Section';

export default function FinalCTA() {
  return (
    <Section id="contact" tone="dark" className="overflow-hidden">
      <div className="absolute inset-0 system-grid opacity-[0.08]" />
      <div className="container-shell relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="eyebrow text-cream/70">Book a call</p>
          <h2 className="mt-5 text-[clamp(2.6rem,6vw,5.7rem)] leading-[0.9] text-cream">
            Have a messy system you want to fix?
          </h2>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-cream/78">
            Start with a Tiny Ops Audit. We’ll look at what is slowing work down, identify the highest-leverage fixes,
            and give you a clear path forward.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="mailto:hello@tinyvation.com?subject=Tiny%20Ops%20Audit" variant="secondary">
              Book a call
            </Button>
            <Button href="mailto:hello@tinyvation.com?subject=Here%27s%20my%20bottleneck" variant="light">
              Send a Bottleneck
            </Button>
          </div>
          <p className="mt-5 text-sm text-cream/64">No pressure. No bloated proposal. Just a clear look at what is getting in the way.</p>
        </div>

        <form className="rounded-[2rem] border border-cream/12 bg-cream/[0.06] p-5 md:p-7" action="mailto:hello@tinyvation.com" method="post" encType="text/plain">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <p className="font-heading text-3xl text-cream">Send the bottleneck</p>
              <p className="mt-1 text-sm text-cream/62">Static form using email for now — no backend required.</p>
            </div>
            <span className="hidden rounded-full bg-amber px-3 py-1 text-xs font-bold text-ink sm:inline">Tiny audit</span>
          </div>

          <div className="grid gap-4">
            {auditFields.map((field) => (
              <label key={field.label} className="grid gap-2 text-sm font-semibold text-cream/82">
                {field.label}
                {field.type === 'textarea' ? (
                  <textarea
                    name={field.label}
                    placeholder={field.placeholder}
                    rows={5}
                    className="min-h-32 rounded-2xl border border-cream/12 bg-cream px-4 py-3 text-ink outline-none transition placeholder:text-muted/70 focus:border-amber focus:ring-2 focus:ring-amber/30"
                  />
                ) : (
                  <input
                    name={field.label}
                    type={field.type}
                    placeholder={field.placeholder}
                    className="rounded-2xl border border-cream/12 bg-cream px-4 py-3 text-ink outline-none transition placeholder:text-muted/70 focus:border-amber focus:ring-2 focus:ring-amber/30"
                  />
                )}
              </label>
            ))}
          </div>

          <button
            type="submit"
            className="mt-5 w-full rounded-full border border-amber bg-amber px-6 py-3 text-sm font-bold text-ink transition hover:-translate-y-0.5 hover:bg-[#e7aa36] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-evergreen"
          >
            Send My Bottleneck
          </button>
        </form>
      </div>
    </Section>
  );
}

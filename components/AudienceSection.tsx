import { audiences } from '@/lib/site-data';
import Section from './ui/Section';

export default function AudienceSection() {
  return (
    <Section id="fit">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="eyebrow">Who it is for</p>
          <h2 className="mt-5 text-[clamp(2.35rem,5vw,4.55rem)] leading-[0.96]">
            Built for small teams doing important work with imperfect systems.
          </h2>
          <p className="mt-6 text-lg leading-8 text-ink/78">
            Tinyvation is a good fit when the work matters, the team is stretched, and the systems are making things
            harder than they need to be.
          </p>
          <p className="mt-6 rounded-2xl border border-border bg-card p-5 text-sm font-semibold text-evergreen">
            You do not need a perfect brief. A messy workflow is enough to start.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {audiences.map((audience) => (
            <span key={audience} className="rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-ink/76">
              {audience}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}

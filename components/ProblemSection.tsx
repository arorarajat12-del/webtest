import { frictionPoints } from '@/lib/site-data';
import Card from './ui/Card';
import NodeIcon from './ui/NodeIcon';
import Section from './ui/Section';

export default function ProblemSection() {
  return (
    <Section id="symptoms" tone="soft">
      <div className="container-shell grid gap-12 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow">The quiet cost of messy operations</p>
          <h2 className="mt-5 text-[clamp(2.35rem,5vw,4.5rem)] leading-[0.95]">
            Work slows down when systems stop matching reality.
          </h2>
          <p className="mt-6 text-lg leading-8 text-ink/80">
            Most teams do not need another tool. They need the right part of the system cleaned up, connected,
            automated, or made visible — so the work can move without constant human glue.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {frictionPoints.map((point) => (
            <Card key={point.title} className="min-h-52 bg-card/86">
              <NodeIcon />
              <h3 className="mt-7 text-2xl leading-tight text-evergreen">{point.title}</h3>
              <p className="mt-4 text-sm leading-6 text-muted">{point.detail}</p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}

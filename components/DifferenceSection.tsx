import { differences } from '@/lib/site-data';
import Card from './ui/Card';
import NodeIcon from './ui/NodeIcon';
import Section from './ui/Section';

export default function DifferenceSection() {
  return (
    <Section>
      <div className="container-shell">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <div>
            <p className="eyebrow">Different by design</p>
            <h2 className="mt-5 text-[clamp(2.4rem,5vw,4.7rem)] leading-[0.96]">
              Practical enough to build. Strategic enough to matter.
            </h2>
          </div>
          <p className="text-lg leading-8 text-ink/78">
            Tinyvation is not built around bloated roadmaps or generic advice. It is built around finding what is
            slowing the work down, fixing the right part, and making the system easier for the team to use.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {differences.map((item) => (
            <Card key={item.title} className="min-h-64">
              <NodeIcon />
              <h3 className="mt-8 text-xl leading-tight text-evergreen">{item.title}</h3>
              <p className="mt-4 text-sm leading-6 text-muted">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}

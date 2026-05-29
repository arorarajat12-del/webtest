import { proofCards } from '@/lib/site-data';
import Card from './ui/Card';
import Section from './ui/Section';

export default function ProofSection() {
  return (
    <Section id="proof" tone="soft">
      <div className="container-shell">
        <div className="max-w-4xl">
          <p className="eyebrow">Relevant experience</p>
          <h2 className="mt-5 text-[clamp(2.4rem,5vw,4.7rem)] leading-[0.96]">
            Built from real systems work, not theory.
          </h2>
          <p className="mt-6 text-lg leading-8 text-ink/78">
            Tinyvation is shaped by hands-on experience designing and improving systems across CRM, automation,
            reporting, lifecycle tracking, proposal workflows, and internal operations.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {proofCards.map((card) => (
            <Card key={card.title} className="bg-card/88">
              <h3 className="text-2xl leading-tight text-evergreen">{card.title}</h3>
              <p className="mt-4 text-sm leading-6 text-muted">{card.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}

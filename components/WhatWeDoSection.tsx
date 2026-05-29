import Card from './ui/Card';
import NodeIcon from './ui/NodeIcon';
import Section from './ui/Section';

const work = [
  {
    title: 'Clean the system',
    description:
      'CRM structure, lifecycle stages, properties, pipelines, forms, and reporting foundations that make the system easier to trust.'
  },
  {
    title: 'Connect the work',
    description:
      'Automations, handoffs, tasks, emails, Slack alerts, forms, calendars, and tool connections that reduce repetitive manual work.'
  },
  {
    title: 'Make it visible',
    description:
      'Dashboards, tracking, funder reporting, pipeline visibility, and decision-ready data that help teams see what is happening.'
  }
];

export default function WhatWeDoSection() {
  return (
    <Section>
      <div className="container-shell">
        <div className="max-w-4xl">
          <p className="eyebrow">What Tinyvation does</p>
          <h2 className="mt-5 text-[clamp(2.4rem,5vw,4.7rem)] leading-[0.96]">
            We find the small fix that creates the most movement.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-ink/78">
            Tinyvation works across CRM, automation, reporting, lifecycle tracking, and internal workflows to turn
            messy operations into cleaner systems your team can actually use.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {work.map((item, index) => (
            <Card key={item.title} className="relative min-h-80 overflow-hidden p-8">
              <span className="absolute right-6 top-6 font-heading text-7xl text-softgreen">0{index + 1}</span>
              <NodeIcon />
              <h3 className="relative mt-16 text-3xl text-evergreen">{item.title}</h3>
              <p className="relative mt-5 leading-7 text-muted">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}

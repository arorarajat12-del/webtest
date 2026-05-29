export type NavLink = {
  label: string;
  href: string;
};

export type Signal = {
  value: string;
  label: string;
};

export type FrictionPoint = {
  title: string;
  detail: string;
};

export type Service = {
  name: string;
  eyebrow: string;
  description: string;
  bestFor: string;
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type ProofCard = {
  title: string;
  description: string;
};

export type Difference = {
  title: string;
  description: string;
};

export type Field = {
  label: string;
  type: 'text' | 'email' | 'textarea';
  placeholder: string;
};

export const navLinks: NavLink[] = [
  { label: 'Symptoms', href: '#symptoms' },
  { label: 'Services', href: '#services' },
  { label: 'Method', href: '#method' },
  { label: 'Fit', href: '#fit' }
];

export const heroSignals: Signal[] = [
  { value: '01', label: 'Map the real workflow' },
  { value: '02', label: 'Find the highest-leverage fix' },
  { value: '03', label: 'Build what your team will use' }
];

export const frictionPoints: FrictionPoint[] = [
  {
    title: 'CRM data no one fully trusts',
    detail: 'Properties, stages, forms, and records drift until every report needs a caveat.'
  },
  {
    title: 'Spreadsheets doing system work',
    detail: 'Sheets become the shadow operating system because the official tools do not match reality.'
  },
  {
    title: 'Handoffs living in people’s heads',
    detail: 'The process depends on memory, Slack nudges, and the one person who knows where things are.'
  },
  {
    title: 'Reports rebuilt manually',
    detail: 'Every update takes too long because inputs, definitions, and ownership are unclear.'
  },
  {
    title: 'HubSpot underused or overgrown',
    detail: 'Workflows, pipelines, lists, and lifecycle stages exist — but the team still works around them.'
  },
  {
    title: 'Admin stealing momentum',
    detail: 'Follow-ups, routing, reminders, approvals, and status updates keep pulling focus from real work.'
  }
];

export const services: Service[] = [
  {
    eyebrow: 'Start here',
    name: 'Tiny Ops Audit',
    description:
      'A sharp diagnostic of the bottlenecks, messy handoffs, CRM gaps, reporting issues, and quick wins slowing the team down.',
    bestFor: 'Teams that know work feels messy but are not sure where to start.'
  },
  {
    eyebrow: 'Foundation',
    name: 'Growth Systems Starter',
    description:
      'A lightweight CRM, automation, and reporting foundation for teams moving beyond scattered spreadsheets and founder memory.',
    bestFor: 'Small teams, founders, nonprofits, and service businesses preparing for cleaner growth.'
  },
  {
    eyebrow: 'Cleanup',
    name: 'HubSpot Cleanup Sprint',
    description:
      'Pipelines, properties, workflows, lifecycle stages, forms, and reports cleaned up so HubSpot becomes easier to trust.',
    bestFor: 'Teams already using HubSpot but not getting enough value from it.'
  },
  {
    eyebrow: 'Automation',
    name: 'Workflow Automation Build',
    description:
      'Repeatable manual work turned into clean automations across HubSpot, Zapier, Slack, forms, email, calendars, and sheets.',
    bestFor: 'Teams spending too much time on follow-ups, routing, reminders, and admin work.'
  },
  {
    eyebrow: 'Visibility',
    name: 'Funder & Reporting Readiness',
    description:
      'Systems, dashboards, tracking, and reporting structure prepared for funders, grants, partnerships, and internal decisions.',
    bestFor: 'Nonprofits and program-based organizations that need clearer visibility and reporting.'
  },
  {
    eyebrow: 'Ongoing',
    name: 'Fractional Systems Support',
    description:
      'Senior CRM, automation, reporting, RevOps, and systems implementation support without hiring full-time.',
    bestFor: 'Teams that need practical systems thinking and hands-on execution over time.'
  }
];

export const methodSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Trace the mess',
    description:
      'We map how work actually moves across people, tools, forms, spreadsheets, CRM records, emails, and reports.'
  },
  {
    step: '02',
    title: 'Name the constraint',
    description:
      'We isolate the smallest fix that creates the most movement — not the biggest roadmap or most impressive stack.'
  },
  {
    step: '03',
    title: 'Build the cleaner path',
    description:
      'We clean, connect, automate, or rebuild the workflow that is creating drag for the team.'
  },
  {
    step: '04',
    title: 'Make it stick',
    description:
      'The final setup is documented, understandable, and usable enough for the team to keep running without confusion.'
  }
];

export const proofCards: ProofCard[] = [
  {
    title: 'HubSpot CRM Architecture',
    description: 'Pipelines, properties, lifecycle stages, automation logic, reporting structure, and governance.'
  },
  {
    title: 'Lifecycle & Pipeline Design',
    description: 'Clearer movement from lead, client, participant, or project intake through next steps and outcomes.'
  },
  {
    title: 'Workflow Automation',
    description: 'Manual steps converted into repeatable workflows across CRM, forms, email, Slack, calendars, and spreadsheets.'
  },
  {
    title: 'Reporting Dashboards',
    description: 'Visibility for leadership, funders, internal teams, program outcomes, pipeline health, and bottlenecks.'
  },
  {
    title: 'Participant & Client Journey Tracking',
    description: 'Systems for intake, support, follow-up, progress, handoffs, outcomes, and ongoing coordination.'
  },
  {
    title: 'Proposal & Internal Ops Automation',
    description: 'Cleaner workflows for proposals, contracts, onboarding, invoicing, notifications, and internal coordination.'
  }
];

export const audiences = [
  'Small teams',
  'Nonprofits',
  'Founders',
  'Workforce development organizations',
  'Service businesses',
  'Program-based organizations',
  'HubSpot users',
  'Teams with manual workflows',
  'Teams with unclear handoffs',
  'Teams that need better reporting'
];

export const differences: Difference[] = [
  {
    title: 'Focused, not bloated',
    description: 'Small scopes, clear priorities, and practical fixes instead of oversized transformation projects.'
  },
  {
    title: 'Systems-first',
    description: 'CRM, workflows, reporting, and operations are considered together — not as disconnected tasks.'
  },
  {
    title: 'Founder-led',
    description: 'You work directly with someone who understands both strategy and implementation.'
  },
  {
    title: 'Tool-aware, not tool-obsessed',
    description: 'HubSpot, Zapier, AI, and automation tools only matter if they support the real process.'
  },
  {
    title: 'Built for clarity',
    description: 'The final system should make work easier for the people using it, not harder to understand.'
  }
];

export const auditFields: Field[] = [
  { label: 'Name', type: 'text', placeholder: 'Your name' },
  { label: 'Email', type: 'email', placeholder: 'you@organization.com' },
  { label: 'Organization', type: 'text', placeholder: 'Team, nonprofit, startup, or business' },
  { label: 'What feels messy right now?', type: 'textarea', placeholder: 'Tell me where work gets stuck, repeated, delayed, or hard to report on.' }
];

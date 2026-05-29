export type Service = { name: string; description: string; bestFor: string };
export type SimpleCard = { title: string; description?: string };

export const frictionPoints: SimpleCard[] = [
  { title: 'CRM data no one fully trusts' },
  { title: 'Spreadsheets doing system work' },
  { title: 'Handoffs living in people\'s heads' },
  { title: 'Reports rebuilt manually every week' },
  { title: 'HubSpot not acting as the source of truth' },
  { title: 'Repetitive admin slowing the team down' }
];

export const capabilities: SimpleCard[] = [
  { title: 'Clean the system', description: 'CRM structure, lifecycle stages, properties, pipelines, forms, and reporting foundations that make the system easier to trust.' },
  { title: 'Connect the work', description: 'Automations, handoffs, tasks, emails, Slack alerts, forms, calendars, and tool connections that reduce repetitive manual work.' },
  { title: 'Make it visible', description: 'Dashboards, tracking, funder reporting, pipeline visibility, and decision-ready data that help teams see what is happening.' }
];

export const services: Service[] = [
  { name: 'Tiny Ops Audit', description: 'Find the bottlenecks, messy handoffs, CRM gaps, reporting issues, and quick wins slowing your team down.', bestFor: 'Teams that know work feels messy but are not sure where to start.' },
  { name: 'Growth Systems Starter', description: 'Build a lightweight CRM, automation, and reporting foundation for cleaner growth.', bestFor: 'Small teams, founders, nonprofits, and service businesses moving beyond scattered spreadsheets.' },
  { name: 'HubSpot Cleanup Sprint', description: 'Clean up pipelines, properties, workflows, lifecycle stages, forms, and reports so HubSpot becomes easier to trust and use.', bestFor: 'Teams already using HubSpot but not getting enough value from it.' },
  { name: 'Workflow Automation Build', description: 'Turn repeatable manual work into clean automations across HubSpot, Zapier, Slack, forms, email, calendars, and spreadsheets.', bestFor: 'Teams spending too much time on follow-ups, reminders, routing, and admin work.' },
  { name: 'Funder & Reporting Readiness', description: 'Prepare systems, dashboards, tracking, and positioning for funders, grants, partnerships, government programs, and internal reporting.', bestFor: 'Nonprofits and program-based organizations that need clearer visibility and reporting.' },
  { name: 'Fractional Systems Support', description: 'Ongoing CRM, automation, reporting, RevOps, and systems support without hiring full-time.', bestFor: 'Teams that need senior systems thinking and practical implementation support.' }
];

export const proofCards: SimpleCard[] = [
  { title: 'HubSpot CRM Architecture', description: 'Pipelines, properties, lifecycle stages, automation logic, reporting structure, and governance.' },
  { title: 'Lifecycle & Pipeline Design', description: 'Clearer movement from lead, client, participant, or project intake through next steps and outcomes.' },
  { title: 'Workflow Automation', description: 'Manual steps turned into repeatable workflows across CRM, forms, email, Slack, calendars, and spreadsheets.' },
  { title: 'Reporting Dashboards', description: 'Visibility for leadership, internal teams, funders, program outcomes, pipeline health, and operational bottlenecks.' },
  { title: 'Participant & Client Journey Tracking', description: 'Systems for managing intake, support, follow-up, progress, handoffs, and outcomes.' },
  { title: 'Proposal & Internal Ops Automation', description: 'Cleaner workflows for proposals, contracts, onboarding, invoicing, notifications, and internal coordination.' }
];

export const audience = ['Small teams','Nonprofits','Founders','Workforce development organizations','Service businesses','Program-based organizations','HubSpot users','Teams with manual workflows','Teams with unclear handoffs','Teams that need better reporting'];

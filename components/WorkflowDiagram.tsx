const nodes = [
  { title: 'Messy work', note: 'Manual follow-up' },
  { title: 'Bottleneck found', note: 'Unclear owner' },
  { title: 'Tiny fix', note: 'Automation + CRM gap' },
  { title: 'Work flows', note: 'Dashboard + cleaner handoff' }
];

const sideNotes = ['Lifecycle stage', 'Slack alert', 'Owner rule', 'Funder view'];

export default function WorkflowDiagram() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-4 shadow-[0_30px_90px_rgba(22,59,52,0.08)] md:p-6">
      <div className="absolute inset-0 system-grid opacity-70" />
      <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-teal/10 blur-3xl" />
      <div className="relative">
        <div className="flex items-center justify-between border-b border-border pb-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-muted">System snapshot</p>
            <p className="mt-1 text-sm text-ink/70">From operational noise to a cleaner path.</p>
          </div>
          <div className="rounded-full border border-border bg-cream px-3 py-1 text-xs font-semibold text-evergreen">Audit view</div>
        </div>

        <div className="relative mt-6 grid gap-4 md:grid-cols-2">
          <span className="absolute left-1/2 top-[28%] hidden h-px w-[calc(50%-1rem)] -translate-x-1/2 bg-teal/60 md:block" />
          <span className="absolute bottom-[28%] left-1/2 hidden h-px w-[calc(50%-1rem)] -translate-x-1/2 bg-teal/60 md:block" />
          <span className="absolute left-1/2 top-[28%] hidden h-[44%] w-px -translate-x-1/2 bg-teal/60 md:block" />

          {nodes.map((node, index) => (
            <div key={node.title} className="relative rounded-2xl border border-border bg-cream/92 p-5">
              <span className="absolute -left-1.5 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border border-evergreen/10 bg-amber" />
              <span className="text-xs font-bold text-teal">0{index + 1}</span>
              <h3 className="mt-3 font-heading text-2xl text-evergreen">{node.title}</h3>
              <p className="mt-2 text-sm text-muted">{node.note}</p>
            </div>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-2 gap-2 md:grid-cols-4">
          {sideNotes.map((note) => (
            <span key={note} className="rounded-full border border-border bg-card px-3 py-2 text-center text-xs font-semibold text-ink/70">
              {note}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

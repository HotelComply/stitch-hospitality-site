const ITEMS = [
  {
    title: "Faster first draft",
    body: "Designed to shorten the time from finalized financials to an owner-ready first draft, so month-end isn't a lost weekend.",
  },
  {
    title: "Like-for-like comparisons",
    body: "The restatement engine is built to keep year-over-year comparable after the reclassifications, so variances reflect the operation, not a mapping change.",
  },
  {
    title: "A clearer loyalty story",
    body: "Loyalty costs allocated across the accounts you designate, so \"why did Rooms jump?\" has an answer that holds up.",
  },
  {
    title: "Fewer blind spots",
    body: "On day-use rooms, service-charge treatment, and how reclassifications can touch %-of-gross fees — the details an asset manager notices.",
  },
];

export default function DesignedToImprove() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6 justify-center">
            <span className="w-2 h-2 rounded-full bg-[#9b8059]" />
            <span className="text-xs font-medium tracking-[0.18em] uppercase text-[#777168]">
              What the System Is Designed to Improve
            </span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ITEMS.map((item) => (
            <div
              key={item.title}
              className="p-8 rounded-2xl border border-[#d3ccbf] bg-[#f3f0ea] hover:border-[#9b8059]/30 hover:bg-[#eee8df] transition-all duration-300"
            >
              <p className="text-sm font-semibold text-[#141413] mb-3">{item.title}</p>
              <p className="text-xs text-[#141413]/50 font-light leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

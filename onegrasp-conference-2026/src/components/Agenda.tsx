const days = [
  {
    day: "Day 1",
    date: "March 18",
    title: "Foundations",
    items: [
      { time: "09:00", title: "Opening Keynote: The Decade Ahead", speaker: "Dr. Elena Marquez" },
      { time: "10:30", title: "State of AI in Production", speaker: "Helix Labs Research" },
      { time: "13:00", title: "Workshop: Building Agentic Systems", speaker: "OneGrasp Studio" },
      { time: "16:00", title: "Fireside: Founders' Stories", speaker: "Lukas Vogel" },
    ],
  },
  {
    day: "Day 2",
    date: "March 19",
    title: "The Modern Web & Cloud",
    items: [
      { time: "09:30", title: "Edge-First Architectures", speaker: "Kenji Tanaka" },
      { time: "11:00", title: "Designing for AI-native Interfaces", speaker: "Northwind Design" },
      { time: "14:00", title: "Hands-on: Scaling to 1B Requests", speaker: "Stratos Cloud" },
      { time: "17:00", title: "Community Mixer", speaker: "All attendees" },
    ],
  },
  {
    day: "Day 3",
    date: "March 20",
    title: "Innovation & What's Next",
    items: [
      { time: "10:00", title: "Robotics Meets Generative AI", speaker: "Quanta Systems" },
      { time: "12:00", title: "Panel: Responsible Innovation", speaker: "Industry leaders" },
      { time: "15:00", title: "Closing Keynote: Beyond 2030", speaker: "Amara Okafor" },
      { time: "19:00", title: "OneGrasp Night Party", speaker: "Pier 27" },
    ],
  },
];

const Agenda = () => {
  return (
    <section id="agenda" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">Agenda</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Three days. <span className="text-gradient-blue">One unforgettable program.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {days.map(d => (
            <div key={d.day} className="rounded-xl bg-card border border-border shadow-soft overflow-hidden">
              <div className="bg-gradient-dark text-dark-foreground p-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-glow">{d.day}</p>
                <h3 className="mt-2 text-2xl font-bold">{d.title}</h3>
                <p className="mt-1 text-sm text-white/70">{d.date}, 2026</p>
              </div>
              <ul className="p-6 space-y-5">
                {d.items.map((it, idx) => (
                  <li key={idx} className="relative pl-16">
                    <span className="absolute left-0 top-0 text-sm font-bold text-primary tabular-nums">{it.time}</span>
                    <span className="absolute left-12 top-2 w-px h-full bg-border" />
                    <p className="font-semibold text-sm leading-snug">{it.title}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{it.speaker}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Agenda;

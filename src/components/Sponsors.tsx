const sponsors = ["Helix", "Stratos", "Northwind", "Quanta", "Vertex", "Lumen", "Atlas", "Orbit", "Forge", "Nimbus", "Pulse", "Apex"];

const Sponsors = () => {
  return (
    <section id="sponsors" className="py-24 md:py-32 bg-secondary/40">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">Sponsors & Partners</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Backed by the <span className="text-gradient-blue">industry's best</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-px bg-border rounded-xl overflow-hidden border border-border">
          {sponsors.map(s => (
            <div key={s} className="aspect-[3/2] flex items-center justify-center bg-card hover:bg-background transition-colors">
              <span className="text-lg md:text-xl font-bold tracking-tight text-muted-foreground hover:text-foreground transition-colors">
                {s}<span className="text-primary">.</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;

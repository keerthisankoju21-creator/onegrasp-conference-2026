import { Brain, Globe2, Cloud, Lightbulb } from "lucide-react";

const pillars = [
  { icon: Brain, title: "Artificial Intelligence", desc: "From foundation models to applied AI in production." },
  { icon: Globe2, title: "Modern Web", desc: "The platforms, frameworks and tooling powering the next web." },
  { icon: Cloud, title: "Cloud & Infrastructure", desc: "Edge, serverless and scalable systems for global teams." },
  { icon: Lightbulb, title: "Innovation", desc: "Hardware, robotics and the frontier of human-machine work." },
];

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">About the Conference</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
              Where the world's <br />
              <span className="text-gradient-blue">technology leaders</span> gather.
            </h2>
          </div>
          <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
            <p>
              OneGrasp Conference 2026 brings together 12,000+ engineers, founders, researchers and decision makers for three days of
              keynotes, workshops and conversations that shape what comes next in technology.
            </p>
            <p>
              Across four focused tracks, you'll hear from the builders behind the most influential products in AI, web, cloud and innovation —
              and meet the community defining the decade ahead.
            </p>
          </div>
        </div>

        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map(p => (
            <div key={p.title} className="group p-7 rounded-xl bg-card border border-border shadow-soft hover:shadow-card hover:border-primary/40 transition-all duration-300">
              <div className="w-11 h-11 rounded-lg bg-gradient-blue flex items-center justify-center shadow-blue mb-5">
                <p.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-base mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

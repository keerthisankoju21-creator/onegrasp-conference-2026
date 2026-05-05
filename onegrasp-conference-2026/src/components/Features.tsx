import { Zap, Shield, Layers, Globe, BarChart3, Workflow } from "lucide-react";

const features = [
  { icon: Zap, title: "Lightning fast", desc: "Optimized for speed with edge-first architecture and zero-config caching." },
  { icon: Shield, title: "Enterprise secure", desc: "SOC 2 Type II, end-to-end encryption and granular access controls built-in." },
  { icon: Layers, title: "Composable", desc: "Mix and match modular blocks to ship exactly what your team needs." },
  { icon: Globe, title: "Global scale", desc: "Deployed across 30+ regions for sub-50ms response times worldwide." },
  { icon: BarChart3, title: "Real-time insights", desc: "Beautiful dashboards and live metrics that update as your data flows." },
  { icon: Workflow, title: "Automate anything", desc: "Trigger workflows, sync tools and remove busywork with simple rules." },
];

const Features = () => {
  return (
    <section id="features" className="py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Features</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
            Everything you need, <span className="text-gradient">nothing you don't</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Crafted with obsessive attention to detail. Designed to get out of your way.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="group relative p-8 rounded-2xl bg-gradient-card border border-border shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center shadow-elegant mb-5 group-hover:scale-110 transition-transform">
                <f.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

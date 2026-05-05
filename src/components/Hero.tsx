import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-stage.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <img
        src={heroImg}
        alt="OneGrasp Conference 2026 stage"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="container relative mx-auto px-6 py-24">
        <div className="max-w-3xl text-dark-foreground animate-fade-up">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 backdrop-blur border border-primary/40 text-xs font-semibold text-primary-foreground uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-glow animate-pulse" />
            Global Tech Conference
          </span>
          <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-[1.05] text-white">
            OneGrasp <br />
            <span className="text-gradient-blue">Conference 2026</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
            Shaping the Future of Technology &amp; Innovation. Three days of bold ideas, breakthrough demos and the people building what's next.
          </p>
          <div className="mt-8 flex flex-wrap gap-6 text-sm text-white/90">
            <span className="inline-flex items-center gap-2"><Calendar className="w-4 h-4 text-primary-glow" /> March 18–20, 2026</span>
            <span className="inline-flex items-center gap-2"><MapPin className="w-4 h-4 text-primary-glow" /> Moscone Center, San Francisco</span>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-gradient-blue text-primary-foreground hover:opacity-90 border-0 shadow-blue group">
              Register Now <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur border-white/30 text-white hover:bg-white/20 hover:text-white">
              View Agenda
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

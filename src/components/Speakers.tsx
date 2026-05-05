import s1 from "@/assets/speaker-1.jpg";
import s2 from "@/assets/speaker-2.jpg";
import s3 from "@/assets/speaker-3.jpg";
import s4 from "@/assets/speaker-4.jpg";
import { Linkedin, Twitter } from "lucide-react";

const speakers = [
  { name: "Dr. Elena Marquez", role: "Chief AI Officer", company: "Helix Labs", img: s1 },
  { name: "Kenji Tanaka", role: "VP of Engineering", company: "Stratos Cloud", img: s2 },
  { name: "Amara Okafor", role: "Principal Engineer", company: "Northwind", img: s3 },
  { name: "Lukas Vogel", role: "Founder & CTO", company: "Quanta Systems", img: s4 },
];

const Speakers = () => {
  return (
    <section id="speakers" className="py-24 md:py-32 bg-secondary/40">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">Featured Speakers</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Hear from the <span className="text-gradient-blue">people building it</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            120+ world-class speakers across keynotes, talks and hands-on workshops.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {speakers.map(sp => (
            <div key={sp.name} className="group rounded-xl overflow-hidden bg-card border border-border shadow-soft hover:shadow-card transition-all duration-300">
              <div className="aspect-[4/5] overflow-hidden bg-muted">
                <img
                  src={sp.img}
                  alt={`${sp.name}, ${sp.role} at ${sp.company}`}
                  width={640}
                  height={800}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-base">{sp.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{sp.role}</p>
                <p className="text-sm font-medium text-primary">{sp.company}</p>
                <div className="flex gap-2 mt-4">
                  <a href="#" aria-label="LinkedIn" className="w-8 h-8 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"><Linkedin className="w-3.5 h-3.5" /></a>
                  <a href="#" aria-label="Twitter" className="w-8 h-8 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"><Twitter className="w-3.5 h-3.5" /></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;

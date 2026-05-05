import { Mail, MapPin, Phone, Linkedin, Twitter, Youtube, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-dark text-dark-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 font-bold text-base text-white">
              <span className="w-8 h-8 rounded-md bg-gradient-blue flex items-center justify-center text-primary-foreground font-black text-sm">O</span>
              OneGrasp <span className="text-primary-glow">2026</span>
            </a>
            <p className="mt-4 text-white/60 max-w-sm text-sm leading-relaxed">
              The global tech conference shaping the future of AI, web, cloud and innovation. March 18–20, 2026 — San Francisco.
            </p>
            <div className="flex gap-3 mt-6">
              {[Twitter, Linkedin, Youtube, Github].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-md border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:border-primary-glow transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4 text-white">Contact</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2"><Mail className="w-4 h-4 mt-0.5 text-primary-glow" /> hello@onegrasp.com</li>
              <li className="flex items-start gap-2"><Phone className="w-4 h-4 mt-0.5 text-primary-glow" /> +1 (415) 555-0123</li>
              <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 text-primary-glow" /> Moscone Center, SF, CA</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4 text-white">Conference</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#speakers" className="hover:text-white transition-colors">Speakers</a></li>
              <li><a href="#agenda" className="hover:text-white transition-colors">Agenda</a></li>
              <li><a href="#sponsors" className="hover:text-white transition-colors">Sponsors</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <p>© 2026 OneGrasp Conference. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Code of Conduct</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

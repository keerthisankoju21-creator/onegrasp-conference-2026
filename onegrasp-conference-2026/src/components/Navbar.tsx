import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Speakers", href: "#speakers" },
  { label: "Agenda", href: "#agenda" },
  { label: "Sponsors", href: "#sponsors" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border">
      <nav className="container mx-auto flex items-center justify-between h-16 px-6">
        <a href="#" className="flex items-center gap-2 font-bold text-base">
          <span className="w-8 h-8 rounded-md bg-gradient-blue flex items-center justify-center text-primary-foreground font-black text-sm">O</span>
          OneGrasp <span className="text-primary">2026</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-muted-foreground hover:text-foreground transition-colors">{l.label}</a>
          ))}
        </div>
        <div className="hidden md:block">
          <Button className="bg-gradient-blue text-primary-foreground hover:opacity-90 border-0 shadow-blue">Register Now</Button>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-border bg-background px-6 py-4 space-y-3">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-sm text-muted-foreground hover:text-foreground">{l.label}</a>
          ))}
          <Button className="w-full bg-gradient-blue text-primary-foreground border-0">Register Now</Button>
        </div>
      )}
    </header>
  );
};

export default Navbar;

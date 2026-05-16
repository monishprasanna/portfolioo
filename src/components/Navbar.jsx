import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Work', href: '#work' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Journey', href: '#journey' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 transition-all duration-300 backdrop-blur-md bg-black/60 border-b border-border/50 shadow-sm">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        
        {/* Brand */}
        <a href="#top" className="font-display text-xl md:text-2xl tracking-tight transition-opacity hover:opacity-80 font-medium">
          Monish<span className="text-primary">.</span>Prasanna
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA & Mobile Toggle wrapper */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-medium bg-foreground text-background hover:bg-foreground/90 transition-all hover:scale-105 duration-200"
          >
            Get in touch
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors rounded-lg"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-xl border-b border-border px-6 py-6 space-y-4 shadow-xl transition-all">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="inline-flex w-full items-center justify-center px-5 py-3 rounded-full text-sm font-medium bg-foreground text-background hover:bg-foreground/90 transition-colors"
            >
              Get in touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

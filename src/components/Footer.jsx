import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-background text-muted-foreground text-xs font-medium select-none">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>&copy; {new Date().getFullYear()} Monish Prasanna S</div>
        <div>Chennai, India &middot; Built with care</div>
        <a className="hover:text-foreground transition-colors" href="#top">
          Back to top &uarr;
        </a>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="top" className="relative pt-36 pb-20 md:pt-44 md:pb-28 px-6 md:px-10 max-w-[1400px] mx-auto">
      
      {/* Status indicator pill */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-card border border-border text-xs text-muted-foreground mb-8"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
        Available for internships &middot; Chennai, IN
      </motion.div>

      {/* Main Title Typography matching Lovable Fraunces layout precisely */}
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="font-display text-[13vw] md:text-[8.5vw] leading-[0.9] tracking-tight font-light mb-12 select-none"
      >
        Monish <em className="not-italic text-primary font-normal">Prasanna</em><br />
        <span className="text-muted-foreground">Securing &amp; building</span><br />
        <span>the systems</span> <span className="italic font-normal">in between.</span>
      </motion.h1>

      {/* Bottom split row for actions and bio description */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end pt-8 border-t border-border"
      >
        {/* Actions triggers */}
        <div className="md:col-span-5 flex flex-wrap gap-4 order-2 md:order-1">
          <a 
            href="#work" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium bg-primary text-primary-foreground hover:opacity-90 transition-all hover:gap-3 duration-200"
          >
            See selected work
            <ArrowUpRight className="w-4 h-4 transition-transform" />
          </a>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium border border-border bg-card text-foreground hover:bg-card/80 transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Detailed bio copy */}
        <div className="md:col-span-7 order-1 md:order-2">
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl font-light">
            I&rsquo;m a Computer Science engineer at Amrita Vishwa Vidyapeetham focused on cybersecurity and full-stack development &mdash; equally interested in how a binary unpacks itself in memory and how a React app survives its first thousand users.
          </p>
        </div>
      </motion.div>

    </section>
  );
};

export default Hero;

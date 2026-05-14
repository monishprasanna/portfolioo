import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-10 max-w-[1400px] mx-auto border-b border-border">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start">
        
        {/* Left Column: Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-5 select-none"
        >
          <span className="text-xs uppercase tracking-widest text-muted-foreground block mb-4">
            &mdash; ABOUT
          </span>
          <h2 className="font-display text-3xl md:text-4xl tracking-tight leading-tight max-w-sm">
            Engineering secure foundations.
          </h2>
        </motion.div>

        {/* Right Column: Descriptions & Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:col-span-7 space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed font-light"
        >
          <p>
            I build software the way I take apart malware: carefully, from the inside out. Most of what interests me sits at the seam between offensive and defensive engineering &mdash; what an attacker can do with a system, and what a thoughtful developer can do to make that boring.
          </p>
          
          <p>
            My work spans Capture-the-Flag competitions, full-stack web apps, Android utilities, low-level compiler experiments, and an embarrassing number of late-night network rebuilds. I prefer small, sharp tools to large frameworks, and I&rsquo;d rather understand a protocol than abstract it.
          </p>
          
          <p>
            Outside the editor I race through CTFs, build my own rigs, and read more about kernel internals than is socially advisable.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border mt-8 select-none">
            <div>
              <span className="font-display text-2xl md:text-3xl text-foreground block font-medium">85+</span>
              <span className="text-xs text-muted-foreground block mt-1">CTF challenges</span>
            </div>
            <div>
              <span className="font-display text-2xl md:text-3xl text-foreground block font-medium">40+</span>
              <span className="text-xs text-muted-foreground block mt-1">Samples analysed</span>
            </div>
            <div>
              <span className="font-display text-2xl md:text-3xl text-foreground block font-medium">25+</span>
              <span className="text-xs text-muted-foreground block mt-1">Systems shipped</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;

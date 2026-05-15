import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDown } from 'lucide-react';

const Contact = () => {
  const myEmail = "monishprasanna99424@gmail.com";

  return (
    <section id="contact" className="py-24 md:py-32 max-w-[1400px] mx-auto border-b border-border">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start px-6 md:px-10 text-left">
        
        {/* Left Column: Huge Headline & Direct Email */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-8 select-none"
        >
          <span className="text-xs uppercase tracking-widest text-muted-foreground block mb-4">
            &mdash; CONTACT
          </span>
          
          <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-[1.1] mb-8 max-w-xl font-light text-foreground">
            Let&rsquo;s build something careful.
          </h2>
          
          <a 
            href={`mailto:${myEmail}`}
            className="font-display text-xl md:text-3xl text-foreground hover:text-primary transition-colors block select-all font-medium"
          >
            {myEmail}
          </a>
          
          <p className="text-sm text-muted-foreground mt-4 max-w-md font-light leading-relaxed">
            Open to internships, collaborative builds and security research. The best way to reach me is email &mdash; I usually reply within a day.
          </p>
        </motion.div>

        {/* Right Column: Outbound Social Navigation Pills */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:col-span-4 flex flex-col items-start md:items-end gap-3 pt-4 md:pt-0"
        >
          <a 
            href="https://github.com/monishprasanna" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-between w-full md:w-48 px-5 py-3.5 rounded-full border border-border bg-card text-xs font-medium text-foreground hover:bg-card/80 transition-all group"
          >
            <span>GitHub</span>
            <span className="text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </a>

          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-between w-full md:w-48 px-5 py-3.5 rounded-full border border-border bg-card text-xs font-medium text-foreground hover:bg-card/80 transition-all group"
          >
            <span>LinkedIn</span>
            <span className="text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </a>

          <a 
            href={`mailto:${myEmail}`}
            className="inline-flex items-center justify-between w-full md:w-48 px-5 py-3.5 rounded-full border border-border bg-card text-xs font-medium text-foreground hover:bg-card/80 transition-all group"
          >
            <span>Email</span>
            <span className="text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </a>

          <a 
            href="#contact" 
            className="inline-flex items-center justify-between w-full md:w-48 px-5 py-3.5 rounded-full border border-border bg-card text-xs font-medium text-foreground hover:bg-card/80 transition-all group"
          >
            <span>R&eacute;sum&eacute; (PDF)</span>
            <span className="text-muted-foreground group-hover:text-foreground group-hover:translate-y-0.5 transition-all">
              <ArrowDown className="w-4 h-4" />
            </span>
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;

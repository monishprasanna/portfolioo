import React from 'react';
import { motion } from 'framer-motion';

const toolkitColumns = [
  {
    num: "// 01. SECURITY",
    items: [
      "Malware analysis",
      "CTF / reverse engineering",
      "Network forensics",
      "Ethical hacking",
      "Burp Suite",
      "Wireshark",
      "Metasploit"
    ]
  },
  {
    num: "// 02. ENGINEERING",
    items: [
      "Full-stack web (React, Node)",
      "Android (Java / Kotlin)",
      "Python automation",
      "Systems programming in C/C++",
      "Linux & bare-metal networking"
    ]
  },
  {
    num: "// 03. FOUNDATIONS",
    items: [
      "Data structures & algorithms",
      "Operating systems",
      "Computer networks",
      "Cryptography",
      "Memory & execution internals"
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32 max-w-[1400px] mx-auto border-b border-border">
      
      {/* Header section */}
      <div className="px-6 md:px-10 mb-16 select-none text-left">
        <span className="text-xs uppercase tracking-widest text-muted-foreground block mb-4">
          &mdash; TOOLKIT
        </span>
        <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-4 font-medium text-foreground">
          The tools I reach for, honestly.
        </h2>
        <p className="text-base text-muted-foreground max-w-xl font-light">
          No percentage bars or self-graded matrices. Just the things I&rsquo;ve actually shipped with, broken, rebuilt and would happily reach for again on a Monday morning.
        </p>
      </div>

      {/* Grid container with gap-px over background border to form precise grid boundaries */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border-y border-border text-left">
        {toolkitColumns.map((col, cIdx) => (
          <motion.div
            key={cIdx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: cIdx * 0.15 }}
            className="bg-background p-6 md:p-10"
          >
            <span className="text-xs font-mono text-muted-foreground block mb-8 select-none">
              {col.num}
            </span>
            <div className="space-y-4">
              {col.items.map((item, iIdx) => (
                <div 
                  key={iIdx} 
                  className="font-display text-lg text-foreground hover:text-primary transition-colors"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default Skills;

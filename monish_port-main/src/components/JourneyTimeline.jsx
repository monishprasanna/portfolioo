import React from 'react';
import { motion } from 'framer-motion';

const journeyData = [
  {
    period: "2019 — 2021",
    subtitle: "School years",
    description: "Drawn into computing through gaming, streaming and the occasional malware sample running where it shouldn’t. The early curiosity that everything else grew from."
  },
  {
    period: "2022",
    subtitle: "Amrita Vishwa Vidyapeetham, Chennai",
    description: "Started B.Tech in Computer Science with a cybersecurity specialisation. Shifted from breaking things for fun to studying how to build things that don’t break."
  },
  {
    period: "2023 — 2024",
    subtitle: "CTFs, builds, hardware",
    description: "Active in CTFs across crypto, pwn and web. Independently shipped full-stack projects, built custom rigs and ran small home-lab networks."
  },
  {
    period: "2025 — Present",
    subtitle: "Pre-final year",
    description: "Finalist at Finvest; participation at SASTRA and IITM symposiums. Focused on production-grade systems with security designed in, not bolted on."
  }
];

const JourneyTimeline = () => {
  return (
    <section id="journey" className="py-24 md:py-32 max-w-[1400px] mx-auto border-b border-border">
      
      {/* Header section */}
      <div className="px-6 md:px-10 mb-16 select-none text-left">
        <span className="text-xs uppercase tracking-widest text-muted-foreground block mb-4">
          &mdash; JOURNEY
        </span>
        <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-4 text-foreground font-medium">
          A short history.
        </h2>
      </div>

      {/* Structured Rows */}
      <div className="border-t border-border">
        {journeyData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="border-b border-border px-6 md:px-10 py-8 md:py-12 flex flex-col md:flex-row gap-4 md:gap-12 text-left hover:bg-card/40 transition-colors"
          >
            {/* Timeline Period Left Column */}
            <div className="md:w-1/4 shrink-0 font-display text-base md:text-lg text-foreground font-medium">
              {item.period}
            </div>

            {/* Timeline Content Right Column */}
            <div className="md:w-3/4 space-y-2">
              <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                {item.subtitle}
              </div>
              <p className="text-base text-muted-foreground leading-relaxed font-light max-w-3xl">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default JourneyTimeline;

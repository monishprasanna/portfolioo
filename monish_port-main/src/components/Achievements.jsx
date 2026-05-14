import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, FolderGit2, Flag, HardDrive, CheckCircle2 } from 'lucide-react';

const achievementsList = [
  {
    title: "Finalist in Finvest Financial Event",
    category: "Competitive Podiums",
    icon: Trophy,
    desc: "Achieved elite finalist standing among top nationwide competitors by architecting highly complex quantitative models and system-based financial strategies under strict assessment conditions.",
    color: "from-accent/20 via-accent/5 to-transparent",
    accent: "text-accent",
    border: "border-accent/30 hover:border-accent"
  },
  {
    title: "Participation in SASTRAA & IITM Events",
    category: "National Tech Symposiums",
    icon: Award,
    desc: "Actively competed in premier technical problem-solving statements and programming symposiums hosted by tier-1 institutions including SASTRA University and IIT Madras.",
    color: "from-accent/20 via-accent/5 to-transparent",
    accent: "text-accent",
    border: "border-accent/30 hover:border-accent"
  },
  {
    title: "Multiple Advanced Mini-Projects",
    category: "Independent System Design",
    icon: FolderGit2,
    desc: "Engineered and deployed an expansive matrix of standalone full-stack tools, complete intermediate compilers, custom mobile storage utilities, and highly decoupled enterprise service modules.",
    color: "from-accent/20 via-accent/5 to-transparent",
    accent: "text-accent",
    border: "border-accent/30 hover:border-accent"
  },
  {
    title: "Capture The Flag (CTF) Campaigns",
    category: "Proactive Security Operations",
    icon: Flag,
    desc: "Demonstrated strong applied offensive security logic and vulnerability triage capabilities across digital steganography, reverse assembly decoding, and web payload manipulation.",
    color: "from-accent/20 via-accent/5 to-transparent",
    accent: "text-accent",
    border: "border-accent/30 hover:border-accent"
  },
  {
    title: "Bare-Metal Networking & Hardware Rig Setup",
    category: "Infrastructure & Systems Base",
    icon: HardDrive,
    desc: "Executed comprehensive hands-on customized computer configurations, multi-tier physical sub-networking layout planning, and resilient offline sandbox host architectures.",
    color: "from-accent/20 via-accent/5 to-transparent",
    accent: "text-accent",
    border: "border-accent/30 hover:border-accent"
  }
];

const Achievements = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-primary">
      
      {/* Background patterns */}
      <div className="absolute inset-0 bg-cyber-dots opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-secondary border border-slate-800 text-xs font-mono text-accent">
            <Award className="w-3.5 h-3.5" />
            VERIFIED_MILESTONES // ACHIEVEMENTS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Honors & Professional Accolades
          </h2>
          <p className="text-muted text-sm sm:text-base">
            Recognized metrics of competitive excellence, national forum representation, and persistent execution.
          </p>
        </div>

        {/* Achievements Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {achievementsList.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`glass-panel p-6 sm:p-8 bg-secondary/40 border-slate-800 relative overflow-hidden flex flex-col justify-between group transition-all duration-300 ${item.border}`}
              >
                {/* Background soft top gradient */}
                <div className={`absolute top-0 left-0 right-0 h-24 bg-gradient-to-b ${item.color} opacity-40 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10">
                  {/* Category Pill */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[10px] font-mono tracking-wider uppercase text-slate-400 bg-primary/80 px-2 py-0.5 rounded border border-slate-800">
                      {item.category}
                    </span>
                    <CheckCircle2 className="w-4 h-4 text-slate-600 group-hover:text-emerald-400 transition-colors" />
                  </div>

                  {/* Icon & Title Container */}
                  <div className="space-y-3 mb-4">
                    <div className="p-3 rounded-xl bg-primary border border-slate-800 w-max group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className={`w-6 h-6 ${item.accent}`} />
                    </div>
                    
                    <h3 className="text-lg font-bold text-white group-hover:text-slate-100 transition-colors tracking-tight">
                      {item.title}
                    </h3>
                  </div>

                  {/* Comprehensive narrative desc */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom line stamp */}
                <div className="mt-6 pt-3 border-t border-slate-800/80 text-[10px] font-mono text-slate-500 flex justify-between relative z-10">
                  <span>[RECORD: 0x0A{idx + 1}]</span>
                  <span className={`${item.accent} font-semibold opacity-0 group-hover:opacity-100 transition-opacity`}>AUTHENTICATED</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Achievements;

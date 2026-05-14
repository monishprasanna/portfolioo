import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Bug, Lock, FileCode, CheckCircle, Search, AlertOctagon, Terminal } from 'lucide-react';

const statsCounters = [
  { label: "CTF Challenges Solved", count: "85+", color: "text-accent" },
  { label: "Malware Samples Analyzed", count: "40+", color: "text-rose-400" },
  { label: "System Architectures Hardened", count: "25+", color: "text-emerald-400" },
  { label: "Custom Network Scripts", count: "30+", color: "text-accent" }
];

const simulatedMalwareLogs = [
  { id: "SAMPLE_0x44A", type: "PE32 Executable", status: "PACKED // UPX", detected: "Trojan.Generic.Heur", threat: "HIGH" },
  { id: "SAMPLE_0x89F", type: "ELF 64-bit", status: "OBFUSCATED // XOR", detected: "Rootkit.Linux.Hidden", threat: "CRITICAL" },
  { id: "SAMPLE_0x11B", type: "APK Archive", status: "DEX_MODIFIED", detected: "Spyware.Android.Sms", threat: "MEDIUM" },
];

const CybersecurityShowcase = () => {
  const [activeSample, setActiveSample] = useState(simulatedMalwareLogs[0]);
  const [analyzing, setAnalyzing] = useState(false);

  const triggerAnalysis = (sample) => {
    setActiveSample(sample);
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
    }, 800);
  };

  return (
    <section id="cybersecurity" className="py-20 relative overflow-hidden bg-primary border-t border-slate-800/60">
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-secondary border border-slate-800 text-xs font-mono text-rose-400">
            <ShieldAlert className="w-3.5 h-3.5" />
            THREAT_INTELLIGENCE // SHOWCASE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Security Operations & Analysis
          </h2>
          <p className="text-muted text-sm sm:text-base">
            Showcasing real-world Capture The Flag metrics and proactive malware dissection methodologies.
          </p>
        </div>

        {/* Dynamic Statistics Counters */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {statsCounters.map((stat, sIdx) => (
            <motion.div
              key={sIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: sIdx * 0.1 }}
              className="p-5 rounded-xl bg-secondary/60 border border-slate-800 text-center relative group hover:border-slate-700 transition-colors"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-gradient-to-r from-transparent via-accent/40 to-transparent group-hover:w-24 transition-all duration-300" />
              <div className={`text-3xl sm:text-4xl font-black font-mono tracking-tight ${stat.color} mb-1`}>
                {stat.count}
              </div>
              <div className="text-xs text-muted font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main Content Area: Interactive Log Terminal & Mindset Deep Dive */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch text-left">
          
          {/* Left Column: Interactive Malware Dissector Console Widget */}
          <div className="lg:col-span-7 glass-panel border-slate-800 bg-secondary/80 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <Bug className="w-5 h-5 text-rose-400 animate-pulse" />
                  <span className="text-sm font-bold text-white tracking-tight">
                    Live Dynamic Heuristic sandbox
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-primary border border-slate-800 text-slate-400">
                  SANDBOX // SECURE
                </span>
              </div>

              <p className="text-xs text-muted mb-4">
                Select a captured binary payload buffer to invoke heuristic evaluation sequences:
              </p>

              {/* Sample Selector Triggers */}
              <div className="grid grid-cols-3 gap-2 mb-6">
                {simulatedMalwareLogs.map((sample) => (
                  <button
                    key={sample.id}
                    onClick={() => triggerAnalysis(sample)}
                    className={`p-2 rounded text-left border transition-all ${
                      activeSample.id === sample.id 
                        ? 'bg-rose-500/10 border-rose-500/40 text-rose-300' 
                        : 'bg-primary border-slate-800 text-muted hover:border-slate-700 hover:text-white'
                    }`}
                  >
                    <div className="text-[10px] font-mono font-bold block">{sample.id}</div>
                    <div className="text-[9px] truncate text-slate-500">{sample.type}</div>
                  </button>
                ))}
              </div>

              {/* Dissection Screen Output */}
              <div className="p-4 rounded-lg bg-primary border border-slate-800 font-mono text-xs space-y-2.5 relative min-h-[160px]">
                {analyzing ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-primary/95 rounded-lg space-y-2 z-10">
                    <div className="w-5 h-5 border-2 border-rose-500 border-t-transparent rounded-full animate-spin" />
                    <span className="text-[10px] text-rose-400 tracking-widest uppercase">Dissecting Instructions...</span>
                  </div>
                ) : null}

                <div className="flex justify-between items-center text-slate-400 border-b border-slate-800/80 pb-1.5">
                  <span>TARGET: {activeSample.id}</span>
                  <span className="text-slate-500">{activeSample.type}</span>
                </div>

                <div className="space-y-1 text-slate-300">
                  <p className="text-[11px] text-slate-500">&gt; Loading PE headers and mapping import tables...</p>
                  <p className="flex items-center gap-2">
                    <span className="text-slate-500">[ENTRY]:</span> 
                    <span className="text-amber-400">{activeSample.status}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-slate-500">[SIGNATURE]:</span> 
                    <span className="text-rose-400 font-bold">{activeSample.detected}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-slate-500">[THREAT_SCORE]:</span> 
                    <span className={`px-1.5 py-0.5 rounded text-[9px] font-bold ${
                      activeSample.threat === 'CRITICAL' ? 'bg-rose-500 text-white' : 'bg-amber-500/20 text-amber-300'
                    }`}>
                      {activeSample.threat} SEVERITY
                    </span>
                  </p>
                </div>

                <div className="pt-2 text-[10px] text-emerald-400 border-t border-slate-800/50 flex items-center gap-1.5">
                  <CheckCircle className="w-3 h-3 text-emerald-400" /> Static analysis verified. Memory dumps mapped securely.
                </div>
              </div>
            </div>

            {/* Bottom Note */}
            <div className="mt-4 pt-3 border-t border-slate-800/60 text-[11px] text-slate-500 font-mono">
              [DECOMPILER]: Binary validation pipeline successfully executed.
            </div>
          </div>

          {/* Right Column: CTF Profile & Security Mindset Statement */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            
            {/* CTF Showcase Card */}
            <div className="glass-panel p-6 border-slate-800 bg-secondary/60 space-y-4">
              <div className="flex items-center gap-3 text-accent font-bold text-sm uppercase tracking-wide font-mono">
                <Terminal className="w-4 h-4" />
                CTF Operational Framework
              </div>
              
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Consistent active engagement in global and collegiate <strong className="text-white">Capture The Flag</strong> tournaments. Training continuous analytical thinking under strict runtime constraints across vulnerable system configurations.
              </p>

              <div className="space-y-2 pt-1 text-xs text-slate-400 font-mono">
                <div className="flex items-center gap-2">
                  <span className="text-accent">&gt;</span> Cryptography & Steganography
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-accent">&gt;</span> Reverse Engineering & Pwning
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-accent">&gt;</span> Web Application Exploitation
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-accent">&gt;</span> Forensics & Packet Dissection
                </div>
              </div>
            </div>

            {/* Security Research Mindset Card */}
            <div className="glass-panel p-6 border-slate-800 bg-gradient-to-br from-primary via-secondary to-primary space-y-3">
              <div className="flex items-center gap-2 text-accent font-mono text-xs font-bold uppercase tracking-wider">
                <Lock className="w-4 h-4" /> Defense-in-Depth Paradigm
              </div>
              <p className="text-xs text-muted leading-relaxed">
                Building secure applications requires understanding the offensive surface matrix. Every software layer written incorporates input sanitization, minimal permission assignment, and deterministic memory boundary evaluations.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CybersecurityShowcase;

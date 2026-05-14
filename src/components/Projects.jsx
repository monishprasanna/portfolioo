import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink, CheckCircle, X } from 'lucide-react';

const projectsData = [
  {
    id: "crypto-insurance",
    title: "AI Crypto Insurance Claim Verification",
    category: "FinTech &middot; ML",
    shortDesc: "Intelligent autonomous risk assessment models for DeFi wallet hacks.",
    description: "An advanced machine-learning driven verification platform designed to evaluate on-chain transaction flows, smart contract audit records, and behavioral signals to instantly validate cryptocurrency exploit claims.",
    techStack: ["Python", "TensorFlow", "Web3.py", "React"],
    techDisplay: "Python &middot; TensorFlow &middot; Web3.py",
    problemSolved: "Automated manual fraud investigation bottlenecks by algorithmically scoring transaction patterns for anomalous behavior pre and post attack.",
    features: [
      "On-chain heuristic parsing of token drain paths",
      "Trained classification model flagging sybil or collusive transfers",
      "Smart contract interaction log validation",
      "Intuitive claimant dashboard providing instant cryptographic audit receipts"
    ],
    github: "https://github.com",
    demo: "#",
  },
  {
    id: "forex-bot",
    title: "Forex Trading Bot",
    category: "Quant &middot; Automation",
    shortDesc: "Algorithmic high-frequency currency market execution bot.",
    description: "A financial automation tool written to parse high-frequency real-time Forex price fluctuations, running technical indicators in real-time to trigger programmatic execute actions.",
    techStack: ["Python", "Pandas", "NumPy", "MetaTrader API"],
    techDisplay: "Python &middot; Pandas &middot; NumPy",
    problemSolved: "Removed emotion-driven manual execution lag by developing a deterministic, low-latency multi-threaded signal validation matrix.",
    features: [
      "Integration with live MetaTrader execution bridges",
      "Custom Bollinger Band and RSI parameter combination logic",
      "Strict automated drawdown limit triggers (Stop-loss matrix)",
      "Backtesting evaluation engine producing CSV statistical outputs"
    ],
    github: "https://github.com",
    demo: "#",
  },
  {
    id: "compiler-project",
    title: "Compiler Pipeline",
    category: "Systems &middot; Core",
    shortDesc: "Custom lexer, syntax parser, and target language code generation pipeline.",
    description: "An internal compiler subsystem built from bare logic implementing recursive descent parsing, grammar tokenization, abstract syntax tree (AST) construction, and intermediate code assembly.",
    techStack: ["C", "C++", "Flex", "Bison"],
    techDisplay: "C &middot; C++ &middot; Flex &middot; Bison",
    problemSolved: "Bridged theoretical language grammars into concrete executable assembly logic, solving complex symbol table lookups and semantic type mismatches.",
    features: [
      "Strict lexical token validation and error reporting",
      "Custom symbol table with scopes and offset calculation",
      "Optimized AST visualization outputs",
      "Intermediate code generation (Three-Address Code)"
    ],
    github: "https://github.com",
    demo: "#",
  },
  {
    id: "train-ticket",
    title: "Train Ticket Booking System",
    category: "Web &middot; Infrastructure",
    shortDesc: "Automated reservation state machine with real-time seat tracking.",
    description: "A full-stack automated reservation infrastructure capable of dynamically handling concurrent transit seat allocations, booking status transitions, and passenger manifest generation.",
    techStack: ["React", "Node.js", "MongoDB", "Express"],
    techDisplay: "React &middot; Node.js &middot; MongoDB",
    problemSolved: "Mitigated double-booking race conditions during high-concurrency ticket release windows using robust database indexing and transaction locking mechanisms.",
    features: [
      "Dynamic interactive train layout visualization",
      "Automated state machine for Waitlisted-to-Confirmed upgrades",
      "Encrypted passenger credential records",
      "Simulated real-time automated seat allocation engine"
    ],
    github: "https://github.com",
    demo: "#",
  },
  {
    id: "url-shortener",
    title: "URL Shortener Service",
    category: "Web &middot; Systems",
    shortDesc: "High-performance custom URL redirection and link shortening service.",
    description: "A highly robust, low-latency URL shortening engine designed to process large volumes of link transformations securely while providing rich telemetry and real-time access logs.",
    techStack: ["Node.js", "Express", "MongoDB", "Redis"],
    techDisplay: "Node.js &middot; Express &middot; MongoDB",
    problemSolved: "Eliminated opaque third-party analytics risk by building an in-house tracking-resistant shortener with strict rate limiting to prevent brute-force enumeration.",
    features: [
      "Cryptographically secure pseudo-random hash generation",
      "Real-time access frequency tracking and user-agent parsing",
      "Built-in caching tier for instant hot redirection",
      "Automated malicious domain filtering APIs integrated"
    ],
    github: "https://github.com",
    demo: "#",
  },
  {
    id: "gst-bill",
    title: "GST Bill Generator",
    category: "Desktop &middot; Ledger",
    shortDesc: "Corporate point-of-sale tax ledger and invoice generation software.",
    description: "A complete professional inventory and invoicing software package equipped with automatic state/central GST logic calculation, barcode lookups, and persistent clean receipt generation.",
    techStack: ["Java", "JavaFX", "MySQL", "JasperReports"],
    techDisplay: "Java &middot; JavaFX &middot; MySQL",
    problemSolved: "Replaced error-prone manual ledger entries with automated multi-tier tax computation, guaranteeing compliance with standardized regional tax filing schemas.",
    features: [
      "Instant dual-tier GST splitting (SGST/CGST/IGST)",
      "Persistent item database management interface",
      "Custom PDF rendering using compiled Jasper templates",
      "Encrypted historical backup archives"
    ],
    github: "https://github.com",
    demo: "#",
  },
  {
    id: "android-apps",
    title: "Android Native Utilities",
    category: "Mobile &middot; Cryptography",
    shortDesc: "Native custom utilities optimized for zero-leak background execution.",
    description: "A unified suite of custom experimental and practical native Android mobile interfaces focused on fast offline processing, hardware sensor polling, and encrypted local storage.",
    techStack: ["Java", "Kotlin", "Android Studio", "SQLite"],
    techDisplay: "Java &middot; Kotlin &middot; SQLite",
    problemSolved: "Demonstrated mobile memory security by writing custom lifecycle-aware background services that avoid battery drain and background location harvesting vulnerabilities.",
    features: [
      "Material Design 3 custom adaptive typography interfaces",
      "Encrypted local SharedPreference keystores",
      "Broadcast receivers handling network state degradation gracefully",
      "Optimized bitmap memory caching"
    ],
    github: "https://github.com",
    demo: "#",
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="work" className="py-24 md:py-32 max-w-[1400px] mx-auto border-b border-border">
      
      {/* Header section */}
      <div className="px-6 md:px-10 mb-16 select-none">
        <span className="text-xs uppercase tracking-widest text-muted-foreground block mb-4">
          &mdash; SELECTED WORK
        </span>
        <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-4 font-medium">
          Things I&rsquo;ve built.
        </h2>
        <p className="text-base text-muted-foreground max-w-xl font-light">
          A small slice of recent projects across security tooling, fintech experiments and full-stack systems. Click any entry to inspect architecture.
        </p>
      </div>

      {/* Rows List */}
      <div className="border-t border-border">
        {projectsData.map((project, index) => {
          const indexNum = String(index + 1).padStart(2, '0');
          return (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="block group border-b border-border px-6 md:px-10 py-8 md:py-10 transition-colors hover:bg-card cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                
                {/* Index & Title / Tech */}
                <div className="flex items-baseline gap-6 md:gap-12">
                  <span className="font-display text-sm md:text-base text-muted-foreground group-hover:text-primary transition-colors select-none">
                    {indexNum}
                  </span>
                  <div>
                    <h3 className="font-display text-xl md:text-2xl font-medium tracking-tight group-hover:translate-x-2 transition-transform duration-300 text-foreground">
                      {project.title}
                    </h3>
                    <p 
                      className="text-xs text-muted-foreground mt-2 font-mono"
                      dangerouslySetInnerHTML={{ __html: project.techDisplay }}
                    />
                  </div>
                </div>

                {/* Category tags & indicator arrow */}
                <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto mt-2 md:mt-0 pt-2 md:pt-0 border-t md:border-t-0 border-border md:border-none">
                  <span 
                    className="text-xs font-medium text-muted-foreground tracking-wider uppercase"
                    dangerouslySetInnerHTML={{ __html: project.category }}
                  />
                  <span className="text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5 inline-block" />
                  </span>
                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* High Fidelity Detailed View Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md overflow-y-auto">
            {/* Backdrop close */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0"
            />

            {/* Content box */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-3xl bg-card border border-border rounded-xl p-6 sm:p-10 z-10 max-h-[90vh] overflow-y-auto text-left space-y-6 shadow-2xl"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-background border border-border text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Title Header */}
              <div className="space-y-2 pr-12">
                <span 
                  className="text-xs font-mono text-primary uppercase tracking-wider"
                  dangerouslySetInnerHTML={{ __html: selectedProject.category }}
                />
                <h3 className="font-display text-2xl sm:text-3xl font-medium text-foreground tracking-tight">
                  {selectedProject.title}
                </h3>
              </div>

              {/* Core Description */}
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-light">
                {selectedProject.description}
              </p>

              {/* Problem Solved Highlight Box */}
              <div className="p-4 rounded-lg bg-background border border-border space-y-2">
                <h4 className="text-xs font-mono text-primary uppercase tracking-wider flex items-center gap-2 font-medium">
                  <CheckCircle className="w-4 h-4 text-primary" /> Problem Solved &amp; Impact
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-light">
                  {selectedProject.problemSolved}
                </p>
              </div>

              {/* Key Features List */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono text-muted-foreground uppercase tracking-wider font-medium">
                  Key Architectural Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedProject.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground font-light">
                      <span className="text-primary mt-1">&bull;</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech stack matrix */}
              <div className="space-y-2 pt-2">
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 rounded bg-background border border-border text-xs font-mono text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links Footer */}
              <div className="pt-6 border-t border-border flex flex-wrap gap-4 items-center justify-between">
                <div className="text-xs font-mono text-muted-foreground">
                  ID: {selectedProject.id}
                </div>
                <div className="flex gap-3">
                  <a 
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background text-xs font-medium text-foreground hover:bg-background/80 transition-colors"
                  >
                    <Github className="w-4 h-4" /> GitHub
                  </a>
                  <a 
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground text-background text-xs font-medium hover:opacity-90 transition-opacity"
                  >
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Projects;

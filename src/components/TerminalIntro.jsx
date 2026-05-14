import React, { useState } from 'react';
import { Terminal as TerminalIcon, Play, RotateCcw, CheckCircle2 } from 'lucide-react';

const TerminalIntro = () => {
  const [outputHistory, setOutputHistory] = useState([
    { type: 'input', text: 'whoami' },
    { type: 'output', text: 'Monish Prasanna S -- Cybersecurity Specialist & Full Stack Developer' },
    { type: 'output', text: 'Status: Completed Pre-Final Year (3rd Year) @ Amrita Vishwa Vidyapeetham' },
    { type: 'input', text: 'cat core_ideology.txt' },
    { type: 'output', text: '>> Building Secure Digital Systems.' },
    { type: 'output', text: '>> Developer. Researcher. Builder.' },
    { type: 'output', text: '>> Engineering Ideas Into Reality.' },
  ]);

  const commands = [
    {
      cmd: 'whoami',
      output: [
        'Monish Prasanna S -- Cybersecurity Specialist & Full Stack Developer',
        'Status: Completed Pre-Final Year (3rd Year) @ Amrita Vishwa Vidyapeetham'
      ]
    },
    {
      cmd: 'skills --matrix',
      output: [
        '[+] CYBERSECURITY: Malware Analysis | Reverse Engineering | Network Ops | CTF Expert',
        '[+] DEV_STACK: React | Node.js | Linux | Firebase | MongoDB | Android Dev',
        '[+] LOW_LEVEL: C | C++ | System Hardening | Hardware Engineering'
      ]
    },
    {
      cmd: 'get_clearance',
      output: [
        '>> ACCESS GRANTED: Security clearance level [ELITE_BUILDER] verified.',
        '>> Ready to engineer scalable, hardened digital infrastructure.'
      ]
    }
  ];

  const handleCommandClick = (commandObj) => {
    setOutputHistory(prev => [
      ...prev,
      { type: 'input', text: commandObj.cmd },
      ...commandObj.output.map(line => ({ type: 'output', text: line }))
    ]);
  };

  const handleClear = () => {
    setOutputHistory([
      { type: 'output', text: 'Console buffer cleared. Select a command to query identity parameters.' }
    ]);
  };

  return (
    <div className="w-full rounded-xl overflow-hidden border border-slate-800 bg-secondary/90 shadow-2xl backdrop-blur-xl">
      
      {/* Terminal Header Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-primary/95 border-b border-slate-800/80 select-none">
        <div className="flex items-center space-x-2">
          {/* Window Controls */}
          <div className="w-3 h-3 rounded-full bg-rose-500/80 hover:bg-rose-500 transition-colors cursor-pointer" title="Close" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80 hover:bg-amber-500 transition-colors cursor-pointer" title="Minimize" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80 hover:bg-emerald-500 transition-colors cursor-pointer" title="Maximize" />
          
          <span className="text-xs font-mono text-muted pl-2 flex items-center gap-1.5 border-l border-slate-800 ml-2">
            <TerminalIcon className="w-3.5 h-3.5 text-accent" />
            guest@monish-secops:~
          </span>
        </div>

        {/* Clear Buffer trigger */}
        <button 
          onClick={handleClear}
          className="flex items-center gap-1 text-[11px] font-mono text-muted hover:text-accent transition-colors"
          title="Clear console output"
        >
          <RotateCcw className="w-3 h-3" />
          clear
        </button>
      </div>

      {/* Terminal Main Content Area */}
      <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm min-h-[220px] max-h-[350px] overflow-y-auto space-y-2.5 scrollbar-thin text-left">
        
        {/* Startup banner */}
        <div className="text-slate-500 select-none border-b border-slate-800/50 pb-2 mb-3 space-y-0.5">
          <p>Monish OS v3.1.4 (x86_64-pc-linux-gnu)</p>
          <p className="text-[11px]">Type/Click query payloads below to inspect live stack memory.</p>
        </div>

        {/* Console History Render */}
        {outputHistory.map((item, idx) => (
          <div key={idx} className="leading-relaxed animate-fadeIn">
            {item.type === 'input' ? (
              <div className="flex items-center gap-2 text-accent font-semibold">
                <span className="text-accent select-none">&gt;_</span>
                <span>{item.text}</span>
              </div>
            ) : (
              <div className="text-text pl-4 border-l border-slate-800/80 py-0.5 text-slate-300 whitespace-pre-wrap">
                {item.text}
              </div>
            )}
          </div>
        ))}

        {/* Blinking cursor line */}
        <div className="flex items-center gap-2 text-muted pt-1">
          <span className="text-accent select-none">&gt;_</span>
          <span className="w-2 h-4 bg-accent animate-pulse inline-block" />
        </div>

      </div>

      {/* Interactive Trigger Inputs Footer */}
      <div className="p-3 bg-primary/50 border-t border-slate-800/60 flex flex-wrap items-center justify-between gap-2">
        <span className="text-[11px] font-mono text-muted flex items-center gap-1 select-none">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Available Payloads:
        </span>
        
        <div className="flex flex-wrap gap-1.5">
          {commands.map((cmdObj) => (
            <button
              key={cmdObj.cmd}
              onClick={() => handleCommandClick(cmdObj)}
              className="px-2.5 py-1 rounded bg-secondary hover:bg-accent/10 border border-slate-800 hover:border-accent/40 text-text hover:text-accent font-mono text-xs transition-all flex items-center gap-1 active:scale-95"
            >
              <Play className="w-2.5 h-2.5 text-accent fill-accent/40" />
              {cmdObj.cmd}
            </button>
          ))}
        </div>
      </div>

    </div>
  );
};

export default TerminalIntro;

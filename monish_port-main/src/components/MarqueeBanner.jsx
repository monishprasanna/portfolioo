import React from 'react';

const marqueeItems = [
  "Cybersecurity",
  "✦",
  "Malware analysis",
  "✦",
  "Full-stack",
  "✦",
  "React · Node",
  "✦",
  "CTF player",
  "✦",
  "Android",
  "✦",
  "Linux",
  "✦",
  "C / C++ / Python",
  "✦"
];

const MarqueeBanner = () => {
  // We duplicate the items 3 times to create a flawless infinite horizontal scroll effect
  const repeatedItems = [...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <div className="border-y border-border py-6 overflow-hidden bg-card select-none">
      <div className="flex whitespace-nowrap animate-scroll">
        <div className="flex items-center gap-8 shrink-0 min-w-full justify-around font-mono text-sm tracking-wider text-muted-foreground">
          {repeatedItems.map((item, index) => (
            <span 
              key={index} 
              className={item === "✦" ? "text-primary text-xs" : "hover:text-foreground transition-colors"}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeBanner;

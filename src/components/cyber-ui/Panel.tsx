
import React from 'react';
import { cn } from '@/lib/utils';

interface PanelProps {
  title?: string;
  className?: string;
  titleColor?: string;
  children: React.ReactNode;
}

export function Panel({ title, className, titleColor = "text-cyber-cyan", children }: PanelProps) {
  return (
    <div className={cn("cyber-panel rounded-sm relative overflow-hidden", className)}>
      {title && (
        <div className="relative z-10">
          <div className={cn("absolute top-0 left-0 py-1 px-4 bg-cyber-dark-blue border-r border-b border-cyber-cyan", titleColor)}>
            <span className="font-display uppercase tracking-wider text-xs">{title}</span>
          </div>
        </div>
      )}
      <div className={cn("p-4", title && "pt-8")}>
        {children}
      </div>
    </div>
  );
}

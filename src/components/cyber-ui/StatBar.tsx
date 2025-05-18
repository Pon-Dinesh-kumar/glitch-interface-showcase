
import React from 'react';
import { cn } from '@/lib/utils';

interface StatBarProps {
  label: string;
  value: number;
  maxValue: number;
  color?: string;
  className?: string;
}

export function StatBar({ 
  label, 
  value, 
  maxValue = 100, 
  color = 'bg-cyber-cyan', 
  className 
}: StatBarProps) {
  const percentage = Math.min(Math.max((value / maxValue) * 100, 0), 100);
  
  return (
    <div className={cn("mb-3", className)}>
      <div className="flex justify-between mb-1">
        <span className="text-xs uppercase font-cyber text-muted-foreground">{label}</span>
        <span className="text-xs font-cyber text-cyber-cyan">
          {value} <span className="text-muted-foreground">/ {maxValue}</span>
        </span>
      </div>
      <div className="h-1.5 w-full bg-cyber-dark-blue cyber-border">
        <div 
          className={cn("h-full", color)}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

interface StatGridProps {
  stats: { label: string; value: number; maxValue?: number; color?: string }[];
  columns?: number;
  className?: string;
}

export function StatGrid({ stats, columns = 2, className }: StatGridProps) {
  return (
    <div className={cn(`grid grid-cols-${columns} gap-4`, className)}>
      {stats.map((stat, index) => (
        <StatBar
          key={index}
          label={stat.label}
          value={stat.value}
          maxValue={stat.maxValue || 100}
          color={stat.color}
        />
      ))}
    </div>
  );
}

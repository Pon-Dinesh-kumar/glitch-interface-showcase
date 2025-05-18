
import React from 'react';
import { Panel } from './cyber-ui/Panel';
import { StatBar } from './cyber-ui/StatBar';

export function CharacterStats() {
  const attributes = [
    { label: "CREATIVITY", value: 85, maxValue: 100 },
    { label: "PROBLEM SOLVING", value: 92, maxValue: 100 },
    { label: "COMMUNICATION", value: 80, maxValue: 100 },
    { label: "ADAPTABILITY", value: 88, maxValue: 100 },
  ];

  const stats = [
    { label: "Projects Completed", value: 37 },
    { label: "Years Experience", value: 5 },
    { label: "Collaboration", value: 90 },
    { label: "Coffee Consumed", value: 9999 },
  ];

  return (
    <Panel title="CHARACTER STATS" className="mb-4">
      <div className="space-y-4">
        <div>
          <h4 className="text-xs uppercase font-cyber text-muted-foreground mb-2">ATTRIBUTES</h4>
          {attributes.map((attr, index) => (
            <StatBar
              key={index}
              label={attr.label}
              value={attr.value}
              maxValue={attr.maxValue}
              color="bg-cyber-purple"
              className="mb-2"
            />
          ))}
        </div>
        
        <div>
          <h4 className="text-xs uppercase font-cyber text-muted-foreground mb-2">STATS</h4>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="cyber-panel p-2 text-center">
                <div className="text-cyber-cyan text-2xl font-display">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Panel>
  );
}

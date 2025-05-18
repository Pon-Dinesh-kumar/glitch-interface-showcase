
import React from 'react';
import { cn } from '@/lib/utils';
import { Panel } from './Panel';
import { StatBar } from './StatBar';

interface TechStack {
  name: string;
  value: number;
}

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  techStack: TechStack[];
  link?: string;
  className?: string;
}

export function ProjectCard({ 
  title, 
  description, 
  image, 
  techStack, 
  link, 
  className 
}: ProjectCardProps) {
  return (
    <Panel className={cn("h-full", className)}>
      <div className="flex flex-col h-full">
        {image && (
          <div className="mb-4 cyber-border overflow-hidden">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-48 object-cover object-center hover:scale-110 transition-transform duration-500" 
            />
          </div>
        )}
        
        <h3 className="cyber-heading text-cyber-cyan text-lg mb-2">{title}</h3>
        
        <p className="text-sm text-muted-foreground mb-4 flex-grow">{description}</p>
        
        <div className="mb-4">
          <h4 className="text-xs uppercase font-cyber text-muted-foreground mb-2">TECH STACK</h4>
          {techStack.map((tech, index) => (
            <StatBar 
              key={index}
              label={tech.name} 
              value={tech.value} 
              maxValue={100} 
              color={`bg-cyber-${tech.value > 80 ? 'green' : tech.value > 60 ? 'cyan' : tech.value > 40 ? 'blue' : 'purple'}`}
              className="mb-2"
            />
          ))}
        </div>
        
        {link && (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="cyber-button block text-center" 
          >
            VIEW PROJECT
          </a>
        )}
      </div>
    </Panel>
  );
}

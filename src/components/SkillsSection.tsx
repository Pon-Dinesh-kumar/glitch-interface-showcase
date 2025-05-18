
import React from 'react';
import { Panel } from './cyber-ui/Panel';
import { StatBar } from './cyber-ui/StatBar';

const skillCategories = [
  {
    title: "Programming",
    skills: [
      { name: "JavaScript", value: 92 },
      { name: "TypeScript", value: 88 },
      { name: "Python", value: 75 },
      { name: "React", value: 90 },
      { name: "Node.js", value: 85 },
    ]
  },
  {
    title: "Design",
    skills: [
      { name: "UI/UX", value: 80 },
      { name: "Figma", value: 85 },
      { name: "CSS/SCSS", value: 90 },
      { name: "Tailwind", value: 95 },
      { name: "Animations", value: 78 },
    ]
  },
  {
    title: "Platforms",
    skills: [
      { name: "AWS", value: 82 },
      { name: "Firebase", value: 88 },
      { name: "Docker", value: 70 },
      { name: "CI/CD", value: 75 },
      { name: "GraphQL", value: 78 },
    ]
  }
];

export function SkillsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      {skillCategories.map((category, idx) => (
        <Panel key={idx} title={category.title}>
          <div>
            {category.skills.map((skill, skillIdx) => (
              <StatBar
                key={skillIdx}
                label={skill.name}
                value={skill.value}
                maxValue={100}
                color={`bg-cyber-${skill.value > 80 ? 'green' : skill.value > 60 ? 'cyan' : skill.value > 40 ? 'blue' : 'purple'}`}
                className="mb-3"
              />
            ))}
          </div>
        </Panel>
      ))}
    </div>
  );
}

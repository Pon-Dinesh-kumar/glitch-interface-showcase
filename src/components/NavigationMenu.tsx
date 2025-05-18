
import React from 'react';
import { Button } from './cyber-ui/Button';
import { Code, Folder, User, Mail, Layers } from 'lucide-react';

interface NavOption {
  id: string;
  label: string;
  icon: React.ReactNode;
}

interface NavigationMenuProps {
  activeSection: string;
  onNavChange: (sectionId: string) => void;
}

export function NavigationMenu({ activeSection, onNavChange }: NavigationMenuProps) {
  const navOptions: NavOption[] = [
    { id: 'about', label: 'ABOUT', icon: <User className="w-4 h-4 mr-2" /> },
    { id: 'skills', label: 'SKILLS', icon: <Code className="w-4 h-4 mr-2" /> },
    { id: 'projects', label: 'PROJECTS', icon: <Folder className="w-4 h-4 mr-2" /> },
    { id: 'contact', label: 'CONTACT', icon: <Mail className="w-4 h-4 mr-2" /> },
    { id: 'stats', label: 'STATS', icon: <Layers className="w-4 h-4 mr-2" /> },
  ];

  return (
    <div className="cyber-panel p-2 mb-6">
      <div className="flex flex-wrap gap-2 justify-center">
        {navOptions.map(option => (
          <Button
            key={option.id}
            variant={activeSection === option.id ? 'accent' : 'default'}
            size="sm"
            className="flex items-center"
            onClick={() => onNavChange(option.id)}
          >
            {option.icon}
            {option.label}
          </Button>
        ))}
      </div>
    </div>
  );
}

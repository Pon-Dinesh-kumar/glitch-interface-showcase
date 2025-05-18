
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outlined' | 'destructive' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
}

export function Button({ 
  variant = 'default', 
  size = 'md', 
  className, 
  children, 
  ...props 
}: ButtonProps) {
  const baseStyles = "cyber-button relative inline-flex items-center justify-center font-display";
  
  const variantStyles = {
    default: "text-cyber-cyan border-cyber-cyan hover:text-white hover:border-white",
    outlined: "text-white border-white hover:text-cyber-cyan hover:border-cyber-cyan",
    destructive: "text-cyber-red border-cyber-red hover:text-white hover:border-cyber-red",
    accent: "text-cyber-green border-cyber-green hover:text-white hover:border-cyber-green",
  };
  
  const sizeStyles = {
    sm: "text-xs px-3 py-1",
    md: "text-sm px-5 py-2",
    lg: "text-base px-6 py-2.5",
  };

  return (
    <button 
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
}

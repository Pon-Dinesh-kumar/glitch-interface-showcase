
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface ProfilePhotoProps {
  imageUrl?: string;
  fallbackText?: string;
  className?: string;
}

export function ProfilePhoto({ 
  imageUrl = "/profile-photo.jpg", 
  fallbackText = "JD",
  className = ""
}: ProfilePhotoProps) {
  return (
    <div className={`flex items-center justify-center w-full h-full ${className}`}>
      <Avatar className="w-4/5 h-4/5 border-4 border-cyber-cyan shadow-lg shadow-cyber-cyan/20">
        <AvatarImage src={imageUrl} alt="Profile Photo" />
        <AvatarFallback className="bg-cyber-dark-blue text-cyber-cyan text-4xl font-display">
          {fallbackText}
        </AvatarFallback>
      </Avatar>
    </div>
  );
}

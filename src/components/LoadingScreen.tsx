
import React, { useState, useEffect } from 'react';
import * as Tone from 'tone';

interface LoadingScreenProps {
  onComplete: () => void;
}

// Create a synth and connect it to the main output (speakers)
const synth = new Tone.Synth().toDestination();
const noise = new Tone.Noise("pink").toDestination();
noise.volume.value = -20;

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [bootMessages, setBootMessages] = useState<string[]>([]);
  const [audioInitialized, setAudioInitialized] = useState(false);
  
  // Messages to display during boot sequence
  const bootSequenceMessages = [
    "Initializing neural interface...",
    "Establishing secure connection...",
    "Loading cybernetic enhancements...",
    "Scanning for malicious software...",
    "Calibrating visual processors...",
    "Generating personality matrix...",
    "Enabling quantum encryption...",
    "Running biometric protocols...",
    "Building virtual environment...",
    "System boot complete."
  ];

  const initializeAudio = () => {
    if (Tone.context.state !== "running") {
      Tone.start();
    }
    setAudioInitialized(true);
  };

  useEffect(() => {
    if (!audioInitialized) return;
    
    // Progress increments
    const timer = setInterval(() => {
      setProgress(prev => {
        const increment = Math.random() * 5 + 2;
        const newProgress = Math.min(prev + increment, 100);
        
        // Play sounds at certain progress points
        if (Math.floor(newProgress / 10) > Math.floor(prev / 10)) {
          synth.triggerAttackRelease("C4", "16n");
        }
        
        // When close to completion, play final sound
        if (newProgress >= 98 && prev < 98) {
          synth.triggerAttackRelease("G4", "8n");
          setTimeout(() => synth.triggerAttackRelease("C5", "4n"), 300);
        }
        
        // When complete, run onComplete after a delay
        if (newProgress >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            noise.stop();
            onComplete();
          }, 1500);
        }
        
        return newProgress;
      });
    }, 200);
    
    // Boot messages
    let messageIndex = 0;
    const messageTimer = setInterval(() => {
      if (messageIndex < bootSequenceMessages.length) {
        setBootMessages(prev => [...prev, bootSequenceMessages[messageIndex]]);
        messageIndex++;
        synth.triggerAttackRelease("E3", "32n");
      } else {
        clearInterval(messageTimer);
      }
    }, 800);
    
    // Start noise
    noise.start();
    
    return () => {
      clearInterval(timer);
      clearInterval(messageTimer);
      noise.stop();
    };
  }, [audioInitialized, onComplete]);

  return (
    <div 
      className="fixed inset-0 z-50 bg-cyber-dark flex flex-col items-center justify-center"
      onClick={initializeAudio}
    >
      {!audioInitialized ? (
        <div className="text-center">
          <h2 className="cyber-heading text-cyber-cyan mb-4 text-xl">BOOT SEQUENCE READY</h2>
          <p className="text-muted-foreground mb-6">Click anywhere to initialize system</p>
          <div className="cyber-button mx-auto cursor-pointer" onClick={initializeAudio}>
            INITIALIZE
          </div>
        </div>
      ) : (
        <>
          <div className="max-w-md w-full px-6">
            <h2 className="cyber-heading text-cyber-cyan mb-8 text-xl text-center">SYSTEM INITIALIZATION</h2>
            
            <div className="w-full h-2 bg-cyber-dark-blue cyber-border mb-6">
              <div 
                className="h-full bg-cyber-cyan"
                style={{ width: `${progress}%` }}
              />
            </div>
            
            <div className="cyber-panel h-60 overflow-y-auto font-mono text-xs">
              <div className="p-3">
                {bootMessages.map((message, index) => (
                  <div key={index} className="mb-2 flex">
                    <span className="text-cyber-green mr-2">&gt;</span>
                    <span className={index === bootMessages.length - 1 ? "text-cyber-cyan" : "text-muted-foreground"}>
                      {message}
                    </span>
                  </div>
                ))}
                <div className="h-4 w-2 bg-cyber-cyan inline-block animate-pulse"></div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <div className="text-sm text-muted-foreground">
                <span className="text-cyber-cyan">{Math.floor(progress)}%</span> complete
              </div>
            </div>
          </div>
        </>
      )}
      
      {/* Scanlines effect */}
      <div className="scanline"></div>
      
      {/* Noise texture */}
      <div className="fixed inset-0 pointer-events-none noise-effect"></div>
    </div>
  );
}

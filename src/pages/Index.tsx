
import React, { useState, useEffect } from 'react';
import { LoadingScreen } from '@/components/LoadingScreen';
import { CharacterModel } from '@/components/CharacterModel';
import { Panel } from '@/components/cyber-ui/Panel';
import { SkillsSection } from '@/components/SkillsSection';
import { ProjectCard } from '@/components/cyber-ui/ProjectCard';
import { ContactSection } from '@/components/ContactSection';
import { CharacterStats } from '@/components/CharacterStats';
import { NavigationMenu } from '@/components/NavigationMenu';
import { Button } from '@/components/cyber-ui/Button';

const projects = [
  {
    title: "Quantum Analytics Dashboard",
    description: "A real-time data visualization platform with cyberpunk-inspired UI for monitoring system performance metrics.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    techStack: [
      { name: "React", value: 90 },
      { name: "D3.js", value: 85 },
      { name: "Node.js", value: 75 }
    ],
    link: "#"
  },
  {
    title: "Neural Network Explorer",
    description: "Interactive 3D visualization tool for exploring neural network architectures and training processes.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    techStack: [
      { name: "Three.js", value: 95 },
      { name: "TypeScript", value: 85 },
      { name: "TensorFlow.js", value: 70 }
    ],
    link: "#"
  },
  {
    title: "Cryptowave Trading Platform",
    description: "Secure cryptocurrency trading platform with advanced charting and automated trading features.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    techStack: [
      { name: "Next.js", value: 88 },
      { name: "Web3.js", value: 80 },
      { name: "Socket.io", value: 75 }
    ],
    link: "#"
  }
];

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    // Create a noise texture image for background effects (creating programmatically instead of static file)
    const createNoiseTexture = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const imgData = ctx.createImageData(64, 64);
        const data = imgData.data;
        
        for (let i = 0; i < data.length; i += 4) {
          const value = Math.floor(Math.random() * 255);
          data[i] = value;
          data[i + 1] = value;
          data[i + 2] = value;
          data[i + 3] = Math.random() * 255;
        }
        
        ctx.putImageData(imgData, 0, 0);
        const dataUrl = canvas.toDataURL();
        
        // Apply to CSS
        const style = document.createElement("style");
        style.innerHTML = `
          .noise-effect {
            background-image: url(${dataUrl});
            background-repeat: repeat;
            opacity: 0.05;
          }
        `;
        document.head.appendChild(style);
      }
    };
    
    createNoiseTexture();
  }, []);

  const socialLinks = [
    { name: "GitHub", url: "https://github.com" },
    { name: "LinkedIn", url: "https://linkedin.com" },
    { name: "Twitter", url: "https://twitter.com" },
    { name: "Portfolio", url: "#" }
  ];

  return (
    <>
      {loading ? (
        <LoadingScreen onComplete={() => setLoading(false)} />
      ) : (
        <div className="min-h-screen bg-cyber-dark cyber-grid relative">
          <div className="container mx-auto py-8 px-4">
            {/* Header */}
            <header className="mb-8">
              <div className="flex flex-col md:flex-row items-center justify-between mb-6">
                <div className="cyber-panel p-4 mb-4 md:mb-0 w-full md:w-auto">
                  <h1 className="cyber-heading text-cyber-cyan text-2xl md:text-3xl tracking-widest">JOHN DOE</h1>
                  <p className="text-muted-foreground">Developer / Entrepreneur</p>
                </div>
                
                <div className="cyber-panel p-2 flex items-center space-x-2 w-full md:w-auto">
                  <div className="text-right pr-4 border-r border-cyber-cyan">
                    <div className="text-xs text-muted-foreground">LEVEL</div>
                    <div className="text-cyber-green font-display text-xl">27</div>
                  </div>
                  <div className="text-right pr-4 border-r border-cyber-cyan">
                    <div className="text-xs text-muted-foreground">SKILL POINTS</div>
                    <div className="text-cyber-cyan font-display text-xl">42</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-muted-foreground">REP</div>
                    <div className="text-cyber-red font-display text-xl">85%</div>
                  </div>
                </div>
              </div>
              
              <NavigationMenu activeSection={activeSection} onNavChange={setActiveSection} />
            </header>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Left Column */}
              <div className="md:col-span-1 space-y-6">
                <Panel title="CHARACTER" className="h-80 mb-6">
                  <CharacterModel />
                </Panel>
                
                <CharacterStats />
                
                <Panel title="SOCIAL LINKS">
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cyber-button text-center text-xs"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                </Panel>
              </div>
              
              {/* Main Content Column */}
              <div className="md:col-span-2">
                {/* About Section */}
                {activeSection === 'about' && (
                  <Panel title="ABOUT ME" className="mb-6">
                    <div className="space-y-4">
                      <p>
                        Welcome to my cyberpunk-inspired portfolio. I'm a developer and entrepreneur with a passion for creating innovative digital experiences that push the boundaries of what's possible on the web.
                      </p>
                      <p>
                        With over 5 years of experience in web development and a background in both front-end and back-end technologies, I specialize in creating immersive, interactive applications that engage users and deliver exceptional performance.
                      </p>
                      <p>
                        My approach combines cutting-edge technologies with creative design thinking to solve complex problems and build solutions that stand out in today's digital landscape.
                      </p>
                      
                      <div className="cyber-panel p-4 border-l-4 border-cyber-cyan bg-opacity-20 mt-4">
                        <h3 className="text-cyber-cyan font-display uppercase mb-2">My Mission</h3>
                        <p className="text-sm text-muted-foreground">
                          To create innovative digital experiences that blend artistry with functionality, pushing the boundaries of web technology while delivering exceptional user experiences that leave a lasting impression.
                        </p>
                      </div>
                    </div>
                  </Panel>
                )}
                
                {/* Skills Section */}
                {activeSection === 'skills' && <SkillsSection />}
                
                {/* Projects Section */}
                {activeSection === 'projects' && (
                  <div className="space-y-6 mb-6">
                    <Panel title="PROJECTS">
                      <div className="space-y-2 mb-4">
                        <p className="text-sm text-muted-foreground">
                          Browse through my featured projects showcasing my expertise in web development, interactive design, and creative problem-solving.
                        </p>
                      </div>
                    </Panel>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {projects.map((project, idx) => (
                        <ProjectCard
                          key={idx}
                          title={project.title}
                          description={project.description}
                          image={project.image}
                          techStack={project.techStack}
                          link={project.link}
                        />
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Contact Section */}
                {activeSection === 'contact' && <ContactSection />}
                
                {/* Stats Section */}
                {activeSection === 'stats' && (
                  <Panel title="DETAILED STATS" className="mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="cyber-panel p-4 text-center">
                        <div className="text-xs uppercase text-muted-foreground mb-1">Front-End</div>
                        <div className="text-cyber-cyan text-4xl font-display">92%</div>
                        <div className="text-xs text-muted-foreground mt-1">Proficiency</div>
                      </div>
                      <div className="cyber-panel p-4 text-center">
                        <div className="text-xs uppercase text-muted-foreground mb-1">Back-End</div>
                        <div className="text-cyber-green text-4xl font-display">85%</div>
                        <div className="text-xs text-muted-foreground mt-1">Proficiency</div>
                      </div>
                      <div className="cyber-panel p-4 text-center">
                        <div className="text-xs uppercase text-muted-foreground mb-1">DevOps</div>
                        <div className="text-cyber-purple text-4xl font-display">78%</div>
                        <div className="text-xs text-muted-foreground mt-1">Proficiency</div>
                      </div>
                      <div className="cyber-panel p-4 text-center">
                        <div className="text-xs uppercase text-muted-foreground mb-1">UI/UX</div>
                        <div className="text-cyber-blue text-4xl font-display">88%</div>
                        <div className="text-xs text-muted-foreground mt-1">Proficiency</div>
                      </div>
                    </div>
                    
                    <div className="cyber-panel p-4">
                      <h3 className="cyber-heading text-cyber-cyan mb-2">EXPERIENCE TIMELINE</h3>
                      <div className="space-y-4">
                        <div className="border-l-2 border-cyber-cyan pl-4 pb-4 relative">
                          <div className="absolute w-3 h-3 bg-cyber-cyan rounded-full -left-[7px] top-1"></div>
                          <h4 className="text-cyber-yellow font-display">Senior Developer</h4>
                          <p className="text-xs text-muted-foreground">TechCorp Inc. • 2021 - Present</p>
                          <p className="text-sm mt-1">Leading development of next-gen web applications</p>
                        </div>
                        <div className="border-l-2 border-cyber-cyan pl-4 pb-4 relative">
                          <div className="absolute w-3 h-3 bg-cyber-cyan rounded-full -left-[7px] top-1"></div>
                          <h4 className="text-cyber-green font-display">Frontend Developer</h4>
                          <p className="text-xs text-muted-foreground">WebSolutions • 2019 - 2021</p>
                          <p className="text-sm mt-1">Built responsive web applications using React</p>
                        </div>
                        <div className="border-l-2 border-cyber-cyan pl-4 relative">
                          <div className="absolute w-3 h-3 bg-cyber-cyan rounded-full -left-[7px] top-1"></div>
                          <h4 className="text-cyber-blue font-display">Junior Developer</h4>
                          <p className="text-xs text-muted-foreground">StartupX • 2017 - 2019</p>
                          <p className="text-sm mt-1">Developed and maintained client websites</p>
                        </div>
                      </div>
                    </div>
                  </Panel>
                )}
              </div>
            </div>
            
            {/* Footer */}
            <footer className="mt-12 cyber-panel p-4">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-muted-foreground text-sm mb-4 md:mb-0">
                  © 2025 John Doe • <span className="text-cyber-cyan">Developer</span> / <span className="text-cyber-green">Entrepreneur</span>
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="text-cyber-cyan hover:text-cyber-yellow transition-colors">Privacy</a>
                  <a href="#" className="text-cyber-cyan hover:text-cyber-yellow transition-colors">Terms</a>
                </div>
              </div>
            </footer>
          </div>
          
          {/* Visual effects */}
          <div className="scanline"></div>
          <div className="fixed inset-0 pointer-events-none noise-effect"></div>
          <div className="screen-effect"></div>
        </div>
      )}
    </>
  );
};

export default Index;

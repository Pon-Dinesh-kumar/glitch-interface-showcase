
import React, { useState } from 'react';
import { Panel } from './cyber-ui/Panel';
import { Button } from './cyber-ui/Button';
import { useToast } from '@/hooks/use-toast';
import { Check } from 'lucide-react';

export function ContactSection() {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent",
        description: "Your message has been received. I'll respond shortly.",
        variant: "default",
      });
      setFormState({ name: '', email: '', message: '' });
      setSubmitting(false);
    }, 1500);
  };

  return (
    <Panel title="CONTACT" className="mb-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-xs uppercase font-cyber text-muted-foreground mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            required
            className="w-full bg-cyber-dark-blue cyber-border p-2 text-white focus:border-cyber-cyan focus:outline-none"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-xs uppercase font-cyber text-muted-foreground mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            required
            className="w-full bg-cyber-dark-blue cyber-border p-2 text-white focus:border-cyber-cyan focus:outline-none"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-xs uppercase font-cyber text-muted-foreground mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formState.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full bg-cyber-dark-blue cyber-border p-2 text-white focus:border-cyber-cyan focus:outline-none"
          />
        </div>
        
        <Button 
          type="submit" 
          disabled={submitting}
          className="w-full"
        >
          {submitting ? "SENDING..." : "SEND MESSAGE"}
        </Button>
      </form>
    </Panel>
  );
}

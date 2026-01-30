import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import Confetti from './Confetti';
import SnowEffect from './SnowEffect';
import { cn } from '@/lib/utils';

interface SurpriseEndingProps {
  onRestart: () => void;
}

const revealMessages = [
  "You're annoying.",
  "You're dramatic.",
  "You're impossible.",
  "But you're mine to keep.",
];

const SurpriseEnding = ({ onRestart }: SurpriseEndingProps) => {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [showFinal, setShowFinal] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    revealMessages.forEach((_, index) => {
      setTimeout(() => {
        setVisibleMessages((prev) => [...prev, index]);
      }, (index + 1) * 1200);
    });

    setTimeout(() => {
      setShowFinal(true);
      setShowConfetti(true);
    }, revealMessages.length * 1200 + 1000);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <SnowEffect />
      <Confetti isActive={showConfetti} />
      
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[150px]" />
      
      <div className="relative z-10 text-center space-y-8 max-w-md">
        {/* Plot Twist Header */}
        <div className="animate-bounce-in">
          <p className="text-sm uppercase tracking-widest text-primary mb-2">Plot Twist Ending</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-glow">
            💙 The Final Truth
          </h2>
        </div>

        {/* Narrator intro */}
        <p className="narrator-text text-center animate-slide-up">
          "After fights, silence, drama, and chaos… one truth survived."
        </p>

        {/* Reveal messages */}
        <div className="space-y-4 py-6">
          {revealMessages.map((message, index) => (
            <p
              key={index}
              className={cn(
                'text-xl md:text-2xl font-display font-semibold opacity-0',
                visibleMessages.includes(index) && 'animate-typewriter',
                index === revealMessages.length - 1 && 'text-primary text-glow'
              )}
            >
              {message}
            </p>
          ))}
        </div>

        {/* Final message */}
        {showFinal && (
          <div className="glass-card-glow p-8 animate-fade-in-scale">
            <p className="text-lg md:text-xl font-medium text-foreground leading-relaxed">
              Happy Valentine's Day to the most{' '}
              <span className="text-primary font-bold">irritatingly important</span>{' '}
              person in my story.
            </p>
            <p className="text-4xl mt-4">💙✨</p>
          </div>
        )}

        {/* Action buttons */}
        {showFinal && (
          <div className="flex flex-col gap-3 pt-4 animate-slide-up delay-500">
            <Button
              onClick={onRestart}
              className="bg-gradient-sky text-primary-foreground font-semibold px-8 py-4 rounded-full"
            >
              Bond Continues → 
            </Button>
            <Button
              variant="outline"
              className="border-primary/50 text-foreground font-medium rounded-full"
            >
              Next Season Loading... 📺
            </Button>
            <p className="text-sm text-muted-foreground mt-2">
              Still Stuck With Me 😏
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SurpriseEnding;

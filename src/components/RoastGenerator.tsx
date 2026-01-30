import { useState } from 'react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const roasts = [
  "You're not lazy — you're on permanent power-saving mode 🔋",
  "NASA should study how you escape responsibility 🚀",
  "Emotional stability left the chat 👋",
  "Overreacting — but in HD 📺",
  "You start fights and forget why 🤔",
  "Limited edition — thankfully only one made 🏷️",
  "Dramatic enough to need background music 🎻",
  "Your excuse game is stronger than your memory 💪",
  "You argue with facts like they're optional 📋",
  "Professional procrastinator with no degree required 🎓",
  "Your vibes are an acquired taste nobody asked for 🍋",
  "Living proof that chaos can have a human form 🌪️",
];

const buttonLabels = [
  "Roast Him 🔥",
  "Emotional Damage Mode 💥",
  "Reality Check Button ✅",
];

const RoastGenerator = () => {
  const [currentRoast, setCurrentRoast] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [buttonLabel, setButtonLabel] = useState(buttonLabels[0]);

  const generateRoast = () => {
    setIsAnimating(true);
    
    // Random button label
    setButtonLabel(buttonLabels[Math.floor(Math.random() * buttonLabels.length)]);
    
    // Random roast
    const randomRoast = roasts[Math.floor(Math.random() * roasts.length)];
    
    setTimeout(() => {
      setCurrentRoast(randomRoast);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="glass-card-glow p-6 space-y-6">
      <div className="text-center">
        <h3 className="font-display text-2xl font-bold text-foreground mb-2">
          🔥 Sibling Roast Generator
        </h3>
        <p className="text-sm text-muted-foreground">
          Brutally honest. Sibling-tested. Parent-approved (maybe).
        </p>
      </div>

      <div className="flex justify-center">
        <Button
          onClick={generateRoast}
          className={cn(
            'roast-button font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 relative z-10',
            isAnimating && 'animate-shake'
          )}
        >
          {buttonLabel}
        </Button>
      </div>

      {currentRoast && (
        <div className="roast-result p-6 rounded-2xl animate-fade-in-scale">
          <p className="text-lg text-center font-medium text-foreground">
            {currentRoast}
          </p>
        </div>
      )}

      <p className="text-xs text-center text-muted-foreground italic">
        ⚠️ Side effects may include: ego damage, introspection, and silent treatment
      </p>
    </div>
  );
};

export default RoastGenerator;

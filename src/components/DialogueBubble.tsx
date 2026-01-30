import { useState } from 'react';
import { cn } from '@/lib/utils';

interface DialogueBubbleProps {
  text: string;
  position: 'left' | 'right';
  delay?: number;
  revealable?: boolean;
}

const DialogueBubble = ({ text, position, delay = 0, revealable = false }: DialogueBubbleProps) => {
  const [revealed, setRevealed] = useState(!revealable);

  return (
    <div
      className={cn(
        'max-w-[80%] animate-slide-up',
        position === 'left' ? 'self-start' : 'self-end',
        revealable && 'cursor-pointer'
      )}
      style={{ animationDelay: `${delay}ms` }}
      onClick={() => revealable && setRevealed(true)}
    >
      <div
        className={cn(
          'transition-all duration-300',
          position === 'left' ? 'bubble-left' : 'bubble-right',
          revealable && !revealed && 'blur-sm opacity-60'
        )}
      >
        <p className="text-sm md:text-base">{revealed ? text : 'Tap to reveal...'}</p>
      </div>
      {revealable && !revealed && (
        <p className="text-xs text-muted-foreground mt-1 text-center">👆 Tap to reveal</p>
      )}
    </div>
  );
};

export default DialogueBubble;

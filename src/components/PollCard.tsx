import { useState } from 'react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const PollCard = () => {
  const [voted, setVoted] = useState(false);
  const [choice, setChoice] = useState<'me' | 'them' | null>(null);

  const handleVote = (option: 'me' | 'them') => {
    setChoice(option);
    setVoted(true);
  };

  return (
    <div className="glass-card p-6 space-y-4">
      <h3 className="font-display text-xl font-bold text-foreground text-center">
        🗳️ The Ultimate Question
      </h3>
      <p className="text-center text-muted-foreground text-sm">
        Who was right during the fight?
      </p>

      {!voted ? (
        <div className="flex gap-4 justify-center">
          <Button
            onClick={() => handleVote('me')}
            className="bg-gradient-sky text-primary-foreground font-semibold px-6 py-3 rounded-full"
          >
            Me 😎
          </Button>
          <Button
            onClick={() => handleVote('them')}
            variant="outline"
            className="border-primary/50 text-foreground font-semibold px-6 py-3 rounded-full"
          >
            Them 🤔
          </Button>
        </div>
      ) : (
        <div className="text-center animate-bounce-in">
          <div className="glass-card-glow p-6 inline-block">
            <p className="text-2xl mb-2">📊</p>
            <p className="text-lg font-bold text-primary">
              {choice === 'me' ? 'Obviously correct! 100% voted you.' : 'Nice try, but still Me 😏'}
            </p>
            <p className="text-sm text-muted-foreground mt-2 italic">
              "Poll results may be slightly biased"
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PollCard;

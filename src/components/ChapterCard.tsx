import { useState } from 'react';
import { cn } from '@/lib/utils';
import NarratorText from './NarratorText';
import MemeCaption from './MemeCaption';
import DialogueBubble from './DialogueBubble';
import Confetti from './Confetti';
import { Button } from './ui/button';
import { Slider } from './ui/slider';
import { Progress } from './ui/progress';

interface ChapterCardProps {
  chapter: number;
  title: string;
  date: string;
  narratorLines: string[];
  memeCaptions: string[];
  dialogues?: { text: string; position: 'left' | 'right' }[];
  interactive?: 'argument-meter' | 'no-talking-streak' | 'tap-to-forgive' | 'bond-strength';
}

const ChapterCard = ({
  chapter,
  title,
  date,
  narratorLines,
  memeCaptions,
  dialogues,
  interactive,
}: ChapterCardProps) => {
  const [argumentLevel, setArgumentLevel] = useState([50]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [forgiven, setForgiven] = useState(false);
  const [bondStrength] = useState(85);
  const [silentDays] = useState(47);

  const handleForgive = () => {
    setForgiven(true);
    setShowConfetti(true);
  };

  return (
    <div className="chapter-card">
      <Confetti isActive={showConfetti} onComplete={() => setShowConfetti(false)} />
      
      {/* Chapter Header */}
      <div className="flex items-center gap-3 mb-4">
        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 text-primary font-bold text-sm">
          {chapter}
        </span>
        <div>
          <p className="text-xs text-muted-foreground uppercase tracking-wider">{date}</p>
          <h3 className="font-display text-xl font-bold text-foreground">{title}</h3>
        </div>
      </div>

      {/* Narrator Section */}
      <div className="py-4 border-y border-border/50">
        <p className="text-xs uppercase tracking-widest text-primary mb-3">📖 Narrator</p>
        <NarratorText lines={narratorLines} />
      </div>

      {/* Meme Captions */}
      <div className="flex flex-wrap gap-2 py-4">
        {memeCaptions.map((caption, index) => (
          <MemeCaption key={index} text={caption} delay={index * 200 + 1000} />
        ))}
      </div>

      {/* Dialogues */}
      {dialogues && dialogues.length > 0 && (
        <div className="flex flex-col gap-3 py-4 border-t border-border/50">
          <p className="text-xs uppercase tracking-widest text-primary mb-2">💬 Dialogue</p>
          {dialogues.map((dialogue, index) => (
            <DialogueBubble
              key={index}
              text={dialogue.text}
              position={dialogue.position}
              delay={index * 300}
              revealable
            />
          ))}
        </div>
      )}

      {/* Interactive Elements */}
      {interactive && (
        <div className="py-4 border-t border-border/50">
          {interactive === 'argument-meter' && (
            <div className="space-y-4">
              <p className="text-sm font-semibold text-foreground">🔥 Argument Intensity Meter</p>
              <Slider
                value={argumentLevel}
                onValueChange={setArgumentLevel}
                max={100}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>😤 Mild Disagreement</span>
                <span>🌋 Maximum Chaos</span>
              </div>
              <p className="text-center text-sm">
                Current Level: <span className="text-primary font-bold">{argumentLevel[0]}%</span>
              </p>
            </div>
          )}

          {interactive === 'no-talking-streak' && (
            <div className="space-y-4">
              <p className="text-sm font-semibold text-foreground">🤫 Silent Treatment Counter</p>
              <div className="glass-card-glow p-6 text-center rounded-xl">
                <p className="text-5xl font-bold text-primary mb-2">{silentDays}</p>
                <p className="text-sm text-muted-foreground">Days of Strategic Silence</p>
                <p className="text-xs mt-2 text-muted-foreground italic">
                  "Some say the Wi-Fi felt the tension too"
                </p>
              </div>
            </div>
          )}

          {interactive === 'tap-to-forgive' && (
            <div className="space-y-4 text-center">
              <p className="text-sm font-semibold text-foreground">💙 Reconciliation Protocol</p>
              {!forgiven ? (
                <Button
                  onClick={handleForgive}
                  className="bg-gradient-sky text-primary-foreground font-semibold px-8 py-3 rounded-full animate-pulse-glow"
                >
                  Tap to Forgive 💙
                </Button>
              ) : (
                <div className="animate-bounce-in">
                  <p className="text-2xl mb-2">🎉</p>
                  <p className="text-lg font-semibold text-primary">Bond Restored!</p>
                  <p className="text-sm text-muted-foreground">Patch Update Successfully Installed</p>
                </div>
              )}
            </div>
          )}

          {interactive === 'bond-strength' && (
            <div className="space-y-4">
              <p className="text-sm font-semibold text-foreground">💪 Bond Strength Indicator</p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Connection Level</span>
                  <span className="text-primary font-bold">{bondStrength}%</span>
                </div>
                <Progress value={bondStrength} className="h-3 progress-glow" />
              </div>
              <p className="text-xs text-center text-muted-foreground italic">
                "Uninstall button not found. You're stuck."
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ChapterCard;

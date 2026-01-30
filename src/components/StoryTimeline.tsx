import { useState } from 'react';
import ChapterCard from './ChapterCard';
import RoastGenerator from './RoastGenerator';
import PollCard from './PollCard';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';
import SnowEffect from './SnowEffect';

interface StoryTimelineProps {
  onBack: () => void;
  onComplete: () => void;
}

const chapters = [
  {
    chapter: 1,
    title: 'The Origin Story',
    date: 'January 2024',
    narratorLines: [
      'In a peaceful timeline… two humans began a bond filled with chaos, snacks, and unnecessary arguments.',
      "No one knew this friendship would survive mood swings, ego clashes, and Wi-Fi outages.",
    ],
    memeCaptions: ['POV: Chaos begins', 'Stability not found', 'Friendship beta version launched'],
    dialogues: [
      { text: "This is going to be interesting...", position: 'left' as const },
      { text: "Define 'interesting'", position: 'right' as const },
    ],
  },
  {
    chapter: 2,
    title: 'The Legendary Fight',
    date: 'April 2025',
    narratorLines: [
      'And then… disaster struck.',
      'Words were spoken. Eyebrows were raised. Messages were typed… deleted… typed again.',
      'Historians still debate who started it.',
    ],
    memeCaptions: [
      'Sponsored by misunderstanding',
      'Nobody won, volume was high',
      'Confidence level: wrong but loud',
      'Argument started with topic A → ended with 2012 history',
    ],
    dialogues: [
      { text: "I'm not arguing — this is loud explaining.", position: 'left' as const },
      { text: "That's literally arguing.", position: 'right' as const },
    ],
    interactive: 'argument-meter' as const,
  },
  {
    chapter: 3,
    title: 'The Silent Era',
    date: 'July 2025',
    narratorLines: [
      'Communication dropped to zero.',
      'Seen messages… unanswered.',
      'The bond entered airplane mode.',
    ],
    memeCaptions: [
      'Seen ✔ Delivered ✔ Peace ❌',
      'Reply speed: government office',
      'Emotional distance: international roaming',
    ],
    interactive: 'no-talking-streak' as const,
  },
  {
    chapter: 4,
    title: 'Patch Up Arc',
    date: 'December 2025',
    narratorLines: [
      'Against all odds… logic returned.',
      'Egos sat down. Hearts rebooted. Update successful.',
    ],
    memeCaptions: [
      'Patch update installed',
      'Bug fixes: ego reduced',
      'System restored after dramatic shutdown',
    ],
    dialogues: [
      { text: "We good?", position: 'left' as const },
      { text: "Define good.", position: 'right' as const },
      { text: "...we're good.", position: 'left' as const },
    ],
    interactive: 'tap-to-forgive' as const,
  },
  {
    chapter: 5,
    title: 'Still Continuing Bond',
    date: 'Present Day',
    narratorLines: ['Not perfect. Not peaceful. Not normal. But still unbreakable.'],
    memeCaptions: [
      'Still friends despite mutual annoyance',
      'Uninstall impossible',
      'Bond status: cannot be deleted by user',
    ],
    dialogues: [
      { text: "Be serious.", position: 'left' as const },
      { text: "No.", position: 'right' as const },
    ],
    interactive: 'bond-strength' as const,
  },
];

const StoryTimeline = ({ onBack, onComplete }: StoryTimelineProps) => {
  const [currentChapter, setCurrentChapter] = useState(0);

  const goNext = () => {
    if (currentChapter < chapters.length - 1) {
      setCurrentChapter((prev) => prev + 1);
    } else {
      onComplete();
    }
  };

  const goPrev = () => {
    if (currentChapter > 0) {
      setCurrentChapter((prev) => prev - 1);
    }
  };

  const chapter = chapters[currentChapter];

  return (
    <div className="min-h-screen p-4 pb-24 relative">
      <SnowEffect />
      
      {/* Header */}
      <div className="flex items-center justify-between mb-6 relative z-10">
        <Button variant="ghost" size="icon" onClick={onBack} className="text-foreground">
          <Home className="w-5 h-5" />
        </Button>
        <div className="text-center">
          <p className="text-xs text-muted-foreground uppercase tracking-widest">
            Chapter {currentChapter + 1} of {chapters.length}
          </p>
        </div>
        <div className="w-10" />
      </div>

      {/* Progress bar */}
      <div className="flex gap-1 mb-6 px-2">
        {chapters.map((_, index) => (
          <div
            key={index}
            className={`h-1 flex-1 rounded-full transition-all duration-500 ${
              index <= currentChapter ? 'bg-primary' : 'bg-secondary'
            }`}
          />
        ))}
      </div>

      {/* Chapter content */}
      <div className="relative z-10 space-y-6">
        <ChapterCard key={currentChapter} {...chapter} />

        {/* Extra content for specific chapters */}
        {currentChapter === 1 && <PollCard />}
        {currentChapter === 4 && <RoastGenerator />}
      </div>

      {/* Navigation */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background via-background to-transparent">
        <div className="flex gap-4 max-w-md mx-auto">
          <Button
            variant="outline"
            onClick={goPrev}
            disabled={currentChapter === 0}
            className="flex-1 border-primary/50 text-foreground rounded-full py-3"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Previous
          </Button>
          <Button
            onClick={goNext}
            className="flex-1 bg-gradient-sky text-primary-foreground font-semibold rounded-full py-3"
          >
            {currentChapter === chapters.length - 1 ? 'Finale' : 'Next'}
            <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StoryTimeline;

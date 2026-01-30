import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface NarratorTextProps {
  lines: string[];
  className?: string;
}

const NarratorText = ({ lines, className }: NarratorTextProps) => {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);

  useEffect(() => {
    setVisibleLines([]);
    lines.forEach((_, index) => {
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, index]);
      }, (index + 1) * 800);
    });
  }, [lines]);

  return (
    <div className={cn('space-y-4', className)}>
      {lines.map((line, index) => (
        <p
          key={index}
          className={cn(
            'narrator-text opacity-0',
            visibleLines.includes(index) && 'animate-typewriter'
          )}
          style={{ animationDelay: '0ms' }}
        >
          "{line}"
        </p>
      ))}
    </div>
  );
};

export default NarratorText;

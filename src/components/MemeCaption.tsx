import { cn } from '@/lib/utils';

interface MemeCaptionProps {
  text: string;
  className?: string;
  delay?: number;
}

const MemeCaption = ({ text, className, delay = 0 }: MemeCaptionProps) => {
  return (
    <span
      className={cn('meme-caption animate-bounce-in', className)}
      style={{ animationDelay: `${delay}ms` }}
    >
      {text}
    </span>
  );
};

export default MemeCaption;

import { Button } from './ui/button';
import SnowEffect from './SnowEffect';

interface WelcomeScreenProps {
  onStart: () => void;
}

const WelcomeScreen = ({ onStart }: WelcomeScreenProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <SnowEffect />
      
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-sky-light/10 rounded-full blur-[80px]" />
      
      <div className="relative z-10 text-center space-y-8 max-w-md">
        {/* Decorative element */}
        <div className="animate-float">
          <span className="text-6xl">💙</span>
        </div>

        {/* Title */}
        <div className="space-y-3">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground text-glow leading-tight">
            The Legendary Story of Us
          </h1>
          <p className="text-lg text-muted-foreground">
            A Comedy Drama Since January 2024
          </p>
        </div>

        {/* Tagline */}
        <div className="glass-card p-4 inline-block">
          <p className="text-sm text-ice-muted italic">
            "Two humans. Infinite chaos. Zero regrets."
          </p>
        </div>

        {/* CTA Button */}
        <Button
          onClick={onStart}
          size="lg"
          className="bg-gradient-sky text-primary-foreground font-bold text-lg px-10 py-6 rounded-full shadow-glow hover:scale-105 transition-transform duration-300"
        >
          Start the Drama 🎬
        </Button>

        {/* Hint */}
        <p className="text-xs text-muted-foreground animate-pulse">
          Tap anywhere to begin your journey...
        </p>
      </div>
    </div>
  );
};

export default WelcomeScreen;

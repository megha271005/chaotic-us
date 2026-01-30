import { useState } from 'react';
import WelcomeScreen from '@/components/WelcomeScreen';
import StoryTimeline from '@/components/StoryTimeline';
import SurpriseEnding from '@/components/SurpriseEnding';

type Screen = 'welcome' | 'story' | 'ending';

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');

  return (
    <div className="min-h-screen">
      {currentScreen === 'welcome' && (
        <WelcomeScreen onStart={() => setCurrentScreen('story')} />
      )}
      {currentScreen === 'story' && (
        <StoryTimeline
          onBack={() => setCurrentScreen('welcome')}
          onComplete={() => setCurrentScreen('ending')}
        />
      )}
      {currentScreen === 'ending' && (
        <SurpriseEnding onRestart={() => setCurrentScreen('welcome')} />
      )}
    </div>
  );
};

export default Index;

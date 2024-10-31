import { useState } from 'react';
import { EntranceAnimation } from './components/EntranceAnimation';
import { MainContent } from './components/MainContent';
import { Cursor } from './components/Cursor';
import { Background } from './components/Background';
import { Navigation } from './components/Navigation';
import { Header } from './components/Header';

function App() {
  const [showAnimation, setShowAnimation] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Cursor />
      <Background />
      <Header onMenuClick={() => setIsMenuOpen(true)} />
      <Navigation isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      {showAnimation && (
        <EntranceAnimation onComplete={() => setShowAnimation(false)} />
      )}
      <MainContent />
    </>
  );
}

export default App;
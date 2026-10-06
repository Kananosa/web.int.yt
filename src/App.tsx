import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WorkflowSection } from './components/WorkflowSection';
import { FeaturesGrid } from './components/FeaturesGrid';
import { BottomCTA } from './components/BottomCTA';
import { Footer } from './components/Footer';
import { DeployModal } from './components/DeployModal';
import { AuthModal } from './components/AuthModal';

export const App: React.FC = () => {
  const [isDeployModalOpen, setIsDeployModalOpen] = useState(false);
  const [authModalState, setAuthModalState] = useState<{ isOpen: boolean; mode: 'signup' | 'login' }>({
    isOpen: false,
    mode: 'signup',
  });

  const handleOpenSignUp = () => {
    setAuthModalState({ isOpen: true, mode: 'signup' });
  };

  const handleOpenPanel = () => {
    setAuthModalState({ isOpen: true, mode: 'login' });
  };

  const handleScrollToWorkflow = () => {
    window.scrollTo({
      top: 950,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen w-full relative flex flex-col items-center bg-gradient-to-b from-[#080B14] via-[#080B14] to-[#18409C] selection:bg-[#2A64E7] selection:text-white font-sans">
      {/* Floating Navbar Header */}
      <Navbar
        onSignUpClick={handleOpenSignUp}
        onOpenPanelClick={handleOpenPanel}
      />

      {/* Main Content Sections */}
      <main className="w-full flex flex-col items-center flex-grow">
        <Hero
          onDeployClick={() => setIsDeployModalOpen(true)}
          onHowItWorksClick={handleScrollToWorkflow}
        />

        <WorkflowSection />

        <FeaturesGrid />

        <BottomCTA onDeployClick={() => setIsDeployModalOpen(true)} />
      </main>

      {/* Bottom Footer */}
      <Footer />

      {/* Interactive Modals */}
      <DeployModal
        isOpen={isDeployModalOpen}
        onClose={() => setIsDeployModalOpen(false)}
      />

      <AuthModal
        isOpen={authModalState.isOpen}
        mode={authModalState.mode}
        onClose={() => setAuthModalState((prev) => ({ ...prev, isOpen: false }))}
        onSwitchMode={(mode) => setAuthModalState({ isOpen: true, mode })}
      />
    </div>
  );
};

export default App;

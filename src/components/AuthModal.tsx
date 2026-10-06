import React, { useState } from 'react';
import { SignUpIcon, OpenPanelIcon } from './icons/HeaderIcons';

interface AuthModalProps {
  isOpen: boolean;
  mode: 'signup' | 'login';
  onClose: () => void;
  onSwitchMode: (mode: 'signup' | 'login') => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  mode,
  onClose,
  onSwitchMode
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div className="w-full max-w-[440px] bg-[#0C1226] border border-white/15 rounded-[24px] shadow-2xl p-6 sm:p-8 text-white relative">
        <button
          onClick={onClose}
          type="button"
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 hover:text-white transition-colors cursor-pointer"
        >
          ✕
        </button>

        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
            {mode === 'signup' ? <SignUpIcon size={20} /> : <OpenPanelIcon size={20} />}
          </div>
          <h3 className="text-[22px] font-bold text-white">
            {mode === 'signup' ? 'Create an Account' : 'Open Control Panel'}
          </h3>
        </div>

        <p className="text-[14px] text-white/60 mb-6">
          {mode === 'signup'
            ? 'Sign up to deploy static sites to the global edge network in seconds.'
            : 'Access your connected repositories, subdomains, and real-time logs.'}
        </p>

        {submitted ? (
          <div className="p-6 rounded-xl bg-blue-500/10 border border-blue-500/30 text-center space-y-2">
            <div className="text-2xl">✨</div>
            <div className="text-[16px] font-bold text-white">
              {mode === 'signup' ? 'Welcome to Intent Web!' : 'Logging in...'}
            </div>
            <div className="text-[13px] text-white/60">Redirecting to your dashboard...</div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[12px] font-bold text-white/80 uppercase tracking-wider mb-1">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg bg-[#080d1c] border border-white/15 text-white text-[14px] focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="developer@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-[12px] font-bold text-white/80 uppercase tracking-wider mb-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg bg-[#080d1c] border border-white/15 text-white text-[14px] focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="••••••••••••"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-[#2A64E7] hover:bg-[#3873f7] active:bg-[#2052c4] text-white font-semibold text-[15px] transition-colors shadow-md mt-2 cursor-pointer"
            >
              {mode === 'signup' ? 'Create Account' : 'Sign In'}
            </button>

            <div className="text-center pt-2">
              <button
                type="button"
                onClick={() => onSwitchMode(mode === 'signup' ? 'login' : 'signup')}
                className="text-[13px] text-blue-400 hover:text-blue-300 underline cursor-pointer"
              >
                {mode === 'signup'
                  ? 'Already have an account? Open Panel'
                  : "Don't have an account yet? Sign up"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

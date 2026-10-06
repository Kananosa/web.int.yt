import React, { useState } from 'react';
import { ArrowRightIcon } from './icons/CardIcons';

interface DeployModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DeployModal: React.FC<DeployModalProps> = ({ isOpen, onClose }) => {
  const [siteName, setSiteName] = useState('My Portfolio');
  const [subdomain, setSubdomain] = useState('my-portfolio');
  const [repoUrl, setRepoUrl] = useState('https://github.com/tastejs/todomvc');
  const [branch, setBranch] = useState('main');
  const [buildCommand, setBuildCommand] = useState('npm run build');
  const [publishDir, setPublishDir] = useState('dist');
  
  const [deploying, setDeploying] = useState(false);
  const [deployProgress, setDeployProgress] = useState(0);
  const [deployLogs, setDeployLogs] = useState<string[]>([]);
  const [deployFinished, setDeployFinished] = useState(false);

  if (!isOpen) return null;

  const handleStartDeploy = (e: React.FormEvent) => {
    e.preventDefault();
    setDeploying(true);
    setDeployProgress(10);
    setDeployLogs(['[build] Initializing isolated sandboxed worker...']);

    setTimeout(() => {
      setDeployProgress(35);
      setDeployLogs((prev) => [...prev, `[git] Cloning ${repoUrl} (branch: ${branch})...`]);
    }, 700);

    setTimeout(() => {
      setDeployProgress(65);
      setDeployLogs((prev) => [...prev, `[build] Running command: "${buildCommand}"...`, `[dist] Output directory detected: ./${publishDir}`]);
    }, 1500);

    setTimeout(() => {
      setDeployProgress(90);
      setDeployLogs((prev) => [...prev, `[edge] Syncing assets to global edge network...`, `[ssl] Automatic SSL certificate provisioned.`]);
    }, 2300);

    setTimeout(() => {
      setDeployProgress(100);
      setDeployLogs((prev) => [...prev, `[release] Atomic symlink switched. Deploy successful! 🚀`]);
      setDeployFinished(true);
    }, 3100);
  };

  const handleReset = () => {
    setDeploying(false);
    setDeployProgress(0);
    setDeployLogs([]);
    setDeployFinished(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div className="w-full max-w-[680px] bg-[#0C1226] border border-white/15 rounded-[24px] shadow-2xl p-6 sm:p-8 text-white relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 hover:text-white transition-colors cursor-pointer"
        >
          ✕
        </button>

        <h3 className="text-[24px] font-bold text-white mb-2">Deploy a New Static Website</h3>
        <p className="text-[14px] text-white/60 mb-6">
          Connect your repository and Intent Web builds, optimizes, and serves your site instantly.
        </p>

        {!deploying ? (
          <form onSubmit={handleStartDeploy} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[12px] font-bold text-white/80 uppercase tracking-wider mb-1">
                  Site Name *
                </label>
                <input
                  type="text"
                  value={siteName}
                  onChange={(e) => setSiteName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg bg-[#080d1c] border border-white/15 text-white text-[14px] focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="e.g. My Portfolio"
                  required
                />
                <span className="text-[11px] text-white/40 mt-1 block">Friendly label for your site</span>
              </div>

              <div>
                <label className="block text-[12px] font-bold text-white/80 uppercase tracking-wider mb-1">
                  Subdomain *
                </label>
                <input
                  type="text"
                  value={subdomain}
                  onChange={(e) => setSubdomain(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ''))}
                  className="w-full px-4 py-2.5 rounded-lg bg-[#080d1c] border border-white/15 text-white text-[14px] focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="e.g. my-portfolio"
                  required
                />
                <span className="text-[11px] text-blue-400 mt-1 block truncate">
                  Live URL: https://{subdomain || 'your-site'}.web.int.yt
                </span>
              </div>
            </div>

            <div>
              <label className="block text-[12px] font-bold text-white/80 uppercase tracking-wider mb-1">
                Git Repository URL *
              </label>
              <input
                type="text"
                value={repoUrl}
                onChange={(e) => setRepoUrl(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg bg-[#080d1c] border border-white/15 text-white text-[14px] focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="https://github.com/username/repository"
                required
              />
              <span className="text-[11px] text-white/40 mt-1 block">Public or private GitHub repository</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-[12px] font-bold text-white/80 uppercase tracking-wider mb-1">
                  Branch *
                </label>
                <input
                  type="text"
                  value={branch}
                  onChange={(e) => setBranch(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg bg-[#080d1c] border border-white/15 text-white text-[14px] focus:outline-none focus:border-blue-500 transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-[12px] font-bold text-white/80 uppercase tracking-wider mb-1">
                  Build Command
                </label>
                <input
                  type="text"
                  value={buildCommand}
                  onChange={(e) => setBuildCommand(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg bg-[#080d1c] border border-white/15 text-white text-[14px] focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="e.g. npm run build"
                />
              </div>

              <div>
                <label className="block text-[12px] font-bold text-white/80 uppercase tracking-wider mb-1">
                  Publish Directory *
                </label>
                <input
                  type="text"
                  value={publishDir}
                  onChange={(e) => setPublishDir(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg bg-[#080d1c] border border-white/15 text-white text-[14px] focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="e.g. dist or build"
                  required
                />
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/80 text-[14px] font-medium transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 rounded-lg bg-[#2A64E7] hover:bg-[#3873f7] active:bg-[#2052c4] text-white text-[14px] font-semibold transition-colors shadow-md cursor-pointer flex items-center gap-2"
              >
                <span>Create & Deploy Site</span>
                <ArrowRightIcon size={16} />
              </button>
            </div>
          </form>
        ) : (
          <div className="space-y-4">
            {/* Progress bar */}
            <div>
              <div className="flex justify-between text-[13px] text-white/70 mb-1.5 font-mono">
                <span>{deployFinished ? 'Deploy Complete' : 'Deploying to edge network...'}</span>
                <span>{deployProgress}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 rounded-full"
                  style={{ width: `${deployProgress}%` }}
                />
              </div>
            </div>

            {/* Simulated Live Build Terminal */}
            <div className="p-4 rounded-xl bg-[#05070e] border border-white/10 font-mono text-[13px] text-white/80 space-y-1.5 max-h-[180px] overflow-y-auto">
              {deployLogs.map((log, i) => (
                <div key={i} className="flex gap-2">
                  <span className="text-blue-400 select-none">›</span>
                  <span className={log.includes('successful') ? 'text-green-400 font-bold' : ''}>{log}</span>
                </div>
              ))}
            </div>

            {deployFinished && (
              <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-between">
                <div>
                  <div className="text-[12px] text-blue-300 font-medium">Your site is live at:</div>
                  <a
                    href={`https://${subdomain || 'my-portfolio'}.web.int.yt`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[15px] font-mono text-cyan-400 hover:underline font-semibold"
                  >
                    https://{subdomain || 'my-portfolio'}.web.int.yt
                  </a>
                </div>
                <button
                  onClick={handleReset}
                  className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-[13px] font-semibold transition-colors cursor-pointer"
                >
                  Deploy Another
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

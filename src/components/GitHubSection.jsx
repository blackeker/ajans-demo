import { useState } from 'react';
import { Copy, Check, GitBranch, Star, GitFork, Terminal, ShieldCheck, ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';
import { sound } from '../utils/audio';

export default function GitHubSection() {
  const [copiedClone, setCopiedClone] = useState(false);
  const [copiedDev, setCopiedDev] = useState(false);

  const cloneCommand = 'git clone https://github.com/blackeker/ajans-demo.git';
  const devCommand = 'cd ajans-demo && npm install && npm run dev';

  const handleCopyClone = () => {
    sound.playSuccess();
    navigator.clipboard.writeText(cloneCommand);
    setCopiedClone(true);
    setTimeout(() => setCopiedClone(false), 2500);
  };

  const handleCopyDev = () => {
    sound.playSuccess();
    navigator.clipboard.writeText(devCommand);
    setCopiedDev(true);
    setTimeout(() => setCopiedDev(false), 2500);
  };

  return (
    <section id="github" style={{ padding: '100px 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 60px auto' }}>
          <div className="glass-pill" style={{ marginBottom: '16px', color: '#00f5d4' }}>
            <GithubIcon size={14} />
            <span>AÇIK KAYNAK DEMO MERKEZİ</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', marginBottom: '20px', fontWeight: 800 }}>
            GitHub Entegrasyonu & <span className="text-gradient">Demo Kod Deposu</span>
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#94a3b8' }}>
            Bu web sitesi, ajansınız için hazırlanmış canlı bir demo projesidir. Tüm kaynak kodları ve Three.js 3D
            altyapısı GitHub üzerinde <strong>ajans-demo</strong> reposu olarak paylaşılmıştır.
          </p>
        </div>

        {/* GitHub Card Showcase */}
        <div
          className="glass-panel"
          style={{
            maxWidth: '960px',
            margin: '0 auto',
            borderRadius: '28px',
            padding: '44px',
            border: '1px solid rgba(0, 245, 212, 0.3)',
            background: 'linear-gradient(135deg, rgba(12, 16, 26, 0.9) 0%, rgba(6, 8, 14, 0.95) 100%)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.7), inset 0 0 40px rgba(0, 245, 212, 0.05)',
          }}
        >
          {/* Top Bar with Repo info */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '20px',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
              paddingBottom: '24px',
              marginBottom: '32px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <GithubIcon size={30} style={{ color: '#fff' }} />
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                  <a
                    href="https://github.com/blackeker"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#94a3b8', fontSize: '1rem', fontWeight: 600 }}
                  >
                    blackeker
                  </a>
                  <span style={{ color: '#64748b' }}>/</span>
                  <a
                    href="https://github.com/blackeker/ajans-demo"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#00f5d4', fontSize: '1.25rem', fontWeight: 800 }}
                  >
                    ajans-demo
                  </a>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      padding: '2px 8px',
                      borderRadius: '9999px',
                      background: 'rgba(0, 245, 212, 0.15)',
                      color: '#00f5d4',
                      border: '1px solid rgba(0, 245, 212, 0.3)',
                      fontWeight: 700,
                    }}
                  >
                    Public Demo
                  </span>
                </div>
                <p style={{ fontSize: '0.88rem', color: '#64748b', marginTop: '4px' }}>
                  Yeni nesil 3D WebGL ve etkileşimli geçişlere sahip kreatif ajans web sitesi.
                </p>
              </div>
            </div>

            {/* GitHub Action Buttons */}
            <div style={{ display: 'flex', gap: '10px' }}>
              <a
                href="https://github.com/blackeker/ajans-demo"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ padding: '10px 20px', fontSize: '0.85rem' }}
              >
                <GithubIcon size={16} />
                <span>Repo'yu Aç</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Quick Stats Badges */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
              gap: '16px',
              marginBottom: '32px',
            }}
          >
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '14px 18px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#94a3b8', fontSize: '0.8rem', marginBottom: '6px' }}>
                <GitBranch size={15} style={{ color: '#00f5d4' }} />
                <span>Ana Dal (Branch)</span>
              </div>
              <p style={{ fontWeight: 800, color: '#fff', fontFamily: 'var(--font-mono)' }}>main</p>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '14px 18px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#94a3b8', fontSize: '0.8rem', marginBottom: '6px' }}>
                <ShieldCheck size={15} style={{ color: '#3a86ff' }} />
                <span>Lisans</span>
              </div>
              <p style={{ fontWeight: 800, color: '#fff', fontFamily: 'var(--font-mono)' }}>MIT License</p>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '14px 18px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#94a3b8', fontSize: '0.8rem', marginBottom: '6px' }}>
                <Star size={15} style={{ color: '#ffbe0b' }} />
                <span>Teknoloji</span>
              </div>
              <p style={{ fontWeight: 800, color: '#fff', fontFamily: 'var(--font-mono)' }}>Three.js + React 19</p>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '14px 18px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#94a3b8', fontSize: '0.8rem', marginBottom: '6px' }}>
                <GitFork size={15} style={{ color: '#f72585' }} />
                <span>Dağıtım</span>
              </div>
              <p style={{ fontWeight: 800, color: '#fff', fontFamily: 'var(--font-mono)' }}>Vite Optimized</p>
            </div>
          </div>

          {/* Terminal Command Snippets */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Clone Box */}
            <div>
              <span style={{ fontSize: '0.85rem', color: '#94a3b8', display: 'block', marginBottom: '8px', fontWeight: 600 }}>
                1. Projeyi Klonlayın (Git Clone):
              </span>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: '#040508',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '14px',
                  padding: '12px 18px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.9rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', overflowX: 'auto' }}>
                  <Terminal size={16} style={{ color: '#00f5d4' }} />
                  <span style={{ color: '#cbd5e1' }}>{cloneCommand}</span>
                </div>
                <button
                  onClick={handleCopyClone}
                  style={{
                    background: copiedClone ? 'rgba(0, 245, 212, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                    color: copiedClone ? '#00f5d4' : '#fff',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    padding: '6px 12px',
                    fontSize: '0.78rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    cursor: 'pointer',
                  }}
                >
                  {copiedClone ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copiedClone ? 'Kopyalandı' : 'Kopyala'}</span>
                </button>
              </div>
            </div>

            {/* Run Box */}
            <div>
              <span style={{ fontSize: '0.85rem', color: '#94a3b8', display: 'block', marginBottom: '8px', fontWeight: 600 }}>
                2. Bağımlılıkları Kurun & Çalıştırın:
              </span>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: '#040508',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '14px',
                  padding: '12px 18px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.9rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', overflowX: 'auto' }}>
                  <Terminal size={16} style={{ color: '#3a86ff' }} />
                  <span style={{ color: '#cbd5e1' }}>{devCommand}</span>
                </div>
                <button
                  onClick={handleCopyDev}
                  style={{
                    background: copiedDev ? 'rgba(58, 134, 255, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                    color: copiedDev ? '#3a86ff' : '#fff',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    padding: '6px 12px',
                    fontSize: '0.78rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    cursor: 'pointer',
                  }}
                >
                  {copiedDev ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copiedDev ? 'Kopyalandı' : 'Kopyala'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

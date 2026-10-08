import { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';
import { sound } from '../utils/audio';

export default function Navbar({ activeSection, onNavigate, isSoundOn, toggleSound }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Giriş' },
    { id: 'services', label: 'Hizmetler' },
    { id: 'portfolio', label: 'Projeler' },
    { id: 'lab', label: '3D Laboratuvar' },
    { id: 'github', label: 'GitHub Demo' },
    { id: 'contact', label: 'İletişim' },
  ];

  const handleNavClick = (id) => {
    sound.playClick();
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: scrolled ? '12px 0' : '22px 0',
        transition: 'all 0.35s ease',
        background: scrolled ? 'rgba(5, 6, 8, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand / Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('hero');
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
          }}
        >
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #00f5d4 0%, #3a86ff 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 16px rgba(0, 245, 212, 0.5)',
            }}
          >
            <span style={{ color: '#050608', fontWeight: 900, fontFamily: 'var(--font-display)', fontSize: '1.2rem' }}>
              N
            </span>
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: '1.25rem',
                  letterSpacing: '0.05em',
                  color: '#fff',
                }}
              >
                NEXUS
              </span>
              <span
                style={{
                  fontSize: '0.65rem',
                  padding: '2px 6px',
                  borderRadius: '6px',
                  background: 'rgba(0, 245, 212, 0.15)',
                  color: '#00f5d4',
                  border: '1px solid rgba(0, 245, 212, 0.3)',
                  fontWeight: 700,
                }}
              >
                3D AJANS
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '6px',
            background: 'rgba(15, 19, 30, 0.7)',
            padding: '6px 10px',
            borderRadius: '9999px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(16px)',
          }}
          className="desktop-nav"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                onMouseEnter={() => sound.playHover()}
                style={{
                  padding: '8px 18px',
                  borderRadius: '9999px',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-body)',
                  transition: 'all 0.25s ease',
                  background: isActive ? 'linear-gradient(135deg, rgba(0,245,212,0.2), rgba(58,134,255,0.2))' : 'transparent',
                  color: isActive ? '#00f5d4' : '#94a3b8',
                  border: isActive ? '1px solid rgba(0, 245, 212, 0.4)' : '1px solid transparent',
                  cursor: 'pointer',
                }}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Action Icons & GitHub */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* Sound Effect Toggle */}
          <button
            onClick={() => {
              toggleSound();
              sound.playClick();
            }}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: isSoundOn ? '#00f5d4' : '#64748b',
              transition: 'all 0.25s',
            }}
            title={isSoundOn ? 'Ses Efektleri Açık' : 'Ses Efektleri Kapalı'}
          >
            {isSoundOn ? <Volume2 size={18} /> : <VolumeX size={18} />}
          </button>

          {/* GitHub Direct Link Button */}
          <a
            href="https://github.com/blackeker/ajans-demo"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => sound.playHover()}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              borderRadius: '9999px',
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: '#fff',
              fontSize: '0.85rem',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'all 0.25s',
            }}
            className="github-btn"
          >
            <GithubIcon size={16} />
            <span style={{ display: 'none' }} className="github-text">ajans-demo</span>
          </a>

          {/* Quick CTA */}
          <button
            onClick={() => handleNavClick('contact')}
            className="btn-primary"
            style={{
              padding: '10px 20px',
              fontSize: '0.85rem',
              display: 'none',
            }}
            id="nav-cta-btn"
          >
            <span>Teklif Al</span>
            <ArrowUpRight size={16} />
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => {
              sound.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
            }}
            className="mobile-burger"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '70px',
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(5, 6, 8, 0.98)',
            backdropFilter: 'blur(25px)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
            zIndex: 999,
          }}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              style={{
                padding: '16px 20px',
                borderRadius: '14px',
                fontSize: '1.2rem',
                fontWeight: 700,
                textAlign: 'left',
                background: activeSection === item.id ? 'rgba(0, 245, 212, 0.1)' : 'rgba(255, 255, 255, 0.03)',
                color: activeSection === item.id ? '#00f5d4' : '#fff',
                border: activeSection === item.id ? '1px solid rgba(0, 245, 212, 0.3)' : '1px solid rgba(255, 255, 255, 0.06)',
              }}
            >
              {item.label}
            </button>
          ))}
          <a
            href="https://github.com/blackeker/ajans-demo"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '16px 20px',
              borderRadius: '14px',
              fontSize: '1rem',
              fontWeight: 600,
              background: 'rgba(255, 255, 255, 0.06)',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginTop: '10px',
            }}
          >
            <GithubIcon size={20} />
            <span>GitHub Repository (blackeker/ajans-demo)</span>
          </a>
        </div>
      )}

      {/* Responsive media query helper injected for navbar */}
      <style>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-burger {
            display: none !important;
          }
          #nav-cta-btn {
            display: inline-flex !important;
          }
          .github-text {
            display: inline !important;
          }
        }
      `}</style>
    </header>
  );
}

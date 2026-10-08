import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import PageTransition from './components/PageTransition';
import { sound } from './utils/audio';
import { ArrowRight, Sparkles, Zap, Trophy, Shield } from 'lucide-react';
import { GithubIcon } from './components/Icons';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionTitle, setTransitionTitle] = useState('');
  const [isSoundOn, setIsSoundOn] = useState(true);

  const handleNavigate = (sectionId) => {
    const titles = {
      hero: 'DEMO • GİRİŞ',
      services: 'DEMO • HİZMETLER',
      portfolio: 'DEMO • PROJELER',
      contact: 'DEMO • İLETİŞİM',
    };

    setTransitionTitle(titles[sectionId] || 'DEMO • GEÇİŞ');
    setIsTransitioning(true);
    sound.playWarp();

    setTimeout(() => {
      setActiveSection(sectionId);
      const targetElement = document.getElementById(sectionId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    }, 280);
  };

  const toggleSound = () => {
    const newState = sound.toggleSound();
    setIsSoundOn(newState);
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: 'var(--bg-dark)' }}>
      {/* Dynamic Fluid Cursor */}
      <CustomCursor />

      {/* Shutter Page Transition Curtain */}
      <PageTransition isTransitioning={isTransitioning} targetTitle={transitionTitle} />

      {/* Modern Navigation Header */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        isSoundOn={isSoundOn}
        toggleSound={toggleSound}
      />

      {/* ========================================================
          HERO SECTION (3D INTERACTIVE INTRO)
          ======================================================== */}
      <section
        id="hero"
        style={{
          position: 'relative',
          minHeight: '100vh',
          paddingTop: '90px',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Subtle ambient lighting glows */}
        <div
          style={{
            position: 'absolute',
            top: '20%',
            left: '10%',
            width: '420px',
            height: '420px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0, 245, 212, 0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '35%',
            right: '8%',
            width: '480px',
            height: '480px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(157, 78, 221, 0.14) 0%, transparent 70%)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              alignItems: 'center',
              gap: '40px',
            }}
          >
            {/* Left Content */}
            <div>
              <div
                className="glass-pill"
                style={{
                  marginBottom: '20px',
                  color: '#00f5d4',
                  border: '1px solid rgba(0, 245, 212, 0.3)',
                }}
              >
                <Sparkles size={14} />
                <span>3D ETKİLEŞİMLİ AJANS WEB SİTESİ DEMOSU</span>
              </div>

              <h1
                style={{
                  fontSize: 'clamp(2.4rem, 5vw, 4.2rem)',
                  fontWeight: 800,
                  lineHeight: 1.1,
                  marginBottom: '22px',
                  letterSpacing: '-0.03em',
                }}
              >
                Klasik Web'i Aşın.{' '}
                <span className="text-gradient">3D Boyuta Geçin.</span>
              </h1>

              <p
                style={{
                  fontSize: 'clamp(1rem, 1.6vw, 1.2rem)',
                  color: '#94a3b8',
                  lineHeight: 1.65,
                  marginBottom: '34px',
                  maxWidth: '540px',
                }}
              >
                Girişte donanım hızlandırmalı 3D sahneler, akıcı sayfa geçişleri ve modern estetikle
                donatılmış interaktif ajans web sitesi demosu.
              </p>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '40px' }}>
                <button
                  onClick={() => handleNavigate('portfolio')}
                  className="btn-primary"
                  id="hero-explore-btn"
                >
                  <span>Projeleri İncele</span>
                  <ArrowRight size={18} />
                </button>

                <a
                  href="https://github.com/blackeker/ajans-demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  id="hero-github-btn"
                  style={{ textDecoration: 'none' }}
                >
                  <GithubIcon size={18} />
                  <span>GitHub Demo (ajans-demo)</span>
                </a>
              </div>

              {/* Minimal Badges */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '14px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  paddingTop: '24px',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#00f5d4', marginBottom: '4px' }}>
                    <Zap size={16} />
                    <span style={{ fontWeight: 800, fontSize: '1.15rem', fontFamily: 'var(--font-mono)' }}>60 FPS</span>
                  </div>
                  <span style={{ fontSize: '0.78rem', color: '#64748b' }}>WebGL 3D Render</span>
                </div>

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#f72585', marginBottom: '4px' }}>
                    <Trophy size={16} />
                    <span style={{ fontWeight: 800, fontSize: '1.15rem', fontFamily: 'var(--font-mono)' }}>Akıcı</span>
                  </div>
                  <span style={{ fontSize: '0.78rem', color: '#64748b' }}>Sayfa Geçişleri</span>
                </div>

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#3a86ff', marginBottom: '4px' }}>
                    <Shield size={16} />
                    <span style={{ fontWeight: 800, fontSize: '1.15rem', fontFamily: 'var(--font-mono)' }}>Demo</span>
                  </div>
                  <span style={{ fontSize: '0.78rem', color: '#64748b' }}>Açık Kaynak Kod</span>
                </div>
              </div>
            </div>

            {/* Right: Three.js 3D Centerpiece */}
            <div
              style={{
                height: '540px',
                width: '100%',
                position: 'relative',
              }}
            >
              <Hero3D />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SERVICES SECTION (CLEAN & MINIMAL)
          ======================================================== */}
      <ServicesSection onNavigate={handleNavigate} />

      {/* ========================================================
          PORTFOLIO SECTION
          ======================================================== */}
      <PortfolioSection />

      {/* ========================================================
          CONTACT SECTION
          ======================================================== */}
      <ContactSection />

      {/* ========================================================
          FOOTER
          ======================================================== */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

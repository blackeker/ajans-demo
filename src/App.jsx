import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import TechLabSection from './components/TechLabSection';
import GitHubSection from './components/GitHubSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import PageTransition from './components/PageTransition';
import { ArrowRight, Sparkles, Play, Zap, Shield, Trophy } from 'lucide-react';
import { GithubIcon } from './components/Icons';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionTitle, setTransitionTitle] = useState('');
  const [isSoundOn, setIsSoundOn] = useState(true);
  const [calculatedScope, setCalculatedScope] = useState(null);

  const handleNavigate = (sectionId) => {
    const titles = {
      hero: 'NEXUS • 3D GİRİŞ',
      services: 'NEXUS • HİZMETLER',
      portfolio: 'NEXUS • PROJELER',
      lab: 'NEXUS • 3D LABORATUVAR',
      github: 'NEXUS • GITHUB DEMO',
      contact: 'NEXUS • İLETİŞİM & TEKLİF',
    };

    setTransitionTitle(titles[sectionId] || 'NEXUS • GEÇİŞ');
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

  const handleSelectScope = (scopeData) => {
    setCalculatedScope(scopeData);
    handleNavigate('contact');
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: 'var(--bg-dark)' }}>
      {/* Custom Fluid Cursor */}
      <CustomCursor />

      {/* Integrated Shutter Page Transition Curtain */}
      <PageTransition isTransitioning={isTransitioning} targetTitle={transitionTitle} />

      {/* Fixed Futuristic Header / Navbar */}
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
          paddingTop: '100px',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Subtle background glow spots */}
        <div
          style={{
            position: 'absolute',
            top: '20%',
            left: '10%',
            width: '450px',
            height: '450px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0, 245, 212, 0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '40%',
            right: '5%',
            width: '500px',
            height: '500px',
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
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              alignItems: 'center',
              gap: '40px',
            }}
          >
            {/* Left Content */}
            <div>
              <div
                className="glass-pill"
                style={{
                  marginBottom: '24px',
                  color: '#00f5d4',
                  border: '1px solid rgba(0, 245, 212, 0.3)',
                }}
              >
                <Sparkles size={14} />
                <span>YENİ NESİL DİJİTAL AJANS DENEYİMİ</span>
              </div>

              <h1
                style={{
                  fontSize: 'clamp(2.4rem, 5.2vw, 4.4rem)',
                  fontWeight: 800,
                  lineHeight: 1.08,
                  marginBottom: '24px',
                  letterSpacing: '-0.03em',
                }}
              >
                Sıradan Web'i Unutun.{' '}
                <span className="text-gradient">3D Boyuta Geçin.</span>
              </h1>

              <p
                style={{
                  fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
                  color: '#94a3b8',
                  lineHeight: 1.6,
                  marginBottom: '36px',
                  maxWidth: '560px',
                }}
              >
                Klasik, sıkıcı ve şablon web siteleri geride kaldı. WebGL, Three.js ve akıcı sayfa
                geçişleriyle markanızı ziyaretçilerin belleğine kazıyan ödüllü dijital deneyimler tasarlıyoruz.
              </p>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '44px' }}>
                <button
                  onClick={() => handleNavigate('portfolio')}
                  className="btn-primary"
                  id="hero-explore-btn"
                >
                  <span>Projeleri İncele</span>
                  <ArrowRight size={18} />
                </button>

                <button
                  onClick={() => handleNavigate('github')}
                  className="btn-secondary"
                  id="hero-github-btn"
                >
                  <GithubIcon size={18} />
                  <span>GitHub Demo Repo</span>
                </button>
              </div>

              {/* Agency Trust Badges */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '16px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  paddingTop: '28px',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#00f5d4', marginBottom: '4px' }}>
                    <Zap size={16} />
                    <span style={{ fontWeight: 800, fontSize: '1.2rem', fontFamily: 'var(--font-mono)' }}>60 FPS</span>
                  </div>
                  <span style={{ fontSize: '0.78rem', color: '#64748b' }}>WebGL Hızlandırma</span>
                </div>

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#f72585', marginBottom: '4px' }}>
                    <Trophy size={16} />
                    <span style={{ fontWeight: 800, fontSize: '1.2rem', fontFamily: 'var(--font-mono)' }}>%100</span>
                  </div>
                  <span style={{ fontSize: '0.78rem', color: '#64748b' }}>Özgün Tasarım</span>
                </div>

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#3a86ff', marginBottom: '4px' }}>
                    <Shield size={16} />
                    <span style={{ fontWeight: 800, fontSize: '1.2rem', fontFamily: 'var(--font-mono)' }}>v1.0 Demo</span>
                  </div>
                  <span style={{ fontSize: '0.78rem', color: '#64748b' }}>GitHub Açık Kaynak</span>
                </div>
              </div>
            </div>

            {/* Right: Three.js 3D Centerpiece Canvas */}
            <div
              style={{
                height: '560px',
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
          SERVICES SECTION & ESTIMATOR
          ======================================================== */}
      <ServicesSection onSelectScope={handleSelectScope} />

      {/* ========================================================
          PORTFOLIO SECTION
          ======================================================== */}
      <PortfolioSection />

      {/* ========================================================
          TECH LAB & PERFORMANCE BENCHMARK
          ======================================================== */}
      <TechLabSection />

      {/* ========================================================
          GITHUB INTEGRATION & DEMO HUB
          ======================================================== */}
      <GitHubSection />

      {/* ========================================================
          CONTACT & BRIEF SUBMISSION
          ======================================================== */}
      <ContactSection incomingScope={calculatedScope} />

      {/* ========================================================
          FOOTER
          ======================================================== */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

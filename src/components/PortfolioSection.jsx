import { useState } from 'react';
import { ExternalLink, Sparkles, Layers, X, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import { sound } from '../utils/audio';

export default function PortfolioSection() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'AURA NEURAL',
      category: 'ai',
      categoryName: 'Yapay Zekâ & 3D',
      subtitle: 'Sesli Yapay Zeka & Uzamsal Arayüz',
      desc: 'Three.js ve Web Audio API ile gerçek zamanlı frekans tepkisi veren, otonom nöronal küre arayüzü ve yapay zeka konsolu.',
      tags: ['Three.js', 'React', 'Web Audio API', 'AI Ajanı'],
      year: '2026',
      client: 'Aura Labs Berlin',
      impact: '%240 Etkileşim Artışı',
      previewGradient: 'linear-gradient(135deg, #1a0826 0%, #2a0845 50%, #6441a5 100%)',
      accentColor: '#9d4edd',
      githubLink: 'https://github.com/blackeker/ajans-demo',
      demoUrl: '#',
    },
    {
      id: 2,
      title: 'CHRONOS HOROLOGY',
      category: '3d',
      categoryName: '3D WebGL',
      subtitle: 'Lüks İsviçre Saati 3D Tanıtımı',
      desc: 'Mikroskobik detayda çark mekanizmalarını ve safir cam yansımalarını fiziksel tabanlı render (PBR) ile tarayıcıda sunan e-ticaret deneyimi.',
      tags: ['WebGL', 'PBR Shaders', 'Three.js', 'E-Ticaret'],
      year: '2026',
      client: 'Chronos Genève',
      impact: 'Awwwards Site of the Day',
      previewGradient: 'linear-gradient(135deg, #0c1824 0%, #002b49 50%, #00f5d4 100%)',
      accentColor: '#00f5d4',
      githubLink: 'https://github.com/blackeker/ajans-demo',
      demoUrl: '#',
    },
    {
      id: 3,
      title: 'VELOCITY GT 3D',
      category: '3d',
      categoryName: '3D WebGL',
      subtitle: 'Süperspor Otomobil Konfigüratörü',
      desc: 'Müşterilerin aerodinamik gövde kitlerini, karbon detayları ve jantları 360 derece özelleştirdiği yüksek performanslı WebGL platformu.',
      tags: ['Three.js', 'GLTF', 'Car Configurator', 'Raymarching'],
      year: '2025',
      client: 'Velocity Motors',
      impact: '1.4M+ Ziyaretçi',
      previewGradient: 'linear-gradient(135deg, #2b0c14 0%, #590d22 50%, #f72585 100%)',
      accentColor: '#f72585',
      githubLink: 'https://github.com/blackeker/ajans-demo',
      demoUrl: '#',
    },
    {
      id: 4,
      title: 'QUANTUM DASHBOARD',
      category: 'ux',
      categoryName: 'UI/UX & Fintech',
      subtitle: 'Gerçek Zamanlı Likidite ve Analitik',
      desc: 'Gecikmesiz veri akışı sağlayan, fütüristik cam morfolojisi ve akıcı veri görselleştirme grafikleriyle donatılmış finans platformu.',
      tags: ['Next.js', 'Fintech', 'Dark UI', 'Micro-Charts'],
      year: '2026',
      client: 'Quantum Capital London',
      impact: '$500M+ İşlem Hacmi',
      previewGradient: 'linear-gradient(135deg, #051923 0%, #003554 50%, #006494 100%)',
      accentColor: '#3a86ff',
      githubLink: 'https://github.com/blackeker/ajans-demo',
      demoUrl: '#',
    },
    {
      id: 5,
      title: 'NEO KYOTO APPAREL',
      category: 'ux',
      categoryName: 'UI/UX & E-Ticaret',
      subtitle: 'Siberpunk Sokak Modası Vitrini',
      desc: 'Glitch efektleri, interaktif ses manzaraları ve dinamik kumaş simülasyonları içeren avangart sokak giyim mağazası.',
      tags: ['WebGL', 'Audio Reactive', 'E-Commerce', 'Cyberpunk'],
      year: '2026',
      client: 'Neo Kyoto Collective',
      impact: '%38 Dönüşüm Oranı',
      previewGradient: 'linear-gradient(135deg, #180521 0%, #370617 50%, #ffbe0b 100%)',
      accentColor: '#ffbe0b',
      githubLink: 'https://github.com/blackeker/ajans-demo',
      demoUrl: '#',
    },
    {
      id: 6,
      title: 'SOLARIS HABITAT',
      category: '3d',
      categoryName: '3D WebGL',
      subtitle: 'Sanal Mimari & Gayrimenkul Keşfi',
      desc: 'Kullanıcıların lüks rezidans dairelerini gün ışığı saatine göre interaktif olarak gezebildiği mekansal web uygulaması.',
      tags: ['Three.js', 'Mimari Görselleştirme', 'BIM', 'Ambient Occlusion'],
      year: '2025',
      client: 'Solaris Living Dubai',
      impact: 'FWA of the Month',
      previewGradient: 'linear-gradient(135deg, #081c15 0%, #1b4332 50%, #2d6a4f 100%)',
      accentColor: '#00f5d4',
      githubLink: 'https://github.com/blackeker/ajans-demo',
      demoUrl: '#',
    },
  ];

  const filteredProjects =
    selectedFilter === 'all' ? projects : projects.filter((p) => p.category === selectedFilter);

  const openProjectModal = (proj) => {
    sound.playClick();
    setActiveProject(proj);
  };

  const closeProjectModal = () => {
    sound.playHover();
    setActiveProject(null);
  };

  return (
    <section id="portfolio" style={{ padding: '100px 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 60px auto' }}>
          <div className="glass-pill" style={{ marginBottom: '16px', color: '#f72585' }}>
            <Layers size={14} />
            <span>DEMO PORTFOLYO</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', marginBottom: '20px', fontWeight: 800 }}>
            İlham Veren, <span className="text-gradient">Ödüllü Projelerimiz</span>
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#94a3b8' }}>
            Her pikselinde sanat ve kodun buluştuğu, dünya standartlarında tasarlanan interaktif web deneyimleri.
          </p>

          {/* Filter Pills */}
          <div
            style={{
              display: 'inline-flex',
              gap: '8px',
              padding: '6px',
              background: 'rgba(255,255,255,0.03)',
              borderRadius: '9999px',
              border: '1px solid rgba(255,255,255,0.08)',
              marginTop: '32px',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {[
              { id: 'all', label: 'Tüm Projeler' },
              { id: '3d', label: '3D & WebGL' },
              { id: 'ai', label: 'Yapay Zekâ' },
              { id: 'ux', label: 'UI/UX & E-Ticaret' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => {
                  sound.playHover();
                  setSelectedFilter(f.id);
                }}
                style={{
                  padding: '8px 20px',
                  borderRadius: '9999px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  transition: 'all 0.25s',
                  background: selectedFilter === f.id ? 'var(--accent-pink)' : 'transparent',
                  color: selectedFilter === f.id ? '#fff' : '#94a3b8',
                }}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
            gap: '28px',
          }}
        >
          {filteredProjects.map((p) => (
            <div
              key={p.id}
              className="glass-panel"
              onClick={() => openProjectModal(p)}
              onMouseEnter={() => sound.playHover()}
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                background: 'rgba(12, 15, 25, 0.7)',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              {/* Card Visual Hero Preview */}
              <div
                style={{
                  height: '240px',
                  background: p.previewGradient,
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '24px',
                  overflow: 'hidden',
                }}
              >
                {/* Visual Art Elements */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    opacity: 0.15,
                    backgroundImage: 'radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)',
                    backgroundSize: '16px 16px',
                  }}
                />

                {/* Dynamic Holographic Badge */}
                <div
                  style={{
                    width: '90px',
                    height: '90px',
                    borderRadius: '50%',
                    border: `2px dashed ${p.accentColor}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    animation: 'spinSlow 15s linear infinite',
                    boxShadow: `0 0 30px ${p.accentColor}40`,
                  }}
                >
                  <Sparkles size={28} style={{ color: p.accentColor }} />
                </div>

                <div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    background: 'rgba(0, 0, 0, 0.6)',
                    backdropFilter: 'blur(10px)',
                    padding: '4px 12px',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    color: '#fff',
                    fontWeight: 600,
                    border: '1px solid rgba(255,255,255,0.15)',
                  }}
                >
                  {p.year}
                </div>

                <div
                  style={{
                    position: 'absolute',
                    bottom: '16px',
                    left: '16px',
                    background: 'rgba(0, 0, 0, 0.6)',
                    backdropFilter: 'blur(10px)',
                    padding: '4px 12px',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    color: p.accentColor,
                    fontWeight: 700,
                    border: `1px solid ${p.accentColor}60`,
                  }}
                >
                  {p.impact}
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontSize: '0.8rem', color: p.accentColor, fontWeight: 700, textTransform: 'uppercase' }}>
                    {p.categoryName}
                  </span>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, margin: '8px 0 10px 0', color: '#fff' }}>
                    {p.title}
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: '#94a3b8', lineHeight: 1.5, marginBottom: '20px' }}>
                    {p.subtitle}
                  </p>
                </div>

                <div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                    {p.tags.map((tag, i) => (
                      <span
                        key={i}
                        style={{
                          fontSize: '0.72rem',
                          padding: '3px 8px',
                          borderRadius: '6px',
                          background: 'rgba(255, 255, 255, 0.04)',
                          color: '#cbd5e1',
                          border: '1px solid rgba(255, 255, 255, 0.06)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      borderTop: '1px solid rgba(255,255,255,0.06)',
                      paddingTop: '16px',
                    }}
                  >
                    <span style={{ fontSize: '0.85rem', color: '#64748b' }}>{p.client}</span>
                    <span
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        color: '#00f5d4',
                        fontSize: '0.88rem',
                        fontWeight: 700,
                      }}
                    >
                      İncele <ArrowUpRight size={16} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {activeProject && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 10001,
              background: 'rgba(4, 5, 8, 0.85)',
              backdropFilter: 'blur(20px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
            }}
            onClick={closeProjectModal}
          >
            <div
              className="glass-panel"
              onClick={(e) => e.stopPropagation()}
              style={{
                width: '100%',
                maxWidth: '740px',
                borderRadius: '28px',
                background: 'rgba(10, 13, 22, 0.95)',
                border: `1px solid ${activeProject.accentColor}50`,
                boxShadow: `0 25px 60px rgba(0, 0, 0, 0.8), 0 0 35px ${activeProject.accentColor}25`,
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              {/* Modal Header Visual */}
              <div
                style={{
                  height: '180px',
                  background: activeProject.previewGradient,
                  position: 'relative',
                  padding: '24px',
                  display: 'flex',
                  alignItems: 'flex-end',
                }}
              >
                <button
                  onClick={closeProjectModal}
                  style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: 'rgba(0, 0, 0, 0.6)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    cursor: 'pointer',
                  }}
                >
                  <X size={18} />
                </button>

                <div>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      color: activeProject.accentColor,
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                    }}
                  >
                    {activeProject.categoryName} • {activeProject.year}
                  </span>
                  <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', margin: '4px 0 0 0' }}>
                    {activeProject.title}
                  </h3>
                </div>
              </div>

              {/* Modal Body */}
              <div style={{ padding: '32px' }}>
                <p style={{ fontSize: '1.05rem', color: '#cbd5e1', lineHeight: 1.7, marginBottom: '24px' }}>
                  {activeProject.desc}
                </p>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '16px',
                    marginBottom: '28px',
                    background: 'rgba(255,255,255,0.03)',
                    padding: '16px',
                    borderRadius: '16px',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  <div>
                    <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Müşteri</span>
                    <p style={{ fontWeight: 700, color: '#fff', marginTop: '4px' }}>{activeProject.client}</p>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Başarı / Skor</span>
                    <p style={{ fontWeight: 700, color: activeProject.accentColor, marginTop: '4px' }}>
                      {activeProject.impact}
                    </p>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Mimari</span>
                    <p style={{ fontWeight: 700, color: '#fff', marginTop: '4px' }}>Three.js + WebGL</p>
                  </div>
                </div>

                <div style={{ marginBottom: '28px' }}>
                  <span style={{ fontSize: '0.85rem', color: '#94a3b8', display: 'block', marginBottom: '10px' }}>
                    Kullanılan Teknolojiler:
                  </span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {activeProject.tags.map((t, idx) => (
                      <span
                        key={idx}
                        style={{
                          fontSize: '0.8rem',
                          padding: '6px 14px',
                          borderRadius: '8px',
                          background: 'rgba(255, 255, 255, 0.05)',
                          color: '#fff',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          fontWeight: 500,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                  <a
                    href={activeProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                    style={{ flex: 1, textDecoration: 'none' }}
                  >
                    <GithubIcon size={18} />
                    <span>GitHub Demo Kodunu İncele</span>
                  </a>

                  <button
                    onClick={() => {
                      sound.playSuccess();
                      closeProjectModal();
                    }}
                    className="btn-primary"
                    style={{ flex: 1 }}
                  >
                    <span>Projeyi Tam Ekran Başlat</span>
                    <ExternalLink size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

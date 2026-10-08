import { ArrowUpRight, Sparkles } from 'lucide-react';
import { sound } from '../utils/audio';

export default function PortfolioSection() {
  const projects = [
    {
      id: 1,
      title: 'Aura 3D',
      category: '3D & WebGL Deneyimi',
      desc: 'Tarayıcıda gerçek zamanlı etkileşimli 3D ses ve parçacık arayüzü.',
      accent: '#00f5d4',
      gradient: 'linear-gradient(135deg, rgba(0, 245, 212, 0.15) 0%, rgba(58, 134, 255, 0.2) 100%)',
    },
    {
      id: 2,
      title: 'Chronos',
      category: 'Lüks Saat Konfigüratörü',
      desc: '360° dönebilen 3D ürün ve materyal inceleme platformu.',
      accent: '#9d4edd',
      gradient: 'linear-gradient(135deg, rgba(157, 78, 221, 0.2) 0%, rgba(247, 37, 133, 0.15) 100%)',
    },
    {
      id: 3,
      title: 'Velocity GT',
      category: 'İnteraktif Showroom',
      desc: 'Donanım hızlandırmalı WebGL ile süperspor araç özelleştirici.',
      accent: '#f72585',
      gradient: 'linear-gradient(135deg, rgba(247, 37, 133, 0.2) 0%, rgba(255, 190, 11, 0.15) 100%)',
    },
  ];

  return (
    <section id="portfolio" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container">
        {/* Minimal Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 48px auto' }}>
          <div className="glass-pill" style={{ marginBottom: '14px', color: '#00f5d4' }}>
            <Sparkles size={14} />
            <span>PROJELERİMİZ</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', marginBottom: '14px', fontWeight: 800 }}>
            Seçkin <span className="text-gradient">İşlerimiz</span>
          </h2>
          <p style={{ fontSize: '1rem', color: '#94a3b8' }}>
            3D animasyonlar ve yaratıcı kodlama ile hayata geçirdiğimiz web deneyimleri.
          </p>
        </div>

        {/* Clean, Uncluttered 3-Card Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
          }}
        >
          {projects.map((p) => (
            <div
              key={p.id}
              className="glass-panel"
              onMouseEnter={() => sound.playHover()}
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                background: 'rgba(12, 16, 26, 0.65)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease',
              }}
            >
              {/* Clean Preview Header */}
              <div
                style={{
                  height: '190px',
                  background: p.gradient,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                }}
              >
                {/* Minimal glowing shape */}
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '16px',
                    border: `1.5px solid ${p.accent}`,
                    background: 'rgba(10, 14, 24, 0.6)',
                    backdropFilter: 'blur(10px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: `0 0 25px ${p.accent}40`,
                    color: p.accent,
                    fontWeight: 800,
                    fontFamily: 'var(--font-mono)',
                    fontSize: '1.1rem',
                  }}
                >
                  3D
                </div>
              </div>

              {/* Clean Content */}
              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span
                    style={{
                      fontSize: '0.78rem',
                      color: p.accent,
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      display: 'block',
                      marginBottom: '8px',
                    }}
                  >
                    {p.category}
                  </span>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>
                    {p.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.5, marginBottom: '20px' }}>
                    {p.desc}
                  </p>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                    paddingTop: '14px',
                  }}
                >
                  <span style={{ fontSize: '0.82rem', color: '#64748b' }}>Demo Proje</span>
                  <span
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      color: p.accent,
                      fontSize: '0.85rem',
                      fontWeight: 600,
                    }}
                  >
                    İncele <ArrowUpRight size={15} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

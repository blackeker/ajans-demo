import { useState } from 'react';
import { Box, Cpu, Palette, Zap, Sparkles, ArrowRight } from 'lucide-react';
import { sound } from '../utils/audio';

export default function ServicesSection({ onNavigate }) {
  const [activeTab, setActiveTab] = useState('all');

  const services = [
    {
      id: '3d-webgl',
      category: '3d',
      icon: <Box size={28} style={{ color: '#00f5d4' }} />,
      title: '3D & WebGL Deneyimleri',
      desc: 'Three.js ve özel shaderlar ile tarayıcıda 60 FPS çalışan, etkileşimli ve derinlikli 3D web siteleri geliştiriyoruz.',
      tags: ['Three.js', 'WebGL', '3D Parallax', 'Shaders'],
    },
    {
      id: 'creative-uiux',
      category: 'design',
      icon: <Palette size={28} style={{ color: '#9d4edd' }} />,
      title: 'Kreatif UI/UX & Marka Tasarımı',
      desc: 'Ödül standartlarında tipografi, karanlık mod estetiği ve kullanıcıyı içine çeken akıcı sayfa geçişleri.',
      tags: ['Figma', 'Tasarım Sistemleri', 'Mikro-Animasyon'],
    },
    {
      id: 'ai-solutions',
      category: 'ai',
      icon: <Cpu size={28} style={{ color: '#f72585' }} />,
      title: 'Yapay Zeka & Akıllı Entegrasyonlar',
      desc: 'Web sitenize özel yapay zeka ajanları, otomatik akışlar ve kullanıcıya özel akıllı deneyimler.',
      tags: ['AI Ajanı', 'LLM', 'Otomasyon'],
    },
    {
      id: 'perf-dev',
      category: 'dev',
      icon: <Zap size={28} style={{ color: '#3a86ff' }} />,
      title: 'Yüksek Performans & Modern Web',
      desc: 'React ve modern mimariyle anında açılan sayfalar, kusursuz SEO ve sıfır gecikmeli gezinme.',
      tags: ['React', 'Vite', 'Core Web Vitals', 'SEO'],
    },
  ];

  const filteredServices =
    activeTab === 'all' ? services : services.filter((s) => s.category === activeTab);

  return (
    <section id="services" style={{ padding: '90px 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 50px auto' }}>
          <div className="glass-pill" style={{ marginBottom: '16px', color: '#00f5d4' }}>
            <Sparkles size={14} />
            <span>HİZMETLERİMİZ</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)', marginBottom: '18px', fontWeight: 800 }}>
            Modern & <span className="text-gradient">Etkileşimli Çözümler</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#94a3b8' }}>
            Klasik web sitelerinin ötesine geçin. 3D animasyonlar, akıcı geçişler ve yaratıcı dijital mimari.
          </p>

          {/* Filter Tabs */}
          <div
            style={{
              display: 'inline-flex',
              gap: '8px',
              padding: '6px',
              background: 'rgba(255,255,255,0.03)',
              borderRadius: '9999px',
              border: '1px solid rgba(255,255,255,0.08)',
              marginTop: '28px',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {[
              { id: 'all', label: 'Tümü' },
              { id: '3d', label: '3D WebGL' },
              { id: 'design', label: 'Tasarım & UI' },
              { id: 'ai', label: 'Yapay Zeka' },
              { id: 'dev', label: 'Yazılım' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  sound.playHover();
                  setActiveTab(tab.id);
                }}
                style={{
                  padding: '8px 18px',
                  borderRadius: '9999px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  transition: 'all 0.25s',
                  background: activeTab === tab.id ? 'var(--accent-cyan)' : 'transparent',
                  color: activeTab === tab.id ? '#050608' : '#94a3b8',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid (Clean 4 Cards) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="glass-panel"
              onMouseEnter={() => sound.playHover()}
              style={{
                padding: '34px 28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderRadius: '22px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                background: 'rgba(12, 16, 26, 0.65)',
              }}
            >
              <div>
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '14px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '22px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  {service.icon}
                </div>

                <h3 style={{ fontSize: '1.35rem', marginBottom: '12px', fontWeight: 700 }}>{service.title}</h3>

                <p style={{ fontSize: '0.92rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '22px' }}>
                  {service.desc}
                </p>
              </div>

              <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '18px' }}>
                  {service.tags.map((t, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontSize: '0.75rem',
                        padding: '4px 10px',
                        borderRadius: '8px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        color: '#cbd5e1',
                        border: '1px solid rgba(255, 255, 255, 0.06)',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => {
                    sound.playClick();
                    if (onNavigate) onNavigate('contact');
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: '#00f5d4',
                    fontSize: '0.86rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  <span>Teklif Al</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

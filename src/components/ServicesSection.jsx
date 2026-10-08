import { useState } from 'react';
import { Box, Cpu, Palette, Zap, Sparkles, Volume2, ArrowRight, CheckCircle2, Calculator } from 'lucide-react';
import { sound } from '../utils/audio';

export default function ServicesSection({ onSelectScope }) {
  const [activeTab, setActiveTab] = useState('all');

  // Calculator State
  const [pageCount, setPageCount] = useState(4);
  const [complexity3D, setComplexity3D] = useState('advanced'); // basic, medium, advanced
  const [hasAI, setHasAI] = useState(true);
  const [isFastTrack, setIsFastTrack] = useState(false);

  // Dynamic price calculation
  const baseCost = 25000;
  const pageCost = pageCount * 4500;
  const complexityCost = complexity3D === 'basic' ? 8000 : complexity3D === 'medium' ? 16000 : 28000;
  const aiCost = hasAI ? 12000 : 0;
  const speedCost = isFastTrack ? 9000 : 0;
  const totalCost = baseCost + pageCost + complexityCost + aiCost + speedCost;

  const estimatedDays = Math.max(7, Math.round(pageCount * 2 + (complexity3D === 'advanced' ? 8 : 4) - (isFastTrack ? 5 : 0)));

  const services = [
    {
      id: '3d-webgl',
      category: '3d',
      icon: <Box size={28} style={{ color: '#00f5d4' }} />,
      title: '3D & WebGL Deneyimleri',
      desc: 'Standart iki boyutlu şablonları unutun. Three.js ve GLSL shaderlar ile tarayıcıda 60 FPS akıcılıkta çalışan, parmak ısırtan uzamsal 3D deneyimler geliştiriyoruz.',
      tags: ['Three.js', 'WebGL', 'Shaders', 'Blender Render', '3D Parallax'],
      highlight: 'Öne Çıkan',
    },
    {
      id: 'ai-agents',
      category: 'ai',
      icon: <Cpu size={28} style={{ color: '#f72585' }} />,
      title: 'Yapay Zeka & Ajan Sistemleri',
      desc: 'Web sitenizi ve operasyonlarınızı yapay zeka ajanları ile donatıyoruz. Akıllı müşteri temsilcileri, otomatik teklif motorları ve gerçek zamanlı veri analizleri.',
      tags: ['LLM Entegrasyonu', 'Otonom Ajanlar', 'NLP', 'Akıllı Asistan'],
      highlight: 'Yeni Nesil',
    },
    {
      id: 'creative-uiux',
      category: 'design',
      icon: <Palette size={28} style={{ color: '#9d4edd' }} />,
      title: 'Ödüllü UI/UX & Marka Kimliği',
      desc: 'Awwwards ve FWA standartlarında vizyoner tasarım. Tipografi hiyerarşisi, dark-mode estetiği, etkileşimli mikro-animasyonlar ve kullanıcı odaklı tasarım sistemleri.',
      tags: ['Figma Prototip', 'Tasarım Sistemleri', 'Mikro-Etkileşim', 'Awwwards Vibe'],
      highlight: null,
    },
    {
      id: 'perf-arch',
      category: 'dev',
      icon: <Zap size={28} style={{ color: '#3a86ff' }} />,
      title: 'Ultra Hızlı Modern Web Mimarisi',
      desc: 'Gecikmesiz, anında açılan sayfalar. React 19, Vite ve Next.js altyapısıyla 99+ Google Lighthouse skoru ve kusursuz teknik SEO optimizasyonu.',
      tags: ['React 19', 'Vite', 'Core Web Vitals', 'Teknik SEO'],
      highlight: '99+ Hız Skoru',
    },
    {
      id: '3d-config',
      category: '3d',
      icon: <Sparkles size={28} style={{ color: '#ffbe0b' }} />,
      title: '3D Ürün Konfigüratörleri',
      desc: 'Ürünlerinizi müşterilerinize 3 boyutlu olarak inceletin, renk ve materyallerini gerçek zamanlı değiştirmelerini sağlayarak dönüşüm oranlarınızı 3 katına çıkarın.',
      tags: ['E-Ticaret 3D', 'Gerçek Zamanlı Materyal', 'AR Desteği'],
      highlight: null,
    },
    {
      id: 'audio-motion',
      category: 'design',
      icon: <Volume2 size={28} style={{ color: '#00f5d4' }} />,
      title: 'Ses & Sinematik Motion Tasarımı',
      desc: 'Web Audio API ile entegre fütüristik kullanıcı deneyimi. Sayfa geçişlerinde, buton tıklamalarında ve kaydırma anlarında kullanıcıyı içine çeken ses manzaraları.',
      tags: ['Web Audio API', 'Motion UI', 'Sinematik Geçiş', 'Akıcı Scroll'],
      highlight: 'Duyusal Deneyim',
    },
  ];

  const filteredServices = activeTab === 'all' ? services : services.filter((s) => s.category === activeTab);

  const handleSendScope = () => {
    sound.playSuccess();
    if (onSelectScope) {
      onSelectScope({
        pageCount,
        complexity3D,
        hasAI,
        isFastTrack,
        totalCost,
        estimatedDays,
      });
    }
  };

  return (
    <section id="services" style={{ padding: '100px 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 60px auto' }}>
          <div className="glass-pill" style={{ marginBottom: '16px', color: '#00f5d4' }}>
            <Sparkles size={14} />
            <span>UZMANLIK ALANLARIMIZ</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', marginBottom: '20px', fontWeight: 800 }}>
            Sıradanlığı Reddeden, <span className="text-gradient">Geleceğin Dijital Çözümleri</span>
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#94a3b8' }}>
            Klasik web sitelerinin dönemi kapandı. Markanızı dijital dünyada rakiplerinizden açık ara öne çıkaracak 3D,
            etkileşimli ve yapay zeka destekli altyapılar inşa ediyoruz.
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
              marginTop: '32px',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {[
              { id: 'all', label: 'Tüm Hizmetler' },
              { id: '3d', label: '3D & WebGL' },
              { id: 'ai', label: 'Yapay Zeka' },
              { id: 'design', label: 'Tasarım & UI' },
              { id: 'dev', label: 'Yazılım & Hız' },
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

        {/* Services Bento Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
            gap: '24px',
            marginBottom: '80px',
          }}
        >
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="glass-panel"
              onMouseEnter={() => sound.playHover()}
              style={{
                padding: '36px 30px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '24px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                background: 'rgba(12, 16, 26, 0.65)',
              }}
            >
              {service.highlight && (
                <div
                  style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    padding: '4px 12px',
                    borderRadius: '9999px',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    background: 'rgba(0, 245, 212, 0.15)',
                    color: '#00f5d4',
                    border: '1px solid rgba(0, 245, 212, 0.3)',
                    letterSpacing: '0.05em',
                  }}
                >
                  {service.highlight}
                </div>
              )}

              <div>
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '16px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '24px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  {service.icon}
                </div>

                <h3 style={{ fontSize: '1.45rem', marginBottom: '14px', fontWeight: 700 }}>{service.title}</h3>

                <p style={{ fontSize: '0.95rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '24px' }}>
                  {service.desc}
                </p>
              </div>

              <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
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

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: '#00f5d4',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                  }}
                >
                  <span>Detayları Keşfet</span>
                  <ArrowRight size={15} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Scope & Price Estimator Widget */}
        <div
          className="glass-panel"
          style={{
            padding: '48px',
            borderRadius: '28px',
            border: '1px solid rgba(0, 245, 212, 0.25)',
            background: 'linear-gradient(135deg, rgba(12, 17, 30, 0.85) 0%, rgba(8, 10, 18, 0.95) 100%)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), inset 0 0 30px rgba(0, 245, 212, 0.06)',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '20px',
              marginBottom: '36px',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
              paddingBottom: '24px',
            }}
          >
            <div>
              <div className="glass-pill" style={{ color: '#f72585', marginBottom: '10px' }}>
                <Calculator size={14} />
                <span>İNTERAKTİF MALİYET VE SÜRE HESAPLAYICI</span>
              </div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 800 }}>Projenizi Şekillendirin & Tahmini Süre/Bütçeyi Görün</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>
                İhtiyaçlarınıza uygun parametreleri seçin, yapay zeka ve 3D derinliğini belirleyin.
              </p>
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '32px',
              alignItems: 'center',
            }}
          >
            {/* Control Sliders */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {/* Slider 1: Pages */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <label style={{ fontSize: '0.9rem', fontWeight: 600, color: '#e2e8f0' }}>
                    Sayfa / Bölüm Sayısı
                  </label>
                  <span style={{ color: '#00f5d4', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
                    {pageCount} Bölüm
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="12"
                  value={pageCount}
                  onChange={(e) => {
                    sound.playHover();
                    setPageCount(parseInt(e.target.value));
                  }}
                  style={{
                    width: '100%',
                    accentColor: '#00f5d4',
                    cursor: 'pointer',
                  }}
                />
              </div>

              {/* Selector 2: 3D Complexity */}
              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '10px' }}>
                  3D & WebGL Animasyon Seviyesi
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                  {[
                    { id: 'basic', label: 'Temel 3D' },
                    { id: 'medium', label: 'Orta WebGL' },
                    { id: 'advanced', label: 'Özel Shaders' },
                  ].map((lvl) => (
                    <button
                      key={lvl.id}
                      onClick={() => {
                        sound.playClick();
                        setComplexity3D(lvl.id);
                      }}
                      style={{
                        padding: '10px 6px',
                        borderRadius: '12px',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        background: complexity3D === lvl.id ? 'rgba(0, 245, 212, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                        border: complexity3D === lvl.id ? '1px solid #00f5d4' : '1px solid rgba(255, 255, 255, 0.08)',
                        color: complexity3D === lvl.id ? '#00f5d4' : '#94a3b8',
                      }}
                    >
                      {lvl.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Toggles: AI & Fast Track */}
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <label
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontSize: '0.88rem',
                    color: '#e2e8f0',
                    cursor: 'pointer',
                    background: 'rgba(255,255,255,0.03)',
                    padding: '10px 14px',
                    borderRadius: '12px',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <input
                    type="checkbox"
                    checked={hasAI}
                    onChange={(e) => {
                      sound.playClick();
                      setHasAI(e.target.checked);
                    }}
                    style={{ accentColor: '#f72585' }}
                  />
                  <span>Yapay Zekâ Ajanı Entegre Et</span>
                </label>

                <label
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontSize: '0.88rem',
                    color: '#e2e8f0',
                    cursor: 'pointer',
                    background: 'rgba(255,255,255,0.03)',
                    padding: '10px 14px',
                    borderRadius: '12px',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <input
                    type="checkbox"
                    checked={isFastTrack}
                    onChange={(e) => {
                      sound.playClick();
                      setIsFastTrack(e.target.checked);
                    }}
                    style={{ accentColor: '#ffbe0b' }}
                  />
                  <span>Öncelikli / Hızlandırılmış Sprint</span>
                </label>
              </div>
            </div>

            {/* Estimate Result Box */}
            <div
              style={{
                background: 'rgba(15, 20, 32, 0.8)',
                padding: '32px',
                borderRadius: '20px',
                border: '1px solid rgba(0, 245, 212, 0.3)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <span style={{ fontSize: '0.85rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Tahmini Demo & Canlı Yatırım
                </span>
                <div style={{ margin: '14px 0 20px 0' }}>
                  <span
                    style={{
                      fontSize: '2.5rem',
                      fontWeight: 800,
                      fontFamily: 'var(--font-display)',
                      color: '#00f5d4',
                    }}
                  >
                    ₺{totalCost.toLocaleString('tr-TR')}
                  </span>
                  <span style={{ color: '#64748b', fontSize: '0.9rem', marginLeft: '8px' }}>+ KDV</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: '#cbd5e1' }}>
                    <CheckCircle2 size={16} style={{ color: '#00f5d4' }} />
                    <span>Ortalama Teslim: <strong>{estimatedDays} İş Günü</strong></span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: '#cbd5e1' }}>
                    <CheckCircle2 size={16} style={{ color: '#00f5d4' }} />
                    <span>GitHub Demo Kod Deposu ve CI/CD dahil</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: '#cbd5e1' }}>
                    <CheckCircle2 size={16} style={{ color: '#00f5d4' }} />
                    <span>3D Etkileşimli Panel & Tam Mobil Uyumluluk</span>
                  </div>
                </div>
              </div>

              <button onClick={handleSendScope} className="btn-primary" style={{ width: '100%' }}>
                <span>Bu Kapsamda Teklif İste</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

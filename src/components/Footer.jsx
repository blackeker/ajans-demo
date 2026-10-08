import { useState, useEffect } from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from './Icons';
import { sound } from '../utils/audio';

export default function Footer({ onNavigate }) {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('tr-TR', {
          timeZone: 'Europe/Istanbul',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    sound.playWarp();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        background: '#040508',
        padding: '70px 0 30px 0',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '40px',
            marginBottom: '60px',
          }}
        >
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #00f5d4 0%, #3a86ff 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#050608',
                  fontWeight: 900,
                  fontSize: '1rem',
                }}
              >
                N
              </div>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.3rem', color: '#fff' }}>
                NEXUS STUDIO
              </span>
            </div>
            <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.6, maxWidth: '300px', marginBottom: '20px' }}>
              Geleneksel web sitelerini geride bırakan, 3D WebGL ve yapay zeka destekli yeni nesil dijital ajans.
            </p>

            {/* Live Clock & Status */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: '9999px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                fontSize: '0.8rem',
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#00f5d4',
                  boxShadow: '0 0 10px #00f5d4',
                }}
              />
              <span style={{ color: '#cbd5e1' }}>İstanbul: {time} (GMT+3)</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '20px', color: '#fff' }}>Menü</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { id: 'hero', label: 'Ana Sayfa & 3D Giriş' },
                { id: 'services', label: 'Hizmetlerimiz' },
                { id: 'portfolio', label: 'Projelerimiz' },
                { id: 'lab', label: 'Performans Lab' },
                { id: 'github', label: 'GitHub Demo Deposu' },
                { id: 'contact', label: 'Teklif & İletişim' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    sound.playHover();
                    onNavigate(item.id);
                  }}
                  style={{
                    color: '#94a3b8',
                    fontSize: '0.88rem',
                    textAlign: 'left',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = '#00f5d4')}
                  onMouseLeave={(e) => (e.target.style.color = '#94a3b8')}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* GitHub Links */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '20px', color: '#fff' }}>GitHub Bağlantıları</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a
                href="https://github.com/blackeker/ajans-demo"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#00f5d4', fontSize: '0.88rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}
              >
                <GithubIcon size={16} />
                <span>blackeker/ajans-demo</span>
              </a>
              <a
                href="https://github.com/blackeker"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#94a3b8', fontSize: '0.88rem', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.target.style.color = '#fff')}
                onMouseLeave={(e) => (e.target.style.color = '#94a3b8')}
              >
                Geliştirici Profili (@blackeker)
              </a>
              <span style={{ fontSize: '0.8rem', color: '#64748b' }}>
                Lisans: MIT (Özgür & Açık Kaynak Demo)
              </span>
            </div>
          </div>

          {/* Social & Back to Top */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '20px', color: '#fff' }}>Sosyal Ağlar</h4>
              <div style={{ display: 'flex', gap: '12px' }}>
                {[
                  { icon: <GithubIcon size={18} />, href: 'https://github.com/blackeker/ajans-demo' },
                  { icon: <TwitterIcon size={18} />, href: 'https://x.com' },
                  { icon: <LinkedinIcon size={18} />, href: 'https://linkedin.com' },
                  { icon: <InstagramIcon size={18} />, href: 'https://instagram.com' },
                ].map((s, idx) => (
                  <a
                    key={idx}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => sound.playHover()}
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#cbd5e1',
                      transition: 'all 0.2s',
                    }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="glass-panel"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 18px',
                borderRadius: '9999px',
                fontSize: '0.85rem',
                color: '#fff',
                width: 'fit-content',
                marginTop: '24px',
              }}
            >
              <span>Yukarı Çık</span>
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            paddingTop: '24px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '12px',
            fontSize: '0.82rem',
            color: '#64748b',
          }}
        >
          <div>
            © {new Date().getFullYear()} NEXUS STUDIO. Tüm Hakları Saklıdır. Demo sürümüdür.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>Tasarım ve Kodlama:</span>
            <span style={{ color: '#00f5d4', fontWeight: 600 }}>blackeker</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

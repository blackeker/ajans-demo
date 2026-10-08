import { useState } from 'react';
import { Send, CheckCircle2, Mail, Phone, MapPin, Sparkles } from 'lucide-react';
import { sound } from '../utils/audio';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceType: '3d-webgl',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    sound.playSuccess();
    setSubmitted(true);
  };

  return (
    <section id="contact" style={{ padding: '90px 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 50px auto' }}>
          <div className="glass-pill" style={{ marginBottom: '16px', color: '#00f5d4' }}>
            <Sparkles size={14} />
            <span>İLETİŞİM</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)', marginBottom: '18px', fontWeight: 800 }}>
            Projenizi <span className="text-gradient">Birlikte Başlatalım</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#94a3b8' }}>
            3D web siteniz veya dijital projeniz için bize mesaj bırakın, demo ve teknik detayları görüşelim.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
            maxWidth: '1000px',
            margin: '0 auto',
          }}
        >
          {/* Direct Contact Info */}
          <div
            className="glass-panel"
            style={{
              padding: '36px',
              borderRadius: '22px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '16px' }}>Hızlı İletişim</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '28px' }}>
                İster e-posta ile, ister doğrudan arayarak ajansımızla iletişime geçebilirsiniz.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      background: 'rgba(0, 245, 212, 0.1)',
                      border: '1px solid rgba(0, 245, 212, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#00f5d4',
                    }}
                  >
                    <Mail size={18} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: '#64748b' }}>E-Posta</span>
                    <p style={{ fontWeight: 600, color: '#fff', fontSize: '0.92rem' }}>DEMO@demo.com</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      background: 'rgba(247, 37, 133, 0.1)',
                      border: '1px solid rgba(247, 37, 133, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#f72585',
                    }}
                  >
                    <Phone size={18} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Telefon & WhatsApp</span>
                    <p style={{ fontWeight: 600, color: '#fff', fontSize: '0.92rem' }}>+90 (555) 000 00 00</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      background: 'rgba(58, 134, 255, 0.1)',
                      border: '1px solid rgba(58, 134, 255, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#3a86ff',
                    }}
                  >
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Konum</span>
                    <p style={{ fontWeight: 600, color: '#fff', fontSize: '0.92rem' }}>İstanbul, Türkiye</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div
            className="glass-panel"
            style={{
              padding: '36px',
              borderRadius: '22px',
              border: '1px solid rgba(0, 245, 212, 0.25)',
              background: 'rgba(11, 15, 26, 0.85)',
            }}
          >
            {submitted ? (
              <div
                style={{
                  height: '100%',
                  minHeight: '280px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  padding: '20px',
                }}
              >
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'rgba(0, 245, 212, 0.15)',
                    border: '2px solid #00f5d4',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#00f5d4',
                    marginBottom: '18px',
                    boxShadow: '0 0 20px rgba(0, 245, 212, 0.4)',
                  }}
                >
                  <CheckCircle2 size={30} />
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '8px' }}>
                  Mesajınız Alındı!
                </h3>
                <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '20px' }}>
                  Demo talebiniz kaydedildi, en kısa sürede dönüş yapılacaktır.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary"
                  style={{ padding: '8px 20px', fontSize: '0.85rem' }}
                >
                  Yeni Mesaj Yaz
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: '#cbd5e1', marginBottom: '6px' }}>
                    Adınız & Soyadınız *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Adınız Soyadınız"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '12px',
                      color: '#fff',
                      fontSize: '0.9rem',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: '#cbd5e1', marginBottom: '6px' }}>
                    E-Posta Adresiniz *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="ornek@ajans.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '12px',
                      color: '#fff',
                      fontSize: '0.9rem',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: '#cbd5e1', marginBottom: '6px' }}>
                    Hizmet Türü
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      background: '#0d111d',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '12px',
                      color: '#fff',
                      fontSize: '0.9rem',
                      outline: 'none',
                    }}
                  >
                    <option value="3d-webgl">3D & WebGL Web Sitesi</option>
                    <option value="uiux">UI/UX & Marka Tasarımı</option>
                    <option value="ai">Yapay Zekâ Entegrasyonu</option>
                    <option value="full">Komple Web Projesi</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: '#cbd5e1', marginBottom: '6px' }}>
                    Mesajınız / Notunuz
                  </label>
                  <textarea
                    rows="3"
                    required
                    placeholder="Web siteniz için düşündüğünüz 3D detaylar ve istekler..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '12px',
                      color: '#fff',
                      fontSize: '0.9rem',
                      outline: 'none',
                      resize: 'vertical',
                    }}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '6px' }}>
                  <span>Talebi Gönder</span>
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

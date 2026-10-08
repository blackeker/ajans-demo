import { useState, useEffect } from 'react';
import { Send, CheckCircle2, MessageSquare, Mail, Phone, MapPin, Sparkles, Clock } from 'lucide-react';
import { sound } from '../utils/audio';

export default function ContactSection({ incomingScope }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    serviceType: '3d-webgl',
    budget: '50k-100k',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  // Sync if incoming scope is passed from the services calculator
  useEffect(() => {
    if (incomingScope) {
      setFormData((prev) => ({
        ...prev,
        message: `Merhaba NEXUS Ekibi! Hesaplayıcıdan şu kapsamda bir proje hazırladım:
- Sayfa/Bölüm Sayısı: ${incomingScope.pageCount}
- 3D Seviyesi: ${incomingScope.complexity3D}
- Yapay Zeka Entegrasyonu: ${incomingScope.hasAI ? 'Evet' : 'Hayır'}
- Hızlı Teslimat Sprint: ${incomingScope.isFastTrack ? 'Evet' : 'Hayır'}
- Tahmini Bütçe: ₺${incomingScope.totalCost.toLocaleString('tr-TR')}
- Hedef Süre: ~${incomingScope.estimatedDays} İş Günü

Detayları görüşmek için demo toplantısı planlamak istiyorum.`,
      }));
    }
  }, [incomingScope]);

  const handleSubmit = (e) => {
    e.preventDefault();
    sound.playSuccess();
    setSubmitted(true);
  };

  return (
    <section id="contact" style={{ padding: '100px 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 60px auto' }}>
          <div className="glass-pill" style={{ marginBottom: '16px', color: '#ffbe0b' }}>
            <Sparkles size={14} />
            <span>YENİ BİR BAŞLANGIÇ</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', marginBottom: '20px', fontWeight: 800 }}>
            Fikrinizi <span className="text-gradient">3D Gerçekliğe Dönüştürelim</span>
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#94a3b8' }}>
            Yeni nesil web siteniz veya interaktif projeniz için ilk adımı atın. 24 saat içinde detaylı teknik
            yol haritası ve demo tasarımıyla dönüş yapıyoruz.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '36px',
            maxWidth: '1100px',
            margin: '0 auto',
          }}
        >
          {/* Left: Contact Info & Agency Hub */}
          <div
            className="glass-panel"
            style={{
              padding: '40px',
              borderRadius: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '16px' }}>Doğrudan İletişim</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '32px' }}>
                İster bir kahve eşliğinde Maslak ofisimizde, ister uzaktan Google Meet üzerinden projenizi
                konuşabiliriz.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      background: 'rgba(0, 245, 212, 0.1)',
                      border: '1px solid rgba(0, 245, 212, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#00f5d4',
                    }}
                  >
                    <Mail size={20} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: '#64748b' }}>E-Posta</span>
                    <p style={{ fontWeight: 600, color: '#fff', fontSize: '0.95rem' }}>hello@nexus-ajans.demo</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      background: 'rgba(247, 37, 133, 0.1)',
                      border: '1px solid rgba(247, 37, 133, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#f72585',
                    }}
                  >
                    <Phone size={20} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Telefon & WhatsApp</span>
                    <p style={{ fontWeight: 600, color: '#fff', fontSize: '0.95rem' }}>+90 (212) 800 3D 00</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      background: 'rgba(58, 134, 255, 0.1)',
                      border: '1px solid rgba(58, 134, 255, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#3a86ff',
                    }}
                  >
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Ofis</span>
                    <p style={{ fontWeight: 600, color: '#fff', fontSize: '0.95rem' }}>
                      Maslak 42 Teknoloji Kulesi, İstanbul
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Promise Badge */}
            <div
              style={{
                marginTop: '36px',
                padding: '16px 20px',
                borderRadius: '14px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.07)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <Clock size={20} style={{ color: '#00f5d4' }} />
              <div>
                <p style={{ fontSize: '0.85rem', fontWeight: 700, color: '#fff' }}>24 Saat İçinde Garantili Yanıt</p>
                <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Teknik demo ve 3D ön fizibilite raporu</span>
              </div>
            </div>
          </div>

          {/* Right: Interactive Project Form */}
          <div
            className="glass-panel"
            style={{
              padding: '40px',
              borderRadius: '24px',
              border: '1px solid rgba(0, 245, 212, 0.25)',
              background: 'rgba(11, 15, 26, 0.85)',
            }}
          >
            {submitted ? (
              <div
                style={{
                  height: '100%',
                  minHeight: '360px',
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
                    width: '70px',
                    height: '70px',
                    borderRadius: '50%',
                    background: 'rgba(0, 245, 212, 0.15)',
                    border: '2px solid #00f5d4',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#00f5d4',
                    marginBottom: '20px',
                    boxShadow: '0 0 25px rgba(0, 245, 212, 0.5)',
                  }}
                >
                  <CheckCircle2 size={36} />
                </div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '10px' }}>
                  Proje Talebiniz Alındı!
                </h3>
                <p style={{ color: '#94a3b8', fontSize: '0.95rem', maxWidth: '400px', marginBottom: '24px' }}>
                  Harika bir vizyon! Teknik ekibimiz 24 saat içinde sizinle iletişime geçecek ve size özel 3D demo
                  taslağını iletecektir.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary"
                  style={{ padding: '10px 24px', fontSize: '0.85rem' }}
                >
                  Yeni Form Gönder
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '8px' }}>
                      Adınız & Soyadınız *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Kerem Demir"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
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
                    <label style={{ display: 'block', fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '8px' }}>
                      E-Posta Adresiniz *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="kerem@sirket.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '12px',
                        color: '#fff',
                        fontSize: '0.9rem',
                        outline: 'none',
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '8px' }}>
                      İlgilendiğiniz Hizmet
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        background: '#0d111d',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '12px',
                        color: '#fff',
                        fontSize: '0.9rem',
                        outline: 'none',
                      }}
                    >
                      <option value="3d-webgl">3D & WebGL Deneyimi</option>
                      <option value="ai">Yapay Zekâ & Ajan</option>
                      <option value="brand">UI/UX & Marka Kimliği</option>
                      <option value="full">Tam Kapsamlı Ajans Hizmeti</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '8px' }}>
                      Planlanan Bütçe Aralığı
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        background: '#0d111d',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '12px',
                        color: '#fff',
                        fontSize: '0.9rem',
                        outline: 'none',
                      }}
                    >
                      <option value="25k-50k">₺25.000 - ₺50.000</option>
                      <option value="50k-100k">₺50.000 - ₺100.000</option>
                      <option value="100k+">₺100.000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '8px' }}>
                    Proje Özeti & Vizyonunuz
                  </label>
                  <textarea
                    rows="4"
                    required
                    placeholder="Web sitenizde olmasını istediğiniz 3D animasyonlar, geçişler ve hedefler..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
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
                  <span>3D Demo & Teklif Talebini Gönder</span>
                  <Send size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

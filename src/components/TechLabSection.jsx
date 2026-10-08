import { useState, useEffect, useRef } from 'react';
import { Cpu, Activity, Zap, Terminal, Code2, Gauge, RefreshCw } from 'lucide-react';
import { sound } from '../utils/audio';

export default function TechLabSection() {
  const [particleDensity, setParticleDensity] = useState(120);
  const [renderSpeed, setRenderSpeed] = useState(1);
  const [liveMetrics, setLiveMetrics] = useState({
    fps: 60,
    latency: '1.2ms',
    drawCalls: 18,
    memory: '24.6 MB',
  });

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    let width = (canvas.width = canvas.parentElement.clientWidth);
    let height = (canvas.height = 240);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = 240;
    };
    window.addEventListener('resize', handleResize);

    // Particle nodes for simulation
    const nodes = [];
    for (let i = 0; i < particleDensity; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 1.5 * renderSpeed,
        vy: (Math.random() - 0.5) * 1.5 * renderSpeed,
        radius: Math.random() * 2 + 1,
        color: i % 3 === 0 ? '#00f5d4' : i % 3 === 1 ? '#f72585' : '#3a86ff',
      });
    }

    let frameCount = 0;
    let lastTime = performance.now();

    const render = (time) => {
      animId = requestAnimationFrame(render);

      frameCount++;
      if (time - lastTime >= 1000) {
        const calculatedFps = Math.min(60, Math.round((frameCount * 1000) / (time - lastTime)));
        setLiveMetrics({
          fps: calculatedFps,
          latency: `${(1000 / calculatedFps).toFixed(1)}ms`,
          drawCalls: Math.round(particleDensity / 6) + 4,
          memory: `${(22 + (particleDensity * 0.04)).toFixed(1)} MB`,
        });
        frameCount = 0;
        lastTime = time;
      }

      ctx.fillStyle = 'rgba(7, 9, 15, 0.25)';
      ctx.fillRect(0, 0, width, height);

      // Connect near nodes with lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 65) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 245, 212, ${0.35 * (1 - dist / 65)})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw and move nodes
      nodes.forEach((n) => {
        n.x += n.vx * renderSpeed;
        n.y += n.vy * renderSpeed;

        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = n.color;
        ctx.shadowColor = n.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      });
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, [particleDensity, renderSpeed]);

  const techStack = [
    { name: 'Three.js & WebGL', level: '99%', desc: '60fps donanım hızlandırmalı uzamsal 3D' },
    { name: 'GLSL Custom Shaders', level: '95%', desc: 'Piksel bazlı dinamik görsel efektler' },
    { name: 'React 19 & Vite 6', level: '98%', desc: 'Sıfır gecikmeli HMR ve ultra hafif bundle' },
    { name: 'Web Audio API', level: '92%', desc: 'Kullanıcı etkileşimine duyarlı ses sentezleme' },
    { name: 'TypeScript & CI/CD', level: '96%', desc: 'Hatasız, tip güvenli kurumsal kod tabanı' },
    { name: 'Lighthouse Performance', level: '99%', desc: 'Kusursuz Core Web Vitals ve SEO' },
  ];

  return (
    <section id="lab" style={{ padding: '100px 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 60px auto' }}>
          <div className="glass-pill" style={{ marginBottom: '16px', color: '#3a86ff' }}>
            <Terminal size={14} />
            <span>AR-GE & PERFORMANS LABORATUVARI</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', marginBottom: '20px', fontWeight: 800 }}>
            Yüksek Mühendislik, <span className="text-gradient">Sıfır Gecikme</span>
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#94a3b8' }}>
            Klasik ajanslar hazır temalara bağlı kalırken, biz her satır kodu GPU optimizasyonları ve
            modern WebGL standartlarıyla sıfırdan dokuyoruz.
          </p>
        </div>

        {/* Tech Grid & Benchmark Canvas */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '32px',
          }}
        >
          {/* Tech Stack Breakdown */}
          <div
            className="glass-panel"
            style={{
              padding: '36px',
              borderRadius: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
                <Code2 size={24} style={{ color: '#00f5d4' }} />
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700 }}>Teknoloji Cephaneliğimiz</h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {techStack.map((tech, i) => (
                  <div key={i}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <span style={{ fontWeight: 600, color: '#f1f5f9', fontSize: '0.95rem' }}>{tech.name}</span>
                      <span style={{ fontFamily: 'var(--font-mono)', color: '#00f5d4', fontWeight: 700 }}>
                        {tech.level}
                      </span>
                    </div>
                    <div
                      style={{
                        width: '100%',
                        height: '6px',
                        background: 'rgba(255,255,255,0.06)',
                        borderRadius: '9999px',
                        overflow: 'hidden',
                        marginBottom: '4px',
                      }}
                    >
                      <div
                        style={{
                          width: tech.level,
                          height: '100%',
                          background: 'linear-gradient(90deg, #00f5d4 0%, #3a86ff 100%)',
                          borderRadius: '9999px',
                        }}
                      />
                    </div>
                    <span style={{ fontSize: '0.8rem', color: '#64748b' }}>{tech.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Realtime Canvas Benchmark & Metrics */}
          <div
            className="glass-panel"
            style={{
              padding: '36px',
              borderRadius: '24px',
              border: '1px solid rgba(58, 134, 255, 0.3)',
              background: 'rgba(10, 14, 25, 0.8)',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '20px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Activity size={24} style={{ color: '#3a86ff' }} />
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700 }}>Canlı GPU & Canvas Simülasyonu</h3>
              </div>
              <span className="glass-pill" style={{ color: '#00f5d4', fontSize: '0.75rem' }}>
                Gerçek Zamanlı
              </span>
            </div>

            {/* Live Metrics Counter Bar */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '10px',
                marginBottom: '20px',
                textAlign: 'center',
              }}
            >
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '10px', borderRadius: '12px' }}>
                <span style={{ fontSize: '0.72rem', color: '#64748b' }}>FPS</span>
                <p style={{ fontWeight: 800, color: '#00f5d4', fontFamily: 'var(--font-mono)', fontSize: '1.1rem' }}>
                  {liveMetrics.fps}
                </p>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '10px', borderRadius: '12px' }}>
                <span style={{ fontSize: '0.72rem', color: '#64748b' }}>Gecikme</span>
                <p style={{ fontWeight: 800, color: '#3a86ff', fontFamily: 'var(--font-mono)', fontSize: '1.1rem' }}>
                  {liveMetrics.latency}
                </p>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '10px', borderRadius: '12px' }}>
                <span style={{ fontSize: '0.72rem', color: '#64748b' }}>Draw Call</span>
                <p style={{ fontWeight: 800, color: '#f72585', fontFamily: 'var(--font-mono)', fontSize: '1.1rem' }}>
                  {liveMetrics.drawCalls}
                </p>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '10px', borderRadius: '12px' }}>
                <span style={{ fontSize: '0.72rem', color: '#64748b' }}>Bellek</span>
                <p style={{ fontWeight: 800, color: '#ffbe0b', fontFamily: 'var(--font-mono)', fontSize: '1.1rem' }}>
                  {liveMetrics.memory}
                </p>
              </div>
            </div>

            {/* Interactive Canvas */}
            <div
              style={{
                width: '100%',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.08)',
                background: '#07090f',
                marginBottom: '20px',
              }}
            >
              <canvas ref={canvasRef} style={{ width: '100%', height: '240px', display: 'block' }} />
            </div>

            {/* Canvas Interactive Controls */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '4px' }}>
                  <span style={{ color: '#94a3b8' }}>Düğüm Yoğunluğu (Nodes)</span>
                  <span style={{ color: '#00f5d4', fontFamily: 'var(--font-mono)' }}>{particleDensity} Parçacık</span>
                </div>
                <input
                  type="range"
                  min="40"
                  max="240"
                  value={particleDensity}
                  onChange={(e) => {
                    sound.playHover();
                    setParticleDensity(parseInt(e.target.value));
                  }}
                  style={{ width: '100%', accentColor: '#00f5d4' }}
                />
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '4px' }}>
                  <span style={{ color: '#94a3b8' }}>Hız Katsayısı</span>
                  <span style={{ color: '#3a86ff', fontFamily: 'var(--font-mono)' }}>{renderSpeed}x</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="3"
                  step="0.5"
                  value={renderSpeed}
                  onChange={(e) => {
                    sound.playHover();
                    setRenderSpeed(parseFloat(e.target.value));
                  }}
                  style={{ width: '100%', accentColor: '#3a86ff' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

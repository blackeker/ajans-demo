import { useEffect, useState } from 'react';

export default function PageTransition({ isTransitioning, targetTitle }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isTransitioning) {
      setVisible(true);
    } else {
      const timer = setTimeout(() => {
        setVisible(false);
      }, 450);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  if (!visible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        pointerEvents: 'none',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {[0, 1, 2, 3, 4].map((index) => (
        <div
          key={index}
          style={{
            flex: 1,
            background: '#07090e',
            transform: isTransitioning ? 'scaleX(1)' : 'scaleX(0)',
            transformOrigin: index % 2 === 0 ? 'right' : 'left',
            transition: `transform 0.4s cubic-bezier(0.77, 0, 0.175, 1) ${index * 0.04}s`,
            borderBottom: '1px solid rgba(0, 245, 212, 0.08)',
          }}
        />
      ))}

      {/* Center glowing badge during transition */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: isTransitioning ? 1 : 0,
          transition: 'opacity 0.25s ease',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <div
          style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            backgroundColor: '#00f5d4',
            boxShadow: '0 0 20px #00f5d4',
            animation: 'pulseGlow 0.8s infinite',
          }}
        />
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.9rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#00f5d4',
            fontWeight: 700,
          }}
        >
          {targetTitle || 'NEXUS • GEÇİŞ'}
        </span>
      </div>
    </div>
  );
}

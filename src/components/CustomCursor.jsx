import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isPointerDevice, setIsPointerDevice] = useState(true);

  useEffect(() => {
    // Check if device has a fine pointer (mouse)
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsPointerDevice(false);
      return;
    }

    let currentTrailX = -100;
    let currentTrailY = -100;
    let targetX = -100;
    let targetY = -100;
    let animFrame;

    const onMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setPosition({ x: targetX, y: targetY });

      // Check if target is clickable
      const target = e.target;
      const isClickable = target.closest('button, a, input, select, textarea, [role="button"], .interactive-hover');
      setIsHovering(!!isClickable);
    };

    const animateTrail = () => {
      currentTrailX += (targetX - currentTrailX) * 0.18;
      currentTrailY += (targetY - currentTrailY) * 0.18;
      setTrail({ x: currentTrailX, y: currentTrailY });
      animFrame = requestAnimationFrame(animateTrail);
    };

    window.addEventListener('mousemove', onMouseMove);
    animFrame = requestAnimationFrame(animateTrail);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  if (!isPointerDevice) return null;

  return (
    <>
      <div
        className="custom-cursor-dot"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`,
        }}
      />
      <div
        className={`custom-cursor-ring ${isHovering ? 'hovering' : ''}`}
        style={{
          left: `${trail.x}px`,
          top: `${trail.y}px`,
        }}
      />
    </>
  );
}
33
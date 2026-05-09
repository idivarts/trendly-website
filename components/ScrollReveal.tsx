'use client';
import { useEffect, useRef, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  /** Delay before transition starts (ms) */
  delay?: number;
  /** Initial hidden transform direction */
  direction?: 'up' | 'left' | 'right' | 'scale';
  /** How far the element travels (px) */
  distance?: number;
  /** IntersectionObserver threshold (0–1) */
  threshold?: number;
}

const TRANSFORMS: Record<string, (d: number) => string> = {
  up:    (d) => `translateY(${d}px)`,
  left:  (d) => `translateX(-${d}px)`,
  right: (d) => `translateX(${d}px)`,
  scale: (d) => `scale(0.94) translateY(${d * 0.5}px)`,
};

/**
 * Wraps children in an invisible div that fades + slides/scales into view
 * once it enters the viewport. Uses IntersectionObserver — no layout thrash.
 * Safe to import from server components.
 */
export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  distance = 30,
  threshold = 0.1,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Wire up the transition after mount so SSR snapshot is already hidden
    el.style.transition = [
      `opacity 0.75s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      `transform 0.75s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
    ].join(', ');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'none';
          observer.disconnect();
        }
      },
      { threshold, rootMargin: '0px 0px -24px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, threshold]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        transform: TRANSFORMS[direction](distance),
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}

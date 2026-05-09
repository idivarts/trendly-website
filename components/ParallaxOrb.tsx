'use client';
import { useEffect, useRef } from 'react';

interface Props {
  className: string;
  /** Fraction of scrollY to apply as translateY. 0.1 = slow drift, 0.3 = noticeable. */
  speed?: number;
}

/**
 * A positioned blob div that drifts vertically as the user scrolls,
 * creating a parallax depth illusion. Safe to import from server components.
 */
export default function ParallaxOrb({ className, speed = 0.12 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      el.style.transform = `translateY(${window.scrollY * speed}px)`;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [speed]);

  return <div ref={ref} className={className} />;
}

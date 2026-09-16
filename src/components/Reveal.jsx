import React, { useEffect, useRef, useState } from 'react';

export const Reveal = ({
  children,
  animation = 'fade-up', // 'fade-up', 'fade-down', 'fade-left', 'fade-right', 'zoom-in'
  delay = 0,
  duration = 700,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const getAnimationStyles = () => {
    const baseStyle = {
      transitionProperty: 'opacity, transform',
      transitionDuration: `${duration}ms`,
      transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      transitionDelay: `${delay}ms`,
    };

    if (!isVisible) {
      switch (animation) {
        case 'fade-up':
          return { ...baseStyle, opacity: 0, transform: 'translate3d(0, 40px, 0)' };
        case 'fade-down':
          return { ...baseStyle, opacity: 0, transform: 'translate3d(0, -40px, 0)' };
        case 'fade-left':
          return { ...baseStyle, opacity: 0, transform: 'translate3d(40px, 0, 0)' };
        case 'fade-right':
          return { ...baseStyle, opacity: 0, transform: 'translate3d(-40px, 0, 0)' };
        case 'zoom-in':
          return { ...baseStyle, opacity: 0, transform: 'scale(0.92)' };
        default:
          return { ...baseStyle, opacity: 0, transform: 'translate3d(0, 40px, 0)' };
      }
    }

    return {
      ...baseStyle,
      opacity: 1,
      transform: 'translate3d(0, 0, 0) scale(1)'
    };
  };

  return (
    <div ref={ref} style={getAnimationStyles()} className={className}>
      {children}
    </div>
  );
};

'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';

type ScrollAnimationProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  amount?: number;
  once?: boolean;
  viewportMargin?: string;
} & HTMLMotionProps<'div'>;

export function ScrollAnimation({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  amount = 20,
  once = true,
  viewportMargin = '-50px',
  ...props
}: ScrollAnimationProps) {
  const directionMap = {
    up: { y: amount },
    down: { y: -amount },
    left: { x: amount },
    right: { x: -amount },
  };

  const initial = directionMap[direction];
  const animate = { x: 0, y: 0 };

  return (
    <motion.div
      initial={{ ...initial, opacity: 0 }}
      whileInView={{ ...animate, opacity: 1 }}
      viewport={{ once, margin: viewportMargin }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// Pre-configured variants for common use cases
export const FadeIn = (props: Omit<ScrollAnimationProps, 'direction' | 'amount'>) => (
  <ScrollAnimation direction="up" amount={0} {...props} />
);

export const SlideUp = (props: Omit<ScrollAnimationProps, 'direction'>) => (
  <ScrollAnimation direction="up" {...props} />
);

export const SlideDown = (props: Omit<ScrollAnimationProps, 'direction'>) => (
  <ScrollAnimation direction="down" {...props} />
);

export const SlideLeft = (props: Omit<ScrollAnimationProps, 'direction'>) => (
  <ScrollAnimation direction="left" {...props} />
);

export const SlideRight = (props: Omit<ScrollAnimationProps, 'direction'>) => (
  <ScrollAnimation direction="right" {...props} />
);

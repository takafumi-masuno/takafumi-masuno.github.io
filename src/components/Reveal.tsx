"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** 表示開始までの遅延（秒） */
  delay?: number;
  /** true のときはスクロールを待たず、読み込み直後に表示する（ヒーロー用） */
  immediate?: boolean;
};

const hidden = { opacity: 0, y: 24 };
const shown = { opacity: 1, y: 0 };

/** 画面内に入ったときにフェード＋スライドインで表示する */
export function Reveal({
  children,
  className,
  delay = 0,
  immediate = false,
}: RevealProps) {
  const transition = {
    duration: 0.7,
    delay,
    ease: [0.22, 1, 0.36, 1],
  } as const;

  if (immediate) {
    return (
      <motion.div
        className={className}
        initial={hidden}
        animate={shown}
        transition={transition}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={hidden}
      whileInView={shown}
      viewport={{ once: true, amount: 0.2 }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}

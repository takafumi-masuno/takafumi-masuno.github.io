"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/**
 * OS の「視差効果を減らす」設定を尊重する。
 * reducedMotion="user" では移動・拡大などの transform アニメーションが止まり、
 * 不透明度の変化だけが残る。
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

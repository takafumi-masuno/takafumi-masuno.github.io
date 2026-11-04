"use client";

import { motion } from "motion/react";

/** 経験年数の長さを示すバー。画面に入ると左から伸びる */
export function SkillBar({
  ratio,
  partial,
}: {
  /** 0〜1。最長のスキルを 1 とした比率 */
  ratio: number;
  /** 業務での利用が一部のもの（1年未満表示）は点線で示す */
  partial: boolean;
}) {
  const width = `${Math.max(ratio, 0.04) * 100}%`;
  return (
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-border">
      <motion.div
        className={
          partial
            ? "h-full rounded-full border border-dashed border-accent bg-transparent"
            : "h-full rounded-full bg-linear-to-r from-accent to-accent-2"
        }
        style={{ width, originX: 0 }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}

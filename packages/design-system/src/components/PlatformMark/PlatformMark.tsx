import React from 'react';
import styles from './PlatformMark.module.css';

export type PlatformMarkProps = {
  className?: string;
  centerLabel?: string;
  interactive?: boolean;
};

export function PlatformMark({
  className,
  centerLabel = 'Portal',
  interactive = true,
}: PlatformMarkProps) {
  return (
    <div
      className={[
        styles.platformMark,
        interactive ? styles.interactive : '',
        className ?? '',
      ].join(' ')}
      aria-label="Brian Short Apps Platform Mark"
    >
      <svg viewBox="0 0 400 400" role="img" aria-labelledby="platformMarkTitle platformMarkDescription">
        <title id="platformMarkTitle">Brian Short Apps Platform Mark</title>
        <desc id="platformMarkDescription">
          Three concentric rings representing experience, products, and progress.
          The rings align on interaction to create clear access to the center.
        </desc>

        <g className={styles.outerRing}>
          <circle cx="200" cy="200" r="158" pathLength="360" />
        </g>

        <g className={styles.middleRing}>
          <circle cx="200" cy="200" r="132" pathLength="360" />
        </g>

        <g className={styles.innerRing}>
          <circle cx="200" cy="200" r="106" pathLength="360" />
        </g>

        <circle className={styles.productZone} cx="200" cy="200" r="72" />
      </svg>

      <div className={styles.centerLabel}>{centerLabel}</div>
    </div>
  );
}
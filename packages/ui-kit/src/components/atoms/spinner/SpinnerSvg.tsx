import { FC } from 'react';

interface Props {
  size?: number;
  color?: string;
  'aria-label'?: string;
}

export const SpinnerSvg: FC<Props> = ({ size = 16, color = 'currentColor', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 50 50" role="status" aria-live="polite" {...props}>
    <title>Loading</title>
    <circle
      cx="25"
      cy="25"
      r="20"
      fill="none"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="round"
      strokeDasharray="31.4 31.4"
      transform="rotate(-90 25 25)"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 25 25"
        to="360 25 25"
        dur="0.8s"
        repeatCount="indefinite"
      />
    </circle>
  </svg>
);

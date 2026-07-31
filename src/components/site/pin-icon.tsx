import type { SVGProps } from "react";

export function PinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="#fff"
        d="M12 2C7.58 2 4 5.58 4 10c0 5.25 6.72 11.19 7.02 11.45a1.5 1.5 0 0 0 1.96 0C13.28 21.19 20 15.25 20 10c0-4.42-3.58-8-8-8Z"
      />
      <text
        x="12"
        y="12.9"
        textAnchor="middle"
        fontSize="8.5"
        fontWeight="800"
        fill="#7c3aed"
        fontFamily="Arial, sans-serif"
      >
        P
      </text>
    </svg>
  );
}

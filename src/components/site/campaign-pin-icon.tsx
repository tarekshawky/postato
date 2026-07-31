export function CampaignPinIcon({
  size = 50,
  gradientId = "heroPinGrad",
}: {
  size?: number;
  gradientId?: string;
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#9333EA" />
          <stop offset="100%" stopColor="#6B21A8" />
        </linearGradient>
      </defs>
      <path
        d="M24 2C16.268 2 10 8.268 10 16c0 10 14 28 14 28s14-18 14-28C38 8.268 31.732 2 24 2z"
        fill={`url(#${gradientId})`}
      />
      <text x="18" y="22" fontSize="14" fontWeight="800" fill="white" fontFamily="Inter, sans-serif">
        P
      </text>
      <circle cx="13" cy="40" r="2.5" fill="#9333EA" opacity="0.7" />
      <circle cx="24" cy="43" r="2.5" fill="#7C3AED" opacity="0.7" />
      <circle cx="35" cy="40" r="2.5" fill="#6B21A8" opacity="0.7" />
      <line x1="15.5" y1="40" x2="21.5" y2="43" stroke="#9333EA" strokeWidth="1" opacity="0.5" />
      <line x1="26.5" y1="43" x2="32.5" y2="40" stroke="#7C3AED" strokeWidth="1" opacity="0.5" />
    </svg>
  );
}

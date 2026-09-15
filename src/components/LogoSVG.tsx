"use client";

export default function LogoSVG({
  className = "",
  width = 120,
  height = 120,
}: {
  className?: string;
  width?: number;
  height?: number;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="200" height="200" fill="transparent" />
      {/* E letter */}
      <text
        x="30"
        y="140"
        fontFamily="'Playfair Display', Georgia, serif"
        fontSize="120"
        fontWeight="700"
        fill="currentColor"
        letterSpacing="-5"
      >
        E
      </text>
      {/* Reversed R */}
      <text
        x="170"
        y="140"
        fontFamily="'Playfair Display', Georgia, serif"
        fontSize="120"
        fontWeight="700"
        fill="currentColor"
        letterSpacing="-5"
        transform="scale(-1, 1) translate(-340, 0)"
      >
        R
      </text>
      {/* AGENCY text */}
      <text
        x="100"
        y="180"
        fontFamily="'Playfair Display', Georgia, serif"
        fontSize="22"
        fontWeight="400"
        fill="currentColor"
        letterSpacing="12"
        textAnchor="middle"
      >
        AGENCY
      </text>
    </svg>
  );
}

interface IconProps {
  className?: string;
  size?: number;
}

export default function SpeechBubbleIcon({
  className = "",
  size = 24,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M8 12H16M8 8H16M6 20.2L9.5 17.5H18.5C19.6 17.5 20.5 16.6 20.5 15.5V6.5C20.5 5.4 19.6 4.5 18.5 4.5H5.5C4.4 4.5 3.5 5.4 3.5 6.5V15.5C3.5 16.6 4.4 17.5 5.5 17.5H6V20.2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

import Image from "next/image";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function Logo({
  className = "",
  width = 120,
  height = 40,
}: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src="/logo.svg"
        alt="しちゅえーる"
        width={width}
        height={height}
        priority
        className="w-auto h-auto"
      />
    </div>
  );
}

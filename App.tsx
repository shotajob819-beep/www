import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({ className = "", size = 'md' }) => {
  const [hasError, setHasError] = useState(false);

  // Height-based sizing for image
  const imgSizeClasses = {
    sm: "h-8",
    md: "h-12",
    lg: "h-20",
    xl: "h-32"
  };

  // Text-based sizing for fallback
  const textSizeClasses = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-4xl",
    xl: "text-6xl md:text-8xl"
  };

  // 画像の読み込みに失敗した場合は、CSSでデザインしたテキストロゴを表示します
  if (hasError) {
    return (
      <div className={`font-serif font-black tracking-tight flex items-baseline leading-none select-none ${textSizeClasses[size]} ${className}`}>
        {/* Red L */}
        <span className="text-[#ce2e2e] text-[1.25em] drop-shadow-sm">L</span>
        {/* Green ink */}
        <span className="text-[#2e7d32] text-[0.55em] tracking-wide mx-[1px]">ink</span>
        {/* Blue R */}
        <span className="text-[#1565c0] text-[1.25em] ml-0.5 drop-shadow-sm">R</span>
        {/* Yellow oots */}
        <span className="text-[#f9a825] text-[0.55em] tracking-wide mx-[1px]">oots</span>
      </div>
    );
  }

  return (
    <img 
      src="https://file-s.s3.amazonaws.com/images/2237667a-1152-4740-9f5b-551046180373/linkroots-logo.jpg"
      alt="LinkRoots" 
      className={`object-contain ${imgSizeClasses[size]} ${className}`}
      onError={() => setHasError(true)}
    />
  );
};
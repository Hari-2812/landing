import React, { useState } from 'react';

export default function BlurImage({ src, alt, className = '' }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`overflow-hidden relative ${className}`}>
      {/* CSS Loader while blurred */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/5">
          <div className="w-6 h-6 border-2 border-indigo-pulse/30 border-t-indigo-pulse rounded-full animate-spin"></div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-700 ease-out will-change-transform ${isLoaded ? 'blur-0 opacity-100 scale-100' : 'blur-xl opacity-30 scale-110'}`}
      />
    </div>
  );
}

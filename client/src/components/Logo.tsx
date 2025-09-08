export function Logo() {
  return (
    <div className="flex items-center space-x-3 group" data-testid="logo">
      {/* Clean Geometric Pattern */}
      <div className="relative">
        <svg 
          className="h-12 w-12 transition-transform duration-300 group-hover:rotate-12" 
          viewBox="0 0 48 48" 
          fill="none"
        >
          {/* Outer circle */}
          <circle cx="24" cy="24" r="22" stroke="#D6A419" strokeWidth="1" fill="none" opacity="0.3"/>
          
          {/* Inner star/compass pattern */}
          <g transform="translate(24,24)">
            {/* 8-pointed star */}
            {Array.from({ length: 8 }).map((_, i) => (
              <g key={i} transform={`rotate(${i * 45})`}>
                <path d="M0,-16 L-2,-8 L0,-4 L2,-8 Z" fill="#D6A419" opacity="0.8"/>
                <path d="M0,-12 L-1,-6 L0,-2 L1,-6 Z" fill="#C1623C" opacity="0.9"/>
              </g>
            ))}
            
            {/* Center circle */}
            <circle r="3" fill="#6B1F2A"/>
          </g>
          
          {/* Small decorative dots */}
          {Array.from({ length: 4 }).map((_, i) => (
            <circle 
              key={i} 
              cx={24 + 18 * Math.cos(i * Math.PI / 2)} 
              cy={24 + 18 * Math.sin(i * Math.PI / 2)} 
              r="1" 
              fill="#D6A419" 
              opacity="0.6"
            />
          ))}
        </svg>
      </div>
      
      {/* Clean Typography */}
      <div className="relative">
        <h1 className="text-3xl font-serif font-bold tracking-wide text-[#6B1F2A]">
          ADVAYA
        </h1>
        
        {/* Hindi tagline */}
        <div className="text-sm text-[#C1623C] font-medium mt-1 tracking-wide">
          कैरी योर कल्चर
        </div>
        
        {/* English tagline */}
        <div className="text-xs text-[#7A8C6D] font-light tracking-widest uppercase mt-0.5 opacity-80">
          Handcrafted Heritage
        </div>
      </div>
    </div>
  );
}

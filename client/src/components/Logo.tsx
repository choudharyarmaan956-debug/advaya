export function Logo() {
  return (
    <div className="relative flex items-center space-x-4 group" data-testid="logo">
      {/* Sophisticated Indian Art Pattern with Lotus & Paisley */}
      <div className="relative">
        <svg 
          className="h-16 w-16 text-[#C1623C] drop-shadow-lg transition-transform duration-500 group-hover:scale-105" 
          viewBox="0 0 64 64" 
          fill="none"
        >
          {/* Outer decorative ring with block print style */}
          <circle cx="32" cy="32" r="30" stroke="url(#goldGradient)" strokeWidth="1" fill="none" opacity="0.6" strokeDasharray="2,1"/>
          
          {/* Lotus petals - main design */}
          <g transform="translate(32,32)">
            {/* Center lotus */}
            <circle r="4" fill="url(#centerGradient)" />
            
            {/* Lotus petals in 8 directions */}
            {Array.from({ length: 8 }).map((_, i) => (
              <g key={i} transform={`rotate(${i * 45})`}>
                <path d="M0,-8 Q-3,-15 0,-22 Q3,-15 0,-8 Z" fill="url(#petalGradient)" opacity="0.9"/>
                <path d="M0,-12 Q-2,-18 0,-20 Q2,-18 0,-12 Z" fill="url(#goldGradient)" opacity="0.7"/>
              </g>
            ))}
            
            {/* Inner paisley motifs */}
            {Array.from({ length: 4 }).map((_, i) => (
              <g key={i} transform={`rotate(${i * 90 + 45})`}>
                <path d="M0,-16 C-4,-16 -6,-12 -4,-10 C-2,-8 0,-10 0,-12 Z" fill="url(#paisleyGradient)" opacity="0.8"/>
              </g>
            ))}
          </g>
          
          {/* Outer decorative elements - henna style */}
          {Array.from({ length: 12 }).map((_, i) => (
            <circle 
              key={i} 
              cx={32 + 26 * Math.cos(i * Math.PI / 6)} 
              cy={32 + 26 * Math.sin(i * Math.PI / 6)} 
              r="1.5" 
              fill="url(#goldGradient)" 
              opacity="0.7"
            />
          ))}
          
          {/* Gradients */}
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D6A419" />
              <stop offset="50%" stopColor="#F4D03F" />
              <stop offset="100%" stopColor="#B7950B" />
            </linearGradient>
            <radialGradient id="centerGradient">
              <stop offset="0%" stopColor="#D6A419" />
              <stop offset="100%" stopColor="#6B1F2A" />
            </radialGradient>
            <linearGradient id="petalGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#C1623C" />
              <stop offset="50%" stopColor="#D6A419" />
              <stop offset="100%" stopColor="#6B1F2A" />
            </linearGradient>
            <radialGradient id="paisleyGradient">
              <stop offset="0%" stopColor="#F4D03F" />
              <stop offset="100%" stopColor="#C1623C" />
            </radialGradient>
          </defs>
        </svg>
        
        {/* Subtle glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#D6A419]/20 via-[#C1623C]/20 to-[#6B1F2A]/20 rounded-full blur-lg -z-10 opacity-60"></div>
      </div>
      
      {/* Premium Brand Typography */}
      <div className="relative">
        {/* Main brand name with decorative elements */}
        <div className="relative">
          <h1 className="text-4xl font-serif font-bold tracking-wider relative z-10">
            <span className="bg-gradient-to-r from-[#6B1F2A] via-[#C1623C] to-[#D6A419] bg-clip-text text-transparent drop-shadow-sm">
              ADVAYA
            </span>
            {/* Decorative flourishes */}
            <div className="absolute -top-1 -left-2 w-2 h-2 bg-gradient-to-r from-[#D6A419] to-[#C1623C] rounded-full opacity-70"></div>
            <div className="absolute -top-1 -right-2 w-2 h-2 bg-gradient-to-r from-[#C1623C] to-[#6B1F2A] rounded-full opacity-70"></div>
          </h1>
          
          {/* Henna-inspired underline */}
          <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#D6A419] to-transparent opacity-60"></div>
          <div className="absolute -bottom-2 left-4 right-4 h-px bg-gradient-to-r from-[#C1623C]/30 via-[#D6A419]/60 to-[#C1623C]/30"></div>
        </div>
        
        {/* Elegant tagline with Indian script inspiration */}
        <div className="mt-2 relative">
          <div className="text-sm font-sans text-[#7A8C6D] tracking-[0.2em] uppercase opacity-80 font-medium">
            <span className="relative">
              कैरी योर कल्चर
              <div className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7A8C6D]/40 to-transparent"></div>
            </span>
          </div>
          <div className="text-xs font-sans text-[#7A8C6D]/60 tracking-widest uppercase mt-1 font-light">
            Handcrafted Heritage
          </div>
        </div>
        
        {/* Subtle decorative dots */}
        <div className="absolute -right-4 top-2 flex flex-col space-y-1 opacity-50">
          <div className="w-1 h-1 bg-[#D6A419] rounded-full"></div>
          <div className="w-1 h-1 bg-[#C1623C] rounded-full"></div>
          <div className="w-1 h-1 bg-[#6B1F2A] rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

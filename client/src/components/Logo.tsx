export function Logo() {
  return (
    <div className="flex items-center space-x-5 group" data-testid="logo">
      {/* Refined Hanging Tote Bag */}
      <div className="relative">
        <svg 
          className="w-10 h-12 transform -rotate-8 transition-all duration-500 ease-out group-hover:rotate-2 group-hover:scale-105" 
          viewBox="0 0 40 48" 
          fill="none"
          style={{ 
            filter: "drop-shadow(3px 4px 8px rgba(139,21,56,0.15)) drop-shadow(1px 2px 4px rgba(0,0,0,0.1))" 
          }}
        >
          {/* Elegant Needle/Hook */}
          <path 
            d="M20 3 Q19.2 1.5 20 0 Q20.8 1.5 20 3 L20 10" 
            stroke="#7A8C6D" 
            strokeWidth="2" 
            fill="none"
            strokeLinecap="round"
          />
          <circle cx="20" cy="10" r="1.5" fill="#7A8C6D" />
          
          {/* Refined Hanging String */}
          <path 
            d="M20 10 Q19.2 13 20 16" 
            stroke="#C1623C" 
            strokeWidth="1.2" 
            fill="none"
            strokeLinecap="round"
          />
          
          {/* Premium Tote Bag Body */}
          <path 
            d="M10 18 Q10 16.5 11.5 16.5 L28.5 16.5 Q30 16.5 30 18 L30 38 Q30 40.5 27.5 40.5 L12.5 40.5 Q10 40.5 10 38 Z" 
            fill="#EDB7C4" 
            stroke="#D4A5B0" 
            strokeWidth="1.2"
          />
          
          {/* Sophisticated Handles */}
          <path 
            d="M15 16.5 Q15 12 20 12 Q25 12 25 16.5" 
            stroke="#C1623C" 
            strokeWidth="2.5" 
            fill="none"
            strokeLinecap="round"
          />
          
          {/* Refined Desi Pattern - Block Print Motif */}
          <g opacity="0.8">
            {/* Central paisley-inspired motif */}
            <path 
              d="M20 24 Q16 24 16 28 Q16 32 20 32 Q22 30 22 28 Q22 26 20 24 Z" 
              fill="#C1623C" 
              opacity="0.6"
            />
            {/* Surrounding geometric dots */}
            <circle cx="16" cy="26" r="1.2" fill="#8B1538" opacity="0.7" />
            <circle cx="24" cy="26" r="1.2" fill="#8B1538" opacity="0.7" />
            <circle cx="20" cy="22" r="0.8" fill="#7A8C6D" opacity="0.6" />
            <circle cx="20" cy="34" r="0.8" fill="#7A8C6D" opacity="0.6" />
            
            {/* Fine decorative elements */}
            <circle cx="13" cy="29" r="0.6" fill="#C1623C" opacity="0.5" />
            <circle cx="27" cy="29" r="0.6" fill="#C1623C" opacity="0.5" />
            <circle cx="18" cy="36" r="0.6" fill="#8B1538" opacity="0.4" />
            <circle cx="22" cy="36" r="0.6" fill="#8B1538" opacity="0.4" />
          </g>
        </svg>
      </div>
      
      {/* Premium Brand Typography */}
      <div className="flex flex-col justify-center">
        <h1 
          className="tracking-tight font-black leading-none"
          style={{
            fontSize: "38px",
            color: "#8B1538",
            fontFamily: "'Playfair Display', serif",
            textShadow: "3px 3px 6px rgba(139,21,56,0.12), 1px 1px 3px rgba(0,0,0,0.08)",
            letterSpacing: "-0.02em"
          }}
        >
          Advaya
        </h1>
        <div 
          className="tracking-wider font-semibold -mt-1.5"
          style={{
            fontSize: "14px",
            color: "#C1623C",
            fontFamily: "'Inter', sans-serif",
            opacity: 0.85,
            letterSpacing: "0.08em",
            textTransform: "lowercase"
          }}
        >
          carry your culture
        </div>
      </div>
    </div>
  );
}
